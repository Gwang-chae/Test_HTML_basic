
// jQuery CDN을 이용했기 때문에 jQuery code를 사용할 수 있음

// button을 클릭하면 아래의 함수 호출 필요
function my_func() {
    // 0. jQuery를 공부할 때 가장 먼저 배워야 하는 것 => selector
    // 1. 전체 선택자(universal selector)
    // $('*').css('color','red')
    // 2. 태그 선택자(tag selector)
    // $('li').remove()
    // 3. 아이디 선택자(ID selector)
    // $('#haha').text("제주")         //text method는 인자가 없으면 값을 읽어오라는 의미
    //                                //인자가 있으면 값을 변경하라는 의미
    // 4. 클래스 선택자(class selector)
    // $(".region").css("background-color","yellow")
    // 5. 구조 선택자(자식 선택자, 후손 선택자)
    // $('ol > *').css('color','steelblue') // '>'은 자식선택자
    // $('div li').css('color','pink')      // 공백은 후손선택자
    // 6. 형제 선택자
    // $('#haha + li').remove()             // '+'는 바로 뒤의 형제 하나
    // $('#hong ~ li').remove()             // '~'는 모든 형제
    // 7. 속성 성택자
    // $('[id]').css('color','orange')
}
