import React from "react";

export default function Note(params) {
  return (
    <div className="note">
      <h1>{params.title}</h1>
      <p>{params.content}</p>
    </div>
  );
};