//Schema
let tweets = [
  {
    id: "1", // 트윗 아이디
    text: "드림코더분들 화이팅!", // 트윗 텍스트
    createdAt: Date.now().toString(), // 트윗 생성 날짜
    name: "Bob", // 사용자 이름
    username: "bob", // 사용자 닉네임 (아이디)
    url: "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png", // 사용자 프로파일 사진 URL
  },
  {
    id: "2",
    text: "안뇽!",
    createAt: Date.now().toString(),
    name: "Seop",
    username: "seop",
  },
];
export function getAll() {
  return tweets;
}

export function getByUsername(username) {
  return tweets.filter((t) => t.username === username);
}

export function getById(id) {
  return tweets.find((tweet) => tweet.id === id);
}

export function create(text, username, name) {
  const tweet = {
    id: Date.now().toString(),
    text: text,
    creatAt: Date.now().toString(),
    name: name,
    username: username,
  };
  if (tweet) {
    tweets.unshift(tweet);
  }
  return tweet;
}

export function update(id, text) {
  const tweet = tweets.find((tweet) => tweet.id === id);
  if (tweet) {
    tweet.text = text;
  }
  return tweet;
}

export function remove(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
}
