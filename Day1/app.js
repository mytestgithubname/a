// document tag is html file 가져옴
document.write("<h4>js start</h4>");

// 1. js는 대소문자를 구분함
// 날짜 객체
new Date();
// New date(); <- error

// 2. 코드 한 줄 작성 후 세미콜론
document.write("hi");
document.write("bye");

// 3. 큰따옴표 작은따옴표 겹침 주의
// 앞에 백슬래쉬 붙여주거나 작은따옴표 적기
document.write("선생님이 '필기를 해'라고 말씀하셨다.");
document.write("선생님이 \"필기를 해\"라고 말씀하셨다.");

var age1 = 18; // <- don't use var

// constant : 산수, 수정이 불가능
// 생성과 할당이 필수
const age2 = 18;

// age2 = 23; (error. 재할당 불가능한데 했음)

// Let : 수정 및 재할당 자유로움
let age3 = 18;
age = "20부터 성인";
console.log(age3); // 브라우저의 console 영역에 문자열 출력

// JS에서 사용하는 자료형
// 1. 문자형
let firsNamename = "김";
// 문자열 데이터 HTML 태그를 포함하여 출력 시, 태그를 잘 인식함
let lastNmae = "<h1>규빈</h1>";
// 2. 숫자형 -> Number
let age4 = 18;
let age5 = Number("18");
// 문자열 데이터(숫자만 있는!) -> Number 자료형으로 변환
let age6 = Number("18"); 
// 문자열 데이터 -> Number 자료형으로 변환 -> Not a Number(NoN)으로 변환

// 3. 논리형 -> Boolean (true / false)
let isLogined = true;
isLogined = false;

// let check = 1 < 0;
// let check = Boolean(1 < 0);
let check = Boolean("곧 쉬는 시간"); // truthy, falsy의 개념이 존재한다
// null, 0, underfined, "", NaN, ... -> false 형변환

// 4. 빈 데이터 (null, undefined)
let tmp; // undefined : 변수에 값을 등록하기 전 상태 (의도 x)
let tmp2 = null; // null : 변수에 저장된 데이터를 비울 떄! (의도 o)

// 자료형 -> typeof
// string, number, boolean, undefined -> typeof 출력 시 본인 자료형 그대로
// ! typeof NaN -> Number
// ! typeof null -> object(객체) (null이라는 이름의 자료형xxxxx)





















