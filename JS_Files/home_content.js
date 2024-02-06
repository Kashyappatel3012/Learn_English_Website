document.addEventListener("DOMContentLoaded", function () {

const playerName = localStorage.getItem('playerName') || 0;
document.getElementById('Welcome').innerHTML = `Welcome to Learn English - ${playerName}.`;

});