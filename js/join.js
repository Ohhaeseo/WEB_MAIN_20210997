/*function join(){ // 회원가입
   let form = document.querySelector("#form_main");
   let f_name = document.querySelector("#firstName");
   let l_name = document.querySelector("#lastName");
   let b_day = document.querySelector("#birthdayDate");
   let gender = document.querySelector("#inlineRadioOptions");
   let email = document.querySelector("#emailAddress");
   let p_number = document.querySelector("#phoneNumber");
   let class_check = document.querySelector(".select form-control-lg");
   
   form.action = "../login/index_join.html";
   form.method = "get";
   
   if(f_name.value.length === 0 || l_name.value.length === 0 || b_day.value.length === 0 || email.value.length === 0 || p_number.value.length === 0){
    alert("회원가입 폼에 필수 정보를 입력해주세요.(성별, 분반 제외)");
   }
   else
   {
      session_join_set(); // 회원가입 용 세션 생성
      session_join_get()
      form.submit();
   }
}*/

function join()
{ // 회원가입
  // 회원가입 폼 요소를 선택
  let form = document.querySelector("#form_main");
  let f_name = document.querySelector("#firstName");
  let l_name = document.querySelector("#lastName");
  let b_day = document.querySelector("#birthdayDate");
  let gender = document.querySelector("#inlineRadioOptions");
  let email = document.querySelector("#emailAddress");
  let p_number = document.querySelector("#phoneNumber");
  let class_check = document.querySelector(".select form-control-lg");
  
  // 폼 전송 설정
  form.action = "../login/index_join.html";
  form.method = "get";

  // 이메일 주소에 대한 정규식 패턴 정의
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // 필수 입력값 검증
  if (
    f_name.value.length === 0 || // 이름이 비어있는지 확인
    l_name.value.length === 0 || // 성이 비어있는지 확인
    b_day.value.length === 0 || // 생일이 비어있는지 확인
    email.value.length === 0 || // 이메일이 비어있는지 확인
    p_number.value.length === 0 // 전화번호가 비어있는지 확인
  ) 
  {
    alert("회원가입 폼에 필수 정보를 입력해주세요.(성별, 분반 제외)"); // 필수 정보가 비어 있을 때 경고 메시지 표시
  } 
  // 이름과 성의 길이가 2 글자를 초과하는지 확인
  else if (f_name.value.length > 2 || l_name.value.length > 2) 
  {
    alert("성은 두 글자로 제한됩니다."); // 성은 두 글자로 제한된다고 알림
  } 
  // 이메일 주소가 정규식 패턴에 맞는지 확인
  else if (!emailPattern.test(email.value)) 
  {
    alert("올바른 이메일 주소를 입력해주세요."); // 이메일이 올바르지 않을 때 경고 메시지 표시
  } 
  else 
  {
    session_join_set(); // 회원가입 용 세션 생성 함수 호출
    session_join_get(); // 세션 값 확인
    form.submit(); // 폼 제출
  }
}

class SignUp 
{
    constructor(firstName, lastName, birthdayDate, gender, emailAddress, phoneNumber, classNumber, random) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.birthdayDate = birthdayDate;
      this.gender = gender;
      this.emailAddress = emailAddress;
      this.phoneNumber = phoneNumber;
      this.classNumber = classNumber;
      this.random = random;
    }
  
    // fullName이라는 가상 속성을 통해 이름과 성을 조합한 값을 얻거나 설정할 수 있음
    get fullName() 
    {
      return `${this.firstName} ${this.lastName}`; // 이름과 성을 조합해 반환
    }
  
    set fullName(fullName) 
    {
      const [firstName, lastName] = fullName.split(" "); // 공백을 기준으로 이름과 성을 분리하여 저장
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    // contactInfo라는 가상 속성을 통해 이메일, 전화번호, 추가 정보를 조합한 값을 얻거나 설정할 수 있음
    get contactInfo() 
    {
      return `${this.emailAddress} ${this.phoneNumber} ${this.random}`; // 이메일, 전화번호, 추가 정보를 조합해 반환
    }
  
    set contactInfo(contactInfo) 
    {
      const [emailAddress, phoneNumber, random] = contactInfo.split(" "); // 공백을 기준으로 이메일, 전화번호, 추가 정보를 분리하여 저장
      this.emailAddress = emailAddress;
      this.phoneNumber = phoneNumber;
      this.random = random;
    }
  }