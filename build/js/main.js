const playBoard=document.querySelector(".play-board");let foodX,foodY,snakeX=5,snakeY=10,snakeBody=[],velocityX=0,velocityY=0;const changeFoodPosition=()=>{foodX=Math.floor(30*Math.random())+1,foodY=Math.floor(30*Math.random())+1},changeDirection=o=>{"ArrowUp"===o.key?(velocityX=0,velocityY=-1):"ArrowDown"===o.key?(velocityX=0,velocityY=1):"ArrowLeft"===o.key?(velocityX=-1,velocityY=0):"ArrowRight"===o.key&&(velocityX=1,velocityY=0),initgame()},initgame=()=>{let e=`<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;snakeX===foodX&&snakeY===foodY&&(changeFoodPosition(),snakeBody.push([foodX,foodY]));for(let o=snakeBody.length-1;o<0;o--)snakeBody[o]=snakeBody[o-1];snakeBody[0]=[snakeX,snakeY],snakeX+=velocityX,snakeY+=velocityY;for(let o=0;o<snakeBody.length;o++)e+=`<div class="snake-head" style="grid-area: ${snakeBody[o][1]} / ${snakeBody[o][0]}"></div>`;playBoard.innerHTML=e};changeFoodPosition(),setInterval(initgame(),125),document.addEventListener("keydown",changeDirection);
//# sourceMappingURL=maps/main.js.map
