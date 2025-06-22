// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");

// const { ChatOpenAI } = require("@langchain/openai");
// const { OpenAIEmbeddings } = require("@langchain/openai");
// const { MemoryVectorStore } = require("langchain/vectorstores/memory");
// const { Document } = require("@langchain/core/documents");
// const { RunnableSequence } = require("@langchain/core/runnables");
// const { PromptTemplate } = require("@langchain/core/prompts");
// const { StringOutputParser } = require("@langchain/core/output_parsers");

// const app = express();
// app.use(cors());
// app.use(express.json());

// let retriever;

// // Initialize OpenAI LLM
// const llm = new ChatOpenAI({
//   temperature: 0,
//   apiKey: process.env.OPENAI_API_KEY,
//   modelName: "gpt-4", // You can change to "gpt-3.5-turbo" if needed
// });

// // Initialize context documents
// async function initializeContext(docTexts) {
//   const docs = docTexts.map((text) => new Document({ pageContent: text }));
//   const vectorStore = await MemoryVectorStore.fromDocuments(
//     docs,
//     new OpenAIEmbeddings({ apiKey: process.env.OPENAI_API_KEY })
//   );
//   retriever = vectorStore.asRetriever();
// }

// // Build the chain
// function buildChain() {
//   const prompt = PromptTemplate.fromTemplate(`
//   Answer the question based only on the following context:

//   {context}

//   Question: {question}
//   `);

//   return RunnableSequence.from([
//     {
//       context: async (input) => {
//         const docs = await retriever.getRelevantDocuments(input.question);
//         return docs.map((d) => d.pageContent).join("\n");
//       },
//       question: (input) => input.question,
//     },
//     prompt,
//     llm,
//     new StringOutputParser(),
//   ]);
// }

// let chain;

// // API endpoint
// app.post("/ask", async (req, res) => {
//   const { question } = req.body;
//   if (!chain) {
//     return res.status(503).json({ error: "Chain not initialized" });
//   }

//   try {
//     const answer = await chain.invoke({ question });
//     res.json({ answer, source: "retriever" });
//   } catch (err) {
//     console.error("❌ Error generating response:", err);
//     res.status(500).json({ error: "Error generating response" });
//   }
// });

// // Health check
// app.get("/ping", (req, res) => res.send("pong"));

// // Start server after initializing context
// async function startServer() {
//   try {
//     await initializeContext([
//       `
// You are 'Vallabh bhai Patel' and introduce yourself as 'Vallabh bhai Patel'.
// Vallabh bhai Patel was an Indian independence leader, lawyer, statesman, and the first Deputy Prime Minister and Home Minister of India. He played a key role in the country's struggle for independence and in the integration of over 500 princely states into the Indian Union.
// Never give answers in points; provide small summaries or paragraphs (50-60 words).
// Always avoid bullet or numeric points and keep answers precise and to the point.
// Do not offer opinions on anything not mentioned in the prompt.
// You always stay in character as Vallabh bhai Patel. You talk with clarity, empathy and warmth, avoiding overly formal or bookish language.
// When asked something negative unrelated to my life, work, or the unification of India, do not answer.
// When asked something negative but related to my work or the unification of India, answer it positively in 30-50 words.
// Do not repeat identical answers if given previously or found in conversation history.
// Be honest—if you cannot answer something, say so.
// If the answer is not in the prompt but related to my life, work, or the unification of India, provide information from my known contributions.

// **IMPORTANT**:
// 1. Always draft answers from the perspective of Vallabh bhai Patel, focusing on Indian independence, national integration, leadership, and my public life.
// 2. Only introduce yourself when directly asked.
// 3. For 'Who made you?' or similar questions, reply: 'The Ministry of Culture, Government of India made me.'
// 4. If the question is unrelated to my life, work, or the unification of India, or concerns dates or people not mentioned in the prompt, or if you cannot answer, reply: 'Sorry for the inconvenience, but this information is unavailable, I'd be happy to assist with related topics!'
// 5. Consider yourself as Vallabh bhai Patel. For example, if asked 'Who are you?', answer as Vallabh bhai Patel.
// 6. For questions about present leaders, say 'I do not have information about current individuals or events.'
// 7. If user query contains patterns like for eg: 2.3 then replace it with 2(3).
// 8. Do not repeat the question in your response.
// 9. Make sure your response is factually correct. The fact should be mentioned in the prompt or context, DO NOT MAKE UP FACTS.
// 10. Use natural, simple language—as if you're speaking with someone who wants to understand, not impress.

// **VERY IMPORTANT**:
// 1. No matter what always ensure your response is above 10 and under 50 words.
// 2. No matter what no sentence should be longer than 25 words.
// 3. If the sentence exceeds 25 words, break it into two sentences.
// 4. Whatever the question is, always give answer in relation to my life, work, or the unification of India unless it's completely unrelated.
// 5. Always give response in first person.
// 6. Replace all honorific abbreviations such as 'Dr.' with their full form. For example, change 'Dr.' to 'Doctor,' 'Mr.' to 'Mister,' 'Smt.' to 'Shrimati' or 'Mrs.' to 'Mistress,' and similar for other titles.
// 7. If there is 'you', 'your' etc. in the question, know that it's talking about 'Vallabh bhai Patel'.
// 8. Do not make up facts. If the fact is not in the prompt or context, do not answer.
// 9. Speak like someone having a thoughtful conversation, not like reciting a textbook.
// 10. Always make sure to use appropriate language and word , do not use any offensive words for anyone.
// 11. Do not use any offensive words like rapist or anything.
//       `,
//     ]);

//     chain = buildChain();

//     app.listen(5001, () => {
//       console.log("🧠 Langchain RAG API running on http://localhost:5001");
//     });
//   } catch (error) {
//     console.error("❌ Failed to initialize context:", error);
//     process.exit(1);
//   }
// }

// startServer();



// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");

// const { ChatOpenAI } = require("@langchain/openai");
// const { OpenAIEmbeddings } = require("@langchain/openai");
// const { MemoryVectorStore } = require("langchain/vectorstores/memory");
// const { Document } = require("@langchain/core/documents");
// const { RunnableSequence } = require("@langchain/core/runnables");
// const { PromptTemplate } = require("@langchain/core/prompts");
// const { StringOutputParser } = require("@langchain/core/output_parsers");

// const app = express();
// app.use(cors());
// app.use(express.json());

// let retriever;
// let chain;

// // Validate environment variables
// if (!process.env.OPENAI_API_KEY) {
//   console.error("❌ OPENAI_API_KEY is not set in environment variables");
//   process.exit(1);
// }

// // Initialize OpenAI LLM with error handling
// const llm = new ChatOpenAI({
//   temperature: 0,
//   apiKey: process.env.OPENAI_API_KEY,
//   modelName: "gpt-4", // You can change to "gpt-3.5-turbo" if needed
// });

// // Initialize context documents
// async function initializeContext(docTexts) {
//   try {
//     console.log("🔄 Initializing context documents...");
//     const docs = docTexts.map((text) => new Document({ pageContent: text }));
    
//     console.log("🔄 Creating embeddings...");
//     const embeddings = new OpenAIEmbeddings({ 
//       apiKey: process.env.OPENAI_API_KEY,
//       timeout: 30000, // 30 second timeout
//     });
    
//     console.log("🔄 Building vector store...");
//     const vectorStore = await MemoryVectorStore.fromDocuments(docs, embeddings);
//     retriever = vectorStore.asRetriever();
    
//     console.log("✅ Context initialized successfully");
//     return true;
//   } catch (error) {
//     console.error("❌ Error initializing context:", error.message);
//     throw error;
//   }
// }

// // Build the chain
// function buildChain() {
//   try {
//     const prompt = PromptTemplate.fromTemplate(`
// Answer the question based only on the following context:

// {context}

// Question: {question}
// `);

//     return RunnableSequence.from([
//       {
//         context: async (input) => {
//           try {
//             const docs = await retriever.getRelevantDocuments(input.question);
//             return docs.map((d) => d.pageContent).join("\n");
//           } catch (error) {
//             console.error("❌ Error retrieving documents:", error);
//             throw error;
//           }
//         },
//         question: (input) => input.question,
//       },
//       prompt,
//       llm,
//       new StringOutputParser(),
//     ]);
//   } catch (error) {
//     console.error("❌ Error building chain:", error);
//     throw error;
//   }
// }

// // API endpoint
// app.post("/ask", async (req, res) => {
//   const { question } = req.body;
  
//   if (!question) {
//     return res.status(400).json({ error: "Question is required" });
//   }
  
//   if (!chain) {
//     return res.status(503).json({ error: "Chain not initialized" });
//   }

//   try {
//     console.log("🔄 Processing question:", question);
//     const answer = await chain.invoke({ question });
//     console.log("✅ Generated answer successfully");
//     res.json({ answer, source: "retriever" });
//   } catch (err) {
//     console.error("❌ Error generating response:", err.message);
//     res.status(500).json({ error: "Error generating response: " + err.message });
//   }
// });

// // Health check
// app.get("/ping", (req, res) => {
//   res.json({ 
//     status: "ok", 
//     chainInitialized: !!chain,
//     timestamp: new Date().toISOString()
//   });
// });

// // Error handling middleware
// app.use((error, req, res, next) => {
//   console.error("❌ Unhandled error:", error);
//   res.status(500).json({ error: "Internal server error" });
// });

// // Graceful shutdown
// process.on('SIGINT', () => {
//   console.log('\n🛑 Received SIGINT. Graceful shutdown...');
//   process.exit(0);
// });

// process.on('SIGTERM', () => {
//   console.log('\n🛑 Received SIGTERM. Graceful shutdown...');
//   process.exit(0);
// });

// // Handle unhandled promise rejections
// process.on('unhandledRejection', (reason, promise) => {
//   console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
//   // Don't exit the process, just log the error
// });

// // Handle uncaught exceptions
// process.on('uncaughtException', (error) => {
//   console.error('❌ Uncaught Exception:', error);
//   // Exit gracefully
//   process.exit(1);
// });

// // Start server after initializing context
// async function startServer() {
//   try {
//     console.log("🚀 Starting server initialization...");
    
//     // Test OpenAI connection first
//     console.log("🔄 Testing OpenAI connection...");
//     await llm.invoke("test");
//     console.log("✅ OpenAI connection successful");
    
//     await initializeContext([
//       `
// You are 'Vallabh bhai Patel' and introduce yourself as 'Vallabh bhai Patel'.
// Vallabh bhai Patel was an Indian independence leader, lawyer, statesman, and the first Deputy Prime Minister and Home Minister of India. He played a key role in the country's struggle for independence and in the integration of over 500 princely states into the Indian Union.
// Never give answers in points; provide small summaries or paragraphs (50-60 words).
// Always avoid bullet or numeric points and keep answers precise and to the point.
// Do not offer opinions on anything not mentioned in the prompt.
// You always stay in character as Vallabh bhai Patel. You talk with clarity, empathy and warmth, avoiding overly formal or bookish language.
// When asked something negative unrelated to my life, work, or the unification of India, do not answer.
// When asked something negative but related to my work or the unification of India, answer it positively in 30-50 words.
// Do not repeat identical answers if given previously or found in conversation history.
// Be honest—if you cannot answer something, say so.
// If the answer is not in the prompt but related to my life, work, or the unification of India, provide information from my known contributions.

// **IMPORTANT**:
// 1. Always draft answers from the perspective of Vallabh bhai Patel, focusing on Indian independence, national integration, leadership, and my public life.
// 2. Only introduce yourself when directly asked.
// 3. For 'Who made you?' or similar questions, reply: 'The Ministry of Culture, Government of India made me.'
// 4. If the question is unrelated to my life, work, or the unification of India, or concerns dates or people not mentioned in the prompt, or if you cannot answer, reply: 'Sorry for the inconvenience, but this information is unavailable, I'd be happy to assist with related topics!'
// 5. Consider yourself as Vallabh bhai Patel. For example, if asked 'Who are you?', answer as Vallabh bhai Patel.
// 6. For questions about present leaders, say 'I do not have information about current individuals or events.'
// 7. If user query contains patterns like for eg: 2.3 then replace it with 2(3).
// 8. Do not repeat the question in your response.
// 9. Make sure your response is factually correct. The fact should be mentioned in the prompt or context, DO NOT MAKE UP FACTS.
// 10. Use natural, simple language—as if you're speaking with someone who wants to understand, not impress.

// **VERY IMPORTANT**:
// 1. No matter what always ensure your response is above 10 and under 50 words.
// 2. No matter what no sentence should be longer than 25 words.
// 3. If the sentence exceeds 25 words, break it into two sentences.
// 4. Whatever the question is, always give answer in relation to my life, work, or the unification of India unless it's completely unrelated.
// 5. Always give response in first person.
// 6. Replace all honorific abbreviations such as 'Dr.' with their full form. For example, change 'Dr.' to 'Doctor,' 'Mr.' to 'Mister,' 'Smt.' to 'Shrimati' or 'Mrs.' to 'Mistress,' and similar for other titles.
// 7. If there is 'you', 'your' etc. in the question, know that it's talking about 'Vallabh bhai Patel'.
// 8. Do not make up facts. If the fact is not in the prompt or context, do not answer.
// 9. Speak like someone having a thoughtful conversation, not like reciting a textbook.
// 10. Always make sure to use appropriate language and word , do not use any offensive words for anyone.
// 11. Do not use any offensive words like rapist or anything.
//       `,
//     ]);

//     console.log("🔄 Building chain...");
//     chain = buildChain();
//     console.log("✅ Chain built successfully");

//     const PORT = process.env.PORT || 5001;
//     app.listen(PORT, () => {
//       console.log(`🚀 Langchain RAG API running on http://localhost:${PORT}`);
//       console.log("✅ Server started successfully!");
//       console.log(`📊 Health check available at: http://localhost:${PORT}/ping`);
//     });
//   } catch (error) {
//     console.error("❌ Failed to initialize server:", error.message);
//     console.error("Full error:", error);
//     process.exit(1);
//   }
// }

// // Start the server
// startServer().catch((error) => {
//   console.error("❌ Fatal error during startup:", error);
//   process.exit(1);
// });



require("dotenv").config();
const express = require("express");
const cors = require("cors");
const compression = require("compression");

const { ChatOpenAI } = require("@langchain/openai");
const { OpenAIEmbeddings } = require("@langchain/openai");
const { MemoryVectorStore } = require("langchain/vectorstores/memory");
const { Document } = require("@langchain/core/documents");
const { RunnableSequence } = require("@langchain/core/runnables");
const { PromptTemplate } = require("@langchain/core/prompts");
const { StringOutputParser } = require("@langchain/core/output_parsers");

const app = express();
app.use(cors());
app.use(express.json());
app.use(compression()); // Enable compression for streaming

let retriever;
let chain;

// Validate environment variables
if (!process.env.OPENAI_API_KEY) {
  console.error("❌ OPENAI_API_KEY is not set in environment variables");
  process.exit(1);
}

// Initialize OpenAI LLM with error handling
const llm = new ChatOpenAI({
  temperature: 0,
  apiKey: process.env.OPENAI_API_KEY,
  modelName: "gpt-4", // Supports multilingual output including Hindi
});

// Initialize context documents
async function initializeContext(docTexts) {
  try {
    console.log("🔄 Initializing context documents...");
    const docs = docTexts.map((text) => new Document({ pageContent: text }));
    
    console.log("🔄 Creating embeddings...");
    const embeddings = new OpenAIEmbeddings({ 
      apiKey: process.env.OPENAI_API_KEY,
      timeout: 30000,
    });
    
    console.log("🔄 Building vector store...");
    const vectorStore = await MemoryVectorStore.fromDocuments(docs, embeddings);
    retriever = vectorStore.asRetriever();
    
    console.log("✅ Context initialized successfully");
    return true;
  } catch (error) {
    console.error("❌ Error initializing context:", error.message);
    throw error;
  }
}

// Build the chain
function buildChain() {
  try {
    const prompt = PromptTemplate.fromTemplate(`
Answer the question based only on the following context:

{context}

Question: {question}
Language: {lang}

Instructions:
- Answer in the specified language ({lang} = 'hi-IN' for Hindi, 'en-US' for English).
- I am Vallabh bhai Patel, an Indian independence leader.
- Use first-person perspective and stay in character.
- Keep answers between 10 and 50 words, with no sentence longer than 25 words.
- Avoid bullet points or numbered lists.
- Do not make up facts not in the context.
- For unrelated or unanswerable questions, say in the specified language: 
  - English: "Sorry, this information is unavailable, but I can assist with related topics!"
  - Hindi: "क्षमा करें, यह जानकारी उपलब्ध नहीं है, लेकिन मैं संबंधित विषयों में सहायता कर सकता हूँ!"
- For "Who made you?", reply in the specified language:
  - English: "The Ministry of Culture, Government of India made me."
  - Hindi: "भारत सरकार के संस्कृति मंत्रालय ने मुझे बनाया।"
- Replace honorifics (e.g., 'Doctor' for 'Dr.', 'Mister' for 'Mr.').
- Use natural, simple language.
`);

    return RunnableSequence.from([
      {
        context: async (input) => {
          try {
            const docs = await retriever.getRelevantDocuments(input.question);
            return docs.map((d) => d.pageContent).join("\n");
          } catch (error) {
            console.error("❌ Error retrieving documents:", error);
            throw error;
          }
        },
        question: (input) => input.question,
        lang: (input) => input.lang,
      },
      prompt,
      llm,
      new StringOutputParser(),
    ]);
  } catch (error) {
    console.error("❌ Error building chain:", error);
    throw error;
  }
}

// Streaming API endpoint
app.get("/ask-stream", async (req, res) => {
  const { question, lang } = req.query;
  const language = lang === 'hi-IN' ? 'hi-IN' : 'en-US'; // Default to English

  if (!question) {
    res.status(400).end('data: {"error":"No question provided"}\n\n');
    return;
  }

  if (!chain) {
    res.status(503).end('data: {"error":"Chain not initialized"}\n\n');
    return;
  }

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  try {
    console.log(`🔄 Processing question in ${language}:`, question);
    const responseStream = await chain.stream({ question, lang: language });

    for await (const chunk of responseStream) {
      res.write(`data: ${JSON.stringify({ chunk })}\n\n`);
      res.flush();
    }

    res.write(`data: ${JSON.stringify({ source: "retriever" })}\n\n`);
    res.flush();
    console.log("✅ Generated answer successfully",responseStream);
  } catch (err) {
    console.error("❌ Error generating response:", err.message);
    res.write(`data: ${JSON.stringify({ error: "Error generating response: " + err.message })}\n\n`);
    res.flush();
  } finally {
    res.end();
  }
});

// Health check
app.get("/ping", (req, res) => {
  res.json({ 
    status: "ok", 
    chainInitialized: !!chain,
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((error, req, res, next) => {
  console.error("❌ Unhandled error:", error);
  res.status(500).json({ error: "Internal server error" });
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT. Graceful shutdown...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM. Graceful shutdown...');
  process.exit(0);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error);
  process.exit(1);
});

// Start server after initializing context
async function startServer() {
  try {
    console.log("🚀 Starting server initialization...");
    
    console.log("🔄 Testing OpenAI connection...");
    await llm.invoke("test");
    console.log("✅ OpenAI connection successful");
    
    await initializeContext([
      `
You are 'Vallabh bhai Patel' and introduce yourself as 'Vallabh bhai Patel'.
Vallabh bhai Patel was an Indian independence leader, lawyer, statesman, and the first Deputy Prime Minister and Home Minister of India. He played a key role in the country's struggle for independence and in the integration of over 500 princely states into the Indian Union.
Never give answers in points; provide small summaries or paragraphs (50-60 words).
Always avoid bullet or numeric points and keep answers precise and to the point.
Do not offer opinions on anything not mentioned in the prompt.
You always stay in character as Vallabh bhai Patel. You talk with clarity, empathy and warmth, avoiding overly formal or bookish language.
When asked something negative unrelated to my life, work, or the unification of India, do not answer.
When asked something negative but related to my work or the unification of India, answer it positively in 30-50 words.
Do not repeat identical answers if given previously or found in conversation history.
Be honest—if you cannot answer something, say so.
If the answer is not in the prompt but related to my life, work, or the unification of India, provide information from my known contributions.

**IMPORTANT**:
1. Always draft answers from the perspective of Vallabh bhai Patel, focusing on Indian independence, national integration, leadership, and my public life.
2. Only introduce yourself when directly asked.
3. For 'Who made you?' or similar questions, reply: 'The Ministry of Culture, Government of India made me.' (in the specified language).
4. If the question is unrelated to my life, work, or the unification of India, or concerns dates or people not mentioned in the prompt, or if you cannot answer, reply: 'Sorry for the inconvenience, but this information is unavailable, I'd be happy to assist with related topics!' (in the specified language).
5. Consider yourself as Vallabh bhai Patel. For example, if asked 'Who are you?', answer as Vallabh bhai Patel.
6. For questions about present leaders, say 'I do not have information about current individuals or events.' (in the specified language).
7. If user query contains patterns like for eg: 2.3 then replace it with 2(3).
8. Do not repeat the question in your response.
9. Make sure your response is factually correct. The fact should be mentioned in the prompt or context, DO NOT MAKE UP FACTS.
10. Use natural, simple language—as if you're speaking with someone who wants to understand, not impress.

**VERY IMPORTANT**:
1. No matter what always ensure your response is above 10 and under 50 words.
2. No matter what no sentence should be longer than 25 words.
3. If the sentence exceeds 25 words, break it into two sentences.
4. Whatever the question is, always give answer in relation to my life, work, or the unification of India unless it's completely unrelated.
5. Always give response in first person.
6. Replace all honorific abbreviations such as 'Doctor' with their full form.
7. If there is 'you', 'your' etc. in the question, know that it's talking about 'Vallabh bhai Patel'.
8. Do not make up facts. If the fact is not in the prompt or context, do not answer.
9. Speak like someone having a thoughtful conversation, not like reciting a textbook.
10. Always make sure to use appropriate language and word, do not use any offensive words for anyone.
      `,
    ]);

    console.log("🔄 Building chain...");
    chain = buildChain();
    console.log("✅ Chain built successfully");

    const PORT = process.env.PORT || 5003;
    app.listen(PORT, () => {
      console.log(`🚀 Langchain RAG API running on http://localhost:${PORT}`);
      console.log("✅ Server started successfully!");
      console.log(`📊 Health check available at: http://localhost:${PORT}/ping`);
    });
  } catch (error) {
    console.error("❌ Failed to initialize server:", error.message);
    console.error("Full error:", error);
    process.exit(1);
  }
}

// Start the server
startServer().catch((error) => {
  console.error("❌ Fatal error during startup:", error);
  process.exit(1);
});