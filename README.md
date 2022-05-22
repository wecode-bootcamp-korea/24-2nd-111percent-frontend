# 8percent
<img width="1680" alt="스크린샷 2021-10-01 오후 2 11 53" src="https://user-images.githubusercontent.com/76423949/135737600-91587c29-3efb-4ea8-b8f0-c83d3467679f.png">

개인투자자가 소액으로 가능한 P2P 투자사이트 "8percent"를 클론 코딩 해보았습니다.

[>>시연 동영상 보러가기](https://youtu.be/5wOlzBs6B9I)

## Team

### 111percent

대한민국의 유명 래퍼 Dok2의 노래 "111%"처럼 팀원 모두 수익률 111%를 달성하고자 하는 염원을 담아 팀 이름을 111percent로 작명하였습니다.

### Teamates👨‍👦‍👦👩‍👧

FrontEnd: 김현재, 최파란별, 이지영
BackEnd: 김정수, 하예준

### 작업기간

21.09.13 ~ 21.10.01
<br>
<br>

## 기술 스택

### FE :

- Basic
  `Javascript`, `React(CRA, Hook)`, `Styled-components`
- Other libraries
  `React-router-DOM`, `react helmet`, `slide-slicker`, `dotenv`, `chartjs`, `axios`, `react-icons`

### BE :

- `Phyton`, `Django`, `MySQL`

### Both :

- `Slack`, `Trello`, `Github`, `Git`, `Git-flow`, `Notion`
  <br>
  <br>

## 구현 기능 소개

- 회원가입 / 로그인
- 소셜로그인 (카카오)
- 메인페이지 (겸 리스트 페이지)
- 상세페이지
- 마이페이지
- 입금, 출금, 투자하기 기능

### 개인별 담당 페이지 및 기능 (FE)

**김현재**
`common`

- 네트워크 통신 로직 axios 적용
- 숫자 -> 원화 처리 로직 공용 함수로 구현 및 적용

`회원가입 / 로그인 페이지`

- custom hook 사용하여 유효성 검증 진행
- 카카오 소셜로그인 구현
- 소셜로그인 후 필수정보 입력 페이지로 redirection 구현 및 `react-router-dom` 활용하여 기본정보 값 자동입력 구축

`상세페이지`

- 카카오 맵 API 활용하여 지도 구현
- `chart.js` 활용하여 도넛 그래프 구현
- carousel 구현
- 반응형 페이지 구현

`입금, 출금, 투자하기 기능`

- 상세페이지 내 투자하기 기능 구현 (POST)

**최파란별**
`마이페이지`

- 재사용성을 높이기 위하여 map을 활용하여 페이지 내 세부 탭 구현
- `chart.js` 활용하여 도넛 그래프 구현
- 거래내역 table 필터링 기능 구현
- useEffect를 활용하여 예치금 및 자산정보 자동 update 기능 구현

`입금, 출금, 투자하기 기능`

- 마이페이지 내 입금, 출금 기능 구현

**이지영**
`common`

- 초기 작업환경 구축

`navigation bar`

- localStorage를 활용한 login/logout 상태관리 구축

`footer`

- footer 제작

`메인페이지`

- 무한스크롤 구현
- `slick-slider`를 활용한 carousel 구현
- 상품이미지 hover시 scale 효과 구현
- `react-icons`활용하여 아이콘 활용

<br>
<br>

# Reference

- 이 프로젝트는 라인프렌즈샵 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
