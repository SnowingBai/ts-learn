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
function buildName(firstName: string, lastName?: string) {
  if (lastName) {
    return firstName + '' + lastName
  } else {
    return firstName
  }
}

buildName('Bob', 'Adams')

// 剩余参数
function buildName1(firstName: string, ...restOfName: string[]) {
  return firstName + '' + restOfName.join(',')
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName1

// this
let deck = {
  suits: ['heart', 'spades', 'clubs', 'diamonds'],
  cards: Array(52),
  createCardPicker: function() {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)

      return {suit: this.suits[pickedSuit], card: pickedCard % 13}
    }
  }
}

let cardPicker = deck.createCardPicker()
let pickedCard = cardPicker()

console.log('card: ' + pickedCard.card + ' of ' + pickedCard.suit)

// this 参数
function f(this: void) {
  // ...
}