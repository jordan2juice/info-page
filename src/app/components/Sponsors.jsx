"use client";

import React from "react";
import { sponsors } from "../sponsors.list";

export default function Sponsors() {
  // console.log(process.env.NEXT_PUBLIC_SPONSORS)

  return (
    <div>
      <h2 className="text-center text-rose-600">Meet Our Sponsors</h2>
      {sponsors.map((sponsor, index) => (
        <section className=" h-36">
          <div key={index}>
            <div class=" h-44 bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-48 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
              <div class="px-4 my-6">
                <h3 class="text-lg font-semibold">{sponsor.name}</h3>
                <p class="mt-2 text-sm text-gray-400">{sponsor.description}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
