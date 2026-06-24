const TOPICS = [
  { id: "love",    label: "Tình yêu",               icon: "♡" },
  { id: "career",  label: "Sự nghiệp & Công việc",  icon: "✦" },
  { id: "money",   label: "Tài chính",               icon: "◆" },
  { id: "health",  label: "Sức khỏe",                icon: "✿" },
  { id: "study",   label: "Học tập & Thi cử",        icon: "✎" },
  { id: "general", label: "Tổng quan / Hàng ngày",   icon: "☼" }
];

const SPREADS = [
  {
    id: "1",
    label: "Rút 1 lá – Thông điệp nhanh",
    description: "Một lá bài duy nhất cho thông điệp cốt lõi, nhanh và gọn.",
    count: 1,
    positions: []
  },
  {
    id: "3",
    label: "Rút 3 lá – Quá khứ · Hiện tại · Tương lai",
    description: "Ba lá bài giúp bạn nhìn rõ hành trình: điều đã qua, điều đang diễn ra và điều sắp tới.",
    count: 3,
    positions: ["Quá khứ", "Hiện tại", "Tương lai"]
  }
];

function getTopicById(topicId) {
  return TOPICS.find(function (t) { return t.id === topicId; }) || null;
}

function getSpreadById(spreadId) {
  return SPREADS.find(function (s) { return s.id === spreadId; }) || null;
}
