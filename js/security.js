// 암/복호화 함수 원형
function encodeByAES256(key, data) {
    // AES 암호화를 수행하는 함수
    const cipher = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse(key), {
        // 암호화 설정
        iv: CryptoJS.enc.Utf8.parse(""), // 초기화 벡터 (IV) 빈 문자열로 설정
        padding: CryptoJS.pad.Pkcs7, // 패딩 방식 PKCS7
        mode: CryptoJS.mode.CBC // CBC 모드 사용
    });
    return cipher.toString(); // 암호화된 문자열 반환
}

function decodeByAES256(key, data) {
    // AES 복호화를 수행하는 함수
    const cipher = CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse(key), {
        // 복호화 설정
        iv: CryptoJS.enc.Utf8.parse(""), // 초기화 벡터 (IV) 빈 문자열로 설정
        padding: CryptoJS.pad.Pkcs7, // 패딩 방식 PKCS7
        mode: CryptoJS.mode.CBC // CBC 모드 사용
    });
    return cipher.toString(CryptoJS.enc.Utf8); // 복호화된 문자열 반환 (UTF-8 인코딩)
}

// 세션 암호화
function encrypt_text(password) {
    const k = "key"; // 클라이언트 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const b = password; // 암호화할 데이터
    const eb = this.encodeByAES256(rk, b); // AES256 암호화 수행
    return eb; // 암호화된 문자열 반환
    console.log(eb); // 콘솔에 암호화된 문자열 출력 (실제로는 코드에 도달하지 않음)
}

function decrypt_text() {
    const k = "key"; // 서버의 키
    const rk = k.padEnd(32, " "); // AES256은 key 길이가 32
    const eb = session_get(); // 세션에서 암호화된 데이터 가져오기
    const b = this.decodeByAES256(rk, eb); // AES256 복호화 수행
    console.log(b); // 콘솔에 복호화된 데이터 출력
}

// 복호화 함수
function init_logined() {
    if (sessionStorage) {
        decrypt_text(); // 복호화 함수 호출
    } else {
        alert("세션 스토리지 지원 x"); // 세션 스토리지를 지원하지 않는 경우 경고
    }
}