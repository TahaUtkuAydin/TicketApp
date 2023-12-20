import React from "react";
import { AiFillFire } from "react-icons/ai";

export default function PriorityDisplay({ priority }) {
  return (
    <div className="flex  ">
      <AiFillFire
        className={` ${priority > 0 ? "text-red-600" : "text-slate-400"}`}
      />
      <AiFillFire
        className={` ${priority > 1 ? "text-red-600" : "text-slate-400"}`}
      />
      <AiFillFire
        className={` ${priority > 2 ? "text-red-600" : "text-slate-400"}`}
      />
      <AiFillFire
        className={` ${priority > 3 ? "text-red-600" : "text-slate-400"}`}
      />
      <AiFillFire
        className={` ${priority > 4 ? "text-red-600" : "text-slate-400"}`}
      />
    </div>
  );
}
