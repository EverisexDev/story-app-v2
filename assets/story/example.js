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
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        // 旁白底框有顏色，也可給色碼 "#FFFFFF"
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, .3)",
        },
        // 旁白文字顏色，與字體粗細，可使用 "100", "200", "300", ..."900"
        fontStyle: {
          fontWeight: "600",
          color: "#fff",
        },
        //旁白文字內容
        text: [
          { id: 1, text: "在某間房間內..在某間房間內....." },
          { id: 2, text: "有一個人....." },
          { id: 3, text: "...綠綠的" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        // 旁白文字顏色，與字體粗細，可使用 "100", "200", "300", ..."900"
        fontStyle: {
          fontWeight: "600",
          color: "#fff",
        },
        //旁白文字內容
        text: [
          { id: 1, text: "在某間房間內..在某間房間內....." },
          { id: 2, text: "有一個人....." },
          { id: 3, text: "...綠綠的" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 3,
        type: "N",
        img: require("./images/wedding.jpg"),
        //只有以上三條，因為旁白突變不會有文字顏色設定，也不會有底框
      },
      {
        // 旁白語音訊息，有底色
        chatSN: 4,
        type: "N",
        sound: require("./sound/wave.mp3"),
        //旁白圖片顏色
        soundImg: require("./../../Sound-W.png"),
        // 旁白底框有顏色，也可給色碼 "#FFFFFF"
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, 0)",
        },
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 5,
        type: "N",
        sound: require("./sound/wave.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白影片訊息
        chatSN: 6,
        type: "N",
        video: require("./video/video2.mp4"),
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "R",
        name: "右邊的人",
        photo: require("./profile/a.png"),
        // 女生的粉色背景
        backColor:"#F2D9DE",
        text: "12345678901",
      },
      {
        // 人圖片訊息
        chatSN: 8,
        type: "P",
        speaker: "L",
        name: "右邊的人",
        photo: require("./profile/a.png"),
        img: require("./images/tech.jpg"),
      },
      {
        // 人聲音訊息
        chatSN: 9,
        type: "P",
        speaker: "L",
        name: "左邊的人",
        photo: require("./profile/a.png"),
        sound: require("./sound/wave.mp3"),
      },
      {
        // 人影片訊息
        chatSN: 10,
        type: "P",
        speaker: "R",
        name: "少女",
        photo: require("./profile/Sara.png"),
        video: require("./video/video2.mp4"),
      },
    ],
  },
  {
    backSN: 2,
    backImg: require("./back/people.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        chatSN: 1,
        type: "P",
        speaker: "L",
        name: "左邊的人",
        photo: require("./profile/a.png"),
        sound: require("./sound/wave.mp3"),
      },
      {
        chatSN: 2,
        type: "P",
        speaker: "R",
        name: "右邊的人",
        photo: require("./profile/a.png"),
        text: "妳好，我叫右邊的人，很高興認識妳",
      },
    ],
  },
];
