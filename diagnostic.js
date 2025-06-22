// Simple diagnostic server to test basic functionality
require("dotenv").config();
const express = require("express");

console.log("🔍 Starting diagnostic server...");
console.log(`🔍 Node.js version: ${process.version}`);
console.log(`🔍 Platform: ${process.platform}`);
console.log(`🔍 Process PID: ${process.pid}`);

const app = express();
app.use(express.json());

// Simple test endpoint
app.get("/test", (req, res) => {
  console.log("📥 Test endpoint hit");
  res.json({ message: "Server is working!", timestamp: new Date().toISOString() });
});

app.get("/ping", (req, res) => {
  console.log("🏓 Ping endpoint hit");
  res.json({ status: "pong", pid: process.pid });
});

// Monitor process events
process.on('exit', (code) => {
  console.log(`🛑 Process exiting with code: ${code}`);
});

process.on('beforeExit', (code) => {
  console.log(`⚠️ Process beforeExit with code: ${code}`);
});

process.on('SIGINT', () => {
  console.log('📡 Received SIGINT signal');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('📡 Received SIGTERM signal');
  process.exit(0);
});

process.on('uncaughtException', (error) => {
  console.error('💥 Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('💥 Unhandled Rejection:', reason);
});

// Try multiple ports to find an available one
const tryPorts = [5000, 5001, 5002, 5003, 3000, 8000, 8080];
let PORT = process.env.PORT || 5000;

const findAvailablePort = () => {
  return new Promise((resolve) => {
    const testPort = (port, callback) => {
      const server = require('net').createServer();
      server.listen(port, (err) => {
        if (err) {
          server.close();
          callback(false);
        } else {
          server.close();
          callback(true);
        }
      });
      server.on('error', () => callback(false));
    };

    const checkNextPort = (index) => {
      if (index >= tryPorts.length) {
        resolve(null);
        return;
      }
      
      testPort(tryPorts[index], (available) => {
        if (available) {
          resolve(tryPorts[index]);
        } else {
          checkNextPort(index + 1);
        }
      });
    };

    checkNextPort(0);
  });
};

// Start server with available port
const startServer = async () => {
  console.log("🔍 Finding available port...");
  const availablePort = await findAvailablePort();
  
  if (!availablePort) {
    console.error("❌ No available ports found!");
    process.exit(1);
  }
  
  PORT = availablePort;
  console.log(`✅ Found available port: ${PORT}`);

  const server = app.listen(PORT, () => {
    console.log(`🚀 Diagnostic server running on http://localhost:${PORT}`);
    console.log(`📊 Test it: curl http://localhost:${PORT}/test`);
    console.log("✅ Server started successfully!");
  });

  server.on('error', (error) => {
    console.error('🚨 Server error:', error);
  });

  // Keep alive logging
  let counter = 0;
  const keepAlive = setInterval(() => {
    counter++;
    console.log(`❤️ Server alive - ${counter} (PID: ${process.pid}) on port ${PORT}`);
  }, 5000);

  // Cleanup on exit
  process.on('exit', () => {
    clearInterval(keepAlive);
  });
};

startServer();

console.log("🎯 Diagnostic server setup complete. Waiting for requests...");