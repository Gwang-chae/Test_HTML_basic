function call_ajax() {
    // 입력 텍스트 상자에서 키보드로 입력이 들어왔을 때 호출
    // 모든 키에 대해서 처리하는게 아니라 enter key일 경우에만 처리
    if(event.keyCode==13){
        // alert("엔터가 입력되었습니다!")
        // 만약 입력된 key가 enter key이면 이 부분을 수행
        // 서버쪽 프로그램을 호출해서 결과를 받아옴
        // jQuery를 이용해서 AJAX 처리!!
        // ajax의 인자로 JavaScript 객체를 넣어줌
        // JavaScript 객체는 => {key : value}
        // data : 서버프로그램에게 넘겨줄 데이터들...
        $.ajax({
            async : true,   //비동기 방식의 호출
            url : "http://192.168.0.200:8080/bookSearch/search",    //서버쪽 프로그램 url
            data : {
                keyword : $('input[type=text]').val()
            },
            type : "GET",
            timeout : 3000,
            dataType : "json",      // 결과 json을 JavaScript 객체로 변환
            success :  function (result) {          // result = 결과 json을 JavaScript 객체로 변환한 결과값
                $('tbody').empty()
                    // <tr>
                     //    <td>Lorem</td>
                     //    <td>ipsum</td>
                     //    <td>dolor</td>
                     //    <td>sit</td>
                     //    <td>삭제</td>
                     // </tr>
                // $.each(result,function (idx,item) {
                //     var tr = $('<tr></tr>')
                //     var imgTd = $('<td></td>')
                //     var img = $('<img />').attr("src",src = item.img)
                //     imgTd.append(img)
                //     tr.append(imgTd)
                //     var titleTd = $('<td></td>').text(item.title)
                //     var authorTd = $('<td></td>').text(item.author)
                //     var priceTd = $('<td></td>').text(item.price)
                //     tr.append(titleTd)
                //     tr.append(authorTd)
                //     tr.append(priceTd)
                //     var delTd = $('<td></td>')
                //     var del = $('<input>').attr("type","button").attr("value","삭제")
                //     delTd.append(del)
                //     tr.append((delTd))
                //     $('tbody').append(tr)
                //
                // })

                for (i = 0; i < result.length; i++){
                    var tr = $('<tr></tr>')
                    var imgTd = $('<td></td>')
                    var img = $('<img />').attr("src",src = result[i].img)
                    imgTd.append(img)
                    var titleTd = $('<td></td>').text(result[i].title)
                    var authorTd = $('<td></td>').text(result[i].author)
                    var priceTd = $('<td></td>').text(result[i].price)
                    var delTd = $('<td></td>')
                    var del = $('<input>').attr("type","button").attr("value","삭제")

                    del.on("click",function () {
                        // 현재 클릭된 버튼에 대한 책 정보를 찾아서 화면에서 삭제
                        // this : 현재 이벤트가 발생된 객체를 지칭!!
                        $(this).parent().parent().remove()
                    })
                    delTd.append(del)

                    tr.append(imgTd)
                    tr.append(titleTd)
                    tr.append(authorTd)
                    tr.append(priceTd)
                    tr.append(delTd)

                    $('tbody').append(tr)
                }
            },
            error : function (error) {
                    alert("서버호출 실패!")
            }
        })
    }
}
