// 문서가 준비 되면 안에 있는 람다함수 호출
$(document).ready(function () {
    // browser에 내용이 완전히 출력되면 그 시점에 시행
    // li를 찾아서 각각에 대해 이벤트 처리를 지정
    $('ul > li').on('mouseover',function () {
        $(this).addClass('myStyle')
    })

    $('ul > li').on('mouseleave',function () {
        $(this).removeClass('myStyle')
    })
})
//
// function set_active() {
//     // alert("마우스가 위에 올라갔어요!!")
//     // 현재 이벤트가 발생된 이벤트 소스에 CSS를 적용
//     // 이벤트 소스는 이벤트가 발생된 element => this
//     $(this).addClass('myStle')
// }

function insert_text() {
    $('#myDiv').html('<h1>이것은 소리없는 아우성!!</h1>')
}

function delete_div() {
    // $("#deleteDiv").remove() // 자신을 포함해서 후손들도 삭제
    $("#deleteDiv").empty() // 자신을 제외한 후손들만 삭제
}

function add_list() {
    // 없는 태그 생성
    // <li class='myStyle'>백길동</li>
    $("<li></li>").text("백길동").attr('class','myStyle')
    var my_li = $("<li></li>").text("백길동").addClass('myStyle')
    // 태그를 생성한 다음 원하는 위치에 가져다 씀
    // 1. append() : 맨 마지막 자식으로 붙이기
    // $('ul').append(my_li)
    // 2. prepend() : 맨 앞의 자식으로 붙이기
    // $('ul').prepend(my_li)
    // 3. after() : 바로 다음 형제로 붙이기
    // $('ul > li:nth-child(3)').after(my_li)
    // 4. before() : 바로 이전 형제로 붙이기
    $('ul > li').before(my_li)
}