async function checkTokenFetch() {
  const token = localStorage.getItem("token");
  const response = await fetch("http://localhost:3000/session/verify", {
    method: "GET",
    mode: "cors",
    headers: {
      Accept: "application/json",
      authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((response) => response);
    return response;
}

export default checkTokenFetch;
