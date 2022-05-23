import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { getSession, auth } from "../api/auth";
import { SessionContext } from "../context/SessionContext";
import Logo from "../images/instagram-logo.png";

export default function Navbar() {
  const context = useContext(SessionContext);

  return (
    <div className="shadow-md bg-white" aria-label="Navbar">
      <div className="container">
        <div className="py-5">
          <Link className="inline-flex items-center space-x-3" to="/">
            <span>
              <img
                className="w-6"
                src={Logo}
                alt="Instagram Logo"
                aria-label="App Logo"
              />
            </span>
            <span
              className="font-logo text-xl font-semibold"
              aria-label="App Title"
            >
              Instagram Clone
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
