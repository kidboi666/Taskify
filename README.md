## 공통

- [x] 제시된 폰트, 컬러 시스템을 설정해 주세요.
- [x] 재사용성을 위해 공용 컴포넌트를 만들어 주세요.
- [ ] 반응형 웹 디자인을 준수해주세요.

## 상단 네비게이션바

- [ ] 오른쪽 이름을 누르면 드롭 다운으로 '로그아웃' 버튼, '내정보' 버튼 '내 대시보드' 버튼이 보입니다.
- [ ] '로그아웃' 버튼을 클릭하면 / 페이지로 이동합니다.
- [ ] '내 정보' 버튼을 클릭하면 /mypage 페이지로 이동합니다.
- [ ] '내 대시보드' 버튼을 클릭하면 /mydashboard 페이지로 이동합니다.

## 사이드바

- [ ] 각 대시보드를 누르면 /dashboard/{dashboardid} 페이지로 이동합니다.
- [ ] 사이드바 대시보드는 페이지네이션으로 구현합니다.(무한스크롤X)
- [ ] '+' 버튼을 누르면 대시보드 생성하기 모달이 나타납니다.

## 로그인 페이지(/login )

- [x] '로고 버튼'을 클릭하면 / 페이지로 이동합니다.
- [x] '회원가입하기' 버튼을 클릭하면 /signup 페이지로 이동합니다.
- [x] 유효한 이메일과 비밀번호를 입력하고 '로그인' 버튼을 클릭하면 /mydashboard 페이지로 이동합니다.
- [x] 로그인 페이지에는 네비게이션바가 없습니다.
- [x] 비밀번호가 틀릴 경우 “비밀번호가 일치하지 않습니다.” 경고 창을 보여줍니다.
- [x] 눈 모양 아이콘을 누르면 비밀번호를 숨기거나 나타낼 수 있습니다.
- [x] 이메일 input에서 focus out 일 때, 값이 이메일 형식이 아닐 경우 input에 빨강색 테두리와 아래에 “이메일 형식으로 작성해 주세요.” 빨강색 에러 메세지가 보입니다.
- [ ] 비밀번호 input에서 focus out 일 때, 비밀번호 길이가 8자 미만일때 input에 빨강색 테두리와 아래에 “8자 이상 작성해 주세요.” 빨강색 에러 메세지가 보입니다.
- [ ] 로그인 성공시 엑세스 토큰이 발급됩니다.

## 회원가입 페이지(/signup )

- [ ] '로고 버튼'을 클릭하면 / 페이지로 이동합니다.
- [ ] '로그인하기' 버튼을 클릭하면 /login 페이지로 이동합니다.
- [ ] 닉네임 Input에서 focus out 일 때, 값이 열 자 이하가 아닐 경우 닉네임 input에 빨간색 테두리와 아래에 “열 자 이하로 작성해주세요.” 빨간색 에러 메세지가 보입니다.
- [ ] 이메일 input에서 focus out 일 때, 값이 이메일 형식이 아닐 경우 이메일 input에 빨강색 테두리와 아래에 “이메일 형식으로 작성해 주세요.” 빨강색 에러 메세지가 보입니다.
- [ ] 비밀번호 input에서 focus out 일때 비밀번호 input 값 길이가 8자이상이 아닐 경우 비밀번호 input에 빨간색 테두리와 아래에 “8자 이상 입력해주세요.” 빨강색 에러 메세지가 보입니다.
- [ ] 비밀번호 확인 input에서 focus out 일 때 비밀번호 input 값과 비밀번호 확인 input 값이 다를 경우 비밀번호 확인 input에 빨간색 테두리와 아래에 “비밀번호가 일치하지 않습니다.” 빨강색 에러 메세지가 보입니다.
- [ ] 모든 input 창이 채워지고 에러 메세지가 없는 상태에서 이용약관에 체크가 되면 '가입하기' 버튼이 활성화가 됩니다.
- [ ] 중복되는 이메일로 회원가입 시도 시 '이미 사용중인 이메일입니다' 모달창이 나타납니다.
- [ ] 활성화된 '가입하기' 버튼을 누르면 “가입이 완료되었습니다” alert 창을 보여주고 /login 페이지로 이동합니다.

## 메인 랜딩 페이지(/ )

- [x] '로고 버튼'을 클릭하면 / 페이지로 이동합니다.
- [x] '로그인' 버튼을 클릭하면 /login 페이지로 이동합니다.
- [x] '회원가입' 버튼을 클릭하면 /signup 페이지로 이동합니다.
- [x] 로그인이 되어있으면 /dashboard/{첫번째 dashboardid} 로 이동합니다

## 나의 대시보드 페이지(/mydashboard)

- [x] '로고' 버튼을 클릭하면 / 페이지로 이동합니다. - 사이드바 부분이라 아직 구현안되어 있습니다.
- [x] 내가 만든 대시보드끝에는 👑 이 붙습니다 -
- [x] 내 대시보드는 페이지네이션으로 구현합니다.
- [x] 초대받은 대시보드는 무한스크롤로 구현합니다
- [x] 내 대시보드를 각각을 클릭하면 해당 대시보드 페이지로/dashboard/{dashboardid} 이동합니다.
- [x] '+' 버튼을 클릭하면 대시보드 생성 모달이 나타납니다.
- [x] 초대받은 대시보드가 없으면 “아직 초대받은 대시보드가 없어요”문구를 보여줍니다.
- [x] 초대받은 대시보드에서 이름(title)으로 검색이 가능합니다(키워드가 이름에 일부라도 포함되면 모두 검색됩니다.).
- [x] 초대받은 대시보드에서 '수락' 버튼을 누르면 대시보드가 추가됩니다.(초대 받은 대시보드 목록에서 유지됩니다 )
- [x] 초대받은 대시보드에서 '거절' 버튼을 누르면 해당 대시보드는 삭제됩니다.

## 대시보드 생성 모달(/mydashboard)

- [x] '+' 버튼을 클릭하면 대시보드 생성 모달이 나타납니다.
- [ ] 대시보드 생성 모달에서 대시보드 이름과 색을 선택해야 '생성' 버튼이 활성화가 됩니다.
- [x] 대시보드 '생성'버튼을 누르면 대시보드가 생성이 되고 /dashboard/{dashboardid} 로 이동합니다

## 대시보드 페이지(dashboard/{dashboardid})

- [ ] 네비게이션 상단 오른쪽에 초대받은 멤버가 보입니다.
- [x] 각 칼럼의 카드들은 무한스크롤로 이어집니다.
- [ ] 내가 만든 보드는 상단에 '관리' 버튼이 보입니다.
- [x] '관리' 버튼을 누르면 /dashboard/{boardid}/edit로 이동합니다
- [ ] '초대하기' 버튼을 누르면 초대하기 모달창이 나타납니다.
- [ ] 내가 만든 대시보드 이름 우측에는 왕관 모양이 보입니다.
- [x] 각 컬럼 오른쪽에 해당 카드 개수가 보입니다.
- [x] '새로운 컬럼 추가하기' 버튼을 누르면 컬럼 추가하기 모달이 나타납니다.
- [x] 각 컬럼의 '+' 버튼을 누르면 해당 컬럼 할 일 생성 모달이 나타납니다.
- [x] 각 컬럼의 '톱니바퀴' 버튼을 누르면 컬럼 수정 모달이 나타납니다.
- [x] 생성된 할 일 카드를 클릭하면 해당 카드 상세 모달이 나타납니다.

## 할 일 카드 모달(/dashboard/{dashboardid} )

- [x] 만들어진 카드 정보를 보여줍니다.
- [ ] 댓글 input에 값이 비어있으면 '입력' 버튼이 비활성화 됩니다.
- [x] 댓글 input에 값을 입력하고 '입력' 버튼을 누르면 댓글이 남겨집니다.
- [x] 댓글은 무한스크롤로 이어집니다.
- [x] 내가 남긴 댓글에 '수정' 버튼을 누르면 내용을 수정할 수 있습니다
- [x] 내가 남긴 댓글에 '삭제' 버튼을 누르면 내용을 삭제할 수 있습니다
- [x] 오른쪽 상단 케밥을 누르면 드롭다운으로 수정하기, 삭제하기를 고를 수 있습니다.
- [x] '수정하기' 버튼을 누르면 할 일 수정 모달이 나타납니다.
- [x] '삭제하기' 버튼을 누르면 해당 카드가 삭제됩니다

## 할 일 수정 모달(/dashboard/{dashboardid})

- [x] 만들어진 카드 정보로 input이 기본값으로 채워집니다.
- [ ] 값이 하나라도 바뀌면 '수정' 버튼이 활성화 됩니다.
- [x] '수정' 버튼을 누르면 해당 카드에 수정된 정보가 반영이 됩니다.
- [ ] 마감일은 날짜 입력 라이브러리를 사용해서 입력을 받아주세요.

## 할 일 카드 생성 모달(/dashboard/{dashboardid})

- [x] 모든 input이 채워지면 '생성' 버튼이 활성화 됩니다.
- [ ] 담당자는 드롭다운으로 초대받은 인원만 고를 수 있습니다.
- [ ] 이미지는 최대 1개입니다.
- [x] 태그 색상은 랜덤입니다.
- [ ] '생성' 버튼을 클릭하면 해당 컬럼 하단에 할 일 카드가 생깁니다.
- [ ] 날짜 입력 라이브러리를 사용해서 입력을 받아주세요.

## 컬럼 추가 모달(/dashboard/{dashboardid})

- [x] 이름 input에 입력값이 없으면 '생성' 버튼은 비활성화 됩니다.
- [ ] 컬럼 이름이 중복이 되면 “중복된 컬럼 이름입니다” 경고창을 보여줍니다.
- [ ] 활성화된 '생성'버튼을 누르면 컬럼이 추가됩니다.
- [ ] 칼럼은 최대 10개까지 생성이 가능합니다.
- [ ] 칼럼은 스크롤로 이어집니다.

## 컬럼 관리 모달(/dashboard/{dashboardid})

- [x] '삭제하기' 버튼을 누르면 “컬럼의 모든 카드가 삭제됩니다” 경고창을 보여줍니다.
- [x] '예' 버튼을 누르면 해당 컬럼의 모든 할 일 카드들이 삭제가 됩니다.
- [x] 수정할 이름을 넣고 '변경'버튼을 누르면 컬럼 이름이 수정됩니다.

## 대시보드 수정(/dashboard/{dashboardid}/edit)

- [x] 대시보드 이름이나 색을 바꾸고 '변경' 버튼을 누르면 대시보드가 수정됩니다.
- [ ] '돌아가기' 버튼을 누르면 /dashboard/{dashboardid}로 이동합니다.
- [ ] 대시보드 각 구성원 오른쪽에 있는 '삭제' 버튼을 누르면 구성원이 삭제가 됩니다
- [x] 구성원 리스트는 페이지네이션으로 구현합니다.
- [x] 초대 내역 리스트는 페이지네이션으로 구현합니다.
- [x] '초대하기' 버튼을 누르면 초대하기 모달창이 나타납니다.
- [x] 초대 내역 각 오른쪽의 '취소'버튼을 누르면 해당 초대는 취소가 됩니다.

## 초대하기 모달(/dashboard/{dashboardid}/edit)

- [x] 유효한 이메일을 입력하고 '초대' 버튼을 누르면 해당 이메일을 가진 유저에게 초대가 갑니다.
- [ ] 중복된 이메일로 초대를 보낼 수 있습니다.
- [ ] 값을 입력하지 않으면 '초대' 버튼은 활성화되지 않습니다

## 계정 관리(/mypage)

- [ ] '+' 버튼을 누르면 이미지를 업로드 할 수 있습니다.
- [ ] 이메일은 수정할 수 없습니다.
- [ ] 닉네임 또는 이미지를 바꾸고 '저장' 버튼을 누르면 정보가 수정됩니다.
- [ ] 새 비밀번호 확인 input에서 focus out 일때 새 비밀번호 input 값과 다를 경우 비밀번호 input에 빨간색 테두리와 아래에 “비밀번호가 일치하지않습니다” 빨강색 에러 메세지가 보입니다.
- [ ] 모든 input이 채워지면 '변경' 버튼이 활성화 됩니다.
- [ ] '변경' 버튼을 눌렀을때 현재 비밀번호 값이 틀리면 “현재 비밀번호가 틀립니다” 경고창이 나타납니다.
- [ ] 정확한 현재 비밀번호 값을 입력하고 '변경' 버튼을 누르면 비밀번호가 변경이 됩니다.
