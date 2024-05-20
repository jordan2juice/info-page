"use client";

import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import CommentBox from "./CommentBox";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../firebase.config";

export default function Post({ post }) {
  const [likes, setLikes] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
    updateDoc(doc(db, "posts", post.id), {
      likes: likes + 1,
    });
  };
  const handleDislike = () => {
    setDislike(dislike + 1);
    updateDoc(doc(db, "posts", post.id), {
      dislike: dislike + 1,
    });
  };

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
        <Card.Body className="d-flex justify-content-between">
          <Card.Text className="d-flex align-items-center gap-2">
            <>
              <p>Likes: {likes}</p>
              <button onClick={handleLike}>
                <img
                  src="/thumbs-up.svg"
                  width={30}
                  height={30}
                  alt="thumbs up"
                />
              </button>
            </>
            <>
              <p>Dislikes: {dislike}</p>
              <button onClick={handleDislike}>
                <img
                  src="/thumb-down.svg"
                  width={30}
                  height={30}
                  alt="thumbs down"
                />
              </button>
            </>
          </Card.Text>
        </Card.Body>
      </Card>
      <CommentBox />
    </div>
  );
}
