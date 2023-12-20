import React from "react";
import TicketCard from "./components/TicketCard";

export default async function page() {
  const getTicket = async () => {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });
    return res.json();
  };

  let data = await getTicket();
  const tickets = data.tickets;

  if (!data) {
    return <p>No Tickets!</p>;
  }

  const uniqueCategory = [...new Set(tickets.map(({ category }) => category))];

  return (
    <div>
      <div className="p-5">
        {tickets &&
          uniqueCategory.map((category, index) => (
            <div className="mb-4" key={index}>
              <h2>{category}</h2>
              <div className="grid grid-cols-2">
                {tickets
                  .filter((ticket) => ticket.category === category)
                  .map((filteredTicket, index) => (
                    <TicketCard key={index} ticket={filteredTicket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
