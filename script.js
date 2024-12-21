// Demon list data
const demonList = [
    { rank: 1, name: "Cocainelocked", creator: "Silly", verifier: "Silly", points: 150 },
    { rank: 2, name: "Aqua Circles", creator: "Silly and TeutonicFalv", verifier: "Silly", points: 125 },
    { rank: 3, name: "Silent ElectraSYS", creator: "Silly and TeutonicFalv", verifier: "Silly", points: 100 },
    { rank: 4, name: "Cocaine Force", creator: "Silly", verifier: "Silly", points: 75 },
    { rank: 5, name: "Hauntedhouse", creator: "Silly", verifier: "Silly", points: 50 },
    { rank: 6, name: "Unnerfed BuFfTraY", creator: "Silly", verifier: "Silly", points: 50 },
    { rank: 7, name: "BuFfTraY", creator: "Silly", verifier: "Silly", points: 50 },
    { rank: 8, name: "Extreme Jumpscare", creator: "Silly", verifier: "Silly", points: 50 },
    { rank: 9, name: "Ecstacy", creator: "Silly and TeutonicFalv", verifier: "Silly", points: 50 }
];

// Player rankings data
const playerRankings = [
    { rank: 1, player: "Silly", points: 700 }
];

// Function to generate the demon list table
function loadDemonList() {
    const tableBody = document.getElementById('demon-list');

    demonList.forEach((demon) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${demon.rank}</td>
            <td>${demon.name}</td>
            <td>${demon.creator}</td>
            <td>${demon.verifier}</td>
            <td>${demon.points}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function to generate the player rankings table
function loadPlayerRankings() {
    const tableBody = document.getElementById('player-rankings');

    playerRankings.forEach((player) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.rank}</td>
            <td>${player.player}</td>
            <td>${player.points}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Load both tables on page load
window.onload = () => {
    loadDemonList();
    loadPlayerRankings();
};