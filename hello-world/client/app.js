async function getGreetings() {
  const response = await fetch("http://localhost:9000", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify({
      query: "query { greeting }",
    }),
  });
  const body = await response.json();

  // append the response on the frontend
  const p = document.getElementById("response");
  p.textContent = body?.data?.greeting;
}

getGreetings();
