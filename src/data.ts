import {
  Calendar,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Music,
  ShoppingBag,
  Ticket,
  Train,
  Twitter,
  Utensils,
  Youtube
} from "lucide-react";

export const profileData = {
  name: "郭羽沐",
  nameEn: "KUO YU MU",
  titles: [],
  tags: ["雙子座", "不太型", "2007/05/18"],
  email: "a111182123@nkust.edu.tw",
  socials: [
    { icon: Linkedin, url: "#", name: "LinkedIn" },
    { icon: Instagram, url: "#", name: "Instagram" },
    { icon: Youtube, url: "#", name: "YouTube" },
    { icon: Facebook, url: "#", name: "Facebook" },
    { icon: Twitter, url: "#", name: "Twitter" },
  ],
  about: "我目前就讀於國立高雄科技大學航運技術系。選擇這個科系，是因為我對海洋充滿嚮往，也希望未來能在船上工作。就學期間，我認真學習專業知識，培養紀律與責任感，並重視團隊合作精神，期許自己成為一名穩重且可靠的船員。",
};

export const workExperience = [
  {
    period: "2025-05 ~ 2025-06",
    role: "御風輪實習",
    location: "日本，東京",
    description: "於御風輪進行海上實習，學習航海實務與船上作業流程，熟悉海上生活與工作環境。",
  }
];

export const educationData = [
  {
    period: "2022-09 ~ 至今",
    school: "國立高雄科技大學",
    department: "航運技術系",
  }
];

export const languages = [
  { name: "英文", level: "中等" },
  { name: "台語", level: "精通" },
  { name: "中文", level: "精通" }
];

export const nyItinerary = [
  {
    day: "Day 1",
    title: "中城經典地標一日遊 (曼哈頓中城)",
    activities: [
      { time: "09:00 - 10:30", type: "早餐", name: "Ess-a-Bagel", desc: "紐約排名第一，爆漿乳酪抹醬的超人氣貝果老店。", icon: Utensils },
      { time: "11:00 - 12:30", type: "景點", name: "中央車站", desc: "擁有絕美星空穹頂與神秘低語迴廊的百年典雅火車站。", icon: Train },
      { time: "12:30 - 14:00", type: "午餐", name: "布萊恩特公園野餐", desc: "坐在高樓環繞的綠意草坪上，享用多汁美味的 Luke's 龍蝦堡。", icon: Utensils },
      { time: "14:00 - 15:30", type: "景點", name: "紐約公共圖書館", desc: "宛如霍格華茲魔法學校的「玫瑰主閱覽室」，就在這裡。", icon: MapPin },
      { time: "15:30 - 18:00", type: "逛街", name: "第五大道漫步", desc: "全球最奢華的購物大道，還會經過參觀莊嚴的聖派翠克大教堂。", icon: ShoppingBag },
      { time: "18:00 - 19:30", type: "晚餐", name: "The Halal Guys 餐車", desc: "紐約街頭傳奇，必點淋滿靈魂白醬的香烤雞肉與牛肉雙拼飯。", icon: Utensils },
      { time: "19:30 - 21:00", type: "景點", name: "時代廣場", desc: "被無數霓虹巨幅看板包圍，世界最著名的繁華十字路口。", icon: MapPin },
    ]
  },
  {
    day: "Day 2",
    title: "藝文、中央公園與百老匯 (曼哈頓上城)",
    activities: [
      { time: "09:00 - 10:00", type: "早餐", name: "Blue Bottle + Levan Bakery", desc: "用精品藍瓶咖啡，配上外酥內軟、爆漿熱巧克力餡的超高人氣排隊餅乾。", icon: Utensils },
      { time: "10:00 - 12:30", type: "景點", name: "中央公園", desc: "散步造訪弓橋與畢士達噴泉，感受曼哈頓高樓群裡的悠閒綠洲。", icon: MapPin },
      { time: "12:30 - 16:00", type: "景點+午餐", name: "大都會藝術博物館 (The Met)", desc: "世界三大博物館之一，必看壯觀的埃及神廟 (館內附設餐廳可簡單用餐)。", icon: MapPin },
      { time: "16:30 - 18:00", type: "下午茶", name: "Lady M 旗艦店", desc: "朝聖精品級千層蛋糕的紐約創始店，體驗層層疊上的果香與細緻鮮奶油。", icon: Utensils },
      { time: "18:00 - 19:30", type: "晚餐", name: "Shake Shack 漢堡", desc: "紐約發跡的美味漢堡，招牌的肉排與波浪薯條絕對絕配。", icon: Utensils },
      { time: "19:45 - 22:30", type: "景點", name: "百老匯音樂劇", desc: "來到百老匯，看一場一生必看的體驗，沉浸在極致的舞台效果與表演中。", icon: Ticket },
    ]
  },
  {
    day: "Day 3",
    title: "西區現代文青、高線公園 (曼哈頓西區)",
    activities: [
      { time: "09:30 - 11:30", type: "景點", name: "哈德遜廣場 & Edge 觀景台", desc: "拍蜂巢形狀建築 Vessel，並登上 100 層樓高透明玻璃地板俯瞰紐約。", icon: MapPin },
      { time: "11:30 - 13:00", type: "景點", name: "高線公園", desc: "廢棄高架鐵道改建的空中花園，漫步其中欣賞現代建築與壁畫。", icon: MapPin },
      { time: "13:00 - 15:30", type: "午餐+逛街", name: "雀兒喜市場", desc: "由餅乾工廠改造的文創天地，午餐必吃尾端大龍蝦或是起司披薩。", icon: Utensils },
      { time: "16:00 - 18:30", type: "景點+逛街", name: "蘇活區 (SoHo)", desc: "充滿鑄鐵建築與石板街道，這裡有許多獨立設計師品牌與質感小店。", icon: ShoppingBag },
      { time: "18:30 - 20:30", type: "晚餐", name: "Blue Note Jazz Club", desc: "全美最頂級的爵士樂聖地，邊享用晚餐或小酌，一邊聽大師級現場演奏。", icon: Music },
    ]
  },
  {
    day: "Day 4",
    title: "華爾街、自由女神與布魯克林 (曼哈頓下城 + 布魯克林)",
    activities: [
      { time: "09:00 - 10:00", type: "早餐", name: "Zucker's Bagels", desc: "在下城區吃貝果，厚實有嚼勁的道地紐約客最愛。", icon: Utensils },
      { time: "10:00 - 12:00", type: "景點", name: "華爾街金牛 & 三一教堂", desc: "摸摸金牛為自己帶來好運，並參觀古老的三一教堂與紐約證券交易所。", icon: MapPin },
      { time: "12:00 - 13:30", type: "午餐", name: "史泰登島渡輪", desc: "免費搭乘大型渡輪，遠眺自由女神像與下城天際線，並在船上簡單用餐。", icon: MapPin },
      { time: "13:30 - 15:00", type: "景點", name: "911 國家紀念館 & Oculus", desc: "參觀雙子星原址的震撼水池，並進入白色飛鳥造型的世貿轉運站。", icon: MapPin },
      { time: "15:00 - 16:30", type: "景點", name: "布魯克林大橋", desc: "踏上這座橫跨東河的百年木棧道大橋，下午漫步過去的夕陽天際線最美。", icon: MapPin },
      { time: "16:30 - 19:00", type: "景點", name: "布魯克林 DUMBO 區", desc: "拍經典的曼哈頓大橋夾在紅磚建築中的經典畫面，IG 熱門打卡第一名。", icon: MapPin },
      { time: "19:00 - 21:00", type: "晚餐", name: "橋下景觀餐廳 + 夜景", desc: "吃著熱騰騰的知名薄片披薩，欣賞對岸曼哈頓閃耀的百萬夜景。", icon: Utensils },
    ]
  },
  {
    day: "Day 5",
    title: "皇后區文化體驗、隱藏版天際線與世界美食 (皇后區)",
    activities: [
      { time: "09:30 - 11:30", type: "景點", name: "小島 (Little Island)", desc: "哈德遜河上由水面長出巨型鬱金香般的漂浮生態公園，拍照超美。", icon: MapPin },
      { time: "11:30 - 12:30", type: "午餐", name: "Katz's Delicatessen", desc: "當代名店，招牌「煙燻牛肉三明治」的肉量宛如一座美味小山。", icon: Utensils },
      { time: "12:30 - 13:30", type: "交通", name: "地鐵 7 號線體驗", desc: "坐在有「國際快線」之稱的地鐵上，欣賞窗外沿線更替的各國多元街景。", icon: Train },
      { time: "13:30 - 15:30", type: "景點", name: "法拉盛華埠 & 球場", desc: "尋找電影《MIB》的巨型不鏽鋼地球儀，這也是看網球公開賽的聖地。", icon: MapPin },
      { time: "16:00 - 18:00", type: "景點", name: "龍門廣場州立公園", desc: "皇后區的私房秘境，隔著東河正對著聯合國大廈，擁有全紐約最安靜的落日天際線。", icon: MapPin },
      { time: "18:30 - 20:30", type: "晚餐", name: "曼哈頓法式餐酒館", desc: "用這趟旅程最美味的異國料理為旅行畫下句點。", icon: Utensils },
    ]
  }
];
