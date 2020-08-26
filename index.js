/***** Deliverable 1 *****/
document.addEventListener("DOMContentLoaded", function(){

    const header = document.querySelector("#header");
    console.log("Here's your header:", header);




    /***** Deliverable 2 *****/
    header.style.color = "red";

    /***** Deliverable 3 *****/
    console.log("PLAYERS array looks like this:", PLAYERS)

    const playerContainer = document.querySelector(".player-container");

    PLAYERS.forEach(function(player){
        let playerDiv = document.createElement('div');
        playerDiv.class = "player";
        playerDiv.dataset.number = player.number;

        let h3 = document.createElement('h3');
        h3.innerHTML = `${player.name} (<em>${player.nickname}</em>)`;
        playerDiv.append(h3);

        let img = document.createElement('img');
        img.src = player.photo;
        img.alt = player.name;
        playerDiv.append(img);

        playerContainer.append(playerDiv);

    });


    /***** Deliverable 4 *****/
    const invader = document.querySelector("div[data-number='7']");
    invader.remove();

});