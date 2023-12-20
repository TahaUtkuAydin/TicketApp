import Ticket from "@/app/models/Ticket";
import { NextResponse } from "../../../../../node_modules/next/server";

export async function DELETE(request: Request, { params }) {
  try {
    const { id } = params;

    await Ticket.findByIdAndDelete(id);

    return NextResponse.json({ message: "Deleted" }, { status: 200 });
  } catch (error) {
    console.error("MongoDB Error:", error);
    return NextResponse.json({ message: "Failed to Delete" }, { status: 500 });
  }
}

export async function GET(request: Request, { params }) {
  try {
    const { id } = params;

    const ticketFound = await Ticket.findOne({ _id: id });

    return NextResponse.json({ ticketFound }, { status: 200 });
  } catch (error) {
    console.error("Mongodb Get Error Hatası", error);

    return NextResponse.json({ message: "Failed to Get" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const ticketData = body.formData;

    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });

    return NextResponse.json({ message: "Ticket Update" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
