function call_ajax() {

    if(event.keyCode==13){
        $.ajax({
            async : true,   //비동기 방식의 호출
            url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?",    //서버쪽 프로그램 url
            data : {
                key :'5f30fbb041fda8aac682046331a410ea',
                targetDt : $('input[type=date]').val().split("-").join("")
            },
            type : "GET",
            timeout : 5000,
            dataType : "json",      // 결과 json을 JavaScript 객체로 변환
            success :  function (result) {          // result = 결과 json을 JavaScript 객체로 변환한 결과값
                $('tbody').empty()

                $.each(result.boxOfficeResult.dailyBoxOfficeList,function (idx,item) {
                    var tr = $("<tr></tr>")
                    var rankTd = $("<td id='index'></td>").text(item.rnum)
                    var imgTd = $("<td></td>")
                    var movie_name = item.movieNm
                    var findImg = function search_image() {
                        $.ajax({
                            async: true,   //비동기 방식의 호출
                            url: "https://dapi.kakao.com/v2/search/image",    //서버쪽 프로그램 url
                            data: {
                                query: "영화 "+ movie_name + " 공식 포스터",
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
                                var img = $('<img>').attr('src',img_list[0].thumbnail_url).addClass('myImage')
                                imgTd.append(img)
                            },
                            error: function (error) {
                                alert("실패")
                            },
                        })
                    }
                    findImg()

                    var movieNmTd = $("<td></td>").text(item.movieNm)
                    var salesAccTd = $("<td></td>").text(item.salesAcc)
                    var audiAccTd = $("<td></td>").text(item.audiAcc)
                    tr.append(rankTd)
                    tr.append(imgTd)
                    tr.append(movieNmTd)
                    tr.append(salesAccTd)
                    tr.append(audiAccTd)

                    var detailTd = $('<td></td>')
                    var detail = $('<input>').attr("type","button").attr("value","영화상세정보")



                    detail.on("click",function () {
                        // 클릭 버튼에 대한 영화 코드를 찾아서
                        // 상세정보를 alert 출력

                        // 현재 클릭된 버튼에 대한 책 정보를 찾아서 화면에서 삭제
                        // this : 현재 이벤트가 발생된 객체를 지칭!!
                        var movieCd = item.movieCd
                        call_detail(movieCd)

                    })
                    detailTd.append(detail)
                    tr.append(detailTd)
                    $('tbody').append(tr)

                })
            },
            error : function (error) {
                alert("서버호출 실패!")
            }
        })
    }
}

function call_detail(code) {
    $.ajax({
        async : true,   //비동기 방식의 호출
        url : "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?",    //서버쪽 프로그램 url
        data : {
            key :'5f30fbb041fda8aac682046331a410ea',
            movieCd : code
        },
        type : "GET",
        timeout : 5000,
        dataType : "json",      // 결과 json을 JavaScript 객체로 변환

        success : function (result) {
            var movieNm = result.movieInfoResult.movieInfo.movieNm
            var prdtYear = result.movieInfoResult.movieInfo.prdtYear
            var genresList = result.movieInfoResult.movieInfo.genres
            var directorsList = result.movieInfoResult.movieInfo.directors
            var actorsList = result.movieInfoResult.movieInfo.actors

            var genres = []
            var directors = []
            var actors = []
            $.each(genresList, function (index,item) {
                genres.push(item.genreNm)
            })
            $.each(directorsList, function (index,item) {
                directors.push(item.peopleNm)
            })
            $.each(actorsList, function (index,item) {
                actors.push(item.peopleNm)
            })
            alert("영화제목 : "+movieNm+'\n'+"제작연도 : "+prdtYear+'\n'+"장르 : "+genres+'\n'+
                "감독명 : "+directors+'\n'+"배우명 : " +actors)
        }
    })

}