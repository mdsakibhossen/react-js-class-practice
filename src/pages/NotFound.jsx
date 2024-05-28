import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="grid place-items-center bg-slate-800 h-screen">
      <div className="flex gap-5 flex-col items-center">
        <h2 className="text-4xl text-white">NotFound</h2>
        <Link
          to="/"
          className="text-slate-300 transition-all hover:underline hover:text-blue-400"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
