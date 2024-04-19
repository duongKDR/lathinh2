//xáo thẻ bài
let the;
let memoryCard = [];
let igNore = [];
var flipCounter,
  timer,
  gameOn = false;
var counterClick = 0;
let clickIndex = -1;
let totalOpeningCard = [];
let checkDuplicate = [];
let CONDITIONWINING = 18;
let winning = false;

function resetGame() {
  igNore = [];
  var elements = document.getElementsByClassName("card");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
const b = () => {
  totalOpeningCard = [];
  const loss = document.getElementById("loss");
  const win = document.getElementById("win");
  if (loss) {
    loss.classList.remove("visible");
  }
  if (winning) {
    win.classList.remove("visible");
  }

  resetGame();
  init();
};

var skillCard = [];

function showCountdown() {
  return setInterval(() => {
    this.timeRemaining--;
    this.timer.innerHTML = this.timeRemaining;
    if (this.timeRemaining === 0) this.showLoss();
  }, 1000);
}

function showLoss() {
  const loss = document.getElementById("loss");
  gameOn = false;
  if (loss) {
    document.getElementById("loss").classList.add("visible");
  }

  clearInterval(countdown);
}

function showWin() {
  const win = document.getElementById("win");
  gameOn = false;
  if (win) {
    document.getElementById("win").classList.add("visible");
  }

  clearInterval(countdown);
}
function init() {
  gameOn = true;
  count = 0;
  // flipCounter = 0;
  var minutes = 4;
  var display = document.getElementById("Timer");

  the = [
    {
      Name: " ảnh 1",
      id: 1,
      img: "images/loadingpic473.png",
    },
    {
      Name: "ảnh 2",
      id: 2,
      img: "images/loadingpic482.png",
    },
    {
      Name: "ảnh 3",
      id: 3,
      img: "images/loadingpic407.png",
    },
    {
      Name: "ảnh 4",
      id: 4,
      img: "https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/yasuo_55.jpg",
    },
    {
      Name: "ảnh 5",
      id: 5,
      img: "images/loadingpic43.png",
    },
    {
      Name: "ảnh 6",
      id: 6,
      img: "images/loadingpic45.png",
    },
    {
      Name: "ảnh 7",
      id: 7,
      img: "images/loadingpic128.png",
    },
    {
      Name: "ảnh 8",
      id: 8,
      img: "images/loadingpic198.png",
    },
    {
      Name: " ảnh 1",
      id: 1,
      img: "images/loadingpic473.png",
    },
    {
      Name: "ảnh 2",
      id: 2,
      img: "images/loadingpic482.png",
    },
    {
      Name: "ảnh 3",
      id: 3,
      img: "images/loadingpic407.png",
    },
    {
      Name: "ảnh 4",
      id: 4,
      img: "https://cdngarenanow-a.akamaihd.net/webmain/static/pss/lol/items_splash/yasuo_55.jpg",
    },
    {
      Name: "ảnh 5",
      id: 5,
      img: "images/loadingpic43.png",
    },
    {
      Name: "ảnh 6",
      id: 6,
      img: "images/loadingpic45.png",
    },
    {
      Name: "ảnh 7",
      id: 7,
      img: "images/loadingpic128.png",
    },
    {
      Name: "ảnh 8",
      id: 8,
      img: "images/loadingpic198.png",
    },
    {
      Name: "ảnh 9",
      id: 9,
      img: "images/loadingpic122.png",
    },
    {
      Name: "ảnh 9",
      id: 9,
      img: "images/loadingpic122.png",
    },
  ];

  for (let i = 0; i < the.length; i++) {
    skillCard = the.sort(() => Math.random() - 0.5);
  }
  console.log(skillCard);
  startTimer(minutes, display);
  showTags();
}
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function showTags() {
  console.log("show.....");
  let Str = "";

  for (let i = 0; i < skillCard.length; i++) {
    const element = skillCard[i];
    console.log(element.id);
  }
  for (let index = 0; index < skillCard.length; index++) {
    const element = skillCard[index];
    console.log(element.Name);

    Str += `
    <div  class="w3-col m2  ">
    <div class="box-1-2">
      <div class="_box ">
        <div id="${index}" class="mask hidden" onclick="toogleMask('${index}')"></div>
        
            <div class="_box-1  p-box ">
                <img width="invalid-value" height="invalid-value" alt=""  class="_box-2 _s-box-2" style="object-fit: contain" onclick="checkdual" src="${element.img}">
            </div>
      
      </div>
    </div>
  </div>`;
  }
  // Str2 = Str;
  document.getElementById("tags").innerHTML = Str;
}

function toogleMask(id) {
  if (igNore.includes(skillCard[id].id)) return;
  memoryCard.push(skillCard[id].id);
  counterClick = counterClick + 1;
  totalOpeningCard.push(skillCard[id].id);
  document.getElementById(id).classList.toggle("hidden");
  console.log(totalOpeningCard);
  if (counterClick === 2) {
  setTimeout(() => {
    update()
  }, 500);
    
  }

}

function update() {
  if (counterClick === 2) {
    counterClick = 0;
    if (memoryCard[0] === memoryCard[1] && memoryCard.length === 2) {
      igNore.push(memoryCard[0]);
      // console.log(igNore);
      console.log(memoryCard);
      if (totalOpeningCard.length === CONDITIONWINING) {
        winning = true;
        showWin();
        totalOpeningCard = [];
      }
    } else {
      // loi ko trừ 1 can trừ 1 totalopen
      // totalOpeningCard = totalOpeningCard-1;
      const tags = document.querySelectorAll(".mask");

      igNore = [];
      for (let index = 0; index < tags.length; index++) {
        const element = tags[index];
        if (
          !element.classList.contains("hidden") &&
          memoryCard.includes(skillCard[Number(element.id)].id)
        ) {
          element.classList.add("hidden");
          totalOpeningCard = totalOpeningCard.filter(
            (i) => i !== skillCard[Number(element.id)].id
          );
        }
      }
    }

    memoryCard = []; // clear memoryCard
  }
}

function confirm() {
  b();
  if (winning) {
    winning = false;
  }
}

let lastUpdate = Date.now();
