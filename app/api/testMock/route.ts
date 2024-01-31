import { NextResponse } from "next/server"
import { travelsPrompt } from "../constants/prompts.constants";
import { TestManager } from "./test.manager";
import { testRequestBody } from "./test.types";

const testManager = new TestManager();

export async function POST(request: Request) {

     const { responses } = await request.json() as testRequestBody
     if(!responses) return NextResponse.json({ error: "missing responses in body" }, { status: 400 });
     if(!Array.isArray(responses) || !responses.length) return NextResponse.json({ error: "responses need to be array of strings" }, { status: 400 });

     const result = await testManager.getTestResultMock(responses.join())

     return NextResponse.json(result)
}