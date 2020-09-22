const games = [
    { id: 324, name: "Great game", rating: 5.0 },
    { id: 124, name: "Ok game", rating: 3.0 },
    { id: 678, name: "Meh game", rating: 2.5 },
    { id: 28, name: "Terrible game", rating: 1.0 },
    { id: 4, name: "Mediocre game", rating: 3.0 },
];

const gamesContainer = document.querySelector(".games-list");

games.forEach(game => {
    let newHTML = "";

    newHTML = gamesContainer.innerHTML += `<li>${game.name}: ${game.rating}</li>`

    console.log(newHTML);
    listenToListItem();
})

function listenToListItem() {
    const games = document.querySelectorAll("li");

    games.forEach(function (game) {
        game.addEventListener("click", handleClick);
    })

}

function handleClick() {
    event.target.classList.toggle("played");
}
