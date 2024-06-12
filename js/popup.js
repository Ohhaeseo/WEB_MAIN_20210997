function pop_up() {
    var cookieCheck = getCookie('popupYN');
        if (cookieCheck != "N"){
        window.open("../popup/popup.html", "팝업테스트", "width = 400, height = 300, top = 10, left = 10");
        }
     
} 
function show_clock() {
    let currentDate = new Date();
    let divClock = document.getElementById('divClock');
    let msg = "현재 시간 : ";
    if(currentDate.getHours()>12) {
        msg +="오후";
        msg += currentDate.getHours()-12+"시";
    }
    else {
        msg += "오전";
        msg += currentDate.getHours()+"시";
    }

    msg += currentDate.getMinutes()+"분";
    msg += currentDate.getSeconds()+"초";
    divClock.innerText = msg;

    if(currentDate.getMinutes()>58) {
        divClock.style.color = "red";
    }
    setTimeout(show_clock, 1000);
}

/*function over(obj) {
    obj.src="image/LOGO2.png";
}*/

function out(obj) {
    obj.src="image/LOGO.PNG";
}

const over = (obj) => {
    obj.src = "image/LOGO2.png";
};

function setCookie(name, value, expiredays) {
    var date = new Date(); // 현재 날짜 및 시간을 저장할 Date 객체 생성
    date.setDate(date.getDate() + expiredays); // 만료일을 현재 날짜에 `expiredays`만큼 더한 날짜로 설정
    // 쿠키를 작성. `escape` 함수를 사용해 `name`과 `value`를 인코딩하고, 만료일과 기타 속성을 추가
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + 
    "; path=/; SameSite=None; Secure";
}

function getCookie(name) {
    var cookie = document.cookie; // 현재 문서의 모든 쿠키를 문자열로 가져옴
    console.log("쿠키를 요청합니다."); // 디버깅을 위해 콘솔에 메시지 출력
    if (cookie != "") {
        var cookie_array = cookie.split("; "); // 쿠키를 분리해 배열로 저장

        for (var index in cookie_array) {
            var cookie_name = cookie_array[index].split("="); // 각 쿠키를 `=` 기준으로 분리해 이름과 값을 가져옴

            // 요청한 쿠키의 이름이 "popupYN"인 경우 해당 값을 반환
            if (cookie_name[0] == "popupYN") {
                return cookie_name[1];
            }
        }
    }
    return; // 요청한 쿠키가 없을 경우 `undefined` 반환
}

function closePopup() {
    // 팝업 체크박스가 선택된 경우
    if (document.getElementById('check_popup').checked) 
    {
        setCookie("popupYN", "N", 1); // "popupYN" 쿠키를 "N"으로 설정해 1일 동안 유지
        console.log("쿠키를 설정합니다."); // 디버깅을 위해 콘솔에 메시지 출력
        self.close(); // 현재 창을 닫음
    }
}
        

