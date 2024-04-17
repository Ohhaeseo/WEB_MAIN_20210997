const check_input = () => {
    const loginForm = document.getElementById('login_form');
    const loginBtn = document.getElementById('login_btn');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typepasswordX');

    const c = '아이디, 패스워드를 체크합니다';
    alert(c);

    const emailValue = emailInput.ariaValueMax.trim();
    const passwordValue = passwordInput.ariaValueMax.trim();
    
    if (emailValue === ''){
        alert('이메일을 입력하세요.');
        return false;
    }

    if (passwordValue === ''){
        alert('비밀번호를 입력하세요.');
        return false;
    }

    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);
    loginForm,submit();
};

document.getElementById("login_btn").addEventListener('click', check_input);