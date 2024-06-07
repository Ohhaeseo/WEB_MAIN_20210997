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
        const logoutBtn = document.getElementById('logout_btn');
        const emailInput = document.getElementById('typeEmailX');
        const passwordInput = document.getElementById('typePasswordX');
        const idsave_check = document.getElementById('idSaveCheck');
    
        const c = '아이디, 패스워드를 체크합니다';
        alert(c);
    
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();
    
        // 아이디 길이 제한
        if (emailValue.length < 10 || emailValue.length > 15) 
        { 
            alert('아이디는 10글자 이상, 15글자 이하로 입력해주세요.');
            return false;
        }
    
        // 비밀번호 길이 제한
        if (passwordValue.length < 12) 
        { 
            alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
            return false;
        }
    
        // 패턴 검사
        const pattern = /(.)\1\1/;
        if (pattern.test(emailValue) || pattern.test(passwordValue)) 
        {
            alert('3글자 이상 반복되는 입력은 허용되지 않습니다.');
            return false;
        }
    
        /*const consecutiveNumbersPattern = /\d{2,}/;
        if (consecutiveNumbersPattern.test(passwordValue)) {
            alert('연속된 숫자 2개 이상 반복 입력은 허용되지 않습니다.');
            return false;
        }*/
    
        const hasSpecialChar = passwordValue.match(/[!,@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/) !== null;
        if (!hasSpecialChar) 
        {
            alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
            return false;
        }
    
        const hasUpperCase = passwordValue.match(/[A-Z]+/) !== null;
        const hasLowerCase = passwordValue.match(/[a-z]+/) !== null;
    
        if (!hasUpperCase || !hasLowerCase) 
        {
            alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
            return false;
        }
    
        const sanitizedPassword = check_xss(passwordValue); // check_xss 함수로 비밀번호 Sanitize
        const sanitizedEmail = check_xss(emailValue); // check_xss 함수로 이메일 Sanitize
    
        if (!sanitizedEmail || !sanitizedPassword) 
        {
            // Sanitize된 비밀번호 사용
            return false;
        }
    
        console.log('이메일:', emailValue);
        console.log('비밀번호:', passwordValue);
    
        if(idsave_check.checked == true) 
        { // 아이디 체크 o
            alert("쿠키를 저장합니다.", emailValue);
            setCookie("id", emailValue, 1); // 1일 저장
            alert("쿠키 값 :" + emailValue);
        }
        else
        { // 아이디 체크 x
            setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
        }

            //session_set();
            loginForm.submit();
        };

        
    
        
    
        // 로그인 폼에 쿠키에서 가져온 아이디 입력
        function init()
        { 
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

        // 로그인 횟수 증가 함수
        function login_count() 
        {
            let login_cnt = parseInt(getCookie('login_cnt')) || 0;
            login_cnt += 1;
            setCookie('login_cnt', login_cnt, 7); // 쿠키를 7일간 유지
            console.log(`Login count: ${login_cnt}`);
        }

        // 로그아웃 횟수 증가 함수
       /* function logout_count() 
        {
            let logout_cnt = parseInt(getCookie('logout_cnt')) || 0;
            logout_cnt += 1;
            setCookie('logout_cnt', logout_cnt, 7); // 쿠키를 7일간 유지
            console.log(`Logout count: ${logout_cnt}`);
        }*/

        /*function logout()
        {
            session_del();
            location.href='../LOGO2.html';
        }*/
                

        document.getElementById("login_btn").addEventListener('click', check_input);

        // 로그인 버튼 클릭 시 호출
        document.getElementById('login_btn').addEventListener('click', login_count);

        // 로그아웃 버튼 클릭 시 호출
        //document.getElementById('logout_btn').addEventListener('click', logout_count);



        




        

        
        
            
            


            

        

                
            
    

