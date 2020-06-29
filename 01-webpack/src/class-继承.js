class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    sayHello() {
        console.log('打招呼')
    }
}

class Ameriacan extends Person{
    constructor(name, age, IDNumber) {
        // 一个子类通过extends继承父类 在子类的constructor中必须要用super方法
        super(name, age)
        this.IDNumber = IDNumber
    }
}

const a1 = new Ameriacan('jack', 20, '320683xxxxxxxxxxxxx')
console.log(a1)
a1.sayHello()

class Chinese extends Person{
}

const a2 = new Chinese('张三', 18)
console.log(a2)