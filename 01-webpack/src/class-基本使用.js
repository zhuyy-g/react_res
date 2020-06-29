function Person(name, age) {
    this.name = name
    this.age = age
}

Person.info = 'aaaa'

const p1 = new Person('王多多', 18)

// 静态属性不可以被实例对象引用
console.log(p1.info)
console.log(Person.info)

Person.prototype.say = function() {
    console.log('这是Person的实例方法')
}

// 静态方法
Person.show = function () {
    console.log('这是Person的静态show方法')
}

p1.say()
Person.show()

console.log('------------------------------------------------------------')

class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    // 在class内部 通过static修饰的属性 就是静态属性
    static info = 'eee'

    bark() {
        console.log('这是Animal的实例方法')
    }

    static show() {
        console.log('这是Animal的静态方法')
    }
}

const a1 = new Animal('大黄', 3)
// 静态属性不可以被实例对象引用
// console.log(a1.info)
console.log(Animal.info)

a1.bark()
Animal.show()