const possibilities = [
    "DONALD IS LATE",
    "STAR WARS TALK",
    "JOELLE TALKS",
    "ZACH BLAMES DAN FOR SOMETHING",
    "DONALD'S OPRAH IMPRESSION",
    "DONALD COMPLAINS ABOUT ZACH NOT WATCHING HIS FILM",
    "ZACH SAYS \"THAT'S FUNNY\"",
    "ZACH DOES BACKING VOCALS FOR DONALD",
    "\"Y'KNOW WHAT I MEAN?\"",
    "PRAISE FOR THE TODD'S LINE",
    "ASK BILL",
    "DAN TALKS",
    "\"C'MON BUDDY\"",
    "REMINDER THAT RINGTONE IS AVAILABLE",
    "SOMEONE FORGETS FILMING A SCENE",
    "JOSUA RADIN SHOUT-OUT",
    "DONALD REFERENCES HIP-HOP/RAP",
    "SOMEONE TALKS ABOUT WANTING A HUG",
    "ZACH AND DONALD ARGUE",
    "DONALD COMPLAINS ABOUT HIS INSTAGRAM FOLLOWING",
    "ESSENTIAL WORKERS SHOUTOUT",
    "WILLY TALK",
    "ZACH SINGS SOMETHING FROM HIS WORKOUT PLAYLIST",
    "BILL IS ACCUSED OF BEING 'FREAKY'"
];
$(document).ready(function() {

  function evaluateBoard(){
    // TODO: implement
    $(".grid-container div").each(function(idx, div){

    });
  }

  function fillBoard(){
    var currentIndex = possibilities.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = possibilities[currentIndex];
      possibilities[currentIndex] = possibilities[randomIndex];
      possibilities[randomIndex] = temporaryValue;
    }

    var boxes = $(".row .grid-item");

    var cnt = 0;
    boxes.each(function(idx, div) {
      $(div).text(possibilities[cnt]);
      $(div).removeClass("checked");
      cnt++;
    });
  }

  fillBoard(); // inital

  $(".grid-item-center").text("FREE SPACE");

  $(".grid-item").click(function () {
    $(this).toggleClass("checked");
    evaluateBoard();
  });


  $(".play-button").click(function(){
      fillBoard();
  })
});
