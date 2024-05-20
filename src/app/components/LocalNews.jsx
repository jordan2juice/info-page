"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardBody, CardText, CardTitle, Image } from "react-bootstrap";

export default function LocalNews() {
  const [news, setNew] = useState([]);

  // Get news data from API
  const getNews = async () => {
    const response = await axios.get(
      `https://gnews.io/api/v4/search?q=example&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    setNew(response.data.articles);
    console.log(response.data);
  };
  // Call getNews() on page load
  useEffect(() => {
    getNews();
  }, []);
  // Display news data
  console.log(news);

  return (
    <div>
      <h2 className=" text-red-500 text-center">Local News</h2>
      <section className="flex flex-wrap flex-">
        {news.map((articles, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
            <div className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
              <img
                alt="article"
                src={articles.image}
                className="w-full rounded-lg"
              ></img>
              <div className="px-4 my-6">
                <h3 className="text-lg font-semibold">{articles.title}</h3>
                <p className="mt-2 text-sm text-gray-400">
                  {articles.description}
                </p>
                <button
                  onClick={() => window.open(articles.url)}
                  type="button"
                  className="px-6 py-2 mt-4 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
