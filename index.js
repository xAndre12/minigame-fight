let start = document.querySelector(".start");
let fight1 = document.querySelector(".fight1");
let fight2 = document.querySelector(".fight2");
let vs = document.querySelector(".vs");
let player1life = document.querySelector(".player1life");
let player2life = document.querySelector(".player2life");
let body = document.querySelector("body");
let nr1 = document.querySelector(".nr1");
let nr2 = document.querySelector(".nr2");
let nr3 = document.querySelector(".nr3");
let fight = document.querySelector(".fight");
let player1 = document.querySelector(".character-1-container");
let player2 = document.querySelector(".character-2-container");
let life1number = document.querySelector(".life1");
let life2number = document.querySelector(".life2");
let burnedDamage = document.querySelector(".fire");
let zzz = document.querySelector(".zzz");
let retry = document.querySelector(".retry");
let win = document.querySelector(".win");

let burned = document.querySelector(".burned");
let lavablade = document.querySelector(".fireblade");
let invisible = document.querySelector(".invisible");
let sleep = document.querySelector(".sleep");
let infoAbililty1Player1 = document.querySelector(".ability-1-player-1");
let infoAbililty2Player1 = document.querySelector(".ability-2-player-1");
let infoAbililty1Player2 = document.querySelector(".ability-1-player-2");
let infoAbililty2Player2 = document.querySelector(".ability-2-player-2");
let bladeOfLava = document.querySelector(".bladeOfLava");

// tot textul //
let burnedNumber = document.querySelector(".burnedCooldown");
let lavabladeNumber = document.querySelector(".lavabladeCooldown");
let invisibleNumber = document.querySelector(".invisibleCooldown");
let sleepNumber = document.querySelector(".sleepCooldown");
// tot textul //

// span-uri //
let lavaBladeCooldownNumber = document.querySelector(".lavabladeNumber");
let burnedCooldownNumber = document.querySelector(".burnedNumber");
let invisibleCooldownNumber = document.querySelector(".invisibleNumber");
let sleepCooldownNumber = document.querySelector(".sleepNumber");
// span-uri //

let lavaBladeActivate;
let invisibleCooldown;
let sleepCooldown;
let burnedCooldown;
let position = 0;
let player1Atack = true;
let player2Attack = true;
let startGame = false;
let sleeping;

const countDown = () => {
  setTimeout(() => {
    nr3.style.visibility = "visible";
  }, 1000);
  setTimeout(() => {
    nr3.style.visibility = "hidden";
    nr2.style.visibility = "visible";
  }, 2000);
  setTimeout(() => {
    nr2.style.visibility = "hidden";
    nr1.style.visibility = "visible";
  }, 3000);
  setTimeout(() => {
    nr1.style.visibility = "hidden";
    fight.style.visibility = "visible";
  }, 4000);
  setTimeout(() => {
    fight.style.visibility = "hidden";
    startGame = true;
  }, 5000);
};

invisible.addEventListener("mouseleave", () => {
  infoAbililty2Player1.classList.add("selected");
});
invisible.addEventListener("mouseenter", () => {
  infoAbililty2Player1.classList.remove("selected");
});

sleep.addEventListener("mouseenter", () => {
  infoAbililty1Player1.classList.remove("selected");
});
sleep.addEventListener("mouseleave", () => {
  infoAbililty1Player1.classList.add("selected");
});
lavablade.addEventListener("mouseenter", () => {
  infoAbililty1Player2.classList.remove("selected");
});
lavablade.addEventListener("mouseleave", () => {
  infoAbililty1Player2.classList.add("selected");
});
burned.addEventListener("mouseenter", () => {
  infoAbililty2Player2.classList.remove("selected");
});
burned.addEventListener("mouseleave", () => {
  infoAbililty2Player2.classList.add("selected");
});

start.addEventListener("click", () => {
  player1life.style.visibility = "visible";
  player2life.style.visibility = "visible";
  vs.style.visibility = "hidden";
  fight1.style.visibility = "visible";
  fight2.style.visibility = "visible";
  start.style.visibility = "hidden";
  body.style.backgroundImage = "url(/img/1027366.png)";
  burned.style.visibility = "visible";
  lavablade.style.visibility = "visible";
  invisible.style.visibility = "visible";
  sleep.style.visibility = "visible";
  burnedNumber.style.visibility = "visible";
  sleepNumber.style.visibility = "visible";
  invisibleNumber.style.visibility = "visible";
  lavabladeNumber.style.visibility = "visible";
  countDown();
});
retry.addEventListener("click", () => {
  player1.style.left = "1px";
  player2.style.left = "1550px";
  countDown();
  win.style.visibility = "hidden";
  retry.style.visibility = "hidden";
  life1number.innerHTML = 100;
  life2number.innerHTML = 100;
  invisibleCooldownNumber.innerHTML = 0;
  sleepCooldownNumber.innerHTML = 0;
  burnedCooldownNumber.innerHTML = 0;
  lavaBladeCooldownNumber.innerHTML = 0;
});

sleep.addEventListener("click", () => {
  if (startGame && +sleepCooldownNumber.innerHTML === 0) {
    zzz.style.visibility = "visible";
    sleeping = true;
    sleepCooldownNumber.innerHTML = 5;
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          sleepCooldownNumber.innerHTML = +sleepCooldownNumber.innerHTML - 1;
        }, i * 1000);
      }
    }, 1000);
    setTimeout(() => {
      zzz.style.visibility = "hidden";
      sleeping = false;
    }, 5000);
  }
});
invisible.addEventListener("click", () => {
  if (startGame && +invisibleCooldownNumber.innerHTML === 0) {
    player1.style.opacity = 0;
    setTimeout(() => {
      player1.style.opacity = 100;
    }, 5000);
    invisibleCooldownNumber.innerHTML = 5;
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          invisibleCooldownNumber.innerHTML =
            +invisibleCooldownNumber.innerHTML - 1;
        }, i * 1000);
      }
    }, 1000);
  }
});
lavablade.addEventListener("click", () => {
  if (startGame && +lavaBladeCooldownNumber.innerHTML === 0) {
    bladeOfLava.style.visibility = "visible";
    lavaBladeActivate = true;
    lavaBladeCooldownNumber.innerHTML = 3;
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          lavaBladeCooldownNumber.innerHTML =
            +lavaBladeCooldownNumber.innerHTML - 1;
        }, i * 1000);
      }
    }, 1000);
  }
});

burned.addEventListener("click", () => {
  let damage = true;
  if (startGame && +burnedCooldownNumber.innerHTML === 0) {
    burnedDamage.style.visibility = "visible";
    setInterval(() => {
      if (damage && +life1number.innerHTML >= 0) {
        life1number.innerHTML = life1number.innerHTML - 1;
      }
    }, 1000);
    burnedCooldownNumber.innerHTML = 5;
    setTimeout(() => {
      burnedDamage.style.visibility = "hidden";
      damage = false;
    }, 3000);
    setTimeout(() => {
      for (let i = 0; i < 5; i++) {
        setTimeout(() => {
          burnedCooldownNumber.innerHTML = +burnedCooldownNumber.innerHTML - 1;
        }, i * 1000);
      }
    }, 1000);
  }
});
player1.style.left = "1px";
player2.style.left = "1550px";

window.addEventListener("keydown", (event) => {
  if (startGame === true) {
    if (event.key === "d" || event.key === "D") {
      player1.style.left = parseInt(player1.style.left) + 50 + "px";
      player1.style.transform = "scaleX(1)";
      distanceBetweenPlayers(
        parseInt(player1.style.left),
        parseInt(player2.style.left)
      );
      console.log("player1-right>>>>", player1.style.left);
    }
    if (event.key === "a" || event.key === "A") {
      player1.style.left = parseInt(player1.style.left) - 50 + "px";
      player1.style.transform = "scaleX(-1)";
      console.log("player1-left>>>>", player1.style.left);
      distanceBetweenPlayers(
        parseInt(player1.style.left),
        parseInt(player2.style.left)
      );
    }
    if (event.key === "ArrowRight") {
      if (!sleeping) {
        player2.style.left = parseInt(player2.style.left) + 50 + "px";
        player2.style.transform = "scaleX(-1)";
        console.log("player 2-right>>>>", player2.style.left);
        distanceBetweenPlayers(
          parseInt(player1.style.left),
          parseInt(player2.style.left)
        );
      }
    }
    if (event.key === "ArrowLeft") {
      if (!sleeping) {
        player2.style.left = parseInt(player2.style.left) - 50 + "px";
        player2.style.transform = "scaleX(1)";
        console.log("player 2-left>>>>", player2.style.left);
        distanceBetweenPlayers(
          parseInt(player1.style.left),
          parseInt(player2.style.left)
        );
      }
    }
    if (
      (event.key === " " || event.key === "Enter") &&
      (position == 149 || position == 99 || position === 49)
    ) {
      if (event.key === "Enter") {
        if (+life1number.innerHTML !== 0 && player1Atack === true) {
          player1Atack = false;
          setTimeout(() => {
            life1number.innerHTML = life1number.innerHTML - 1;
            if (+life1number.innerHTML === 0) {
              win.style.visibility = "visible";
              win.innerHTML = "Player 2 won!";
              startGame = false;
              retry.style.visibility = "visible";
            }
            player1Atack = true;
          }, 500);
        }
      } else {
        if (+life2number.innerHTML !== 0 && player2Attack === true) {
          player2Attack = false;
          setTimeout(() => {
            if (lavaBladeActivate) {
              life2number.innerHTML = life2number.innerHTML - 2;
              lavaBladeActivate = false;
              bladeOfLava.style.visibility = "hidden";
            } else {
              life2number.innerHTML = life2number.innerHTML - 1;
              if (+life2number.innerHTML === 0) {
                win.style.visibility = "visible";
                win.innerHTML = "Player 1 won!";
                retry.style.visibility = "visible";
                startGame = false;
              }
              player2Attack = true;
            }
          }, 500);
        }
      }
    }
    if (
      (event.key === " " || event.key === "Enter") &&
      (position == -151 || position == -101 || position === -51)
    ) {
      if (event.key === "Enter") {
        if (+life1number.innerHTML !== 0 && player1Atack === true) {
          player1Atack = false;
          setTimeout(() => {
            life1number.innerHTML = life1number.innerHTML - 1;
            if (+life1number.innerHTML === 0) {
              win.style.visibility = "visible";
              win.innerHTML = "Player 2 won!";
              startGame = false;
              retry.style.visibility = "visible";
            }
            player1Atack = true;
          }, 500);
        }
      } else {
        if (+life2number.innerHTML !== 0 && player2Attack === true) {
          player2Attack = false;
          setTimeout(() => {
            if (lavaBladeActivate) {
              life2number.innerHTML = life2number.innerHTML - 2;
              if (+life2number.innerHTML === 0) {
                win.style.visibility = "visible";
                win.innerHTML = "Player 1 won!";
                retry.style.visibility = "visible";
                startGame = false;
              }
              lavaBladeActivate = false;
              setTimeout(() => {
                bladeOfLava.style.visibility = "hidden";
              }, 500);
            } else {
              life2number.innerHTML = life2number.innerHTML - 1;
              if (+life2number.innerHTML === 0) {
                win.style.visibility = "visible";
                win.innerHTML = "Player 1 won!";
                retry.style.visibility = "visible";
                startGame = false;
              }
              player2Attack = true;
            }
          }, 500);
        }
      }
    }
  }
});

const distanceBetweenPlayers = (player1Position, player2Position) => {
  position = player2Position - player1Position;
};

setInterval(() => {
  if (+life1number.innerHTML < 0) {
    life1number.innerHTML = 0;
  }
}, 100);
setInterval(() => {
  if (+life2number.innerHTML < 0) {
    life2number.innerHTML = 0;
  }
}, 100);
