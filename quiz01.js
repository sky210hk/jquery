//jquery코드
//근데... js링크가 먼저 일어남
$(document).ready(function() {

    $(".dark").click(function() {
        
        if($(".dark").hasClass("dark")) {

            $(".body").css({
                backgroundColor: "black",
                color : "white"
            });
            $(".dark").html("밝게보기", "어둡게보기");
            $(".dark").addClass("white");
            $(".dark").removeClass("dark");
      
        } else if ($(".white").hasClass("white")) {

            $(".body").css({
                backgroundColor: "white",
                color : "black"
            });
            $(".white").html("어둡게보기", "밝게보기");
            $(".white").addClass("dark");
            $(".white").removeClass("white");
        }
    });

    $(".name1").click(function() {

        if( $(".name1").hasClass("name1")) {

            $(".innerText").html("");
            $(".innerText").html("<p>홍길자<p><p>20세</p><p>능력단위</p><p>Java, Oracle, JSP, CSS, Javascript</p>");

            $(".name1").html("내용보기", "이름보기");
            $(".name1").addClass("name2");
            $(".name1").removeClass("name1");
        } else if( $(".name2").hasClass("name2")) {

            $(".innerText").html("")
            $(".innerText").html("<p>자바스크립트는 객체 기반의 스크립트 프로그래밍 언어이다. 이 언어는 웹 브라우저 내에서 주로 사용하며, 다른 응용 프로그램의 내장 객체에도 접근할 수 있는 기능을 가지고 있다. 또한 Node.js와 같은 런타임 환경과 같이 서버 프로그래밍에도 사용되고 있다.</p>");
            
            $(".name2").html("이름보기", "내용보기");
            $(".name2").addClass("name1");
            $(".name2").removeClass("name2");
        }
    });


});
