var countdown;
// class Player {
//     // Special constructor method
//     constructor(name, score, turnTotal, avatar, spot) {
//         // Set properties
//         this.name = name;
//         this.score = score;
//         this.turnTotal = turnTotal;
//         this.avatar = avatar;
//         this.spot = spot;

//     }
// }

function name(params) {
    
}

function startTimer(duration, display) {
    var timer = 60 * duration, minutes, seconds;
    countdown = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = `Time ${ minutes }:${ seconds }`;
        if (--timer < 0) {
            timer=0;

         showLoss();
         
       

        }
    }, 1000);
}
