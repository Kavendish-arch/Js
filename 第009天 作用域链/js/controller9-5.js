// 类数组
// 1. 有下标，有length，有push和splice，就是一个类数组
// 2. 既可以当数组用，也可以当对象用。
// 3. DOM里面的数组都是类数组。
var arr = [1,2,3];

var obj = {
	'0': 1,
	'1': 2,
	'2': 3,
	'length': 3,
	'push': Array.prototype.push,
    // splice 数组中截一段
	'splice': Array.prototype.splice
};
//
//arr.push(4);
//obj.push(4);

//var obj = {
//	'2': 'a',
//	'3': 'b',
//	'length': 2,
//	'push': Array.prototype.push,
//	'splice': Array.prototype.splice
//}
//
//obj.push('c');
////obj.push = function(x){
////	obj[obj.length] = x;
////	obj.length++;
////}
//
//obj.push('d');
//
//console.log(obj);

function Answers(name){
    this.name = name
}
var obj  = {
    'name':['h','g']
}

var s = new Answers(['h','g'])

var inData = new Answers([{"question":"你是谁","answer":"cc"}, {"question":"你是谁","answer":"cc"}])

// var list = {
//     name:[
//         {question:"你是谁", answer:"cc"},
//         {question:"我是谁", answer:"cc"}
//     ]
// }

    var list = new Answers()
        list[0] = {"roleId":2,"roleName":"你好","description":"hhh"};