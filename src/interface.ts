interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue): void {
    console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'Size 10 Object'}
printLabel(myObj)

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = {color: 'white', area: 100}
    if (config.color) {
        newSquare.color = config.color
    }

    if (config.width) {
        newSquare.area = config.width * config.width
    }

    return newSquare
}

let mySquare = createSquare({ colour: 'black', width: 100 })
console.log(mySquare)

// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc
mySearch = function(src, sub): boolean {
    let result = src.search(sub)
    return result > -1
}
mySearch('bestwishesforyou', 'wish')

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred']
let myStr: string = myArray[0]
myStr

interface NumberDictionary {
    [index: string]: number;
    length: number;
    name: number;
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

// interface ClockInterface {
//     currentTime: Date;
//     setTime(d: Date);
// }

// class Clock implements ClockInterface {
//     currentTime: Date;
//     setTime(d: Date) {
//         this.currentTime = d
//     }
//     constructor(h: number, m: number) {}
// }

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick():void
}

function CreateClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log('beep beep')
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) {}
    tick() {
        console.log('tick tick')
    }
}

let digital = CreateClock(DigitalClock, 12, 17)
let analog = CreateClock(AnalogClock, 7, 32)

// 继承接口
interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{}
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5.0

// 混合类型
// eg: 一个对象可以同时作为函数和对象使用，并带有额外的属性
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {}
    counter.interval = 123
    counter.reset = function() {}
    return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0

// 接口继承类
// 当接口继承一个类类型时，它会继承类的成员但不包括其实现
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() {}
}

class TextBox extends Control {
    select() {}
}

// Error: Image 缺少state属性
// class Image implements SelectableControl {
//     select() {}
// }
