import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyDjD3zrJbDGXlaq992HES0m9TktODbwdaE");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function runChat(prompt) {
    const result = await model.generateContent(prompt); 
    console.log(result.response.text());
    return result.response.text();
}

export default runChat;


