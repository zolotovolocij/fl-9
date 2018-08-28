let mainArr = [2, 5, 8];
let three = 3;

function findType(param) {
    return typeof param;
}

console.log(findType('number'));
console.log(findType(null));

function forEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr);
    }
}

forEach(mainArr, (fn) => console.log(fn));

function map(arr, fn) {
    let newArr = [];
    forEach(arr, function (item, i){
        newArr[i] = fn(item, i, arr);
    });
    return newArr;
}

console.log(map(mainArr, function (el) {
    return el + three;
}));

function filter(arr, fn) {
    let newArr = [];
    forEach(arr, (item, i) => {
        if (fn(item, i, arr)) {
            newArr[newArr.length] = item;
        }
    });
    return newArr;
}

console.log(filter(mainArr, (item) => item > three));

let array = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'age': 39,
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'age': 38,
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'age': 2,
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'age': 17,
        'eyeColor': 'green',
        'name': 'Weiss',
        'favoriteFruit': 'banana'
    }
];

function getAdultAppleLovers(data) {
    let filterObj = filter(data, function (el) {
        return el.favoriteFruit === 'apple' && el.age >= 18;
    });
    let findName = map(filterObj, function (item) {
        return item.name;
    });
    return findName;
}

console.log(getAdultAppleLovers(array));

function keys(obj) {
    let newArr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newArr[newArr.length] = key;
        }
    }
    return newArr;
}

console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));


function values(obj) {
    let newArr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newArr[newArr.length] = obj[key];
        }
    }
    return newArr;
}

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));

function showFormattedDate(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day = date.getDate();
    let monthId = date.getMonth();
    let year = date.getFullYear();

    return `It is ${day} of ${months[monthId]}, ${year}`;
}

console.log(showFormattedDate(new Date('2018-08-27T01:10:00')));