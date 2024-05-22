/*function search_message(){
    alert("검색을 수행합니다!");
    } */
/*document.getElementById("search_btn").addEventListener('click', search_message);

    const search_message = () => {
        const c = "검색을 수행합니다.";
    };

function googleSearch() {
    const searchTerm = document.getElementById("search_input").value;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    window.open(googleSearchUrl, "_blank");
    return false;

}*/

document.getElementById("search_btn").addEventListener('click', googleSearch);

function googleSearch() {
    const searchTerm = document.getElementById("search_input").value.trim(); // 공백 제거
    if (searchTerm.length === 0) {
        alert("검색어를 입력해주세요."); // 검색어가 비어있는 경우 알림
        return; // 함수 중단
    }

    const badWords = ["씨발", "병신", "개새끼"]; // 비속어 배열
    for (let i = 0; i < badWords.length; i++) {
        if (searchTerm.includes(badWords[i])) {
            alert("비속어가 포함되어 있습니다."); // 비속어가 포함된 경우 알림
            return; // 함수 중단
        }
    }

    // 비속어 및 공백 검사를 통과한 경우 Google 검색 수행
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
    window.open(googleSearchUrl, "_blank");
}
