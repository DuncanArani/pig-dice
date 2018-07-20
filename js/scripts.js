//business logic
var playerA = "";
var playerB = "";

var throwdice = function() {
  return Math.floor(6 * Math.random()) + 1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.yourscore = 0;
  this.turn = +turn;
  this.playerName;
}
// checking for 1
Player.prototype.rollone = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
    // this.changeturn();
  } else {
    this.tempscore += this.roll;
  }
}

// hold
Player.prototype.hold = function() {
  this.yourscore += this.tempscore;
  this.tempscore = 0;
  // this.changeturn();
  alert(this.playerName + ", your turn is over, pass the mouse!");
}
Player.prototype.winCheck = function() {
  if (this.yourscore >= 100) {
    alert(this.playerName + " You are the winner!");
  }
}
Player.prototype.newGame = function() {
  //debugger;
  this.roll = 0;
  this.tempscore = 0;
  this.yourscore = 0;
  this.playerName = "";
}

var clearValues = function() {
  $(".playerAName").val("");
  $(".playerBName").val("");
}
// User Interface
$(document).ready(function() {

      $("button#start").click(function(event) {
          playerA = new Player(true);
          playerB = new Player(false);
          $(".container2").show();
          $(".container").hide();

          var playerAName = $(".playerAName").val();
          $("#playerAName").text(playerAName);

          var playerBName = $(".playerBName").val();
          $("#playerBName").text(playerBName);

          playerA.playerName = playerAName;
          playerB.playerName = playerBName;


          $("button#new-game").click(function(event) {
            $(".container2").hide();
            clearValues();
            playerA.newGame();
            playerB.newGame();
            $("#total-total-A").empty();
            $("#your-score-A").empty();
            $("#dice-roll-A").empty();
            $("#round-total-B").empty();
            $("#your-score-B").empty();
            $("#dice-roll-B").empty();

            $(".container").show();
          });

          $("button#playerA-roll").click(function(event) {
            playerA.roll = throwdice();
            $("#dice-roll-A").text(playerA.roll);
            playerA.rollone();
            $("#total-round-A").text(playerA.tempscore);
          });

          $("button#playerB-roll").click(function(event) {
            playerB.roll = throwdice();
            $("#dice-roll-B").text(playerB.roll);
            playerB.rollone();
            $("#total-round-B").text(playerB.tempscore);
          });

          $("button#playerA-hold").click(function(event) {
            playerA.hold();
            $("#your-score-A").text(playerA.yourscore);
            $("#total-round-A").empty();
            $("#dice-roll-A").empty();
            playerA.winCheck();
          });
          $("button#playerB-hold").click(function(event) {
            playerB.hold();
            $("#your-score-B").text(playerB.yourscore);
            $("#total-round-B").empty();
            $("#dice-roll-B").empty();
            playerB.winCheck();
          })
          // var diceimgs = {
          //   diceimg01: "img/die-1.png",
          //   diceimg02: 'img/die-2.png',
          //   diceimg03: "img/die-3.png",
          //   diceimg04: "img/die-4.png",
          //   diceimg05: "img/die-5.png",
          //   diceimg06: "img/die-6.png"
          });

      });
