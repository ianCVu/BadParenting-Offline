document.body.innerHTML = "";
document.head.innerHTML = ""; //Add icon and title later.
const game = document.createElement("iframe");
game.srcdoc = null;
game.style.position = "fixed";
game.style.zIndex = 99999999;
game.style.top = "0px";
game.style.left = "0px";
game.style.width = "100%";
game.style.height = "100%";
document.body.appendChild(game);
