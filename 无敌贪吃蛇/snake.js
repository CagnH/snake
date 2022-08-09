class Snake {
  constructor(select) {
    this.map = document.querySelector(select)
    //蛇的运动方向
    this.direction = "right"
    //蛇的数组
    this.snakeList = []
    this.createSnake()
    this.move()
  }
  //创建蛇头的函数
  createHead () {

    const head = this.snakeList[0]

    //定义坐标
    const pos = { x: 0, y: 0 }
    if (head) {
      switch (this.direction) {
        case "left":
          pos.x = head.offsetLeft - 20
          pos.y = head.offsetTop
          break
        case "right":
          pos.x = head.offsetLeft + 20
          pos.y = head.offsetTop
          break
        case "top":
          pos.x = head.offsetLeft
          pos.y = head.offsetTop - 20
          break
        case "bottom":
          pos.x = head.offsetLeft
          pos.y = head.offsetTop + 20
          break

        default:
          break
      }

      head.className = "body"

    }

    //创建蛇头
    const div = document.createElement("div")
    //定义样式
    div.className = "head"
    //把蛇头存入数组
    this.snakeList.unshift(div)
    //给蛇头定义 坐标
    div.style.left = pos.x + "px"
    div.style.top = pos.y + "px"
    this.map.appendChild(div)
  }
  createSnake () {
    for (let i = 0; i < 4; i++) {
      this.createHead()
    }
  }

  //蛇进行移动
  move () {
    //添加一个蛇头原本蛇头变成身体，尾巴删除，实现移动
    //从数组中移除
    const body = this.snakeList.pop()
    //从页面删除
    body.remove()
    //新增蛇头
    this.createHead()
  }
  //判断蛇有没有吃到食物
  isEat (foodX, foodY) {
    const head = this.snakeList[0]
    const headX = head.offsetLeft
    const headY = head.offsetTop
    //判断是否吃到食物
    if (foodX === headX && foodY === headY) {
      return true
    }
    return false
  }
  isDie () {
    const head = this.snakeList[0]
    const headX = head.offsetLeft
    const headY = head.offsetTop
    if (headX < 0 || headY < 0 || headX >= this.map.clientWidth || headY >= this.map.clientHeight) { return true }
    return false
  }
}