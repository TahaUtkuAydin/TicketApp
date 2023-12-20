import Ticket from "@/app/models/Ticket";
import { NextResponse } from "../../../../node_modules/next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const ticket = body.formData;
    await Ticket.create(ticket);

    return NextResponse.json({ message: "Created" }, { status: 201 });
  } catch {
    return NextResponse.json({ message: "failed to Create" }, { status: 500 });
  }
}

export async function GET() {
  const tickets = await Ticket.find();

  return NextResponse.json({ tickets }, { status: 200 });
}
