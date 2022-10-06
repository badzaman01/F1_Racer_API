var button = document.querySelector(".button");
var inputValueSeason = document.querySelector("#season");
var inputValueRound = document.querySelector("#round");
button.addEventListener("click", function () {
  fetch(
    "https://ergast.com/api/f1/" +
      inputValueSeason.value +
      "/" +
      inputValueRound.value +
      "/driverStandings.json"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data.MRData.StandingsTable.StandingsLists[0].DriverStandings);
      const apiVar =
        data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
      apiVar.forEach((element) => {
        const fieldOneValue = element["position"];
        const fieldTwoValue =
          element["Driver"]["givenName"] +
          " " +
          element["Driver"]["familyName"];
        const fieldThreeValue = element["Driver"]["nationality"];
        const fieldFourValue = element["Constructors"]["name"];
        const fieldFiveValue = element["points"];

        const html = `
        <p>${fieldOneValue}</p>
        <p>${fieldTwoValue}</p>
        <p>${fieldThreeValue}</p>
        <p>${fieldFourValue}</p>
        <p>${fieldFiveValue}</p>
        `;
        document
          .querySelector(".driversList")
          .insertAdjacentHTML("beforeend", html);
      });
    });
});
