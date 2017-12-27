'use restrict';
class drawKernal {
  constructor(target, callback, dx, dy) {
    this.canvas = document.getElementById(target || 'tutorial');
    this.ctx = canvas.getContext('2d');
    this.dx = dx;
    this.dy = dy;
    this.callback = callback;
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.beginPath();
    this.ctx.arc(x, y, 10, 0, Math.PI * 2);
    this.ctx.fillStyle = "#0095DD";
    this.ctx.fill();
    this.ctx.closePath();

    x += dx;
    y += dy;

  }

  start() {
    this.draw = setInterval(this.callback(), 20);
  }

  stop() {
    clearInterval(this.draw);
  }
}


class Component {
  // height = 5;
  // width: number;
  // positionX;
  // positionY;
  // handlerKey: Function;
  // handlrClick: Function;
  constructor(height, width, posX, posY) {
    this.height = height;
    this.width = width;
    this.posX = posX;
    this.posY = posY;
    this.keyCode = null;
    this.init();
  }

  init() {

  }

  move() {
    document.addEventListener("keydown", this.keyDownHandler, false);
    document.addEventListener("keyup", this.keyUpHandler, false);
  }

  keyDownHandler(e) {
    this.keyCode = (e.keyCode);

  }

  keyUpHandler(e) {
    this.keyCode = null;

  }
}

window.onload = () => {
  // let component = new Component(1, 2, 3, 4);
  // let _draw = new drawKernal('tutorial',cb,2,2);


  var ballRadius = 10;
  var dx = 2;
  var dy = -2;
  var canvas = document.getElementById('tutorial');
  var ctx = canvas.getContext('2d');

  var rightPressed = false;
  var leftPressed = false;
  let upPressed = false;
  let downPressed = false;
  var paddleHeight = 10;
  var paddleWidth = 75;
  var paddleX = (canvas.width - paddleWidth) / 2;
  var paddleY = (canvas.height - paddleHeight);
  var brickRowCount = 3;
  var brickColumnCount = 5;

  var brickWidth = 75;
  var brickHeight = 20;
  var brickPadding = 10;
  var brickOffsetTop = 30;
  var brickOffsetLeft = 30;

  var x = canvas.width / 2;
  var y = canvas.height - 30;
  var bricks = [];
  for (c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (r = 0; r < brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
  }
  function drawBricks() {
    for (c = 0; c < brickColumnCount; c++) {
      for (r = 0; r < brickRowCount; r++) {
        if (bricks[c][r].status == 1) {
          var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
          var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
          bricks[c][r].x = brickX;
          bricks[c][r].y = brickY;
          ctx.beginPath();
          ctx.rect(brickX, brickY, brickWidth, brickHeight);
          ctx.fillStyle = "#0095DD";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }

  function collisionDetection() {
    for (c = 0; c < brickColumnCount; c++) {
      for (r = 0; r < brickRowCount; r++) {
        var b = bricks[c][r];
        if (b.status == 1) {
          if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {

            dy = -dy;
            b.status = 0;
          }
        }
      }
    }
  }

  function drawPaddle() {

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
      paddleX += 7;
    }
    else if (leftPressed && paddleX > 0) {
      paddleX -= 7;
    } else if (upPressed && paddleY > 0) paddleY -= 7;
    else if (downPressed && paddleY < canvas.height - paddleHeight) paddleY += 7;

    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();

    x += dx;
    y += dy;
    if (y + dy < ballRadius) {
      dy = -dy;
    } else if (y + dy > canvas.height - ballRadius) {
      if (x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
      }
      else {
        // alert("GAME OVER");
        // document.location.reload();
      }
    }
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
      dx = -dx;
    }


    // drawBricks();
    // drawPaddle();
    // collisionDetection();
  }
  // setInterval(draw, 10);
  draw();
  function keyDownHandler(e) {
    console.log(e.keyCode);
    if (e.keyCode == 38) upPressed = true;
    else if (e.keyCode == 39) {
      rightPressed = true;
    }
    else if (e.keyCode == 37) {
      leftPressed = true;
    } else if (e.keyCode == 40) {
      downPressed = true;
    }
  }

  function keyUpHandler(e) {
    if (e.keyCode == 39) {
      rightPressed = false;
    }
    else if (e.keyCode == 37) {
      leftPressed = false;
    } else if (e.keyCode == 38)
      upPressed = false;
    else if (e.keyCode == 40)
      downPressed = false;
  }
  function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if (relativeX > 0 && relativeX < canvas.width) {
      paddleX = relativeX - paddleWidth / 2;
    }
  }

  document.addEventListener("mousemove", mouseMoveHandler, false);
  document.addEventListener("keydown", keyDownHandler, false);
  document.addEventListener("keyup", keyUpHandler, false);
}
const keyHook = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];

class controller {


  constructor() {
    // document.addEventListener('keyup', (e) => {
    //   if (keyHook.indexOf(e.key) !== -1) {
    //     console.log('move');
    //   }
    // })
    var canvas = document.getElementById('tutorial');
    var ctx = canvas.getContext('2d');
  }

}

