"use client";

import React from "react";
import { sponsors } from "../sponsors.list";

export default function Sponsors() {
  // console.log(process.env.NEXT_PUBLIC_SPONSORS)

  return (
    <div>
      <h2 className="text-center text-rose-600">Meet Our Sponsors</h2>
      <section className="flex flex-wrap justify-center">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className=" h-44 bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-48 max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
              <div className="px-4 my-6">
                <h3 className="text-lg font-semibold">{sponsor.name}</h3>
                <p className="mt-2 text-sm text-gray-400">
                  {sponsor.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
