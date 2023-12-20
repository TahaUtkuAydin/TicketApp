"use client";
import React, { useState } from "react";
import { useRouter } from "../../../node_modules/next/navigation";

export default function TicketForm({ ticket }) {
  const EDITMODE = ticket._id === "new" ? false : true;

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "Hardware Problem",
  };

  const [formData, setFormData] = useState(startingTicketData);

  if (EDITMODE) {
    Object.keys(startingTicketData).forEach((key) => {
      startingTicketData[key] = ticket[key];
    });
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const name = e.target.name;

    setFormData((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("failed to update Ticket");
      }
    } else {
      const res = await fetch("/api/Tickets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      if (!res.ok) {
        throw new Error("failed to update Ticket");
      }
    }

    router.refresh();
    router.push("/");
  };

  return (
    <div className=" flex justify-center">
      <form
        method="post"
        className="flex flex-col gap-3 w-1/2"
        onSubmit={handleSubmit}
      >
        <h3>Create your Ticket</h3>
        <label>Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label>Description</label>
        <textarea
          name="description"
          id="description"
          rows={5}
          value={formData.description}
          onChange={handleChange}
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>
        <label>Priority</label>
        <div>
          <label htmlFor="">1</label>
          <input
            type="radio"
            name="priority"
            id="priority-1"
            value={1}
            checked={formData.priority == 1}
            onChange={handleChange}
          />
          <label htmlFor="">2</label>
          <input
            type="radio"
            name="priority"
            id="priority-2"
            value={2}
            checked={formData.priority == 2}
            onChange={handleChange}
          />
          <label htmlFor="">3</label>
          <input
            type="radio"
            name="priority"
            id="priority-3"
            value={3}
            checked={formData.priority == 3}
            onChange={handleChange}
          />
          <label htmlFor="">4</label>
          <input
            type="radio"
            name="priority"
            id="priority-4"
            value={4}
            checked={formData.priority == 4}
            onChange={handleChange}
          />
          <label htmlFor="">5</label>
          <input
            type="radio"
            name="priority"
            id="priority-5"
            value={5}
            checked={formData.priority == 5}
            onChange={handleChange}
          />
        </div>
        <label htmlFor="">Progress</label>
        <input
          type="range"
          min={0}
          max={100}
          id="progress"
          name="progress"
          value={formData.progress}
          onChange={handleChange}
        />
        <label htmlFor="">Status</label>
        <select
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">not started</option>
          <option value="started">started</option>
          <option value="Done">Done</option>
        </select>
        <input type="submit" className="btn" value="Create Your Ticket" />
      </form>
    </div>
  );
}
