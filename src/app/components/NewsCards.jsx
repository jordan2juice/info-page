"use client";

import React from "react";

export default function NewsCards() {
  return (
    <div>
      <div className="bg-white shadow-[0_8px_12px_-6px_rgba(0,0,0,0.2)] border p-2 w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
        <img
          src="https://readymadeui.com/cardImg.webp"
          className="w-full rounded-lg"
        />
        <div className="px-4 my-6 text-center">
          <h3 className="text-lg font-semibold">Heading</h3>
          <p className="mt-2 text-sm text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            auctor arcu, at fermentum dui. Maecenas
          </p>
          <button
            type="button"
            className="px-6 py-2 w-full mt-4 rounded-lg text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
          >
            View
          </button>
        </div>
      </div>
    </div>
  );
}
