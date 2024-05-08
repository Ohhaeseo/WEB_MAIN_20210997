var jb = 'hi'; 
var a = 1;
var b;
b = 5;

if(true){
    let c = 'let 접근'; //블록 스코프를 가지므로 if안에서만 가능
    var c_1 = 'var 접근'; //블록 스코프를 가지지 않으므로 if밖에서도 접근이 가능하다.
}
//console.log(c);// Error?
console.log(c_1);

let d = 5; // 재선언은 불가능하지만 재할당은 가능하다.
//let d = '값 재할당';// Error?
console.log(d);

const e = '상수1 접근'; //블록 스포프를 가지며 한 번 할당된 값은 변경할 수 없음.
//e = 5;
//const f//
console.log(e);