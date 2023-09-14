# 기술 블로그 웹 프로젝트
Next.js와 MongoDB를 이용한 풀스택 프로젝트입니다. 백엔드 기초 지식과 Next.js를 경험하기 위한 프로젝트입니다.

## Stack
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/> <img src="https://img.shields.io/badge/React.js-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/> <img src="https://img.shields.io/badge/CSS Modules-000000?style=flat-square&logo=CSS Modules&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/> <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=Vercel&logoColor=white"/>

## 문제 해결 과정
### 😁 쿠키 설정: 서버에서 모든 설정을 완료했지만 브라우저에 쿠키가 저장되지 않는 문제 발생
서버에서 응답 헤더에 HttpOnly, Path, Max-Age를 모두 설정해줌에도 불구하고 쿠키가 저장되지 않았습니다. 구글링을 해도 나오지 않아 스스로 로직을 다시 생각해보는 과정을 거쳤습니다.
<br/>
로직을 다시 생각해보니 서버 컴포넌트에서 서버로 요청을 보내고 응답을 주고받는 방식에서 서버에서 응답헤더로 쿠키를 설정해주지만 받는 쪽이 클라이언트가 아니라 서버 컴포넌트이기 때문에 쿠키가 저장되지 않는 것인지 의심이 들었습니다.
<br/>
그래서 부분적으로 클라이언트 사이드 렌더링을 해서 클라이언트 컴포넌트에서 서버로 요청을 보내보니 쿠키에 잘 저장이 됐습니다. 정확한 문제 원인이라고 확정지을 수는 없지만 서버 컴포넌트에서 요청보내던 것을 클라이언트 컴포넌트에서 요청보냄으로써 해결됐기 때문에 렌더링을 서버에서 해주기 때문일 가능성이 크다고 생각합니다.

### 😅 무한 요청: SSR로 구현하니 처음 화면에서 무한 요청이 가는 문제 발생
Next.js 13버전의 app 디렉토리에서 서버 사이드 렌더링을 구현하기 위해서는 서버 컴포넌트를 사용해야 한다는 것을 공식문서를 찾아보며 알게되었습니다. 그러나 Next.js 12버전의 getServerSideProps를 사용중이었고 이것을 서버 컴포넌트로 바꿔주니 문제를 해결했습니다.
<br/>
고민한 시간에 비해 너무 허무했던 문제 해결이었습니다.



## 완성 결과
![image](https://github.com/TaeWooKim-SCH/Blog-Project/assets/79956107/57817d2c-170a-4ca7-9321-59e0cd2f12e7)
![image](https://github.com/TaeWooKim-SCH/Blog-Project/assets/79956107/0d8c001d-aff4-4ff2-a21c-8102a1abf78f)
![image](https://github.com/TaeWooKim-SCH/Blog-Project/assets/79956107/8c265ffe-20ae-4973-9742-590ac4b421b2)

