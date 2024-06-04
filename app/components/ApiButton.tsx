"use client";

import { useState } from "react";

export default function ApiButton() {
  const [message, setMessage] = useState<string>("");
  console.log("-------api response-------", message);

  const callApi = async () => {
    const response = await fetch(
      "http://ec2-3-86-49-38.compute-1.amazonaws.com/secret",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer abc123",
          "Content-Type": "application/json",
        },
        body: JSON.stringify([
          { role: "user", content: "what is happening in Bangladesh?" },
        ]),
      }
    );
    const data = await response.json();
    setMessage(data);
  };

  return (
    <div>
      <button onClick={callApi}>Call API</button>
    </div>
  );
}
