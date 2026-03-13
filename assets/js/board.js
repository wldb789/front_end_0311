document.addEventListener("DOMContentLoaded", ()=>{
    getData();

});

// spring Boot 서버에 요청하는 함수
const getData = async () => {

    // 로컬 테스트용
    // const API_URL = "http://localhost:8081/api/board/list";

    // 배포용
    const API_URL = "/api/board/list";

    let res = await fetch(API_URL);
    let data = await res.json();

    console.log(data);
}