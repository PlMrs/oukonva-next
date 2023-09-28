import { NextResponse } from "next/server"
import { openAI } from "../config/openai";

export async function POST(request: Request) {

     const body = await request.json();

     const chatCompletion = await openAI.chat.completions.create({
        messages: [{ role: 'user', content: 'Say this is a test' }],
        model: 'gpt-3.5-turbo',
      });

     return NextResponse.json(chatCompletion);
}