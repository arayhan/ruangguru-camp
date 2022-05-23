import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getSession, auth } from "../api/auth";
import { SessionContext } from "../context/SessionContext";

export default function Navbar() {
  return (
    <header className="shadow-md" aria-label="Navbar">
      <div className="container">
        <div className="py-5">
          <Link
            className="font-logo text-xl font-semibold"
            to="/"
            aria-label="App Title"
          >
            Instagram Clone
          </Link>
        </div>
      </div>
    </header>
  );
}
