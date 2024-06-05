    function addJavascript(jsname) 
        { // 자바스크립트 외부 연동
            var th = document.getElementsByTagName('head')[0];
            var s = document.createElement('script');
            s.setAttribute('type','text/javascript');
            s.setAttribute('src',jsname);
            th.appendChild(s);
        }
        addJavascript('/js/security.js'); // 암복호화 함수
        addJavascript('/js/session.js'); // 세션 함수
        addJavascript('/js/cookie.js'); // 쿠키 함수

    
    const check_xss = (input) => {
        // DOMPurify 라이브러리 로드 (CDN 사용)
        const DOMPurify = window.DOMPurify;
        // 입력 값을 DOMPurify로 sanitize
        const sanitizedInput = DOMPurify.sanitize(input);
        // Sanitized된 값과 원본 입력 값 비교
        if (sanitizedInput !== input) 
        {
            // XSS 공격 가능성 발견 시 에러 처리
            alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
            return false;
        }
        // Sanitized된 값 반환
            return sanitizedInput;
        };
    
        const check_input = () => {
        const loginForm = document.getElementById('login_form');
        const loginBtn = document.getElementById('login_btn');
        const emailInput = document.getElementById('typeEmailX');
        const passwordInput = document.getElementById('typePasswordX');
        const idsave_check = document.getElementById('idSaveCheck');
    
        const c = '아이디, 패스워드를 체크합니다';
        alert(c);
    
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
    
        if (emailValue.length < 10 || emailValue.length > 15) { // 아이디 길이 제한
            alert('아이디는 10글자 이상, 15글자 이하로 입력해주세요.');
            return false;
        }
    
        if (passwordValue.length < 12) { // 비밀번호 길이 제한
            alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
            return false;
        }
    
        // 패턴 검사
        const pattern = /(.)\1\1/;
        if (pattern.test(emailValue) || pattern.test(passwordValue)) {
            alert('3글자 이상 반복되는 입력은 허용되지 않습니다.');
            return false;
        }
    
        /*const consecutiveNumbersPattern = /\d{2,}/;
        if (consecutiveNumbersPattern.test(passwordValue)) {
            alert('연속된 숫자 2개 이상 반복 입력은 허용되지 않습니다.');
            return false;
        }*/
    
        const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) !== null;
        if (!hasSpecialChar) {
        alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
        return false;
        }
    
        const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
        const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
    
        if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
        return false;
        }
    
        const sanitizedPassword = check_xss(passwordValue); // check_xss 함수로 비밀번호 Sanitize
        const sanitizedEmail = check_xss(emailValue); // check_xss 함수로 이메일 Sanitize
    
        if (!sanitizedEmail || !sanitizedPassword) {
        // Sanitize된 비밀번호 사용
        return false;
        }
    
        console.log('이메일:', emailValue);
        console.log('비밀번호:', passwordValue);
    
        if(idsave_check.checked == true) { // 아이디 체크 o
            alert("쿠키를 저장합니다.", emailValue);
            setCookie("id", emailValue, 1); // 1일 저장
            alert("쿠키 값 :" + emailValue);
            }
            else
            { // 아이디 체크 x
            setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
            }

        session_set();
        loginForm.submit();
        };

        
    
        
    
        function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
            const emailInput = document.getElementById('typeEmailX');
            const idsave_check = document.getElementById('idSaveCheck');
            let get_id = getCookie("id");
            if(get_id) 
            {
                emailInput.value = get_id;
                idsave_check.checked = true;
                session_check();
            }
                
        }

        function session_set()
{       //세션 저장(객체)    
        let id = document.querySelector("#floatingInput");
        let password = document.querySelector("#floatingPassword");
        let random = new Date(); // 랜덤 타임스탬프
    
        const obj = 
        { // 객체 선언
            id : id.value,
            otp : random
        }
    
        if (sessionStorage) 
        {
            const objString = JSON.stringify(obj); // 객체 -> JSON 문자열 변환
            let en_text = encrypt_text(objString); // 암호화
            sessionStorage.setItem("Session_Storage_object", objString);
            sessionStorage.setItem("Session_Storage_encrypted", en_text);
        } 
        else 
        {
            alert("세션 스토리지 지원 x");
        }   
}

    function session_get() 
    { //세션 읽기
        if (sessionStorage) 
        {
            return sessionStorage.getItem("Session_Storage_encrypted");
        } 
        else 
        {
            alert("세션 스토리지 지원 x");
        }
}

    

    function session_check() 
    { //세션 검사
        if (sessionStorage.getItem("Session_Storage_object"))
        {
            alert("이미 로그인 되었습니다.");
            location.href='../login/index_login.html'; // 로그인된 페이지로 이동
        }
}

    
        


        /*function session_set() 
        { //세션 저장
            let session_id = document.querySelector("#typeEmailX"); // DOM 트리에서 ID 검색
            let session_pass = document.querySelector("#typePasswordX"); // DOM 트리에서 pass 검색
            if (sessionStorage) 
            {
                let en_text = encrypt_text(session_pass.value);
                sessionStorage.setItem("Session_Storage_id", session_id.value);
                sessionStorage.setItem("Session_Storage_pass", en_text);
            } 
            else 
            {
                alert("로컬 스토리지 지원 x");
            }
        }*/
            

        


        /*function logout()
        {
            session_del();
            location.href='../LOGO2.html';
        }*/
                

        document.getElementById("login_btn").addEventListener('click', check_input);

        

        
        
            
            


            

        

                
            
    

    
/*const check_xss = (input) => {
    // DOMPurify 라이브러리 로드 (CDN 사용)
    const DOMPurify = window.DOMPurify;
    // 입력 값을 DOMPurify로 sanitize
    const sanitizedInput = DOMPurify.sanitize(input);
    // Sanitized된 값과 원본 입력 값 비교
    if (sanitizedInput !== input) {
    // XSS 공격 가능성 발견 시 에러 처리
    alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
    return false;
    }
    // Sanitized된 값 반환
    return sanitizedInput;
    };
    

const check_input = () => {
    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    const idsave_check = document.getElementById('idSaveCheck');

    const c = '아이디, 패스워드를 체크합니다';
    alert(c);

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (emailValue === '') {
    alert('이메일을 입력하세요.');
    return false;
    }

    if (passwordValue === '') {
    alert('비밀번호를 입력하세요.');
    return false;
    }

    if (emailValue.length < 5) {
        alert('아이디는 최소 5글자 이상 입력해야 합니다.');
        return false;
        }

        if (passwordValue.length < 12) {
        alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
        return false;
        }

        const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) !== null;
        if (!hasSpecialChar) {
        alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
        return false;
        }

        const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
        const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;

        if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
        return false;
        }

    const sanitizedPassword =
check_xss(passwordValue);
    // check_xss 함수로 비밀번호 Sanitize
    const sanitizedEmail = check_xss(emailValue);
    // check_xss 함수로 비밀번호 Sanitize

    if (!sanitizedEmail) {
    // Sanitize된 비밀번호 사용
    return false;
    }

    if (!sanitizedPassword) {
    // Sanitize된 비밀번호 사용
    return false;
    }


    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);

    if(idsave_check.checked == true) { // 아이디 체크 o
        alert("쿠키를 저장합니다.", emailValue);
        setCookie("id", emailValue, 1); // 1일 저장
        alert("쿠키 값 :" + emailValue);
        }
        else
        { // 아이디 체크 x
        setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
        }

    loginForm.submit();
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
        
            if (cookie_name[0] == "id") {
                return cookie_name[1];
            }
            }
        }
        return ;
        }

        function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
            const emailInput = document.getElementById('typeEmailX');
            const idsave_check = document.getElementById('idSaveCheck');
            let get_id = getCookie("id");
            if(get_id) {
            emailInput.value = get_id;
            idsave_check.checked = true;
            }
            }

    document.getElementById("login_btn").addEventListener('click', check_input);
    */
