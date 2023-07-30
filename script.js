let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let sp = arr.splice(2, 3);
// let sp = arr.splice(2,1);
// console.log(sp);
// console.log(arr);

// 23. decode or encode url...........................
let url = 'media/srisir/?name=srikant&pesa=developer'
let u1 = encodeURI(url);
let u2 = decodeURI(u1);
// console.log(u2);
// console.log(u1);
// result : in console not show any difference b/w url and u1

// 24. memoization ...........................................
const memeo = () => {
    let cache = {};
    return (x) => {
        if (x in cache) {
            console.log('fetch deta from cache');
            return cache[x];
        } else {
            console.log('calculate reult');
            let res = x + 20;
            cache[x] = res;
            return res;
        }
    }
}
// const addition = memeo();
// console.log(addition(20)); // 1st call addition() to store data in cache
// console.log(addition(20)); // 2nd call addition() to show data in cache 

// 26 hoisting ..................
// console.log(message); // undefined
var message = 'this variable hoisted';
// above line same as.....
var message;
// console.log(message);
message = 'this variable hoisted';

//function me v hoist hota h
me('goode morning');
function me(name) {
    // console.log(name);
}

// class in es 6..............................................
class Bike {
    constructor(color, model) {
        this.color = color;
        this.model = model;
    }
    getDetails() {
        return this.model + ' bike has ' + this.color + ' color '
    }
}
const x = new Bike('red', 420).getDetails();
// console.log(x);



