class Game {
  constructor(select, scoreEle) {

    this.map = document.querySelector(select)
    this.scoreEle = document.querySelector(scoreEle)
    this.food = new Food(select)
    this.snake = new Snake(select)
    this.timer = 0
    this.count = 0
  }
  //游戏开始
  start () {
    this.timer = setInterval(() => {
      this.snake.move()
      //判断是否吃到食物
      if (this.snake.isEat(this.food.x, this.food.y)) {
        this.snake.createHead()
        this.food.foodPos()
        this.scoreChange()
      }
      //判断蛇是否死亡
      else if (this.snake.isDie()) {
        clearInterval(this.timer)
        this.gameover()
        window.location.reload()
      }
    }, 500)
  }

  //暂停
  pause () {
    clearInterval(this.timer)
  }
  //重新开始
  restart () {
    window.location.reload()
  }
  //改变方向的方法
  change (type) {
    this.snake.direction = type
  }
  //增加分数
  scoreChange () {
    this.count += 1
    this.scoreEle.innerText = this.count
  }
  gameover () {
    alert("GAME OVER")
  }
}


