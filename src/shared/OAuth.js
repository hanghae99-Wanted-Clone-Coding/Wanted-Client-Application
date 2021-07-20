//OAuth.js

const CLIENT_ID = "bd18ffc2815bc827028cae45eaba9fdc";
// REST_API_KEY

const REDIRECT_URI = "http://localhost:3000/user/kakao/callback";
//REDIRECT_URI
//(카카오 로그인 메뉴에서 추가, 프론트에서 접근할 수 있는 HOST, localhost:3000)

export const KAKAO_AUTH_URL = "https://kauth.kakao.com/oauth/authorize?client_id=bd18ffc2815bc827028cae45eaba9fdc&redirect_uri=http://localhost:3000/user/kakao/callback&response_type=code";

