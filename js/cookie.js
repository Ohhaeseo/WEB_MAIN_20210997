function setCookie(name, value, expiredays) {
    // 새로운 날짜 객체를 생성합니다.
    var date = new Date();
    
    // 만료 날짜를 현재 날짜에 'expiredays'만큼 더한 값으로 설정합니다.
    date.setDate(date.getDate() + expiredays);
    
    // 쿠키 값을 문자열로 설정합니다.
    // escape() 함수를 사용하여 이름과 값을 인코딩합니다.
    // 만료 날짜를 UTC 문자열로 변환하여 쿠키에 추가합니다.
    // path="/"로 설정하여 모든 경로에서 쿠키를 접근할 수 있도록 하고, 
    // SameSite=None; Secure 설정을 통해 크로스 사이트 요청에도 쿠키를 사용할 수 있도록 합니다.
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + 
    "; path=/; SameSite=None; Secure";
}

function getCookie(name) {
    // 브라우저의 모든 쿠키를 불러옵니다.
    var cookie = document.cookie;
    
    // 쿠키를 가져오는 메시지를 콘솔에 출력합니다.
    console.log("쿠키를 요청합니다.");
    
    // 쿠키가 존재하는 경우에만 아래의 로직을 실행합니다.
    if (cookie != "") {
        // 쿠키 문자열을 각 쿠키로 분리하여 배열로 만듭니다.
        var cookie_array = cookie.split("; ");
        
        // 각 쿠키를 순회하며 원하는 이름의 쿠키를 찾습니다.
        for (var index in cookie_array) {
            // 현재 순회 중인 쿠키를 이름과 값으로 분리합니다.
            var cookie_name = cookie_array[index].split("=");
            
            // 이름이 원하는 이름과 일치하는 경우 해당 쿠키의 값을 반환합니다.
            if (cookie_name[0] == "id") {
                return cookie_name[1];
            }
        }
    }
    
    // 원하는 이름의 쿠키가 없는 경우 undefined를 반환합니다.
    return;
}




/*function setCookie(name, value, expiredays) {
    var date = new Date();
    date.setDate(date.getDate() + expiredays);
    document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + 
    "; path=/" + "; SameSite=None; Secure";
}


function getCookie(name) {
    var cookie = document.cookie;
    console.log("쿠키를 요청합니다.");
    if (cookie != "") {
        var cookie_array = cookie.split("; ");

        for ( var index in cookie_array) {
        var cookie_name = cookie_array[index].split("=");
    
        if (cookie_name[0] == "id") {
            return cookie_name[1];
        }
        }
    }
    return ;
}*/