
function play() {
  var totalRuns = 0;
  var overs = 0;
  var balls = 0;

  while (overs < 5) { 
    balls++;
    var run = Math.floor(Math.random() * 6) + 1; 
    if (run === 7) { 
      alert("Out! Your total score is " + totalRuns + " runs in " + overs + "." + balls + " overs.");
      break;
    }
    totalRuns += run;
    if (balls === 6) { 
      overs++;
      balls = 0;
    }
    alert("You scored " + run + " runs in over " + overs + "." + balls);
  }

  if (overs === 5) { 
    alert("Game over! Your total score is " + totalRuns + " runs in " + overs + " overs.");
  }
}
