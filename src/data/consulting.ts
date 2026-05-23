export type ConsultingItem = {
  id: number;
  name: string;
  platform: "instagram" | "tiktok" | "youtube" | "multi";
  followerRange: string;
  tags: string[];
  result?: string;
};

export const consultingList: ConsultingItem[] = [
  {
    id: 1,
    name: "인스타 패션 계정",
    platform: "instagram",
    followerRange: "60K",
    tags: ["패션", "마이크로 인플루언서"],
    result: "릴스 평균 조회수 3배 상승",
  },
  {
    id: 2,
    name: "라이프스타일 블로거",
    platform: "instagram",
    followerRange: "12K",
    tags: ["라이프스타일", "마이크로 인플루언서"],
    result: "팔로워 2주 만에 +800",
  },
  {
    id: 3,
    name: "뷰티 크리에이터",
    platform: "instagram",
    followerRange: "4K",
    tags: ["뷰티", "성장 초기"],
    result: "컨텐츠 방향성 리브랜딩",
  },
  {
    id: 4,
    name: "여행 계정",
    platform: "instagram",
    followerRange: "8K",
    tags: ["여행", "사진"],
    result: "저장수 5배 증가",
  },
  {
    id: 5,
    name: "음식 콘텐츠 계정",
    platform: "tiktok",
    followerRange: "2K",
    tags: ["푸드", "틱톡"],
    result: "첫 바이럴 영상 달성",
  },
  {
    id: 6,
    name: "운동/피트니스 계정",
    platform: "instagram",
    followerRange: "5K",
    tags: ["피트니스", "헬스"],
    result: "DM 문의 10배 증가",
  },
  {
    id: 7,
    name: "소상공인 카페 계정",
    platform: "instagram",
    followerRange: "1K",
    tags: ["카페", "소상공인"],
    result: "로컬 팔로워 집중 성장",
  },
  {
    id: 8,
    name: "독서/자기계발 계정",
    platform: "instagram",
    followerRange: "3K",
    tags: ["독서", "자기계발"],
    result: "프로필 방문수 4배 상승",
  },
];

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
    period: "오픈 일주일 만에",
    platform: "DM + 댓글",
  },
];
