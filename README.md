# 생활코딩 예제
- https://opentutorials.org/course/5098/32347

#### 배포버전 실행
```
// 다음 명령어를 터미널에 입력하여 배포 가능한 버전의 애플리케이션을 생성합니다.
npm run build

// 이 명령어는 .next 폴더의 내용을 바탕으로 서비스를 시작합니다.
npm run start
```

#### 개발버전 실행
```
npm run dev
```

#### 백엔드 테스트 (json-server 실행)
```
npx json-server --port 9999 --watch db.json
```

#### 서버 컴포넌트는 아래와 같은 경우에 사용합니다.

- 사용자와 상호작용하지 않는 경우
- 백엔드에 엑세스하면서 보안적으로 위험한 정보를 주고 받는 경우

#### 클라이언트 컴포넌트는 아래와 같은 경우 사용합니다.

- 버 컴포넌트로 해결되지 않는 경우
- 사용자와 상호작용하는 경우
- useEffect, useState, onClick, onChange와 같은 API를 사용해야 하는 경우
- useRouter, useParams와 같은 nextjs의 client component API를 사용하는 경우
- 사용법 컴포넌트 상단에 'use client' 명시하면 끝.


#### mysql 연결 테스트 완료 ( app/layout.js )