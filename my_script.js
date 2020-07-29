// JavaScript를 작성!
// JavaScript에 대해서 알아보자!
// Python과 비교해서 알아보자~!~!

// JavaScript : web client에서 실행되는 언어
//              요즘에는 서버용 개발언어로 사용되기도 함

// 변수 생성
// Python은 그냥 변수를 선언
// JavaScript는 var로 선언

var my_var = 100 // JavaScript
var tmp = 3.14 // number
var tmp1 = "Hello" // string
var tmp2 = true // boolean (Python에서는 True)
var tmp3 = [1,2,3,4,5] // array

// 객체 표현

var tmp4 = { name : "홍길동", age : 25}
console.log(tmp4.name)

// 함수에 대해서 알아보자
// 함수는 2가지가 존재
// 1. 선언적 함수 (Python의 일반적인 함수 정의하는 방법)
//    선언적 함수는 함수 이름이 존재
function my_add(x,y) {
    return x + y
}

// def my_add(x,y):
//      return x + y

// 2. 익명함수(함수 이름이 없음) => 람다함수 (Python의 lambda와 다름)
//    변수에 저장해서 사용. 일급함수의 특징을 가짐
//    함수를 다른 함수의 인자로, 함수의 리턴값으로 함수를 이용 가능
var my_add = function (x,y) {
    return x + y
}