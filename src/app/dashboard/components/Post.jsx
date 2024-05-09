"use client";

import React from "react";
import { Card } from "react-bootstrap";

export default function Post({ post }) {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
            <h3>{post.title}</h3>
          </Card.Title>
          <Card.Text>
            <p>{post.content}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
