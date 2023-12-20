"use client";
import React from "react";
import { FiDelete } from "react-icons/fi";
import { useRouter } from "../../../node_modules/next/navigation";

export default function DeleteBlock({ id }) {
  const router = useRouter();
  const DeleteTicket = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw new Error("failed to delete");
      }
    } catch (error) {
      console.error("Delete error", error);
    }
    router.refresh();
  };

  return (
    <div>
      <FiDelete
        onClick={DeleteTicket}
        className="hover:cursor-pointer hover:text-red-800"
      />
    </div>
  );
}
