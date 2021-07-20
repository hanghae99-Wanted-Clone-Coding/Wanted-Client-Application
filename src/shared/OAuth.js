//OAuth.js

const CLIENT_ID = "";
// REST_API_KEY

const REDIRECT_URI = "";
//REDIRECT_URI
//(카카오 로그인 메뉴에서 추가, 프론트에서 접근할 수 있는 HOST, localhost:3000)

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`

