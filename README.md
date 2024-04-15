This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/cart.page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

자바스크립트를 다운로드 한 후 실행해야만 화면을 로드할 수 있지만
NextJs는 기본적으로 Server Side Rendering을 지원함


head 태그 내용  
페이지간 공유하고싶은 내용(상단 바)
![스크린샷 2024-04-15 오전 9.50.27.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F63%2F409swnvx6nz1fc0s5brtvs900000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_hqErF3%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-04-15%20%EC%98%A4%EC%A0%84%209.50.27.png)
![스크린샷 2024-04-15 오전 10.26.16.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F63%2F409swnvx6nz1fc0s5brtvs900000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_FA5giv%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-04-15%20%EC%98%A4%EC%A0%84%2010.26.16.png)


리액트 문법을 사용해야함

directory-route

Component
![스크린샷 2024-04-15 오후 2.11.00.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F63%2F409swnvx6nz1fc0s5brtvs900000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_rI264v%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-04-15%20%EC%98%A4%ED%9B%84%202.11.00.png)
1. Serer component
- comoponent 생성시 default
- js 기능 넣기 불가능(onClick, window, useState, useEffect 등등)
- 로딩 속도 빠름
- 검색엔진 노출 유리
- 큰 페이지 위주로 구현
2. Client component
- 'use client' 선언시 client component
- js 기능 사용 가능
- 로딩 속도 느링(js 로드, hydration: 리액트 문법을 쓰기 위해서 react를 분석)
- JS 기능이 필요한 곳에 구현
![스크린샷 2024-04-15 오후 2.12.13.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F63%2F409swnvx6nz1fc0s5brtvs900000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_zeRup9%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-04-15%20%EC%98%A4%ED%9B%84%202.12.13.png)


.next 디렉토리  
사용자에게 서비스 되는 내용이 저장되는 디렉토리  
yarn build 결과물이 저장됨  
yarn run dev 했을 때와 yarn run build 후 yarn run start 했을 때 다운받는 용량의 차이가 크다
![스크린샷 2024-04-15 오전 11.12.29.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F63%2F409swnvx6nz1fc0s5brtvs900000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_uaivIe%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-04-15%20%EC%98%A4%EC%A0%84%2011.12.29.png)
![스크린샷 2024-04-15 오전 11.12.53.png](..%2F..%2F..%2F..%2F..%2Fvar%2Ffolders%2F63%2F409swnvx6nz1fc0s5brtvs900000gn%2FT%2FTemporaryItems%2FNSIRD_screencaptureui_RgiJAP%2F%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-04-15%20%EC%98%A4%EC%A0%84%2011.12.53.png)  
실서버용으로 배포판을 만드니 굉장히 슬림해짐  


a => Link 태그를 사용해야함  
해당 링크에 마우스를 호버했을 때 해당 페이지를 미리 다운 받음  
이후 방문했던 페이지 링크에 다시 마우스 호버했을 때는 캐시로 처리함

웹 페이지 방문시 서버사이드 렌더링 처리

Cache