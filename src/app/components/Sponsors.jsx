"use client";

import React from "react";
import { sponsors } from "../sponsors.list";
import { Card, CardBody, CardText, CardTitle } from "react-bootstrap";

export default function Sponsors() {
  // console.log(process.env.NEXT_PUBLIC_SPONSORS)

  return (
    <div>
      <h2>Meet Our Sponsors</h2>
      {sponsors.map((sponsor, index) => (
        <section className="flex flex-wrap flex-col">
          <div key={index}>
            <Card className=" w-52 h-72">
              <CardBody>
                <CardTitle>
                  <h3>{sponsor.name}</h3>
                </CardTitle>
                <CardText>
                  <p>{sponsor.description}</p>
                </CardText>
              </CardBody>
            </Card>
          </div>
        </section>
      ))}
    </div>
  );
}
