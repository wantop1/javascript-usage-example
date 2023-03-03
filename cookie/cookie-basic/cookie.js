//쿠키 읽기
function getCookie() {
  const allCookies = document.cookie;

  if (allCookies != "") {
    alert("저장된 쿠키의 값은 : " + allCookies);
    return;
  }

  alert("저장된 쿠키가 없습니다.");
}

//쿠키 생성하기
function setCookie(event) {
  event.preventDefault();

  const cname = document.getElementById("cname").value;
  const cvalue = document.getElementById("cvalue").value;
  const cexpire = document.getElementById("cexpire").value;
  let expiration = new Date();
  expiration.setDate(expiration.getDate() + +cexpire);
  const cookies = `${cname}=${cvalue};expires=${expiration.toUTCString()};`;
  document.cookie = cookies;
  document.getElementById("cookie-form").reset();
}

const cookieForm = document.getElementById("cookie-form");
cookieForm.addEventListener("submit", setCookie);

//쿠키 수정/제거 하기
function deleteCookie() {
 let key = document.getElementById("cookie-key").value;

 if(key ==="") {
    alert("key를 입력해주세요");
    return;
 }

  document.cookie = `${key}=;expires=Sat, 01 Jan 1972 00:00:00 GMT;`;
  let = "";
  alert("쿠키를 삭제하였습니다.");
}

//모든 쿠키 제거 하기
function deleteAllCookies(domain, path) {
  domain = domain || document.domain;
  path = path || "/";
  const cookies = document.cookie.split(";");
  const expiration = "Sat, 01 Jan 1972 00:00:00 GMT;";
  for (let i = 0; i < cookies.length; i++) {
    document.cookie = cookies[i].split("=")[0] + "=;" + "expires=" + expiration;
  }
}
