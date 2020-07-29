function print_text() {
    // 버튼을 눌렀을 때 실행할 코드를 작성
    // alert("코드가 작동하는지 확인")
    console.log($('#apple').text())
    console.log($('#pineapple').text())
    console.log($('ul > li.myList').text())
    console.log($('ul > li[class]').text())
    console.log($('input[type=text]').val())
    console.log($('ol > li.myList:first').text())

    console.log($('ol > li.myList:nth-child(1)').text())
    console.log($('ol > li.myList:first + li').text())
    console.log($('ol > li.myList:last').text())

    console.log($('input[type=text]').attr('size', 10))
}

function my_func(){
    // alert('과일이  바뀌었습니다')
    // select box에서 과일이 바뀌면 실행
    // 1. 선택한 과일이 어떤 과일인지 파악
    var fruit = $('select > option:selected').text()
    var my_list = $('ul > li')
    my_list.each(function (idx,item) {
        //console.log($(item).text())
        if ($(item).text() == fruit) {
            $(item).css('color','red')
        }else{
            $(item).css('color','black')
        }
    })
}