"use client";

import React, { useState, useEffect } from "react";

function Greeting() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting("Good bright morning, Jessica!");
    } else if (hour < 18) {
      setGreeting("Good afternoon, Jessica!");
    } else {
      setGreeting("Good evening, Jessica! Almost the end of the day...");
    }
  }, []);

  return <h1 className="greeting">{greeting}</h1>;
}

export default Greeting;
