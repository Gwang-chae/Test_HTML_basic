
function start_clock() {
    //alert("버튼이 눌렸어요!")
    // 시계를 출력해야 함
    // 현재 시간을 구하고
    // 현재 날짜의 시분초를 구함
    // 이 시간을 HTML, 특정 영역에 출력!!
    // 위의 작업을 1초마다 반복
    // JavaScript는 특정시간마다 특정함수를 반복해주는 함수를 제공

    setInterval(function () {
        var today = new Date() // 날짜 객체 생성
        // console.log(today.toLocaleString())
        // HTML의 특정 위치를 지정
        var my_div = document.getElementById("my_div")
        my_div.innerText = today.toLocaleString()
    }, 1000)
}