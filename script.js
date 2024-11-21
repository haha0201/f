const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const Colors = {
  rarities: [
    { // 0
      name: "Common",
      color: "#7eef6d",
      border: "#66c258"
    },
    { // 1
      name: "Unusual",
      color: "#ffe65d",
      border: "#cfba4b"
    },
    { // 2
      name: "Rare",
      color: "#4d52e3",
      border: "#3e42b8"
    },
    { // 3
      name: "Epic",
      color: "#861fde",
      border: "#6d19b4"
    },
    { // 4
      name: "Legendary",
      color: "#de1f1f",
      border: "#b41919"
    },
    { // 5
      name: "Mythic",
      color: "#1fdbde",
      border: "#19b1b4"
    },
    { // 6
      name: "Ultra",
      color: "#ff2b75",
      border: "#cf235f"
    },
    { // 7
      name: "Super",
      color: "#2bffa3",
      border: "#23cf84"
    },
    //Unobtainable
    { // 8
      name: "Omega",
      color: "#494849",//"#e3b62d",//"#f07a16",
      border: "#3c3b40"//'#b59122'//"#d96e14"
    },
    { // 9
      name: "Fabled",
      color: "#ff5500",
      border: "#cf4500"
    },
    { // 10
      name: "Divine",
      color: "#67549c",
      border: "#50417a"
    },
    { // 11
      name: "Supreme",
      color: "#b25dd9",
      border: "#9043b3"
    },
    { // 12
      name: "Omnipotent",
      color: "#888888",
      border: "#666666"
    },
    { // 13
      name: "Astral",
      color: "#046307",
      border: "#034d05"
    },
    { // 14
      name: "Celestial",
      color: "#00bfff",
      border: "#00a4db"
    },
    { // 15
      name: "Seraphic",
      color: "#c77e5b",
      border: '#a16649'
    },
    { // 16
      name: "Transcendent",
      color: "#ffffff",
      border: "#e3e3e3"
    },
    { // 17
      name: "Quantum",
      color: "#61ffdd",
      border: "#50d9bb"
    },
    { // 18
      name: "Galactic",
      color: "#ba5f7a",
      border: "#964b62"
    },
    { // 19
      name: "Eternal",
      color: "#5a8c7d",
      border: "#466e62"
    },
    { // 20
      name: "Chaos",
      color: "#20258a",
      border: "#181c69"
    },

  ],
  biomes: {
    "garden": {
      background: "#1ea761",
      grid: "#1d9157"
    },
    "desert": {
      background: "#dece7b",
      grid: "#a1955a"
    },
    "ocean": {
      background: "#547db3",
      grid: "#41608a"
    }
  }
}

let draw = 15;


ctx.lineWidth = 4.5;
ctx.fillStyle = Colors.rarities[draw].color;
ctx.strokeStyle = Colors.rarities[draw].border;
// if (this.rarity == 8){
//     ctx.fillStyle = `hsl(${Math.cos(Date.now()/1200)*20 + 35}, 68%, 60%)`
//     ctx.strokeStyle = `hsl(${Math.cos(Date.now()/1200)*20 + 35}, 68%, 45%)`

// }
ctx.beginPath();
ctx.roundRect(3, 3, 69, 69, .25);
ctx.fill();
ctx.stroke();
ctx.closePath();


// ctx.lineWidth = 4.5;
// ctx.fillStyle = Colors.rarities[draw].color;
// ctx.strokeStyle = Colors.rarities[draw].border;
// // if (this.rarity == 8){
// //     ctx.fillStyle = `hsl(${Math.cos(Date.now()/1200)*20 + 35}, 68%, 60%)`
// //     ctx.strokeStyle = `hsl(${Math.cos(Date.now()/1200)*20 + 35}, 68%, 45%)`

// // }


// ctx.translate(25, 75/2);
// ctx.rotate(-Math.PI / 8);
// ctx.beginPath();
// ctx.roundRect(-25, -25, 50, 50, .25);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();
// ctx.rotate(Math.PI / 8);
// ctx.translate(-25, -75/2);


// ctx.translate(50, 75/2);
// ctx.rotate(Math.PI / 8);
// ctx.beginPath();
// ctx.roundRect(-25, -25, 50, 50, .25);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();
// ctx.rotate(-Math.PI / 8)
// ctx.translate(-50, -75/2);

// ctx.translate(75/2, 75/2);
// ctx.beginPath();
// ctx.roundRect(-20, -30, 40, 60, .25);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();
// ctx.translate(-75/2, -75/2);






// ctx.translate(15, 95/2);
// ctx.rotate(-Math.PI / 4);
// ctx.beginPath();
// ctx.roundRect(-25, -25, 50, 50, .25);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();
// ctx.rotate(Math.PI / 4);
// ctx.translate(-15, -95/2);


// ctx.translate(30, 75/2);
// ctx.rotate(-Math.PI / 10);
// ctx.beginPath();
// ctx.roundRect(-25, -25, 50, 50, .25);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();
// ctx.rotate(Math.PI / 10);
// ctx.translate(-30, -75/2);



// ctx.translate(60, 95/2);
// ctx.rotate(Math.PI / 4);
// ctx.beginPath();
// ctx.roundRect(-25, -25, 50, 50, .25);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();
// ctx.rotate(-Math.PI / 4);
// ctx.translate(-60, -95/2);


// ctx.translate(45, 75/2);
// ctx.rotate(Math.PI / 8);
// ctx.beginPath();
// ctx.roundRect(-15, -25, 40, 50, .25);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();
// ctx.rotate(-Math.PI / 8)
// ctx.translate(-45, -75/2);




// ctx.translate(75/2, 75/2);
// ctx.beginPath();
// ctx.roundRect(-17, -30, 34, 60, .25);
// ctx.fill();
// ctx.stroke();
// ctx.closePath();
// ctx.translate(-75/2, -75/2);
