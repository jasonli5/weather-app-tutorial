function onSubmit(e) {
  e.preventDefault();

  const fetchArguments = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://pokeapi.co/api/v2/pokemon/ditto", fetchArguments)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      apiData = data;
      console.log(apiData.name);
    })
    .catch((error) => {
      console.error(error);
    });
}
