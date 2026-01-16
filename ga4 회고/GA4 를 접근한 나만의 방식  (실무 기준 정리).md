📊 GA4 접근 프레임 (실무 기준 정리)

GA4는 숫자를 보는 도구가 아니라
질문에 답하는 도구다.

GA4는 항상 아래 5단계 질문 구조로 접근한다.

🔁 GA4 전체 흐름 도식화
[사람이 왔나?]
        ↓
[어디서 왔나?]
        ↓
[뭘 했나?]
        ↓
[잘 됐나?]
        ↓
[다음에 뭘 바꿀까?]

① 사람이 왔나?
🎯 목적

사이트에 ‘의미 있는 사용자’가 실제로 존재하는가

📍 보는 지표

활성 사용자 (Active Users) ⭐

(보조) 신규 사용자, 세션

✅ 판단 기준

활성 사용자 = 0 → ❌ 설치/유입 문제

활성 사용자 > 0 → ✅ 다음 단계 진행

❌ 여기서 보면 안 되는 것

이벤트

전환

채널

국가

② 어디서 왔나?
🎯 목적

사람들이 어떤 경로를 통해 들어왔는가

📍 GA4 위치

보고서 → 획득(Acquisition) → 트래픽 획득(Traffic Acquisition)

📍 반드시 보는 항목

기본 채널 그룹 (Default Channel Group) ⭐

Direct

Organic Search

Paid Search

Social

Referral

🧠 해석 포인트

Direct 중심 → 테스트/직접 유입

Organic 존재 → SEO 작동 시작

Paid 존재 → 광고 성과 분석 단계

Social/Referral → 콘텐츠/외부 노출

❌ 여기서 섞지 말 것

행동 지표

전환

이벤트

③ 뭘 했나?
🎯 목적

들어온 사람들이 사이트 안에서 실제로 어떤 행동을 했는가

📍 GA4 위치

보고서 → 참여(Engagement)

🔹 핵심 리포트: 이벤트 (Events) ⭐
📍 반드시 보는 이벤트

page_view → 페이지 열림

user_engagement → 10초 이상 관여

scroll → 페이지 90% 스크롤

click → 링크/버튼 클릭

🧠 행동 해석 도식
session_start
     ↓
page_view
     ↓
user_engagement (관여)
     ↓
scroll / click (실제 행동)

❌ 여기서 절대 섞지 말 것

유입 채널

국가

전환

광고

④ 잘 됐나?
🎯 목적

사람들이 ‘내가 원한 행동’을 했는가

👉 GA4에서 ‘잘 됐나?’는 오직 전환으로만 판단한다.

🔹 핵심 지표

전환 이벤트 (Conversions) ⭐

📍 GA4 위치

보고서 → 전환
또는

보고서 → 참여 → 이벤트 → (전환으로 표시된 이벤트)

📊 잘 됐나에서 보는 지표
지표	의미
전환 수	몇 번 발생했는가
전환 사용자	몇 명이 수행했는가
전환율	들어온 사람 중 몇 %가 했는가
⑤ 전환 이벤트 예시 (유형별)
🔹 문의 / 리드형 사이트

버튼 클릭

전화 클릭

폼 제출

특정 페이지 도달 (Thank you Page)

🔹 콘텐츠 / 포트폴리오

특정 페이지 도달

PDF 다운로드

외부 링크 클릭

🔹 쇼핑몰

add_to_cart

begin_checkout

purchase

🧠 GA4 전체 구조 한 장 요약 도식
[사람]
  ↓
활성 사용자
  ↓
[유입]
  └─ Direct / Organic / Paid / Social / Referral
  ↓
[행동]
  └─ page_view
  └─ user_engagement
  └─ scroll / click
  ↓
[성과]
  └─ 전환 이벤트

✅ 한 줄 최종 정리

GA4 =
사람이 왔는지 확인하고 →
어디서 왔는지 보고 →
안에서 뭘 했는지 보고 →
그게 성공이었는지 판단하는 도구