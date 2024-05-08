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
    
        if (cookie_name[0] == "popupYN") {
            return cookie_name[1];
        }
        }
    }
    return ;
    }


    function closePopup() {
        if (document.getElementById('check_popup').value) {
        setCookie("popupYN", "N", 1);
        console.log("쿠키를 설정합니다.");
        self.close();
        }
        }
        
        

