(async function () {
  try {
    const responseData = await fetch(
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
    console.log("response data - ", responseData);
  } catch (error) {
    console.log("error - ", error);
  }
})();
