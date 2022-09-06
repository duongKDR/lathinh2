//xáo thẻ bài
var block, data, the, memoArry, arry, imgAll, shuffledBlocks, click;
var countM, match, match2, flipArr;
var flipCounter,
  timer,
  gameOn = false;
var counterClick = 0;
const a = () => {
  const loss = document.getElementById("loss");
  console.log(
    "🚀 ~ file: script.js ~ line 12 ~ overlay.addEventListener ~ loss",
    loss
  );

  if (loss) {
    loss.classList.remove("visible");
  }
  resetGame();
  init();
};

const box = Array.from(document.getElementsByClassName("box-1-2"));


function resetGame() {
  var elements = document.getElementsByClassName("w3-col m3");
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
}
function showCountdown() {
  return setInterval(() => {
    this.timeRemaining--;
    this.timer.innerHTML = this.timeRemaining;
    if (this.timeRemaining === 0) this.showLoss();
  }, 1000);
}

function init() {
  //initializing values
  gameOn = true;
  memoArry = new Array(18);
  arry = [];
  imgAll = [];
  shuffledBlocks = [];
  flipArr = [];
  count = 0;
  flipCounter = 0;
  var minutes = 0.1;
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
  the = the.sort(() => Math.random() - 0.5);
  console.log(the);
  // init();
  startTimer(minutes, display);

  showTags();
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
function showTags() {
  console.log("show.....");
  let Str = "";
  // let Str2 = "";
  // function Random() {

  //   return the[ Math.floor(Math.random()*9)]
  // }
  for (let i = 0; i < the.length; i++) {
    const element = the[i];
    console.log(element.id);
  }
  for (let index = 0; index < the.length; index++) {
    // console.log(Random());

    const element = the[index];
    console.log(element.Name);

    Str += `
    <div  class="w3-col m2  ">
    <div class="box-1-2">
      <div class="_box ">
        <div id="mask-${index}" class="mask hidden" onclick="toogleMask('mask-${index}')"></div>
        
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



const checkCouple = () => {

  if (counterClick == 2) {
    counterClick = 0;
    const tags = document.querySelectorAll(".mask");
    
      for (let index = 0; index < tags.length; index++) {
        const element = tags[index];
        if (!element.classList.contains("hidden")) {
          element.classList.add("hidden");
        }
      }
    
   
  } 
};

function toogleMask(id) {
  console.log(id);

  checkCouple();
  counterClick = counterClick + 1;
  document.getElementById(id).classList.toggle("hidden");
}

// function(arr){
//   var count = arr.length,temp, inde;
//   while(count>0){
//     inde = Math.floor(Math.random()*count);
//     count --;
//     temp= arr[count];
//     arr[count]= arr[inde];
//     arr[inde]= temp;
//     return arr;
//   }
// }