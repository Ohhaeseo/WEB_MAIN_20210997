function session_del(){
    if(sessionStorage){
      sessionStorage.removeItem("Session_Storage_pass");
      alert("로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.");
    }
    else{
      alert("세션 스토리지 지원X");
    }
  }
  
  /*function logout(){
    session_del(); //세션삭제
    location.href = `../index.html`
  }*/
  
  document.getElementById('logout_btn').addEventListener('click', function(){
    session_del();
    window.location.href = `../LOGO2.html`;
  })