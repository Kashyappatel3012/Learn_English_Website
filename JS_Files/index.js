function home(){

    const playerName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (playerName !== '' && email !== '') {
        // Store the player name in local storage
        localStorage.setItem('playerName', playerName);
        localStorage.setItem('email', email);
        
        // Redirect to the start_game.html page
        window.location.href = "home.html";
    } else {
        // Display an alert if the player name is empty
        alert('Please fill the given details.');
    }
}

