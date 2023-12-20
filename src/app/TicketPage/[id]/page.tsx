import React from "react";
import TicketForm from "../../components/TicketForm";

const getTicketById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) return Error("failed");
  return res.json();
};

export default async function page({ params }) {
  const EDITMODE = params.id === "new" ? false : true;

  let updateTicket = {};

  if (EDITMODE) {
    updateTicket = await getTicketById(params.id);
    updateTicket = updateTicket.ticketFound;
    console.log("updateTicketLAST", updateTicket);
  } else {
    updateTicket = {
      _id: "new",
    };
  }

  return <TicketForm ticket={updateTicket} />;
}
