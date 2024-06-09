function session_join_set()
{ //세션 저장(객체)    
     let f_name = document.querySelector("#firstName").value;
     let l_name = document.querySelector("#lastName").value;
     let b_day = document.querySelector("#birthdayDate").value;
     let gender = document.querySelector("#inlineRadioOptions");
     let email = document.querySelector("#emailAddress").value;
     let p_number = document.querySelector("#phoneNumber").value;
     let class_check = document.querySelector(".select form-control-lg");
     let random = new Date(); // 랜덤 타임스탬프
     
     const newSignUp = new SignUp(f_name, l_name, b_day, gender, email, p_number, class_check, random);
     console.log(newSignUp.fullName); // John Doe
     console.log(newSignUp.contactInfo); // johndoe@email.com 123-456-7890
     
     if (sessionStorage) 
      {
        const objString = JSON.stringify(newSignUp); // 객체 -> JSON 문자열 변환
        let en_text = encrypt_text(objString); // 암호화
        sessionStorage.setItem("Session_Storage_new_user", objString);
        sessionStorage.setItem("Session_Storage_new_user_encryted", en_text);
      } 
      else 
      {
        alert("세션 스토리지 지원 x");
      }  
}

function session_join_get() 
{
      if (sessionStorage) 
      {
         const objString = sessionStorage.getItem("Session_Storage_new_user");
         if (objString) 
         {
            const newSignUp = JSON.parse(objString); // JSON 문자열 -> 객체 변환
            console.log("복호화된 객체 내용:");
            console.log(newSignUp);
         } 
         else 
         {
            console.log("세션에 저장된 객체가 없습니다.");
         }
         } 
         else 
         {
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
    