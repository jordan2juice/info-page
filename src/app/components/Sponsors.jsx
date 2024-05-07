"use client";

import React from "react";
import { sponsors } from "../sponsors.list";

export default function Sponsors() {
  // console.log(process.env.NEXT_PUBLIC_SPONSORS)

  return <div>
    <h2>Meet Our Sproncors</h2>
    {sponsors.map((sponsor, index) => (
        <div key={index}>
          <h3>{sponsor.name}</h3>
          <p>{sponsor.description}</p>
          <p>{sponsor.contact}</p>
          <img src={`/sponsors/${sponsor.src}.png`} alt={sponsor.name} />
        </div>
    ))}

  </div>;
}
