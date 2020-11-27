// 函数
// 为函数定义类型
function add(x: number, y: number): number {
  return x + y
}

// TS可根据返回语句自动推断出返回值类型，可省略
let myAdd = function(x: number, y: number) {
  return x + y
}

let myAdd1: (x: number, y: number) => number =
  function(x: number, y: number): number {
    return x + y
  }

// 函数类型：参数类型 + 返回值类型
// 返回值类型是函数类型的必要部分，如果没有返回值，则指定为void

// 类型推断
let myAdd2: (baseValue: number, increment: number) => number = function(x, y) { return x + y }

// 可选参数
