function search_image() {
    $.ajax({
        async: true,   //비동기 방식의 호출
        url: "https://dapi.kakao.com/v2/search/image",    //서버쪽 프로그램 url
        data: {
            query: $("#movie_name").val() + "포스터",
            sort: "accuracy"
        },
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "KakaoAK e8f74cb59402a322f19648670a309fc6")
        },
        type: "GET",
        timeout: 3000,
        dataType: "json",
        success: function (result) {
            var img_list = result.documents
            var li = $('<li></li>>')
            var img = $('<img>').attr('src',img_list[0].thumbnail_url).addClass('myImage')
            li.append(img)
            $('ul').append(li)
        },
        error: function (error) {
            alert("실패")
        },
    })
}
