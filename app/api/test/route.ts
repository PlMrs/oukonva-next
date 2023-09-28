import { NextResponse } from "next/server"

export async function POST(request: Request) {
     const result = "salut internet"

     return NextResponse.json(result);
}