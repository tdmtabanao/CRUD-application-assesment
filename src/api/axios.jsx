import React, { useEffect, useState } from "react";
import api from "./api"; // <-- this is your axios file

function TestApi() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/test")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error(err));
  }, []);

  return <h1>{message || "Loading..."}</h1>;
}

export default TestApi;
