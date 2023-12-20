import React from "react";
import Link from "../../../node_modules/next/link";
import { BsFillHouseFill, BsFillTicketDetailedFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <nav className="flex justify-between bg-[#18222f] text-default-text p-4">
      <div className="flex items-center gap-4 ">
        <Link href="/">
          <BsFillHouseFill />
        </Link>
        <Link href="/TicketPage/new">
          <BsFillTicketDetailedFill />
        </Link>
      </div>
      <p>jake@gmail.com</p>
    </nav>
  );
}
