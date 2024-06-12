function session_join_set()
{ // 세션 저장(객체)
    let f_name = document.querySelector("#firstName").value; // "firstName" 입력 필드의 값을 가져옴
    let l_name = document.querySelector("#lastName").value; // "lastName" 입력 필드의 값을 가져옴
    let b_day = document.querySelector("#birthdayDate").value; // "birthdayDate" 입력 필드의 값을 가져옴
    let gender = document.querySelector("#inlineRadioOptions"); // "inlineRadioOptions" 라디오 버튼을 가져옴
    let email = document.querySelector("#emailAddress").value; // "emailAddress" 입력 필드의 값을 가져옴
    let p_number = document.querySelector("#phoneNumber").value; // "phoneNumber" 입력 필드의 값을 가져옴
    let class_check = document.querySelector(".select form-control-lg"); // "class_check" 필드를 가져옴
    let random = new Date(); // 랜덤 타임스탬프 생성 (현재 시간을 사용)

    // `SignUp` 객체 생성
    const newSignUp = new SignUp(f_name, l_name, b_day, gender, email, p_number, class_check, random);
    console.log(newSignUp.fullName); // John Doe
    console.log(newSignUp.contactInfo); // johndoe@email.com 123-456-7890

    // 세션 스토리지 지원 여부 확인
    if (sessionStorage) 
    {
        // 객체를 JSON 문자열로 변환b
        const objString = JSON.stringify(newSignUp); 
        // 객체를 암호화
        let en_text = encrypt_text(objString);
        // 세션 스토리지에 원본과  암호화된 데이터를 저장
        sessionStorage.setItem("Session_Storage_new_user", objString);
        sessionStorage.setItem("Session_Storage_new_user_encryted", en_text);
    } 
    else 
    {
        // 세션 스토리지 지원 안 함
        alert("세션 스토리지 지원 x");
    }  
}

function session_join_get() 
{
    // 세션 스토리지 지원 여부 확인
    if (sessionStorage) 
    {
        // 세션 스토리지에서 저장된 원본 객체를 가져옴
        const objString = sessionStorage.getItem("Session_Storage_new_user");
        if (objString) 
        {
            // 문자열을 다시 객체로 변환
            const newSignUp = JSON.parse(objString);
            console.log("복호화된 객체 내용:");
            console.log(newSignUp);
        } 
        else 
        {
            // 세션에 저장된 객체가 없을 때
            console.log("세션에 저장된 객체가 없습니다.");
        }
    } 
    else 
    {
        // 세션 스토리지 지원 안 함
        console.log("세션 스토리지 지원 x");
    }
}

         /*function session_set()
         {//세션 저장(객체)    
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
         }*/

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

         if (sessionStorage.getItem("Session_Storage_new_user"))
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
    