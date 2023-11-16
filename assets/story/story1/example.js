export default [
  {
    backSN: 1,
    backImg: require("./back/back1.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 對話必要項目
        chatSN: 1,
        type: "P",
        speaker: "L",
        name: "左邊的人",
        photo: require("./profile/xxx.gif"),

        //以下只能擇一
        img: require("./images/tech.jpg"),
        sound: require("./sound/ooo.mp3"),
        text: "妳好，我叫右邊的人，\n很高興認識妳",
      },
      {
        // 旁白必要項目
        chatSN: 2,
        type: "N",

        // 旁白選擇項目，可兩者都有
        backStyle: {
          // 底框顏色 "rgba(0 ,0 ,0 ,0)" 為完全透明
          // 可用色碼 "#E5A000"
          backgroundColor: "rgba(0 ,0 ,0 ,0)",
        },
        fontStyle: {
          // 旁白字體粗細 ，預設 "600"
          // 可使用 "100", "200", "300", ..."900"
          fontWeight: "600",
          // 旁白字體顏色
          color: "#fff",
        },

        // 以下只能擇一
        sound: require("./sound/wave.mp3"),
        text: [
          { id: 1, text: "在某間房間內..在某間房間內....." },
          { id: 2, text: "有一個人....." },
          { id: 3, text: "...綠綠的" },
        ],
        img: require("./images/wedding.jpg"),
      },
    ],
  },
  {
    backSN: 2,
    backImg: "./ooo.jpg",
  },
];
