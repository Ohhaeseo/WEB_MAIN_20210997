let number = 5; //블록 스코프를 가짐
let str = '문자열 입력'; //""e도 가능
let prime = 1.5123;
let is_ok = true; //참
let is_not = false; //거짓
let undefi; //변수, 이름만, 초기화 x
let empty = null; //비어있음

console.log(undefi, empty); //여러개 출력

const sym1 = Symbol('test'); //심볼함수로 값 생성
let symbolVar1 = sym1; //변수 초기화

const airline = ["비행기", 320, "airbus", ["V1", true]]; //다양한 데이터 배열

const obj1 = {}; //빈 객체 생성

const obj2 = {
    name: "John Doe",
    age: 30,
    isMale: true,
}; //속성을 추가하여 객체 생성

console.log(symbolVar1.toString()); //문자열 변환 출력
console.log(obj1, obj2, airline); //여러개 출력

const users = new Map();
users.set("user1", {
    id: 1, password: "password123",
});
users.set("user2", {
    id: 2, password: "password456",
});

for(const [username, user] of users){
    console.log('사용자 이름: ${username}', 'ID: $(user.id)');
    console.log('비밀번호: ${user.password}');
}

const usernames = new Set();

usernames.add("user1");
usernames.add("user2");

for (const username of usernames){
    console.log('사용자 이름: ${username}');
}