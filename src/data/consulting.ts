export type ConsultingCategory =
  | "wedding"
  | "beauty"
  | "student"
  | "brand"
  | "lifestyle"
  | "body";

export type ConsultingItem = {
  id: number;
  caseNo: string;
  name: string;
  category: ConsultingCategory;
  followerRange: string;
  tags: string[];
  insight: string;
};

/**
 * Notion 컨설팅 리스트(8건) 기반의 실제 사례 데이터.
 * 사례 05번은 Notion 원본에 존재하지 않아 누락(번호는 원본 기준 유지).
 */
export const consultingList: ConsultingItem[] = [
  {
    id: 1,
    caseNo: "Case 01",
    name: "웨딩 계정",
    category: "wedding",
    followerRange: "약 4,000명 · 2개월",
    tags: ["포지셔닝 재정의", "캐릭터 발견"],
    insight:
      "감성 계정이 되려고 했지만, 사람들이 좋아하는 진짜 강점은 '결혼 준비를 대신 연구해주는 친구' 캐릭터였음.",
  },
  {
    id: 2,
    caseNo: "Case 02",
    name: "체형 컨설팅 계정",
    category: "body",
    followerRange: "약 600명",
    tags: ["구매 전환", "포지셔닝 재정의"],
    insight:
      "체형 컨설팅을 팔지 말고 사람들이 원하는 '추구미'를 팔아라 — 분석을 그 도구로 사용.",
  },
  {
    id: 3,
    caseNo: "Case 03",
    name: "의대생 브이로그 계정",
    category: "student",
    followerRange: "약 500명",
    tags: ["라이프스타일 확장", "인간 브랜딩"],
    insight:
      "공부법이 아닌 의대생의 '삶'을 중심으로. 셀프케어·뷰티·멘탈까지 자연스럽게 확장 가능한 구조.",
  },
  {
    id: 4,
    caseNo: "Case 04",
    name: "디저트 브랜드",
    category: "brand",
    followerRange: "신규 런칭",
    tags: ["브랜드 서사", "창업가 브랜딩"],
    insight:
      "브랜드를 팔지 말고 창업가를 팔아라. 음대생 출신의 1평 가게 → 백화점 팝업까지의 서사가 진짜 상품.",
  },
  {
    id: 5,
    caseNo: "Case 06",
    name: "뷰티 · 자기관리 계정",
    category: "beauty",
    followerRange: "비공개",
    tags: ["차별화", "심리 해석"],
    insight:
      "'어떻게 예뻐질까'가 아니라 '왜 우리는 예뻐지고 싶어할까'를 이야기. 뷰티 + 감정 해석으로 차별화.",
  },
  {
    id: 6,
    caseNo: "Case 07",
    name: "얼굴 비공개 뷰티 계정",
    category: "beauty",
    followerRange: "비공개",
    tags: ["큐레이터 브랜딩", "캐릭터"],
    insight:
      "퍼스널 브랜딩 = 얼굴 공개가 아니다. 얼굴 없이도 '기준과 관점'으로 큐레이터 캐릭터를 만들 수 있다.",
  },
  {
    id: 7,
    caseNo: "Case 08",
    name: "육아 · 생활정보 계정",
    category: "lifestyle",
    followerRange: "비공개",
    tags: ["캐릭터 발견", "주제 → 관점 전환"],
    insight:
      "육아 전문가가 아니라 '직접 써보고 비교·검증하는 엄마' 캐릭터. 주제가 아닌 관점으로 계정 정의.",
  },
  {
    id: 8,
    caseNo: "Case 09",
    name: "약대생 계정",
    category: "student",
    followerRange: "비공개",
    tags: ["타게팅 재정의", "라이프스타일"],
    insight:
      "사람들이 궁금한 건 공부법이 아니라 약대생의 삶. 정보 계정에서 라이프스타일 계정으로 타게팅 전환.",
  },
];

/**
 * Hero/Stats 섹션에서 사용. Notion "어필 포인트" 원문 기준.
 */
export const stats = [
  {
    label: "인스타 본계정 팔로워",
    value: 6000,
    suffix: "+",
    period: "3개월 만에",
    platform: "Instagram",
  },
  {
    label: "인스타 부계정 팔로워",
    value: 1000,
    suffix: "+",
    period: "2주 만에",
    platform: "Instagram",
  },
  {
    label: "틱톡 팔로워",
    value: 1000,
    suffix: "+",
    period: "1주일 만에",
    platform: "TikTok",
  },
  {
    label: "컨설팅 문의",
    value: 100,
    suffix: "+",
    period: "오픈 1주일 (댓글 40 + DM 50)",
    platform: "DM + 댓글",
  },
];
