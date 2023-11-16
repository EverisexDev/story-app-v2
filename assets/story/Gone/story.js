export default [
  {
    backSN: 1,
    backImg: require("./back/S00-01-03.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        //旁白文字內容
        text: [{ id: 1, text: "深夜　書房" }],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 2,
        type: "N",
        sound: require("./sound/00-04.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "你跟我一樣厭世嗎？" },
          { id: 2, text: "歡迎光臨我們的小鎮。" },
          { id: 3, text: "你所期望的美好旅程，" },
          { id: 4, text: "在這裡絕對不會發生，" },
          { id: 5, text: "唯一會發生的事情，" },
          { id: 6, text: "就是你的消失。" },
          { id: 7, text: "如果，" },
          { id: 8, text: "你已經在前往這裡的路上了，" },
          { id: 9, text: "請千萬記得，" },
          { id: 10, text: "別來找我，" },
          { id: 11, text: "也不會有任何人來找你……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "在網路上流傳著一則都市傳說，" },
          { id: 2, text: "據說，" },
          { id: 3, text: "只要你收到女網友傳來這樣的訊息，" },
          { id: 4, text: "對方就會從此失去聯繫。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "起初，" },
          { id: 2, text: "大家認為這是一種類似發好人卡的惡作劇，" },
          { id: 3, text: "但隨著訊息像病毒般在網路上繁殖孳生，" },
          { id: 4, text: "開始有鄉民認真肉搜起來，" },
          { id: 5, text: "想證實那神秘的小鎮到底是真的還是假的？" },
          { id: 6, text: "引發了論壇上各種反串與歪樓。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "奇怪的是，" },
          { id: 2, text: "這座神秘小鎮的存在，" },
          { id: 3, text: "反而愈來愈真實。" },
          { id: 4, text: "原本矛盾混亂的關鍵字，" },
          { id: 5, text: "竟然逐漸匯整成為一個具體的形象。" },
        ],
      },
      {
        // 旁白影片訊息
        chatSN: 7,
        type: "N",
        videpDirection: "row",
        video: require("./video/D03-02.mp4"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "那是一座長年被大霧籠罩的偏遠小鎮，" },
          { id: 2, text: "地點推測是在台灣東部的山區。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "接著，" },
          { id: 2, text: "傳說的起源也浮現了，" },
          { id: 3, text: "似乎與一樁小鎮少女的神秘失蹤案有關。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "幾年前的某一天，" },
          { id: 2, text: "少女放學後，" },
          { id: 3, text: "獨自走在回家的路上，" },
          { id: 4, text: "可是，" },
          { id: 5, text: "她的母親再也沒有等到女兒。" },
          { id: 6, text: "她就這樣……" },
          { id: 7, text: "在半路上憑空消失了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "少女叫什麼名字？" },
          { id: 2, text: "幾歲？" },
          { id: 3, text: "有沒有報警？" },
          { id: 4, text: "她媽媽有沒有哭得很傷心？" },
          { id: 5, text: "在網路上完全搜尋不到任何新聞報導。" },
          { id: 6, text: "彷彿……" },
          { id: 7, text: "這起案件也跟著少女的腳步，" },
          { id: 8, text: "一同消失在鎮上的迷霧之中。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "據說，" },
          { id: 2, text: "少女最後在手機上傳出的訊息，" },
          { id: 3, text: "就是那一篇詭異的小鎮觀光導覽。" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 13,
        type: "N",
        sound: require("./sound/00-05.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 人文字訊息
        chatSN: 14,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "歡迎您進入X Stories的世界！",
      },
      {
        // 人圖片訊息
        chatSN: 15,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        img: require("./images/M00-00.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 16,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "我是誰並不重要。如果，您還是想知道……可以點擊我的頭像，您將得到更多資訊。",
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "我的任務……是透過文字、圖片、聲音、影像，讓您感受到閱讀故事的魅力。",
      },
      {
        // 人文字訊息
        chatSN: 18,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "那麼，您做好準備了嗎？故事即將解鎖了……",
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 19,
        type: "N",
        sound: require("./sound/00-06.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白影片訊息
        chatSN: 20,
        type: "N",
        videpDirection: "col",
        video: require("./video/C02.mp4"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "本故事純屬虛構，" },
          { id: 2, text: "與真實人物、事件、團體無關。" },
        ],
      },
    ],
  },
  {
    backSN: 2,
    backImg: require("./back/S01-06-08.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　北巫鎮上" }],
      },
      {
        // 旁白文字訊息，有底色
        chatSN: 2,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "第一幕　歸鄉" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "山路上搖搖晃晃的公車，" },
          { id: 2, text: "載我回到了逃避多年的故鄉。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "北巫鎮……" },
          { id: 2, text: "位於蘭陽平原邊陲，" },
          { id: 3, text: "一座山谷裡的溫泉小鎮，" },
          { id: 4, text: "也是我從小長大的地方。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "鎮上自古有一個傳說，" },
          { id: 2, text: "就是在森林裡棲息著女巫。" },
          { id: 3, text: "為了隱藏她的行蹤，" },
          { id: 4, text: "她施展起法術，" },
          { id: 5, text: "讓這座小鎮長年瀰漫著大霧。" },
          { id: 6, text: "所以，" },
          { id: 7, text: "先民們將此地取名為北巫鎮。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "坐了將近一個小時的車，" },
          { id: 2, text: "公車總算到站了，" },
          { id: 3, text: "只有兩、三名乘客在此下車。" },
          { id: 4, text: "我故意走在最後面，" },
          { id: 5, text: "跟他們保持一段距離。" },
          { id: 6, text: "因為，" },
          { id: 7, text: "我才不是什麼觀光客呢！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "挺無聊的舉動，" },
          { id: 2, text: "天知道我在堅持些什麼？" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 8,
        type: "N",
        img: require("./images/D01-01-21.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "一陣涼爽的秋風，" },
          { id: 2, text: "吹來了微微濕潤的薄霧。" },
          { id: 3, text: "深山的雲靄……" },
          { id: 4, text: "混合著溫泉的煙硝，" },
          { id: 5, text: "散發出一股這座小鎮獨特的味道。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "我並不討厭，" },
          { id: 2, text: "但也說不上喜歡，" },
          { id: 3, text: "只是聞著聞著，" },
          { id: 4, text: "就這樣習慣了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "在冬天來臨前，" },
          { id: 2, text: "都還算是北巫鎮溫泉的淡季。" },
          { id: 3, text: "今天又不是假日，" },
          { id: 4, text: "老街上有點冷清，" },
          { id: 5, text: "遊客並不多，" },
          { id: 6, text: "小吃攤與土產店也愛開不開的。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "那最好！" },
          { id: 2, text: "千萬別讓我碰見什麼熟人！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "所以，" },
          { id: 2, text: "我低著頭，" },
          { id: 3, text: "視線避免跟任何人接觸，" },
          { id: 4, text: "就這樣一路穿過了老街。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "不需要誰來跟我打招呼，" },
          { id: 2, text: "我認得你們！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "老媽叫我去買醬油的雜貨鋪、" },
          { id: 2, text: "放學後最愛逗留的點心店，" },
          { id: 3, text: "還有那個多送我一顆滷蛋的麵攤老闆。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "不需要你們的提醒，" },
          { id: 2, text: "我全都記得！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "畢竟，" },
          { id: 2, text: "人一回到故鄉，" },
          { id: 3, text: "就會被逼著勾起很多往事，" },
          { id: 4, text: "也不管你懷不懷念。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [{ id: 1, text: "偏偏本人就是屬於不懷念的那一種。" }],
      },
    ],
  },
  {
    backSN: 3,
    backImg: require("./back/S02-01-02.jpg"), 
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, .3)",
        },
        text: [{ id: 1, text: "白天　溫泉旅館大街" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "把老街甩在腦後，" },
          { id: 2, text: "我爬上了一條坡道，" },
          { id: 3, text: "來到了有名的溫泉旅館街，" },
          { id: 4, text: "本鎮最繁榮的地區，" },
          { id: 5, text: "但除了在旅館工作的人之外，" },
          { id: 6, text: "本地人幾乎不會來這兒。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "外地來的商家……" },
          { id: 2, text: "在這條街上蓋了很多間溫泉旅館，" },
          { id: 3, text: "給了觀光客造訪北巫鎮最正當的理由，" },
          { id: 4, text: "大家可以不買廉價土產，" },
          { id: 5, text: "卻絕對不會不泡溫泉。" },
          { id: 6, text: "如果少了這個景點，" },
          { id: 7, text: "這裡跟其他鄉下地方，" },
          { id: 8, text: "根本沒什麼兩樣。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 4,
        type: "N",
        img: require("./images/D01-01-03.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "老媽在這附近開了一間溫泉旅館，" },
          { id: 2, text: "聽起來好像很令人羨慕，" },
          { id: 3, text: "但請不要擅自腦補，" },
          { id: 4, text: "以為她會是日劇裡穿著和服的溫泉女將。" },
          { id: 5, text: "那就是一家很普通的老店，" },
          { id: 6, text: "有一位很俗的老闆娘，" },
          { id: 7, text: "整天窩在櫃台看電視。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "我完全可以想像，" },
          { id: 2, text: "班上同學要是聽到我家開溫泉旅館，" },
          { id: 3, text: "一定會跑來纏著我說：" },
          { id: 4, text: "莎葉，" },
          { id: 5, text: "寒假我們就去你家玩吧！" },
          { id: 6, text: "包下整間旅館，" },
          { id: 7, text: "在露天池邊開趴，" },
          { id: 8, text: "一邊喝酒，" },
          { id: 9, text: "一邊泡湯，" },
          { id: 10, text: "光想就超嗨的！" },
          { id: 11, text: "怎麼樣？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "不用了，" },
          { id: 2, text: "謝謝。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "與其打槍那個爛同學的爛主意，" },
          { id: 2, text: "我寧可什麼也不說。" },
          { id: 3, text: "所以，" },
          { id: 4, text: "在四年的大學生涯裡，" },
          { id: 5, text: "我從沒提過自己來自北巫鎮，" },
          { id: 6, text: "這個跟年輕人流行話題扯不上關係的小鎮，" },
          { id: 7, text: "在我與同學們的聊天中，" },
          { id: 8, text: "一次也沒出現過。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "我甚至有種錯覺，" },
          { id: 2, text: "那個小鎮……" },
          { id: 3, text: "其實只存在於另一個平行宇宙。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 10,
        type: "N",
        img: require("./images/D01-02-12.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "沒想到，" },
          { id: 2, text: "四年就這麼過去了。" },
          { id: 3, text: "大家常說，" },
          { id: 4, text: "畢業就是失業，" },
          { id: 5, text: "我就是其中一個。" },
          { id: 6, text: "既然宿舍都已經退租了，" },
          { id: 7, text: "返鄉……" },
          { id: 8, text: "就成了我不得已的選擇。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "我不否認，" },
          { id: 2, text: "我喜歡台北，" },
          { id: 3, text: "喜歡颱風天去KTV唱歌，" },
          { id: 4, text: "喜歡半夜跑去吃麻辣鍋，" },
          { id: 5, text: "喜歡去哪裡都可以坐捷運，" },
          { id: 6, text: "喜歡跟別人說自己住在台北。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "台北什麼都有！" },
          { id: 2, text: "這裡……" },
          { id: 3, text: "卻只有我殘破不堪的回憶。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 14,
        type: "N",
        img: require("./images/D01-02-27.jpg"),
      },
    ],
  },
  {
    backSN: 4,
    backImg: require("./back/S01-02-01.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　月蘭溫泉旅館門口" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "終於還是回來了。" },
          { id: 2, text: "我正站在自己家的溫泉旅館門口，" },
          { id: 3, text: "這家店名叫作「月蘭」，" },
          { id: 4, text: "跟我老媽的名字一樣。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "創業的第一代老闆是我外公，" },
          { id: 2, text: "他在鎮上經營溫泉業四十多年，" },
          { id: 3, text: "當初以女兒的名字來為旅館命名，" },
          { id: 4, text: "想必是對我老媽有什麼期望吧？" },
          { id: 5, text: "而在外公過世後，" },
          { id: 6, text: "她也理所當然地繼承了這間老店。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "可是，" },
          { id: 2, text: "旅館的生意卻是一年不如一年，" },
          { id: 3, text: "主要都是被新興的溫泉旅館搶走了客人。" },
          { id: 4, text: "為了維持生計，" },
          { id: 5, text: "老媽後來想出了一個點子，" },
          { id: 6, text: "那就是把旅館當作居酒屋來開，" },
          { id: 7, text: "好吸引本地人前來消費。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "不得不說，" },
          { id: 2, text: "這招還滿成功的。" },
          { id: 3, text: "唯一的缺點，" },
          { id: 4, text: "就是晚上常常忙不過來。" },
          { id: 5, text: "因為，" },
          { id: 6, text: "除了老闆娘，" },
          { id: 7, text: "服務生就只有我一個。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "老媽就是這麼狂，" },
          { id: 2, text: "讓一個七歲的小女生，" },
          { id: 3, text: "一手端著金牌台啤，" },
          { id: 4, text: "一手捧著大盤生魚片，" },
          { id: 5, text: "穿梭在滿身酒臭味的歐吉桑之間。" },
          { id: 6, text: "這絕對違反了勞基法，" },
          { id: 7, text: "還有社會善良風俗！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "我不是沒有罷工過，" },
          { id: 2, text: "但她每次都會對我大喊：" },
          { id: 3, text: "怎樣？" },
          { id: 4, text: "不爽做嗎？" },
          { id: 5, text: "去跟你老爸說啊！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "她明知道，" },
          { id: 2, text: "我找不到他，" },
          { id: 3, text: "我老爸早就不知道溜哪兒去了。" },
          { id: 4, text: "算了，" },
          { id: 5, text: "那又是另一段故事了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "扯了一堆舊事，" },
          { id: 2, text: "我人還在門口徘徊，" },
          { id: 3, text: "直到我看見一個熟客搖搖晃晃地走來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "真糟糕！" },
          { id: 2, text: "那是酒鬼伯，" },
          { id: 3, text: "又是一早就喝得醉醺醺的。" },
          { id: 4, text: "他正瞇著眼睛，" },
          { id: 5, text: "似乎認出了我。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "只要他一開口，" },
          { id: 2, text: "就會說那句老話：" },
          { id: 3, text: "莎葉，" },
          { id: 4, text: "你變漂亮了喔！" },
          { id: 5, text: "從我七歲說到現在，" },
          { id: 6, text: "每一次聽到，" },
          { id: 7, text: "都不覺得是被稱讚。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "不能再猶豫了，" },
          { id: 2, text: "想溜趁現在！" },
          { id: 3, text: "我連忙快步走進了旅館中。" },
        ],
      },
    ],
  },
  {
    backSN: 5,
    backImg: require("./back/S02-02-05.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天  月蘭溫泉旅館" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "在國小三年級的時候，" },
          { id: 2, text: "我就學會了怎麼做統計表，" },
          { id: 3, text: "記錄著每年每個月上門的客人數量，" },
          { id: 4, text: "比準備期末考還要認真。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "其實，" },
          { id: 2, text: "我只是想找出一套摸魚的最佳模式。" },
          { id: 3, text: "往年，" },
          { id: 4, text: "九月的平均來客數都只有個位數，" },
          { id: 5, text: "這就是為什麼我會挑這個時間點回來。" },
          { id: 6, text: "再晚一個月，" },
          { id: 7, text: "就會邁入北巫鎮的溫泉旺季了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "也就是說，" },
          { id: 2, text: "我還有一個月的時間，" },
          { id: 3, text: "可以想出逃離這裡的計畫。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 5,
        type: "N",
        img: require("./images/D01-03-01.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "我一走進玄關，" },
          { id: 2, text: "沒見到半個客人，" },
          { id: 3, text: "就連老闆娘也不在櫃台。" },
          { id: 4, text: "放眼望去，" },
          { id: 5, text: "大廳一片空蕩蕩的。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [{ id: 1, text: "統計學萬歲！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "我隨手把包包一丟，" },
          { id: 2, text: "挖出藏在櫃台下方的一包魷魚絲，" },
          { id: 3, text: "打開袋子，" },
          { id: 4, text: "邊走邊吃了起來，" },
          { id: 5, text: "順便找尋老媽的蹤影……" },
          { id: 6, text: "只是順便而已。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "如果她不在，" },
          { id: 2, text: "我乾脆把店門拉下來好了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "就在這時，" },
          { id: 2, text: "我聽見鍋爐間傳來聲響，" },
          { id: 3, text: "便朝那裡走去。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "鍋爐間裡，" },
          { id: 2, text: "老媽正在燒著熱水。" },
          { id: 3, text: "我咬斷一根魷魚絲，" },
          { id: 4, text: "跟她打了聲招呼。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我回來了。",
      },
      {
        // 人文字訊息
        chatSN: 13,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "喔。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "老媽態度冷淡，" },
          { id: 2, text: "反倒讓我有點不爽。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 15,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "就這樣？",
      },
      {
        // 人文字訊息
        chatSN: 16,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "你大學四年，一次也沒回來過，讓我一個人在這邊忙得要死，現在是想怎樣？要我放鞭炮迎接你嗎？你想得美！",
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "算了。反正，我也沒期待。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "我盯著老媽在弄鍋爐，" },
          { id: 2, text: "主動表達關心。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "幫客人燒水呀？",
      },
      {
        // 人文字訊息
        chatSN: 20,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "不然，難道是你老媽要洗澡啊！我一個臉盆就搞定了。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [{ id: 1, text: "還是熟悉的老媽最對味。" }],
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "真難得，淡季還有人來呀？",
      },
      {
        // 人文字訊息
        chatSN: 23,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "你想泡湯就快去，問那麼多幹嘛？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "果然是知女莫若母，" },
          { id: 2, text: "我的心機都被她看透了。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 25,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "既然水都放了，多一個人泡也沒差呀！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "我家就是開溫泉旅館，" },
          { id: 2, text: "如果還不趁機免費泡湯，" },
          { id: 3, text: "那人生還有什麼意義呢？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "旅館二樓最後一間就是我的臥房。" },
          { id: 2, text: "稍作整理後，" },
          { id: 3, text: "我換上浴衣，" },
          { id: 4, text: "前往一樓的大眾池。" },
        ],
      },
    ],
  },
  {
    backSN: 6,
    backImg: require("./back/S01-04-09.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, .3)",
        },
        text: [{ id: 1, text: "白天　露天浴場" }],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 2,
        type: "N",
        sound: require("./sound/01-02.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "剛走進更衣室，" },
          { id: 2, text: "空蕩蕩的櫃子上，" },
          { id: 3, text: "已經放了一個裝著衣服的籃子。" },
          { id: 4, text: "很顯然地，" },
          { id: 5, text: "這位淡季的客人是位女性，" },
          { id: 6, text: "而且，" },
          { id: 7, text: "比我搶先了一步。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "也許，" },
          { id: 2, text: "有人會認為，" },
          { id: 3, text: "跟客人一起使用大眾池不太禮貌，" },
          { id: 4, text: "可我又不是員工，" },
          { id: 5, text: "是老闆娘的女兒嘛！" },
          { id: 6, text: "就算被認出來，" },
          { id: 7, text: "反正，" },
          { id: 8, text: "我臉皮厚，" },
          { id: 9, text: "管他的！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "迅速脫完了衣服，" },
          { id: 2, text: "我拉開浴場的門，" },
          { id: 3, text: "一陣白煙撲面而來。" },
          { id: 4, text: "大眾池內，" },
          { id: 5, text: "一位年輕女孩正在泡湯，" },
          { id: 6, text: "池面映出了她纖細的身形。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 6,
        type: "N",
        img: require("./images/D01-04-04.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "我安安靜靜地沖洗完，" },
          { id: 2, text: "這才踏進大眾池中，" },
          { id: 3, text: "刻意跟對方保持一段距離。" },
          { id: 4, text: "不過，" },
          { id: 5, text: "我稍微瞄了對方一眼。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "嗯，" },
          { id: 2, text: "她長得很漂亮，" },
          { id: 3, text: "屬於甜美陽光型的，" },
          { id: 4, text: "跟我完全相反。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [{ id: 1, text: "還是專心泡湯好了。" }],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 10,
        type: "N",
        sound: require("./sound/01-02-01.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "其實，" },
          { id: 2, text: "也不用那麼專心。" },
          { id: 3, text: "雖然北巫鎮的溫泉是硫磺泉，" },
          { id: 4, text: "據說對皮膚很好，" },
          { id: 5, text: "但這麼多年以來，" },
          { id: 6, text: "我一直都當它是洗澡水罷了。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 12,
        type: "N",
        img: require("./images/D01-08-04.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "一不小心，" },
          { id: 2, text: "我跟那女孩四目交會了。" },
          { id: 3, text: "儘管我別開了視線，" },
          { id: 4, text: "眼角餘光還是偷看到，" },
          { id: 5, text: "她依然在看著我。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "一直盯著我看就算了，" },
          { id: 2, text: "她一副還想要開口跟我說話的樣子……" },
          { id: 3, text: "怎麼辦？" },
          { id: 4, text: "我最不擅長應付這種人了。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 15,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "你也是來那個的嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [{ id: 1, text: "哪個？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "非常莫名其妙的開場白。" },
          { id: 2, text: "偏偏整個大眾池內，" },
          { id: 3, text: "只有我跟她兩個人。" },
          { id: 4, text: "不用懷疑，" },
          { id: 5, text: "她就是在跟我說話。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "在我一臉錯愕的時候，" },
          { id: 2, text: "她緩緩朝我游來，" },
          { id: 3, text: "只有趕快回答，" },
          { id: 4, text: "才能解除這個尷尬的場面。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "呃……我不曉得你在說哪個，但我並不是。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "我不曉得她的問題，" },
          { id: 2, text: "也不曉得自己在回答什麼。" },
          { id: 3, text: "幸好，" },
          { id: 4, text: "對方還是接收到了正確的訊息。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "……對不起，大概是我誤會了。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [{ id: 1, text: "我蠢蠢地點了點頭。" }],
      },
      {
        // 人文字訊息
        chatSN: 23,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "因為，你長得很厭世的樣子。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "她笑了起來，" },
          { id: 2, text: "笑容真可愛。" },
          { id: 3, text: "雖然她好像在嘲笑我，" },
          { id: 4, text: "但我反倒覺得她很坦率。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 25,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "好像有點熱了，我先上去囉！",
      },
      {
        // 旁白圖片訊息
        chatSN: 26,
        type: "N",
        img: require("./images/D01-04-23.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "她正想要站起身時，" },
          { id: 2, text: "我忽然叫住了她。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 28,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你……不多泡一會兒嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 29,
        type: "N",
        text: [
          { id: 1, text: "她沒有多問，" },
          { id: 2, text: "大概是看出我的表情變了。" },
          { id: 3, text: "她繼續泡在溫泉中，" },
          { id: 4, text: "跟著我的視線，" },
          { id: 5, text: "看向了池邊的那一片圍籬。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [
          { id: 1, text: "沒錯！" },
          { id: 2, text: "有個傢伙正趴在圍籬上偷窺，" },
          { id: 3, text: "馬上就被我認出來。" },
          { id: 4, text: "又是你，" },
          { id: 5, text: "酒鬼伯！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 31,
        type: "N",
        text: [
          { id: 1, text: "我瞪了他一眼，" },
          { id: 2, text: "眼神絕對冰冷，" },
          { id: 3, text: "差不多可以殺死人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 32,
        type: "N",
        text: [
          { id: 1, text: "果然，" },
          { id: 2, text: "下一秒鐘，" },
          { id: 3, text: "酒鬼伯就慌張地把頭縮了回去，" },
          { id: 4, text: "倉皇消失在圍籬後頭。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 33,
        type: "N",
        text: [
          { id: 1, text: "那女孩鬆了一口氣，" },
          { id: 2, text: "接著又笑了起來。" },
          { id: 3, text: "她真的很愛笑！" },
        ],
      },
    ],
  },
  {
    backSN: 7,
    backImg: require("./back/S03-04-03.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "傍晚　月蘭溫泉旅館" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "老媽在廚房裡一邊切著市場買來的鮭魚，" },
          { id: 2, text: "一邊聽著我抱怨連連。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 3,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你圍牆是不是該修一修了？酒鬼伯又跑來偷看了！",
      },
      {
        // 人文字訊息
        chatSN: 4,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "真是的！這個老番癲！每次唸他，他都給我借酒裝瘋，等下我再過去罵他幾句。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "我眼睛盯著切好的生魚片，" },
          { id: 2, text: "本能就把手指當成筷子，" },
          { id: 3, text: "伸了過去。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 6,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "喂！這很貴的！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "我的手腳生疏了，" },
          { id: 2, text: "以前的我……" },
          { id: 3, text: "是絕對不會被老媽的巴掌打中。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 8,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "好啦！給客人送餐去。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "很好！" },
          { id: 2, text: "偷吃的機會來了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "我端著餐盤，" },
          { id: 2, text: "往一樓的客房走去。" },
          { id: 3, text: "今晚，" },
          { id: 4, text: "那位陽光女孩是旅館唯一的旅客。" },
          { id: 5, text: "在我的統計表中，" },
          { id: 6, text: "年輕女子獨自在淡季來這裡投宿，" },
          { id: 7, text: "可以說是非常罕見。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "忍不住又想起她在大眾池說的話，" },
          { id: 2, text: "不免對她產生了一絲好奇心。" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 12,
        type: "N",
        sound: require("./sound/01-04.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 人文字訊息
        chatSN: 13,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "您好，我送晚餐過來了。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "我在敲門後走進客房內，" },
          { id: 2, text: "瞧見她穿著寬鬆的浴袍，" },
          { id: 3, text: "斜靠在窗邊發呆。" },
          { id: 4, text: "剛泡完湯的她，" },
          { id: 5, text: "臉上紅通通的。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "我把餐盤放在桌上，" },
          { id: 2, text: "除了豐盛的菜餚，" },
          { id: 3, text: "還有一壺熱好的清酒。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 16,
        type: "N",
        img: require("./images/D01-06-50.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "她靜靜地看著我完成工作，" },
          { id: 2, text: "才笑著開口跟我說話。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 18,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "原來，你是老闆娘的女兒。",
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "是啊！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [{ id: 1, text: "我大方承認。" }],
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "要不要一起來喝一杯？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [{ id: 1, text: "我愣了一下。" }],
      },
      {
        // 人文字訊息
        chatSN: 23,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……我不陪客人喝酒的。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "她眨著大眼睛，" },
          { id: 2, text: "像在撒嬌似的。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 25,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "那陪朋友可以嗎？",
      },
      {
        // 人文字訊息
        chatSN: 26,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我連你叫什麼都不知道。",
      },
      {
        // 人文字訊息
        chatSN: 27,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "桑妮……那我們現在是朋友了嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "桑妮主動站起身來，" },
          { id: 2, text: "拉著我的手臂，" },
          { id: 3, text: "讓我在桌前坐下。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 29,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "拜託嘛！一個人喝酒……好寂寞喔！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [
          { id: 1, text: "桑妮斟滿了兩杯溫酒，" },
          { id: 2, text: "一杯遞到我的面前。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 31,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "來，乾杯！",
      },
      {
        // 人文字訊息
        chatSN: 32,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……我叫莎葉。",
      },
      {
        // 人文字訊息
        chatSN: 33,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "乾杯，莎葉。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 34,
        type: "N",
        text: [
          { id: 1, text: "我舉杯跟桑妮的杯子碰了一下。" },
          { id: 2, text: "她一口氣乾完，" },
          { id: 3, text: "我並沒有喝，" },
          { id: 4, text: "又把杯子放下。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 35,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "對了，你明天有空嗎？我想去鎮上逛逛，你願意當我的導遊嗎？",
      },
      {
        // 人文字訊息
        chatSN: 36,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "其實，這裡沒什麼好逛的，不用人帶路也沒關係。",
      },
      {
        // 人文字訊息
        chatSN: 37,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "可是，我要去的景點……有一點特別喔！",
      },
      {
        // 人文字訊息
        chatSN: 38,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "什麼景點？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 39,
        type: "N",
        text: [
          { id: 1, text: "桑妮忽然收起了笑容，" },
          { id: 2, text: "一臉神秘兮兮的模樣。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 40,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "……你有聽過「神隱之路」嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 41,
        type: "N",
        text: [
          { id: 1, text: "那一瞬間，" },
          { id: 2, text: "我的心臟劇烈地跳動了一下。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 42,
        type: "N",
        text: [
          { id: 1, text: "桑妮注意到我的表情變了，" },
          { id: 2, text: "眼睛都亮了起來。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 43,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "你聽過，對吧？我就知道。",
      },
      {
        // 人文字訊息
        chatSN: 44,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……是誰告訴你的？",
      },
      {
        // 人文字訊息
        chatSN: 45,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "在一個網路論壇上推薦的秘密景點，已經變成有名的都市傳說了。據說，很多年前，鎮上有個女孩子在回家途中，就這樣憑空消失了。如果，你獨自一個人，照著這條路線走完，也會跟她一樣「被消失」。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 46,
        type: "N",
        text: [
          { id: 1, text: "桑妮的話才一說完，" },
          { id: 2, text: "我忽然從位子上站起。" },
          { id: 3, text: "任誰都看得出來，" },
          { id: 4, text: "我生氣了！" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 47,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你們覺得，這樣很好玩嗎？很浪漫嗎？別鬧了！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 48,
        type: "N",
        text: [
          { id: 1, text: "在情緒繼續失控前，" },
          { id: 2, text: "我頭也不回地離開了客房，" },
          { id: 3, text: "留下一臉錯愕的桑妮。" },
        ],
      },
    ],
  },
  {
    backSN: 8,
    backImg: require("./back/S02-02-01.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "夜晚　莎葉房間" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "回家的第一個晚上，" },
          { id: 2, text: "我就失眠了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "我無法不在意桑妮說的話，" },
          { id: 2, text: "一股煩燥的感覺在心頭揮之不去，" },
          { id: 3, text: "就好像你在土裡深埋了一口上鎖的鐵箱，" },
          { id: 4, text: "沒想到，" },
          { id: 5, text: "有一天，" },
          { id: 6, text: "卻發現有人把它挖了出來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "在床上翻來覆去，" },
          { id: 2, text: "不知過了多久，" },
          { id: 3, text: "還是睡不著覺。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "終於，" },
          { id: 2, text: "我還是忍不住打開了手機，" },
          { id: 3, text: "在網路論壇上搜尋『神隱之路』的都市傳說。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "最初，" },
          { id: 2, text: "它只是存在於網友們的鍵盤上。" },
          { id: 3, text: "然而，" },
          { id: 4, text: "就在今年，" },
          { id: 5, text: "這則傳說有了令人意想不到的展開。" },
          { id: 6, text: "『北巫鎮』的關鍵字……" },
          { id: 7, text: "浮出了水面。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "那是一名背包客在旅行時的發現。" },
          { id: 2, text: "他途經北巫鎮，" },
          { id: 3, text: "忽然覺得這地方與那則傳說的背景很相似，" },
          { id: 4, text: "地理條件也很吻合。" },
          { id: 5, text: "於是，" },
          { id: 6, text: "他被好奇心所驅使，" },
          { id: 7, text: "便在鎮上打聽有沒有少女失蹤事件。" },
          { id: 8, text: "結果，" },
          { id: 9, text: "又浮現了另一個關鍵字：『羅心艾』。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "羅心艾……" },
          { id: 2, text: "是當地某戶農家的子女。" },
          { id: 3, text: "六年前，" },
          { id: 4, text: "她離家出走，" },
          { id: 5, text: "再也沒有回來。" },
          { id: 6, text: "就當地人的說法，" },
          { id: 7, text: "這只是一起單純的逃家事件。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "但網友們覺得並不單純，" },
          { id: 2, text: "神秘小鎮、失蹤少女……" },
          { id: 3, text: "原來都是真人真事，" },
          { id: 4, text: "反倒刺激他們一探究竟的動力。" },
          { id: 5, text: "於是，" },
          { id: 6, text: "陸續有人也跑去了北巫鎮，" },
          { id: 7, text: "並去走一趟跟少女同樣的失蹤路線。" },
          { id: 8, text: "不知道是誰先命名的？" },
          { id: 9, text: "『神隱之路』……" },
          { id: 10, text: "後來就成了某種黑暗景點。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "大家在網路上分享著另類的觀光心得。" },
          { id: 2, text: "然而，" },
          { id: 3, text: "隨著愈來愈多的情報被揭露，" },
          { id: 4, text: "真相卻更撲朔迷離。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "其中，" },
          { id: 2, text: "北巫鎮的女巫傳說，" },
          { id: 3, text: "增添了這起失蹤事件更加詭異的色彩。" },
          { id: 4, text: "有人宣稱，" },
          { id: 5, text: "在森林裡拍到了少女的靈異照片；" },
          { id: 6, text: "有人認為，" },
          { id: 7, text: "少女成了女巫的祭品……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "看到這裡，" },
          { id: 2, text: "我斷然關掉了手機。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "我心裡知道，" },
          { id: 2, text: "那口鐵箱上的鎖……" },
          { id: 3, text: "尚未被人打開。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "因為，" },
          { id: 2, text: "這個鎮上……" },
          { id: 3, text: "有太多你們不知道的秘密。" },
        ],
      },
    ],
  },
  {
    backSN: 9,
    backImg: require("./back/S02-02-05.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "清晨　月蘭溫泉旅館櫃檯" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "窗外天亮了，" },
          { id: 2, text: "到底是我太早醒了，" },
          { id: 3, text: "還是根本沒睡著呢？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "我懶洋洋地走下樓，" },
          { id: 2, text: "在廚房覓食了一陣子，" },
          { id: 3, text: "最後卻什麼也不想吃，" },
          { id: 4, text: "又關上了冰箱。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "我打了一個大大的哈欠，" },
          { id: 2, text: "準備走回房間補眠。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "這時，" },
          { id: 2, text: "我聽見玄關傳來了聲音，" },
          { id: 3, text: "走近一看，" },
          { id: 4, text: "桑妮正在櫃台跟老媽交談。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 6,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "早安，你要退房了嗎？",
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "不是，只是出去逛逛。",
      },
      {
        // 人文字訊息
        chatSN: 8,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "記得退房時間是十一點。",
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我今晚還要住這裡。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "老媽顯然在懷疑自己是不是聽錯了，" },
          { id: 2, text: "這個小鎮根本沒必要住上兩晚。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "沒問題、沒問題，那我晚上一樣幫你準備晚餐。",
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "謝謝你，老闆娘。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "桑妮露出淺淺的微笑。" },
          { id: 2, text: "可是，" },
          { id: 3, text: "在我看來，" },
          { id: 4, text: "她的笑容不如之前的燦爛，" },
          { id: 5, text: "帶著一絲絲憂鬱。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "那一刻，" },
          { id: 2, text: "我忽然有種罪惡感，" },
          { id: 3, text: "後悔昨晚把氣出在她身上。" },
          { id: 4, text: "仔細想想，" },
          { id: 5, text: "她又沒做錯什麼。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "反觀老媽的心情卻很好，" },
          { id: 2, text: "大概是客人續住一晚的關係吧！" },
          { id: 3, text: "她主動詢問桑妮。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 16,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "你想好要去逛哪裡了嗎？",
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "嗯，有點想法了，只不過，這裡的路不熟就是了。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "老媽遠遠就看見了我，" },
          { id: 2, text: "馬上出了餿主意。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "叫我女兒帶你去吧！她從小在這裡長大的，想去哪裡，她都可以帶你去。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "其實，" },
          { id: 2, text: "桑妮應該早就發現我站在後面了。" },
          { id: 3, text: "她順勢轉過身來，" },
          { id: 4, text: "再次對我提出邀約。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "那太好了！你願意陪我嗎？",
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "可是，我還有事要忙……",
      },
      {
        // 人文字訊息
        chatSN: 23,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "沒有、沒有，你很閒。快點去換衣服，今天，這就是你的工作。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "老媽搶著替我答應。" },
          { id: 2, text: "真是多管閒事！" },
        ],
      },
    ],
  },
  {
    backSN: 10,
    backImg: require("./back/S02-01-02.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, .3)",
        },
        text: [{ id: 1, text: "白天　溫泉旅館大街" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "北巫鎮的一年之中，" },
          { id: 2, text: "大約有兩百天會起霧，" },
          { id: 3, text: "平均有一百天是在下雨，" },
          { id: 4, text: "剩下的才是陰天跟晴天。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "沒想到，" },
          { id: 2, text: "今天竟然就是個大晴天。" },
          { id: 3, text: "看樣子，" },
          { id: 4, text: "這位桑妮小姐人如其名，" },
          { id: 5, text: "是個不折不扣的大晴女。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "因為內疚的關係，" },
          { id: 2, text: "我才答應當桑妮的導遊，" },
          { id: 3, text: "不過，" },
          { id: 4, text: "心裡還是排斥這項差事。" },
          { id: 5, text: "這次返鄉……" },
          { id: 6, text: "我自認夠低調了，" },
          { id: 7, text: "本來打定主意，" },
          { id: 8, text: "能不出門就不出門，" },
          { id: 9, text: "現在可好了！" },
          { id: 10, text: "陪著觀光客一起逛大街？" },
          { id: 11, text: "坦白說，" },
          { id: 12, text: "太招搖了！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "走在溫泉街上，" },
          { id: 2, text: "我想著自己的困擾，" },
          { id: 3, text: "不知道身旁的桑妮又在想什麼呢？" },
          { id: 4, text: "我們兩人就這樣沉默了好一陣子……" },
          { id: 5, text: "終於，" },
          { id: 6, text: "我忍不住先開口了。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 6,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "那個……對不起。昨晚心情不好，才會……",
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我沒有生氣呀！",
      },
      {
        // 人文字訊息
        chatSN: 8,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你一定覺得……被罵得莫名其妙吧？",
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "還好，但我有話想說。",
      },
      {
        // 人文字訊息
        chatSN: 10,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你想說什麼？",
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我不是你想的那種人。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "她指的……" },
          { id: 2, text: "應該是那群來神隱之路「朝聖」的網友吧！" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 13,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我並不是想湊熱鬧，也不覺得這是一件有趣的事情。我是很認真的，你看！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "桑妮拿起了手機，" },
          { id: 2, text: "在我面前滑了起來。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 15,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我把羅心艾失蹤事件的各種情報，都整理在我的記事本裡，我還畫了一張神隱之路的地圖呢！",
      },
      {
        // 人文字訊息
        chatSN: 16,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "真的嗎？我看看。",
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我直接傳給你吧！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "在桑妮半強迫下，" },
          { id: 2, text: "我只好跟她交換了聯絡方式" },
          { id: 3, text: "也立刻收到了她傳來的圖片。" },
        ],
      },
      {
        // 人圖片訊息
        chatSN: 19,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        img: require("./images/M01-11.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "畫風雖然簡陋，" },
          { id: 2, text: "但光看到這些熟悉的地點，" },
          { id: 3, text: "已經讓我的頭隱隱作痛。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "在這起神秘的失蹤案件裡，總共有四位目擊者。他們的供詞……串起了這條路線。",
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……只要帶你走完這一趟，就沒我的事了吧？",
      },
      {
        // 人文字訊息
        chatSN: 23,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "如果，我們能平安走完的話……",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "桑妮半開玩笑地說著，" },
          { id: 2, text: "我卻完全笑不出來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "我又瞄了一眼那張地圖，" },
          { id: 2, text: "在神隱之路的起點上，" },
          { id: 3, text: "標示著「北巫國中」。" },
          { id: 4, text: "那是我們接下來的目標，" },
          { id: 5, text: "也是我的母校。" },
        ],
      },
    ],
  },
  {
    backSN: 11,
    backImg: require("./back/S01-09-19.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　北巫國中" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [{ id: 1, text: "一股不祥的預感揮之不去。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "這樣真的好嗎？" },
          { id: 2, text: "你不是已經成功欺騙了自己，" },
          { id: 3, text: "把這起失蹤事件徹底封印在記憶裡嗎？" },
          { id: 4, text: "為什麼還要再走一次這條路？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [{ id: 1, text: "內心的聲音警告著我。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "來不及了！" },
          { id: 2, text: "此刻，" },
          { id: 3, text: "在我跟桑妮的眼前……" },
          { id: 4, text: "便是那所早已荒廢的校園，" },
          { id: 5, text: "我們就這樣呆站在校門前。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 6,
        type: "N",
        img: require("./images/D02-10-07.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "果然進不去呢？就跟網路上說的一樣，這所國中……好像已經廢校了。",
      },
      {
        // 人文字訊息
        chatSN: 8,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "因為校舍太老舊的關係，後來也沒再改建，學生都改去鄰鎮的國中上課了。",
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "是喔！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "桑妮的回答……" },
          { id: 2, text: "跟她的表情完全相反，" },
          { id: 3, text: "總覺得她有點興奮。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "是啊！這沒什麼好看的。我們走吧！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "我人都轉身走了好幾步，" },
          { id: 2, text: "回頭一看，" },
          { id: 3, text: "卻發現桑妮一動也不動。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 13,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "你看、你看！這圍牆又不高，我們合作應該爬得過去吧？既然人都來了，怎麼能不進去探險一下呢？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "果然！" },
          { id: 2, text: "我就知道……" },
          { id: 3, text: "她沒那麼好打發！" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 15,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……走這邊。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "反正都要爬牆了，" },
          { id: 2, text: "不如找個更好爬的地方。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "國中時代……" },
          { id: 2, text: "我也做過同樣的事，" },
          { id: 3, text: "不一樣的是……" },
          { id: 4, text: "以前我是爬出學校，" },
          { id: 5, text: "現在卻是要跳進去。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "而當年跟我一道爬牆的，" },
          { id: 2, text: "也是一個女孩子。" },
          { id: 3, text: "真是可怕的巧合！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "熟門熟路的我，" },
          { id: 2, text: "帶領桑妮從矮牆闖入了校園。" },
          { id: 3, text: "兩人走在這年久失修的老舊校舍裡，" },
          { id: 4, text: "周遭一片靜悄悄的，" },
          { id: 5, text: "明明是晴朗的大白天，" },
          { id: 6, text: "卻還是有股不知從哪兒來的寒氣。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 20,
        type: "N",
        img: require("./images/D01-12-51.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "桑妮一邊到處瀏覽，" },
          { id: 2, text: "一邊對照著手機記事本上的情報。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "羅心艾失蹤事件的第一位目擊者，據說是她的國中同學。六年前的那一天，放學時，這位同學本來要跟羅心艾一起回家，結果臨時被老師留下，只好向羅心艾道別，然後便目送她走出了校門口。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [{ id: 1, text: "我斜眼瞄了一下桑妮的手機。" }],
      },
      {
        // 人文字訊息
        chatSN: 24,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "這是『神隱之路觀光指南』上說的嗎？",
      },
      {
        // 人文字訊息
        chatSN: 25,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "啊？這又不是什麼觀光指南？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "我當然知道！" },
          { id: 2, text: "那只是我的諷刺而已。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 27,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "這些網路情報……都怎麼來的？",
      },
      {
        // 人文字訊息
        chatSN: 28,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我也不是很清楚，大家就這樣傳來傳去。不過，我整理出來的……都是得到最多人認可的情報。",
      },
      {
        // 人文字訊息
        chatSN: 29,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你真的相信這種網路流言？",
      },
      {
        // 人文字訊息
        chatSN: 30,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "一半一半吧！所以，我才要來這裡親身體驗呀！",
      },
      {
        // 人文字訊息
        chatSN: 31,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我很好奇……走過這條路的那些網友們，真的有人因此消失嗎？",
      },
      {
        // 人文字訊息
        chatSN: 32,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "是沒聽說過。但我是這麼想的……就算有人消失了，也沒有人知道，對吧？就像老師叫沒來的人請舉手一樣，當然沒人會舉手呀！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 33,
        type: "N",
        text: [
          { id: 1, text: "似是而非的比喻……" },
          { id: 2, text: "讓我無法反駁。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 34,
        type: "N",
        text: [
          { id: 1, text: "我走到一間教室前停了下來，" },
          { id: 2, text: "只見窗戶上佈滿了灰塵，" },
          { id: 3, text: "就好像我的回憶一樣。" },
          { id: 4, text: "我伸出食指，" },
          { id: 5, text: "輕輕地劃過玻璃，" },
          { id: 6, text: "刮出了一道痕跡。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 35,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "你以前讀過這裡嗎？",
      },
      {
        // 人文字訊息
        chatSN: 36,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……我是這裡最後一屆的畢業生。",
      },
      {
        // 人文字訊息
        chatSN: 37,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "有個問題……我一直想問你……不知道現在可以問嗎？",
      },
      {
        // 人文字訊息
        chatSN: 38,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你想問什麼？",
      },
      {
        // 人文字訊息
        chatSN: 39,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "你認識羅心艾，對吧？",
      },
      {
        // 人文字訊息
        chatSN: 40,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "學校裡每個人都認識她……大家都叫她小艾。",
      },
      {
        // 人文字訊息
        chatSN: 41,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "那你跟她熟嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 42,
        type: "N",
        text: [{ id: 1, text: "我沒有回答。" }],
      },
      {
        // 旁白圖片訊息
        chatSN: 43,
        type: "N",
        img: require("./images/D01-12-58.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 44,
        type: "N",
        text: [{ id: 1, text: "我跟小艾是怎麼湊在一塊兒的呢？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 45,
        type: "N",
        text: [
          { id: 1, text: "雖然讀同一所國中，" },
          { id: 2, text: "但我們並不同班。" },
          { id: 3, text: "更何況，" },
          { id: 4, text: "我是老師眼中的資優生，" },
          { id: 5, text: "而小艾的成績卻總是吊車尾。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 46,
        type: "N",
        text: [
          { id: 1, text: "不過，" },
          { id: 2, text: "如果是比誰的人緣最爛，" },
          { id: 3, text: "那我跟她大概分別排名第一與第二了吧！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 47,
        type: "N",
        text: [
          { id: 1, text: "基本上，" },
          { id: 2, text: "學校的同學都是北巫鎮的子女，" },
          { id: 3, text: "不管你家是茶葉行還是養雞場、" },
          { id: 4, text: "不管你爺爺是大地主，" },
          { id: 5, text: "還是你舅舅是鎮民代表，" },
          { id: 6, text: "孩子們都一清二楚。" },
          { id: 7, text: "所以，" },
          { id: 8, text: "當你被霸凌的時候，" },
          { id: 9, text: "那就是他們拿來取笑你的最佳素材。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 48,
        type: "N",
        text: [
          { id: 1, text: "莎葉，" },
          { id: 2, text: "我們放學後要去泡溫泉，" },
          { id: 3, text: "要不要來幫我們刷背呀？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 49,
        type: "N",
        text: [
          { id: 1, text: "對了，" },
          { id: 2, text: "我們想邊喝可樂邊泡湯，" },
          { id: 3, text: "順便給我們倒兩杯吧！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 50,
        type: "N",
        text: [
          { id: 1, text: "喂喂喂！" },
          { id: 2, text: "不要擺臭臉喔！" },
          { id: 3, text: "客人最大！" },
          { id: 4, text: "客人就是神！" },
          { id: 5, text: "你媽沒教過你嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 51,
        type: "N",
        text: [{ id: 1, text: "那群壞男生總是喜歡當面羞辱我。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 52,
        type: "N",
        text: [
          { id: 1, text: "我永遠記得帶頭的那幾個傢伙……" },
          { id: 2, text: "黃克洋、李正翰、林義賢……" },
          { id: 3, text: "我甚至把他們的名字寫在了小紙人上，" },
          { id: 4, text: "可見那時候我有多恨他們！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 53,
        type: "N",
        text: [
          { id: 1, text: "國中那些年……" },
          { id: 2, text: "我變得很孤僻又自卑，" },
          { id: 3, text: "在學校幾乎不跟同學說話，" },
          { id: 4, text: "直到我認識了小艾……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 54,
        type: "N",
        text: [
          { id: 1, text: "只顧著想以前的往事，" },
          { id: 2, text: "我一回過神來，" },
          { id: 3, text: "發現桑妮已經走遠了。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 55,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "喂，你別亂跑呀！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 56,
        type: "N",
        text: [
          { id: 1, text: "我快步追了上去，" },
          { id: 2, text: "沒想到，" },
          { id: 3, text: "卻在下一個轉角跟丟了她。" },
        ],
      },
    ],
  },
  {
    backSN: 12,
    backImg: require("./back/S01-09-15.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　校園一角" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [{ id: 1, text: "到底跑哪兒去了？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "我在校舍裡繞來繞去，" },
          { id: 2, text: "一時找不到桑妮的蹤影。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "待在這裡愈久，" },
          { id: 2, text: "我腦海中的回憶……" },
          { id: 3, text: "就愈不受控制地冒了出來……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "……小艾……" },
          { id: 2, text: "是學校裡出了名的怪胎。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "她並不是常見的那種問題學生。" },
          { id: 2, text: "成績很糟糕是一回事，" },
          { id: 3, text: "但她最讓人頭痛的……" },
          { id: 4, text: "是她不受控制，" },
          { id: 5, text: "尤其是無法乖乖坐在教室裡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "上課時，" },
          { id: 2, text: "她總是一副坐不住的樣子，" },
          { id: 3, text: "不時大聲地自言自語，" },
          { id: 4, text: "嚴重影響到同班的師生。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "下課時，" },
          { id: 2, text: "也不曉得她人跑哪兒去了？" },
          { id: 3, text: "根本不理會鐘聲響起，" },
          { id: 4, text: "簡直把教室當成自己家，" },
          { id: 5, text: "愛進來就愛進來，" },
          { id: 6, text: "愛出去就出去。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "小艾的爸媽管不了她，" },
          { id: 2, text: "學校也拿她沒輒，" },
          { id: 3, text: "只好放任她在學校自由來去。" },
          { id: 4, text: "所以，" },
          { id: 5, text: "當大家都在上課的時候，" },
          { id: 6, text: "她總是一個人在空蕩的校舍裡遊蕩。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "我常常從教室的窗戶裡，" },
          { id: 2, text: "看見她的身影一晃而過，" },
          { id: 3, text: "讓我留下深刻的印象。" },
          { id: 4, text: "可是，" },
          { id: 5, text: "除了我之外，" },
          { id: 6, text: "其他人都不想理她，" },
          { id: 7, text: "就算看見……" },
          { id: 8, text: "也會裝作沒看見的樣子。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "彷彿……" },
          { id: 2, text: "小艾是一縷在白天出沒的幽靈。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "我的心思突然被拉回現實。" },
          { id: 2, text: "就在我穿過走廊時，" },
          { id: 3, text: "赫然看見陰暗的角落裡，" },
          { id: 4, text: "閃過了一道人影。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "是錯覺嗎？" },
          { id: 2, text: "那一瞬間，" },
          { id: 3, text: "我彷彿又看見當年的小艾。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "我快步追了過去，" },
          { id: 2, text: "才一轉彎，" },
          { id: 3, text: "就差點撞到了迎面而來的桑妮。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 15,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "哇！你嚇了我一跳！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [{ id: 1, text: "這是我要說的話吧！" }],
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "廢棄的學校……果然有點恐怖呢！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "嘴巴上說很可怕，" },
          { id: 2, text: "但是又敢到處亂跑……" },
          { id: 3, text: "我說，" },
          { id: 4, text: "小姐你會不會太矛盾了？" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我逛得差不多了……我們去下一站吧！",
      },
      {
        // 旁白圖片訊息
        chatSN: 20,
        type: "N",
        img: require("./images/D01-12-41.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "這次，" },
          { id: 2, text: "被催促人的卻是我。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "怎麼了嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "我呆望著中庭，" },
          { id: 2, text: "那一片花圃裡的花花草草早已全枯死了。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 24,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "……這裡……是不是對你有什麼特別的回憶呀？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "並不是浪漫的校園劇情節，" },
          { id: 2, text: "而是……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [{ id: 1, text: "我忍不住脫口而出。" }],
      },
      {
        // 人文字訊息
        chatSN: 27,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……那一天，並不是什麼放學後……那時，我們早已經國中畢業，這裡也廢校了。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "桑妮一時沒會意過來。" },
          { id: 2, text: "我繼續糾正『觀光指南』上的錯誤。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 29,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "學校只有我跟小艾兩個人，所以……也不是什麼老師把我留下。我們是在校門口道別，我就這樣看著她一個人離開。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [{ id: 1, text: "桑妮瞪大了眼睛。" }],
      },
      {
        // 人文字訊息
        chatSN: 31,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "所以，你就是……",
      },
      {
        // 人文字訊息
        chatSN: 32,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……我就是第一位目擊者。",
      },
      {
        // 人文字訊息
        chatSN: 33,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "真的假的？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 34,
        type: "N",
        text: [{ id: 1, text: "桑妮幾乎興奮地跳了起來。" }],
      },
      {
        // 人文字訊息
        chatSN: 35,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "很多人走過這條神隱之路，卻沒有一個人知道這項情報。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 36,
        type: "N",
        text: [{ id: 1, text: "桑妮熱情地握住了我的手。" }],
      },
      {
        // 人文字訊息
        chatSN: 37,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "能在這裡遇見你，真是太好了！莎葉，有了你……我們一定可以解開神隱之路的秘密！",
      },
    ],
  },
  {
    backSN: 13,
    backImg: require("./back/S02-03-01.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　鎮史館附近" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "離開北巫國中後，" },
          { id: 2, text: "我們來到了神隱之路的第二站……" },
          { id: 3, text: "『鎮史館』。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "其實，" },
          { id: 2, text: "在抵達這裡之前，" },
          { id: 3, text: "會先經過一條三岔路口，" },
          { id: 4, text: "往右邊的路走，" },
          { id: 5, text: "會通向市鎮中心，" },
          { id: 6, text: "然後就是最熱鬧的老街；" },
          { id: 7, text: "而往左邊的路走，" },
          { id: 8, text: "才是地處偏僻的鎮史館。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "我們仿傚小艾失蹤當天的行程，" },
          { id: 2, text: "選擇了左邊的路。" },
          { id: 3, text: "但我總是在想，" },
          { id: 4, text: "如果當天……" },
          { id: 5, text: "小艾選擇了另一條路，" },
          { id: 6, text: "她的命運是否會有所改變呢？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "桑妮望向座落在樹林裡的紅色館邸，" },
          { id: 2, text: "又開始對照著手機上的觀光指南。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 6,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "第二位目擊者……就是這間鎮史館的館長。他叫林鈞堂，是一位鄉土研究學者。他說，那天下午……羅心艾曾經來過館內，隨意逛了一下後，她連聲招呼也沒打，就這樣離開了。",
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "嗯。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "我在嗯什麼嗯呀？" },
          { id: 2, text: "莎葉，" },
          { id: 3, text: "別讓人看出你心不在焉啊！" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "這裡好像可以自由參觀……走，我們也進去逛一逛吧！",
      },
      {
        // 人文字訊息
        chatSN: 10,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你去吧……我在外面等你。",
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "咦，怎麼不一起進去？",
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "因為……裡面滿無聊的。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "不管我敷衍的回答，" },
          { id: 2, text: "桑妮到底相不相信？" },
          { id: 3, text: "總之，" },
          { id: 4, text: "她並沒有勉強我，" },
          { id: 5, text: "接著便一個人走進了鎮史館的大門。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 14,
        type: "N",
        img: require("./images/D03-08-38.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [{ id: 1, text: "我真虛偽！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "表面上答應了桑妮，" },
          { id: 2, text: "要一起合作解開小艾失蹤的真相；" },
          { id: 3, text: "背地裡，" },
          { id: 4, text: "我卻隱瞞了很多事情。" },
          { id: 5, text: "這就像是我偷藏了幾片拼圖在口袋裡，" },
          { id: 6, text: "明知道這會害人永遠無法拼出事件的全貌。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [{ id: 1, text: "但我絕對不是犯人。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "我也不曉得小艾為什麼會失蹤？" },
          { id: 2, text: "很顯然地，" },
          { id: 3, text: "偷藏拼圖的人……" },
          { id: 4, text: "不只有我一個。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "我更沒料到……" },
          { id: 2, text: "整起事件比過去變得更加複雜……" },
          { id: 3, text: "現在，" },
          { id: 4, text: "竟然還出現了『神隱之路觀光指南』？" },
          { id: 5, text: "讓我有種說不出的怪異。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "愈想就愈可疑。" },
          { id: 2, text: "不說別的，" },
          { id: 3, text: "光是這些目擊者的供詞，" },
          { id: 4, text: "如果不是鎮上的人洩露出去，" },
          { id: 5, text: "外人又怎麼會知道呢？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "無論是誰傳出去的，" },
          { id: 2, text: "做這種事到底又有什麼好處呢？" },
          { id: 3, text: "總不會認真想促進觀光吧？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "別傻了！" },
          { id: 2, text: "誰會做這種蠢事？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "不知不覺……" },
          { id: 2, text: "過了半個小時，" },
          { id: 3, text: "桑妮終於走出了鎮史館，" },
          { id: 4, text: "一開口就分享她的參觀心得。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 24,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "沒你說的無聊呢！而且，館長還滿帥的。",
      },
      {
        // 人文字訊息
        chatSN: 25,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……你的觀光指南上沒說嗎？",
      },
      {
        // 人文字訊息
        chatSN: 26,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "當然有……只是想自己確認看看。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [{ id: 1, text: "你要確認的不是這種情報吧？" }],
      },
      {
        // 人文字訊息
        chatSN: 28,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你有沒有問他……關於小艾那天失蹤的事情？",
      },
      {
        // 人文字訊息
        chatSN: 29,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "本來想問……結果還是不好意思開口。倒是聽了他的導覽，在館內參觀了一圈。",
      },
      {
        // 人文字訊息
        chatSN: 30,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……是嗎？通常不會有人想聽那個導覽。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 31,
        type: "N",
        text: [{ id: 1, text: "桑妮卻說得很起勁。" }],
      },
      {
        // 人文字訊息
        chatSN: 32,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我覺得很有趣呀！原來，這裡以前是詩人莊士郎的故居。我是沒聽過他啦！但館長說，他是北巫鎮上最有名的人，不只會寫詩，還是畫家，多才多藝……他的作品記錄了北巫鎮最美好的一切。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 33,
        type: "N",
        text: [
          { id: 1, text: "熟悉的台詞在我耳邊重現，" },
          { id: 2, text: "讓我想起了很久以前的那次導覽。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 34,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "自從莊士郎過世以後，這棟房子就被改建成鎮史館了。館長說，他很仰慕這位詩人，才會自願來這兒擔任館長。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 35,
        type: "N",
        text: [
          { id: 1, text: "桑妮一邊說，" },
          { id: 2, text: "一邊頻頻回望鎮史館，" },
          { id: 3, text: "彷彿館長此刻會站在二樓露台上，" },
          { id: 4, text: "笑著向她揮手似的。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 36,
        type: "N",
        text: [
          { id: 1, text: "其實並沒有。" },
          { id: 2, text: "露台上空無一人。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 37,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "來這一趟很值得。網路上並沒有這項情報喔！我應該是第一個聽過館長導覽的人吧！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 38,
        type: "N",
        text: [
          { id: 1, text: "桑妮說了一大串感想，" },
          { id: 2, text: "這才注意到我的反應有點冷淡。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 39,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "……不過，你是本地人……應該早就知道了吧？",
      },
      {
        // 人文字訊息
        chatSN: 40,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "只要是在北巫鎮長大的人，都知道一件事……就是絕對不要踏進這座鎮史館。",
      },
      {
        // 人文字訊息
        chatSN: 41,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "為什麼？",
      },
      {
        // 人文字訊息
        chatSN: 42,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "鎮上傳說……這房子鬧鬼。",
      },
      {
        // 人文字訊息
        chatSN: 43,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "真的假的？",
      },
      {
        // 人文字訊息
        chatSN: 44,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "不過，外地人不用擔心。就算有鬼，也只會糾纏這個小鎮的人。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 45,
        type: "N",
        text: [
          { id: 1, text: "我的眼神不經意地又飄向了館邸的露台，" },
          { id: 2, text: "依然沒半個人影。" },
        ],
      },
    ],
  },
  {
    backSN: 14,
    backImg: require("./back/S01-05-07.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　老街" }],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 2,
        type: "N",
        sound: require("./sound/01-01.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "鎮上幾乎所有的主要道路……" },
          { id: 2, text: "都會連到老街，" },
          { id: 3, text: "也是聯絡外界的出口，" },
          { id: 4, text: "唯一的公車站就設在那裡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "昨天剛搭車回來的時候，" },
          { id: 2, text: "還以為我會暫時避開老街這塊區域……" },
          { id: 3, text: "沒想到，" },
          { id: 4, text: "才隔不到一天，" },
          { id: 5, text: "我又跑來了。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 5,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "老街並不在你的路線上。",
      },
      {
        // 人文字訊息
        chatSN: 6,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我知道呀！這裡人來人往的，羅心艾如果那天有經過的話，目擊者就不會只有四個了。",
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "還是說……這裡可以問到什麼情報？",
      },
      {
        // 人文字訊息
        chatSN: 8,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "情報是有，但最好不要亂問。這是『神隱之路觀光指南』的友善提醒。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "看來，" },
          { id: 2, text: "桑妮被我影響……" },
          { id: 3, text: "認可了被我諷刺的那個專有名詞。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 10,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "是不是有人跑來問東問西，結果惹店家不爽了，對吧？",
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "就是說啊！現在好像一提到羅心艾的事情，他們臉就會很臭，根本不想理你。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [{ id: 1, text: "桑妮看了我一眼。" }],
      },
      {
        // 人文字訊息
        chatSN: 13,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "就像昨晚……我很白目地問你，你就生氣了……所以，我不會再多問其他人了。",
      },
      {
        // 人文字訊息
        chatSN: 14,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……那我們來這裡做什麼？",
      },
      {
        // 人文字訊息
        chatSN: 15,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "為了感謝你當我的導遊呀！我請客！看你想吃什麼都可以。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "桑妮這麼一說……" },
          { id: 2, text: "我就不好意思拒絕了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "我陪著桑妮走在老街上，" },
          { id: 2, text: "她被一間土產專賣店所吸引，" },
          { id: 3, text: "逗留在店門口東看看、西瞧瞧。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "桑妮剛拿起一瓶小米酒，" },
          { id: 2, text: "正要詢問老闆時，" },
          { id: 3, text: "她卻發現原本滿臉堆笑的老闆，" },
          { id: 4, text: "竟瞬間變了臉，" },
          { id: 5, text: "整個人僵在原地。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "桑妮覺得不太對勁，" },
          { id: 2, text: "她匆匆放下小米酒，" },
          { id: 3, text: "快步離開了那間土產店。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "確定走遠後，" },
          { id: 2, text: "桑妮才小小聲對我說。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "奇怪，我又沒問羅心艾的事……為什麼那老闆好像看到鬼似的？",
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……不用在意，他們就是這樣。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "是的，" },
          { id: 2, text: "他的確看到鬼了。" },
          { id: 3, text: "因為，" },
          { id: 4, text: "站在這位美女觀光客背後的……" },
          { id: 5, text: "正是一個背叛故鄉的討厭鬼。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [{ id: 1, text: "這就是我不想來老街的理由。" }],
      },
      {
        // 人文字訊息
        chatSN: 25,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "街上這麼多店……有沒有推薦什麼好吃的？",
      },
      {
        // 人文字訊息
        chatSN: 26,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……去那一攤好了。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "我指向角落的一處攤販，" },
          { id: 2, text: "老闆是個年輕小伙子。" },
          { id: 3, text: "我從沒見過他，" },
          { id: 4, text: "肯定是來這兒賺觀光財的外地人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "小伙子老闆見我們走近，" },
          { id: 2, text: "攬客的態度十分積極。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 29,
        type: "P",
        speaker: "L",
        name: "阿彥",
        photo: require("./profile/Yen.png"),
        text: "兩位小姐，要試試看我們的地獄烤香腸嗎？這可是北巫鎮的獨家名產喔！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [{ id: 1, text: "我聽了忍不住吐槽。" }],
      },
      {
        // 人文字訊息
        chatSN: 31,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "是嗎？我怎麼是第一次聽過。",
      },
      {
        // 人文字訊息
        chatSN: 32,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "可是，還滿特別的耶！",
      },
      {
        // 人文字訊息
        chatSN: 33,
        type: "P",
        speaker: "L",
        name: "阿彥",
        photo: require("./profile/Yen.png"),
        text: "沒錯！我們的地獄烤香腸……用的是本地的山豬肉，經過炭烤後，再加上我獨門的地獄辣醬，絕對辣得過癮，讓你有下地獄的感覺！哈哈哈……",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 34,
        type: "N",
        text: [
          { id: 1, text: "不用一直強調地獄啦！" },
          { id: 2, text: "你跟地獄很熟嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 35,
        type: "N",
        text: [{ id: 1, text: "桑妮轉頭詢問我。" }],
      },
      {
        // 人文字訊息
        chatSN: 36,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "好像挺不錯的……要吃吃看嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 37,
        type: "N",
        text: [{ id: 1, text: "我擺出一副不想吃的表情。" }],
      },
      {
        // 人文字訊息
        chatSN: 38,
        type: "P",
        speaker: "L",
        name: "阿彥",
        photo: require("./profile/Yen.png"),
        text: "不然，這樣好了……我免費送兩位美女試吃，怎麼樣？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 39,
        type: "N",
        text: [{ id: 1, text: "桑妮也奉送了美女的免費微笑。" }],
      },
      {
        // 人文字訊息
        chatSN: 40,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "真的嗎？老闆人真好。",
      },
      {
        // 人文字訊息
        chatSN: 41,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……我不用了……我不吃辣。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 42,
        type: "N",
        text: [{ id: 1, text: "非要我說得這麼直白嗎？" }],
      },
      {
        // 人文字訊息
        chatSN: 43,
        type: "P",
        speaker: "L",
        name: "阿彥",
        photo: require("./profile/Yen.png"),
        text: "我也可以做不辣的。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 44,
        type: "N",
        text: [
          { id: 1, text: "老闆不給我們拒絕的機會，" },
          { id: 2, text: "便自顧自地烤起香腸來。" },
          { id: 3, text: "不一會兒，" },
          { id: 4, text: "就做出了一份地獄烤香腸，" },
          { id: 5, text: "上頭淋了滿滿的辣醬，" },
          { id: 6, text: "然後遞給了桑妮。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 45,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "謝謝！看起來好好吃喔！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 46,
        type: "N",
        text: [
          { id: 1, text: "偶然間，" },
          { id: 2, text: "我的目光瞄到了香腸攤的旁邊，" },
          { id: 3, text: "那裡是一間老字號的小吃店，" },
          { id: 4, text: "而正在舀肉羹的人……" },
          { id: 5, text: "不是我印象中的胖子老闆，" },
          { id: 6, text: "而是我的國中同班同學。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 47,
        type: "N",
        text: [
          { id: 1, text: "視線來不及閃躲，" },
          { id: 2, text: "我與對方四目交會了。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 48,
        type: "P",
        speaker: "L",
        name: "玉梅",
        photo: require("./profile/May.png"),
        backColor: "#F2D9DE",
        text: "……莎葉？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 49,
        type: "N",
        text: [
          { id: 1, text: "看到玉梅在小吃店掌廚的模樣，" },
          { id: 2, text: "已經頗有未來老闆娘的架勢，" },
          { id: 3, text: "反觀我卻在自家旅館做得不甘不願的……" },
          { id: 4, text: "要是老媽此刻人在旁邊，" },
          { id: 5, text: "保證會對我大酸特酸。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 50,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……嗨，好久不見。",
      },
      {
        // 人文字訊息
        chatSN: 51,
        type: "P",
        speaker: "L",
        name: "玉梅",
        photo: require("./profile/May.png"),
        backColor: "#F2D9DE",
        text: "你……真的回來了。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 52,
        type: "N",
        text: [
          { id: 1, text: "如果可以的話，" },
          { id: 2, text: "我也不想回來啊！" },
          { id: 3, text: "心裡雖然這麼想，" },
          { id: 4, text: "可是，" },
          { id: 5, text: "聽她的語意……" },
          { id: 6, text: "還是感到有點微妙。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 53,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "為什麼你好像很驚訝？",
      },
      {
        // 人文字訊息
        chatSN: 54,
        type: "P",
        speaker: "L",
        name: "玉梅",
        photo: require("./profile/May.png"),
        backColor: "#F2D9DE",
        text: "因為……他說，你會回來……沒想到是真的。",
      },
      {
        // 人文字訊息
        chatSN: 55,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "誰？誰說的？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 56,
        type: "N",
        text: [
          { id: 1, text: "小吃店突然傳來客人的呼喊聲，" },
          { id: 2, text: "玉梅慌忙地撇下與我的對話，" },
          { id: 3, text: "跑去招呼客人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 57,
        type: "N",
        text: [
          { id: 1, text: "偏偏我這一邊也挺忙的，" },
          { id: 2, text: "在這不恰當的時機，" },
          { id: 3, text: "桑妮正遞給我另一份地獄烤香腸。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 58,
        type: "N",
        img: require("./images/D01-07-04.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 59,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "老闆加了蕃茄醬……不會辣喔！",
      },
    ],
  },
  {
    backSN: 15,
    backImg: require("./back/S03-02-05.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　北巫橋附近" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "真的沒必要繞路去老街，" },
          { id: 2, text: "耽誤了原本的行程。" },
          { id: 3, text: "桑妮的好意……" },
          { id: 4, text: "我心領了，" },
          { id: 5, text: "但我並沒有變得比較開心。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "尤其是玉梅的那一番話，" },
          { id: 2, text: "令我耿耿於懷。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "遠離了喧嘩的人群，" },
          { id: 2, text: "我們延著蜿蜒的小徑而行，" },
          { id: 3, text: "沿途都沒碰到任何人。" },
          { id: 4, text: "這我倒不意外，" },
          { id: 5, text: "這一帶沒什麼景點，" },
          { id: 6, text: "就連本地人也很少來此。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "接著，" },
          { id: 2, text: "我們抵達了神隱之路的第三站……" },
          { id: 3, text: "一間生鏽破爛的鐵皮屋，" },
          { id: 4, text: "幾乎快被大片荒草淹沒，" },
          { id: 5, text: "只剩下野貓在此出沒。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 6,
        type: "N",
        img: require("./images/D01-07-05.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "你確定是這裡？",
      },
      {
        // 人文字訊息
        chatSN: 8,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "以前，這裡有一間雜貨店沒錯，只是……好幾年前就關門了。難道說……在你的觀光指南上，有人看過它開店的樣子嗎？",
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我也不太確定。上面只說……第三位目擊者是雜貨店的老闆。可是，好像沒人真正見過他。",
      },
      {
        // 人文字訊息
        chatSN: 10,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你說的老闆……應該是秋子婆婆。從我有記憶以來，她就在這裡開雜貨店。",
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "秋子？她是日本人嗎？",
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "不知道……就像沒人知道她到底活了幾歲？有人說，她是日本人的後代；也有人說，她在癡等一個早已戰死在南洋的愛人。",
      },
      {
        // 人文字訊息
        chatSN: 13,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "沒人問過她嗎？",
      },
      {
        // 人文字訊息
        chatSN: 14,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "問了也沒用。她會跟你說一大堆故事，然後，你都聽不懂她在講什麼。",
      },
      {
        // 人文字訊息
        chatSN: 15,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "所以，你有來過雜貨店買東西囉？",
      },
      {
        // 人文字訊息
        chatSN: 16,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "秋子婆婆的雜貨店……專賣一些古早年代的零食跟汽水。小時候，總會有些怪孩子特地跑來這裡……買這些怪東西來吃。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "我就是怪孩子的其中之一，" },
          { id: 2, text: "小艾也是。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "不過，" },
          { id: 2, text: "我都有乖乖付錢，" },
          { id: 3, text: "不像小艾……" },
          { id: 4, text: "她常趁著秋子婆婆打瞌睡的時候，" },
          { id: 5, text: "在店裡亂拆零食偷吃，" },
          { id: 6, text: "甚至塞進自己的包包裡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "後來，" },
          { id: 2, text: "我跟小艾做朋友以後，" },
          { id: 3, text: "她還是常常拿這些偷來的零食給我，" },
          { id: 4, text: "只是我都不吃。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "如今，" },
          { id: 2, text: "小艾不知去向，" },
          { id: 3, text: "雜貨店也倒閉了。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "秋子婆婆……還在嗎？",
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……聽說……已經往生了。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "桑妮默默地滑起手機，" },
          { id: 2, text: "完成她的例行公事。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 24,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "第三位目擊者……雜貨店的老闆……秋子婆婆……那天，她很確定……看見羅心艾經過雜貨店，往北巫橋走去，之後就再也沒有看見過她。",
      },
    ],
  },
  {
    backSN: 16,
    backImg: require("./back/S01-08-03.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, .3)",
        },
        text: [{ id: 1, text: "白天　北巫橋頭" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [{ id: 1, text: "就快要變天了……" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "站在吊橋上的我……" },
          { id: 2, text: "遙望著遠方。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "北巫鎮座落在深山峻谷之中，" },
          { id: 2, text: "天氣變化往往來得非常快，" },
          { id: 3, text: "上午燦爛的陽光已經蕩然無存，" },
          { id: 4, text: "陰沉的雲霧正在山嶺間逐漸蔓延。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "這趟旅程即將接近尾聲，" },
          { id: 2, text: "神隱之路的終點……" },
          { id: 3, text: "就在這座吊橋上。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 6,
        type: "N",
        img: require("./images/D03-01-12.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "最後一位目擊者……是羅心艾的另外一名國中同學。他說，自己親眼看到她站在吊橋上。那時，她人就站在橋中央，看起來像在發呆。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "桑妮模仿著小艾，" },
          { id: 2, text: "也走到了同樣的位置上。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "目擊者在橋上與羅心艾擦身而過後，卻沒有看到她走過橋來。等到他走到對岸、回頭再看向吊橋時，已經看不到她的蹤影。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "桑妮繼續走完吊橋，" },
          { id: 2, text: "並在橋頭轉過身來。" },
          { id: 3, text: "當然，" },
          { id: 4, text: "她看見我還站在橋上……" },
          { id: 5, text: "我並沒有消失。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "這就是羅心艾失蹤事件中，最關鍵、也最詭異的部份。第三位目擊者看到她往吊橋只去不回，第四位目擊者卻沒見到她過橋……也就是說，她就這樣憑空消失了。",
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "人……真的會憑空消失嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "桑妮又走回橋中央，" },
          { id: 2, text: "她抓著護欄，" },
          { id: 3, text: "俯瞰著橋底下。" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 14,
        type: "N",
        sound: require("./sound/01-06.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白圖片訊息
        chatSN: 15,
        type: "N",
        img: require("./images/D03-01-05.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 16,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "她會不會是摔下去了？",
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "警察在上下游都找過了，沒有任何人落水的痕跡。而且，當時的河水比現在更淺，就算人掉下橋去，也不會輕易被沖走。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "桑妮沉思了好一會兒，" },
          { id: 2, text: "又有了新的看法。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "人是不會消失……但人會說謊。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "這女孩比我想像中聰明。" },
          { id: 2, text: "我靜靜地聆聽著她的推理。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "你知道……第四位目擊者是誰嗎？他的證詞真的可以相信嗎？難道沒有人懷疑過他嗎？",
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "第四位目擊者其實並不是獨自前來，他的同伴比他早來一步，而他在過吊橋後，很快就跟同伴會合了。之後，他們都一起行動。警方盤問過這群人，大家的說法一致。警方認為，他們沒有理由串供說謊。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "桑妮所想的……" },
          { id: 2, text: "我曾經也想過，" },
          { id: 3, text: "卻依然找不到解答。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 24,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "真的找不到一點線索嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [{ id: 1, text: "我搖了搖頭。" }],
      },
      {
        // 人文字訊息
        chatSN: 26,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "……你也找過她，對吧？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "這條『神隱之路』……" },
          { id: 2, text: "我不知走過幾遍。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 28,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我的導覽結束了。我們回去吧！",
      },
      {
        // 人文字訊息
        chatSN: 29,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "……所以，就這樣了嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [
          { id: 1, text: "桑妮的神情顯得很失落。" },
          { id: 2, text: "也許，" },
          { id: 3, text: "她還是有點不甘心吧？" },
          { id: 4, text: "她轉移目光焦點，" },
          { id: 5, text: "看向了吊橋的另一端。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 31,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "再往前走是什麼？",
      },
      {
        // 人文字訊息
        chatSN: 32,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "那是上山的路。",
      },
      {
        // 人文字訊息
        chatSN: 33,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "它會通向哪裡？",
      },
      {
        // 人文字訊息
        chatSN: 34,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "並不通向哪裡……盡頭處只有一條死路。",
      },
      {
        // 人文字訊息
        chatSN: 35,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "那在死路的那一邊……又是什麼呢？",
      },
    ],
  },
  {
    backSN: 17,
    backImg: require("./back/S03-02-12.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　山路上" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "接下來的行程……" },
          { id: 2, text: "已經超出了神隱之路的路線外。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "連接北巫橋的這條山路……" },
          { id: 2, text: "十分狹窄難行，" },
          { id: 3, text: "寬度也僅容一輛車通過。" },
          { id: 4, text: "雖然說這是一條死路，" },
          { id: 5, text: "但山上並非什麼都沒有。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "再往上走五十公尺左右……" },
          { id: 2, text: "就是小艾的家。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "這一帶……" },
          { id: 2, text: "是她們家經營了好幾代的果園，" },
          { id: 3, text: "也因為住得太偏僻，" },
          { id: 4, text: "小艾不管是上學，" },
          { id: 5, text: "或是去鎮上其他地方，" },
          { id: 6, text: "都得下山，" },
          { id: 7, text: "穿過吊橋，" },
          { id: 8, text: "再走上好一大段路。" },
          { id: 9, text: "然後，" },
          { id: 10, text: "她回家又得再走一遍同樣的路。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "只有那一天例外。" },
          { id: 2, text: "明明離家只剩下五十公尺，" },
          { id: 3, text: "她的家人卻沒有等到她回來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "兩年前，" },
          { id: 2, text: "小艾的母親病逝了。" },
          { id: 3, text: "這是我聽老媽說的。" },
          { id: 4, text: "那段期間……" },
          { id: 5, text: "我都待在台北，" },
          { id: 6, text: "刻意逃避跟小艾相關的事。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "失去女兒的悲痛……" },
          { id: 2, text: "是否讓小艾的母親也失去了活著的意義呢？" },
          { id: 3, text: "對小艾一家人來說，" },
          { id: 4, text: "這是真真實實的家庭悲劇，" },
          { id: 5, text: "而不是存在於網路的都市傳說。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 9,
        type: "N",
        img: require("./images/D01-10-06.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 10,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "聽說，北巫鎮之所以叫作北巫鎮，是因為有個女巫的傳說，是嗎？",
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "嗯。從小，大人為了警告我們不要亂跑進山裡，就會嚇唬我們說，女巫會把闖進森林裡的人拐走。",
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "但是……真的有女巫住在這裡吧！",
      },
      {
        // 人文字訊息
        chatSN: 13,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……我不知道。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "山裡的這片森林……" },
          { id: 2, text: "被稱為『女巫森林』，" },
          { id: 3, text: "聽起來很可怕，" },
          { id: 4, text: "可是，" },
          { id: 5, text: "在某些人眼中，" },
          { id: 6, text: "這裡……" },
          { id: 7, text: "反而是一處適合幹壞事的三不管地帶。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "我就曾親眼看過，" },
          { id: 2, text: "黃克洋跟那群壞男生……" },
          { id: 3, text: "經常跑到森林裡頭喝酒抽菸，" },
          { id: 4, text: "徹夜狂歡。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 16,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我們進森林看看吧？",
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……最好不要。一不小心……可能會在裡面迷路。",
      },
      {
        // 人文字訊息
        chatSN: 18,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "只是稍微逛一下，不要走太遠就行了嘛！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "桑妮正想往森林走去，" },
          { id: 2, text: "被我一把拉住。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "因為，" },
          { id: 2, text: "就在這時……" },
          { id: 3, text: "一陣大霧席捲而來。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "起霧了，我們快走吧！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "我拉著桑妮趕緊往回走。" },
          { id: 2, text: "然而，" },
          { id: 3, text: "大霧來得又快又急，" },
          { id: 4, text: "轉眼間……" },
          { id: 5, text: "已將我們的身影吞沒。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 23,
        type: "N",
        img: require("./images/D01-10-64.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "長年瀰漫在北巫鎮的霧氣，" },
          { id: 2, text: "彷彿是女巫變幻不定的脾氣，" },
          { id: 3, text: "時大時小，" },
          { id: 4, text: "忽隱忽現，" },
          { id: 5, text: "事前沒有任何徵兆。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "說是伸手不見五指，" },
          { id: 2, text: "也許是誇張了點。" },
          { id: 3, text: "但當你身處於濃霧之中，" },
          { id: 4, text: "只要超過前面一個人三步，" },
          { id: 5, text: "就完全看不見對方。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "我牢牢握著桑妮的手，" },
          { id: 2, text: "感覺到她也緊張地抓著我不放。" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 27,
        type: "N",
        sound: require("./sound/01-05.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "忽然間，" },
          { id: 2, text: "我聽見了一陣金屬摩擦地面的怪聲，" },
          { id: 3, text: "伴隨著一道沉重的腳步聲，" },
          { id: 4, text: "由遠而近……" },
          { id: 5, text: "正朝我們而來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 29,
        type: "N",
        text: [
          { id: 1, text: "那是什麼聲音？" },
          { id: 2, text: "是誰來了？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [
          { id: 1, text: "看不見來者的身影，" },
          { id: 2, text: "讓我們不由得心跳加速，" },
          { id: 3, text: "本能停下了腳步，" },
          { id: 4, text: "屏住呼吸，" },
          { id: 5, text: "靜待對方現身。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 31,
        type: "N",
        text: [
          { id: 1, text: "大霧裡，" },
          { id: 2, text: "出現了一名模樣頹廢的中年男子。" },
          { id: 3, text: "他的肩上揹了一把土製獵槍，" },
          { id: 4, text: "雙手推著一輛載滿肥料的推車，" },
          { id: 5, text: "正緩緩走上山來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 32,
        type: "N",
        text: [
          { id: 1, text: "我立刻認出了對方。" },
          { id: 2, text: "那是小艾的爸爸……" },
          { id: 3, text: "人們都叫他『老羅』。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 33,
        type: "N",
        text: [
          { id: 1, text: "這也是聽我老媽說的。" },
          { id: 2, text: "老羅自從女兒失蹤、妻子病逝後，" },
          { id: 3, text: "經常在鎮上酗酒鬧事，" },
          { id: 4, text: "毆打鎮民，" },
          { id: 5, text: "好幾次被警察抓進了派出所，" },
          { id: 6, text: "現在都沒有人敢靠近他了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 34,
        type: "N",
        text: [{ id: 1, text: "可憐又可恨的大叔！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 35,
        type: "N",
        text: [
          { id: 1, text: "我們就在霧裡跟老羅擦身而過，" },
          { id: 2, text: "雙方沒有一句交談。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 36,
        type: "P",
        speaker: "L",
        name: "老羅",
        photo: require("./profile/Logan.png"),
        text: "……",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 37,
        type: "N",
        text: [
          { id: 1, text: "只見老羅瞪大著眼睛，" },
          { id: 2, text: "上下打量著我跟桑妮。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 38,
        type: "N",
        text: [{ id: 1, text: "令人很不舒服的眼神！" }],
      },
    ],
  },
  {
    backSN: 18,
    backImg: require("./back/S02-02-05.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　月蘭溫泉旅館" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "旅程總是這樣……" },
          { id: 2, text: "出發的時候覺得很遠，" },
          { id: 3, text: "回程的時候，" },
          { id: 4, text: "卻覺得一下子就到家了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "我平安帶著桑妮抵達了我家的溫泉旅館。" },
          { id: 2, text: "一路上，" },
          { id: 3, text: "我們幾乎沒說什麼話。" },
          { id: 4, text: "最後，" },
          { id: 5, text: "她只說自己累了，" },
          { id: 6, text: "便拖著腳步回房間休息。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "很顯然地，" },
          { id: 2, text: "這趟神隱之路並不如她的預期。" },
          { id: 3, text: "當走到終點時，" },
          { id: 4, text: "她整個人變得失魂落魄，" },
          { id: 5, text: "陽光般的笑容也沒了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "相反地，" },
          { id: 2, text: "我的胸口不知為何開始熱了起來……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "今天的這一場導覽……" },
          { id: 2, text: "意外解開了我塵封多年的心結。" },
          { id: 3, text: "我對小艾的記憶、" },
          { id: 4, text: "追查真相的決心、" },
          { id: 5, text: "不服輸的鬥志……" },
          { id: 6, text: "全都湧上了心頭。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "在展開行動之前，" },
          { id: 2, text: "我得先搞清楚一件事……" },
          { id: 3, text: "一個卡在我腦袋的懸念。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "我走進根本沒人在管的櫃台，" },
          { id: 2, text: "拿起電話，" },
          { id: 3, text: "立刻撥打到老街的那家小吃店。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……是玉梅嗎？是我……莎葉。",
      },
      {
        // 人文字訊息
        chatSN: 10,
        type: "P",
        speaker: "L",
        name: "玉梅",
        photo: require("./profile/May.png"),
        backColor: "#F2D9DE",
        text: "找我……有什麼事嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [{ id: 1, text: "玉梅一副支支吾吾的模樣。" }],
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我問你的問題……你還沒有回答我。是誰告訴你……我會回來的？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "電話的那一端……" },
          { id: 2, text: "沉默了許久。" },
          { id: 3, text: "再這樣下去，" },
          { id: 4, text: "對方很可能會掛斷電話。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "我只有一次機會！" },
          { id: 2, text: "大膽問吧！" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 15,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "是不是黃克洋？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "玉梅驚呼了一聲，" },
          { id: 2, text: "終於肯開口承認。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "L",
        name: "玉梅",
        photo: require("./profile/May.png"),
        backColor: "#F2D9DE",
        text: "……嗯。",
      },
      {
        // 人文字訊息
        chatSN: 18,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我回不回來……關他什麼事？",
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "L",
        name: "玉梅",
        photo: require("./profile/May.png"),
        backColor: "#F2D9DE",
        text: "我也不曉得……他為什麼要這麼說？這些年來，他變得怪怪的。有時候，還會突然說一些很嚇人的話……",
      },
      {
        // 人文字訊息
        chatSN: 20,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "像是什麼？",
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "L",
        name: "玉梅",
        photo: require("./profile/May.png"),
        backColor: "#F2D9DE",
        text: "有一次，他說……他……看見了鬼。",
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "啊？什麼鬼呀？",
      },
      {
        // 人文字訊息
        chatSN: 23,
        type: "P",
        speaker: "L",
        name: "玉梅",
        photo: require("./profile/May.png"),
        backColor: "#F2D9DE",
        text: "是……小艾的鬼魂。",
      },
    ],
  },
  {
    backSN: 19,
    backImg: require("./back/S01-02-01.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　月蘭溫泉旅館門口" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "我的宿敵黃克洋……" },
          { id: 2, text: "這傢伙的老家……" },
          { id: 3, text: "很不幸地就在我家旅館的對面。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "我到死都會記得……" },
          { id: 2, text: "他曾經嘲笑過我的那些話……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "有一次，" },
          { id: 2, text: "我在門口幫客人提行李，" },
          { id: 3, text: "好死不死地……" },
          { id: 4, text: "黃克洋正帶著他的狐群狗黨回他家。" },
          { id: 5, text: "他們就在這溫泉大街上，" },
          { id: 6, text: "把我當成了全鎮人的笑柄。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "喂，" },
          { id: 2, text: "你們知道嗎？" },
          { id: 3, text: "聽說，" },
          { id: 4, text: "莎葉的老爸……" },
          { id: 5, text: "其實是來住旅館的客人，" },
          { id: 6, text: "把她媽媽搞大肚子以後，" },
          { id: 7, text: "就落跑了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [{ id: 1, text: "難怪她沒有爸爸。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "誰說沒有？" },
          { id: 2, text: "搞不好，" },
          { id: 3, text: "那些歐吉桑裡頭……" },
          { id: 4, text: "有一個就是她爸爸呀！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "莎葉，" },
          { id: 2, text: "那個客人是不是你爸爸呀？" },
          { id: 3, text: "快過去叫爸爸呀！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [{ id: 1, text: "我從來沒有這麼丟臉過！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "帶著幾分怒氣，" },
          { id: 2, text: "我來到黃克洋的家門口，" },
          { id: 3, text: "按了幾次電鈴，" },
          { id: 4, text: "都沒有人出來應門。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "那傢伙不在也就算了，" },
          { id: 2, text: "連他家人也不在嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "我在屋外張望了一會兒，" },
          { id: 2, text: "正猶豫要不要再按一次電鈴，" },
          { id: 3, text: "忽然間，" },
          { id: 4, text: "我看見一個惹人厭的傢伙正從街上走來。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 13,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "黃克洋！",
      },
      {
        // 人文字訊息
        chatSN: 14,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "沒想到，" },
          { id: 2, text: "黃克洋一見到我……" },
          { id: 3, text: "居然拔腿就跑。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "我趕緊追了上去，" },
          { id: 2, text: "但那傢伙像在逃命似的，" },
          { id: 3, text: "故意在小巷子裡鑽來鑽去。" },
          { id: 4, text: "沒多久，" },
          { id: 5, text: "我就跟丟了他。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 17,
        type: "N",
        img: require("./images/D01-13-13.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "桑妮說得沒錯！" },
          { id: 2, text: "他果然很可疑。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "不只是他的異常舉動，" },
          { id: 2, text: "他說的那些鬼話……" },
          { id: 3, text: "還有當年他在北巫橋上的證詞……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "是的，" },
          { id: 2, text: "黃克洋……" },
          { id: 3, text: "就是失蹤案的第四位目擊者。" },
        ],
      },
    ],
  },
  {
    backSN: 20,
    backImg: require("./back/S02-02-05.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　月蘭溫泉旅館" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "愈想愈可惡……" },
          { id: 2, text: "黃克洋那小子跑得還真快！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "我打開冰箱，" },
          { id: 2, text: "拿起一罐汽水，" },
          { id: 3, text: "猛灌了幾口，" },
          { id: 4, text: "先消一消滿肚子的火氣。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "老媽走進了廚房，" },
          { id: 2, text: "把我從冰箱門口擠開，" },
          { id: 3, text: "逕自挑選晚餐的海鮮食材。" },
          { id: 4, text: "當然，" },
          { id: 5, text: "那是煮給客人吃的，" },
          { id: 6, text: "不是給我。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "無功而返……" },
          { id: 2, text: "讓我心裡很悶。" },
          { id: 3, text: "剛好看見老媽人在旁邊，" },
          { id: 4, text: "突然心念一動。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 6,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "喂，你還記得……我的國中同學黃克洋嗎？就是住在對面的那個傢伙。",
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "你說阿洋啊！當然記得……不就是暗戀你的男生嘛！",
      },
      {
        // 人文字訊息
        chatSN: 8,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "才不是！",
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "喔，不是暗戀，是單戀才對。",
      },
      {
        // 人文字訊息
        chatSN: 10,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你在亂說什麼啦？什麼戀都沒有！",
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "咦，我一直以為……他會跟你告白，難道沒有嗎？",
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "怎麼可能啦？",
      },
      {
        // 人文字訊息
        chatSN: 13,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "是不是他被你拒絕了，你才不好意思承認？",
      },
      {
        // 人文字訊息
        chatSN: 14,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你夠了喔！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "我跟老媽進行了一段超級沒營養的對話後，" },
          { id: 2, text: "實在懶得再理她……" },
          { id: 3, text: "我便將汽水空罐丟進垃圾桶，" },
          { id: 4, text: "隨即離開廚房。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "就在我穿過走廊時，" },
          { id: 2, text: "正好遇到了桑妮。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "桑妮換上了浴衣，" },
          { id: 2, text: "看樣子……" },
          { id: 3, text: "應該是要去泡湯。" },
          { id: 4, text: "可是，" },
          { id: 5, text: "她卻背朝著露天浴場的方向。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "我這才會意到，" },
          { id: 2, text: "桑妮是特地站在這裡等我。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "要一起來嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "說真的，" },
          { id: 2, text: "累了一整天的我……" },
          { id: 3, text: "實在太需要靠溫泉來療癒我身心的疲憊了。" },
        ],
      },
    ],
  },
  {
    backSN: 21,
    backImg: require("./back/S01-04-09.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, .3)",
        },
        text: [{ id: 1, text: "白天　露天溫泉" }],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 2,
        type: "N",
        sound: require("./sound/01-02.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白圖片訊息
        chatSN: 3,
        type: "N",
        img: require("./images/D01-15-12.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "熱呼呼的溫泉池水……" },
          { id: 2, text: "冉冉升起的霧氣……" },
          { id: 3, text: "讓我緊繃了一整天的情緒，" },
          { id: 4, text: "終於放鬆了下來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "同樣是霧……" },
          { id: 2, text: "森林裡那濕冷的大霧，" },
          { id: 3, text: "卻令人渾身發冷，" },
          { id: 4, text: "更別提我還深陷在小艾失蹤事件的迷霧中。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "桑妮找我一起泡湯，" },
          { id: 2, text: "一定是有話想跟我說。" },
          { id: 3, text: "我靜靜地浸在露天池裡，" },
          { id: 4, text: "一直等到她開口。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "上次泡湯的時候，我對你說了奇怪的話，對吧？",
      },
      {
        // 人文字訊息
        chatSN: 8,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……你說，我長得很厭世。",
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我是故意這麼說的，這樣才能引起你的注意。其實，我……才是最厭世的那一個。",
      },
      {
        // 人文字訊息
        chatSN: 10,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "但你看起來不像。",
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "呵，大家都這麼說。可是，我並不是來這裡觀光的。剛好相反，前一陣子，我……發生了很不好的事情……那時，我滿腦子都在想……要是能從這個世界上消失……該有多好！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "桑妮臉上的微笑……" },
          { id: 2, text: "幾乎讓人以為她在開玩笑，" },
          { id: 3, text: "可我知道她是認真的。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 13,
        type: "N",
        img: require("./images/D01-04-08.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 14,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "那段期間……我得了憂鬱症，整天在網路上搜尋……本來是想找自殺的地點，卻意外看到了神隱之路的都市傳說。我就這樣一頭栽進去了，徹底被這起神秘事件所吸引，反而讓我暫時忘記了痛苦。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "我看著桑妮……" },
          { id: 2, text: "她就像北巫鎮的陽光，" },
          { id: 3, text: "雖然看起來燦爛耀眼，" },
          { id: 4, text: "卻只是假象。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 16,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "每個人都想知道……那個少女消失去了哪裡？但我更想知道……為什麼偏偏是她，而不是別人？所以，我決定出發，親自來北巫鎮走一趟。",
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "結果讓你失望了嗎？",
      },
      {
        // 人文字訊息
        chatSN: 18,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我以為，到了這裡……走了這條路，就會領悟到什麼？可是，什麼也沒有。我這才發現，自己更害怕的是……走完了以後，我又該怎麼辦呢？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "桑妮的自白……" },
          { id: 2, text: "觸動了我壓抑已久的心。" },
          { id: 3, text: "我不想再隱瞞她了！" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 20,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我……也有話想跟你說。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "我要把關於小艾的事……" },
          { id: 2, text: "一五一十地告訴桑妮。" },
        ],
      },
    ],
  },
  {
    backSN: 22,
    backImg: require("./back/S03-03-01.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　北巫國中" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [{ id: 1, text: "我跟小艾的友誼並沒有維持太久。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "兩人的友誼開始變淡……" },
          { id: 2, text: "是在我考上了高中之後。" },
          { id: 3, text: "我第一次離開家鄉去台北唸書，" },
          { id: 4, text: "而小艾則是沒再繼續升學，" },
          { id: 5, text: "只是從在學校游蕩……" },
          { id: 6, text: "變成了在鎮上遊蕩。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "鎮民們一提起小艾，" },
          { id: 2, text: "就沒半句好話，" },
          { id: 3, text: "罵她是個小壞蛋。" },
          { id: 4, text: "有人說，" },
          { id: 5, text: "她有偷東西的壞毛病；" },
          { id: 6, text: "有人說，" },
          { id: 7, text: "她講話很白目，" },
          { id: 8, text: "常常得罪別人；" },
          { id: 9, text: "加上她爸本來就是出了名的惡霸……" },
          { id: 10, text: "所以，" },
          { id: 11, text: "大家都離她遠遠的。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "小艾唯一的朋友……" },
          { id: 2, text: "大概就只有我吧！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "在我的眼中，" },
          { id: 2, text: "小艾一點也不壞。" },
          { id: 3, text: "相反地，" },
          { id: 4, text: "她的個性很單純，" },
          { id: 5, text: "甚至有點傻里傻氣的。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "她愛偷東西……" },
          { id: 2, text: "只是懶得帶錢，" },
          { id: 3, text: "覺得付錢很麻煩；" },
          { id: 4, text: "她說話白目……" },
          { id: 5, text: "是因為她不會閱讀空氣，" },
          { id: 6, text: "想到什麼就說什麼；" },
          { id: 7, text: "她爸雖然縱容她，" },
          { id: 8, text: "但她一點兒也不任性。" },
          { id: 9, text: "當我不高興的時候，" },
          { id: 10, text: "她會很努力地討我歡心。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "她真實的那一面……" },
          { id: 2, text: "我從沒跟任何人說起。" },
          { id: 3, text: "只要我一個人了解她……" },
          { id: 4, text: "就夠了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "在我高一的那個寒假，" },
          { id: 2, text: "我跟小艾約在廢棄的母校碰面。" },
          { id: 3, text: "我們聊著彼此的近況，" },
          { id: 4, text: "在無人的校園裡，" },
          { id: 5, text: "我們又像以前那樣，" },
          { id: 6, text: "開心地大笑，" },
          { id: 7, text: "說著以前曾做過的傻事。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "聚會結束後，" },
          { id: 2, text: "我跟她說，" },
          { id: 3, text: "我等一下還有事，" },
          { id: 4, text: "便看著她一個人走遠。" },
          { id: 5, text: "從此，" },
          { id: 6, text: "我沒有一天不後悔。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "因為，" },
          { id: 2, text: "那是我最後一次見到小艾。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "小艾的媽媽晚上九點才開始找人，" },
          { id: 2, text: "並在鎮上到處詢問，" },
          { id: 3, text: "直到當天深夜，" },
          { id: 4, text: "才不得不去派出所報案。" },
          { id: 5, text: "她媽媽說，" },
          { id: 6, text: "小艾平時雖然愛亂跑，" },
          { id: 7, text: "但絕對不會晚上不回家。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "隔天，" },
          { id: 2, text: "警方陪同小艾的父母展開了大規模的搜索。" },
          { id: 3, text: "這個消息很快就傳開……" },
          { id: 4, text: "大家開始問起，" },
          { id: 5, text: "昨天有誰曾經見過小艾？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "於是，" },
          { id: 2, text: "我就成了小艾失蹤案件的第一位目擊者。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "警察來問過我很多次。" },
          { id: 2, text: "每一次，" },
          { id: 3, text: "都照實說了，" },
          { id: 4, text: "沒有一句謊話。" },
        ],
      },
    ],
  },
  {
    backSN: 23,
    backImg: require("./back/S01-04-09.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, .3)",
        },
        text: [{ id: 1, text: "白天　露天溫泉" }],
      },
      {
        // 旁白圖片訊息
        chatSN: 2,
        type: "N",
        img: require("./images/D01-15-20.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 3,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……搜尋小艾的行動……大概只持續了七十二個小時，就這樣草草結束了。最後，警方認為，小艾可能是跑去外縣市找網友什麼的，便以普通的逃家事件結案。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [{ id: 1, text: "我愈說愈激動。" }],
      },
      {
        // 人文字訊息
        chatSN: 5,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "那根本就是鬼扯！小艾明明就是往家的方向走，怎麼可能是逃家？完全說不通！警方的說法……根本就自相矛盾。",
      },
      {
        // 人文字訊息
        chatSN: 6,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "不是還有你們四個目擊者嗎？警方要怎麼解釋？",
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "他們根本不用解釋，只是做完筆錄就交差了。我不死心，繼續找尋小艾的下落……我想去她家找線索，老羅卻認為，我這小女孩在胡鬧，很生氣地趕我走……我連小艾的媽媽也沒見到。",
      },
      {
        // 人文字訊息
        chatSN: 8,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "只有你自己在找嗎？沒有其他人幫你嗎？",
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "別說找人了，有人還說起風涼話，覺得鎮上少一個麻煩也好。與其說，大家相信警方的說法，倒不如說，他們想要趕快揮開這起不祥的事件，以免影響觀光生意。",
      },
      {
        // 人文字訊息
        chatSN: 10,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "你一定很生氣吧？",
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "那當然！我一時氣不過，為了報復他們，就在網路上寫了一篇反諷的小鎮觀光導覽。",
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "啊？你說的該不會是……",
      },
      {
        // 人文字訊息
        chatSN: 13,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……沒想到，我成了都市傳說的始作俑者……",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "是的！" },
          { id: 2, text: "我心中黑暗的那一面……" },
          { id: 3, text: "創造出了這一條被詛咒的神隱之路，" },
          { id: 4, text: "以及小艾人間蒸發的都市傳說。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "隨著時間過去，" },
          { id: 2, text: "這個傳說……" },
          { id: 3, text: "就像是有自己的生命似地……" },
          { id: 4, text: "繼續在這個鎮上孳生著，" },
          { id: 5, text: "並在鎮民們的心中，" },
          { id: 6, text: "烙下了揮之不去的陰影。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 16,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "原來，那是你寫的呀！",
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "不知道為什麼這篇文章流傳了開來？總之，我還是沒能找到小艾。在寒假結束後，我又回台北讀書了，就像是在逃避這一切似地，一直到大學畢業，我幾乎都很少回來。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [{ id: 1, text: "我說出了隱藏在心底的願望。" }],
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "如果，有一天……我可以再也不要回來這裡，我一定會頭也不回，一走了之。",
      },
      {
        // 人文字訊息
        chatSN: 20,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "為什麼？",
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我一直覺得，北巫鎮就像是一個魚缸，裡頭的水已經愈來愈髒、愈來愈混濁，分不清楚什麼東西是好的、什麼東西是壞的……直到有一天，好的、壞的……都將一起沉澱在這裡，再也分不清楚。",
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "並不是那樣子的。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "我愣了一下，" },
          { id: 2, text: "安靜地聽她反駁我。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 24,
        type: "N",
        img: require("./images/D01-04-07.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 25,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "這裡一定有美好的東西，所以才值得我留下來……就像莎葉這樣的好女孩。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "我不禁臉紅了起來，" },
          { id: 2, text: "不是因為泡久了溫泉，" },
          { id: 3, text: "而是一陣從心裡升起的溫暖。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "在我們坦白心事之後，" },
          { id: 2, text: "這一刻，" },
          { id: 3, text: "我與桑妮才真正拉近了彼此的距離。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "桑妮似乎想轉換一下氣氛，" },
          { id: 2, text: "忽然提議。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 29,
        type: "P",
        speaker: "L",
        name: "桑妮",
        photo: require("./profile/Sunny.png"),
        backColor: "#F2D9DE",
        text: "我一直想在溫泉裡潛水，要不要比賽看看……誰憋氣最久呀？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [
          { id: 1, text: "桑妮的話一說完，" },
          { id: 2, text: "就整個人潛進了池底。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 31,
        type: "N",
        text: [
          { id: 1, text: "霧氣持續在水面冒起，" },
          { id: 2, text: "桑妮遲遲沒有浮起來，" },
          { id: 3, text: "彷彿她就這樣蒸發在這一片白茫茫中。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 32,
        type: "N",
        text: [
          { id: 1, text: "我怎麼也沒有料到……" },
          { id: 2, text: "這竟是我最後一次看到桑妮。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 33,
        type: "N",
        text: [
          { id: 1, text: "我心中的那股不祥預感應驗了。" },
          { id: 2, text: "這個被詛咒的小鎮……" },
          { id: 3, text: "似乎一直在等待著我返鄉，" },
          { id: 4, text: "然後，" },
          { id: 5, text: "逼我眼睜睜地看著……" },
          { id: 6, text: "這一場無法逃避的噩夢再度重演。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 34,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "感謝您完成了第一幕的閱讀。",
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 35,
        type: "N",
        sound: require("./sound/00-05.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 人文字訊息
        chatSN: 36,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "在繼續探索這座小鎮的秘密之前，讓我與您一同整理一下目前的線索吧！",
      },
      {
        // 人文字訊息
        chatSN: 37,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "首先，我們解開了網路上那則「都市傳說」的起源。原來，始作俑者就是莎葉本人，而且，她還是少女失蹤事件的目擊者之一。",
      },
      {
        // 人圖片訊息
        chatSN: 38,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        img: require("./images/M01-12.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 39,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "可是，「神隱之路」的真相……卻還是一個謎。解謎的關鍵……想必就在那群目擊者的證詞裡。",
      },
      {
        // 人文字訊息
        chatSN: 40,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "相信您應該注意到了，那棟被稱為『鬼屋』的鎮史館……似乎還藏著不為人知的故事。莎葉不願意進去的原因……很快就會揭曉。",
      },
      {
        // 人文字訊息
        chatSN: 41,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "不只如此，「神隱之路」上，將會再次發生『被消失』的事件，第二名犧牲者已經呼之欲出……",
      },
      {
        // 人文字訊息
        chatSN: 42,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "那麼，中場休息到此為止。接下來，第二幕就要開始了……",
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 43,
        type: "N",
        sound: require("./sound/00-06.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
    ],
  },
  {
    backSN: 24,
    backImg: require("./back/S03-06-09.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　北巫森林" }],
      },
      {
        // 旁白影片訊息
        chatSN: 2,
        type: "N",
        videpDirection: "col",
        video: require("./video/D03-01.mp4"),
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 3,
        type: "N",
        sound: require("./sound/02-04.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [{ id: 1, text: "枯黃的樹葉燒得滋滋作響。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "在森林裡搖曳的火光，" },
          { id: 2, text: "照出著兩位女孩的背影。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "她們身高差不多，" },
          { id: 2, text: "頭髮卻是一長一短，" },
          { id: 3, text: "長髮女孩梳得烏黑柔順，" },
          { id: 4, text: "短髮女孩則是蓬亂毛躁。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "雖然這片霧氣潮溼又冰涼，" },
          { id: 2, text: "但升火並不是為了取暖，" },
          { id: 3, text: "她們此刻要做的事情……" },
          { id: 4, text: "只有在這座森林裡才不會被人發現。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "長髮女孩的手上……" },
          { id: 2, text: "緊捏著五、六個小紙人，" },
          { id: 3, text: "她看了一眼短髮女孩，" },
          { id: 4, text: "這位夥伴的手上卻只有一個。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "怎麼不多寫一點？" },
          { id: 2, text: "就一個而已嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [{ id: 1, text: "短髮女孩點了點頭。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [{ id: 1, text: "那你寫了誰的名字呢？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [{ id: 1, text: "短髮女孩並沒有說。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "儀式開始時，" },
          { id: 2, text: "她們把紙人一個接著一個……" },
          { id: 3, text: "丟進了火燄中。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "如果，" },
          { id: 2, text: "有人不巧經過附近，" },
          { id: 3, text: "看到兩位女孩此刻的模樣，" },
          { id: 4, text: "會不會認為……" },
          { id: 5, text: "她們是北巫森林傳說中的女巫呢？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "她們不約而同地閉上了雙眼，" },
          { id: 2, text: "喃喃自語。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "四周靜得可怕，" },
          { id: 2, text: "即使講得再小聲，" },
          { id: 3, text: "感覺還是會被身旁的人偷聽到。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "也許，" },
          { id: 2, text: "她聽見了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "也許，" },
          { id: 2, text: "她裝作沒聽見。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "不管有沒有聽見，" },
          { id: 2, text: "不管聽不聽得懂，" },
          { id: 3, text: "就把這些話當成咒語吧！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [{ id: 1, text: "直到被詛咒的紙人全燒成灰燼。" }],
      },
    ],
  },
  {
    backSN: 25,
    backImg: require("./back/S02-02-01.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "深夜　月蘭溫泉旅館走廊" }],
      },
      {
        // 旁白文字訊息，有底色
        chatSN: 2,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "第二幕　館長" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [{ id: 1, text: "有多久沒作過這個夢了？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "仔細想想……" },
          { id: 2, text: "好像只有睡在老家的時候。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 5,
        type: "N",
        img: require("./images/D01-16-03.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "那是夢，" },
          { id: 2, text: "也是一段回憶。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "長髮女孩是我，" },
          { id: 2, text: "而短髮女孩就是小艾。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "我在小紙人上……" },
          { id: 2, text: "寫了黃克洋跟那些壞男生的名字。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "而小艾呢？" },
          { id: 2, text: "她到底寫了誰？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "又睡不著了。" },
          { id: 2, text: "我半夜從床上爬起來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "在我的夢中、我的回憶裡，" },
          { id: 2, text: "小艾的模樣始終沒有變過。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "可是，" },
          { id: 2, text: "每次想起她的臉，" },
          { id: 3, text: "心裡卻不是懷念，" },
          { id: 4, text: "而是恐懼。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [{ id: 1, text: "小艾究竟是怎麼消失的？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "如果，" },
          { id: 2, text: "她還活著……" },
          { id: 3, text: "現在人在哪裡？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "又或者……" },
          { id: 2, text: "真如黃克洋所說的，" },
          { id: 3, text: "小艾已經死了嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "如果，" },
          { id: 2, text: "她死了……" },
          { id: 3, text: "又是怎麼死的？" },
          { id: 4, text: "意外嗎？" },
          { id: 5, text: "還是……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [{ id: 1, text: "……有人殺死了她？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "看見黃克洋落荒而逃的樣子，" },
          { id: 2, text: "讓人懷疑……" },
          { id: 3, text: "他是不是作賊心虛？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "目前，" },
          { id: 2, text: "他就是最大的嫌疑犯。" },
        ],
      },
    ],
  },
  {
    backSN: 26,
    backImg: require("./back/S02-02-05.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　月蘭溫泉旅館" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "昨天太早起床，" },
          { id: 2, text: "今天卻睡過頭了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "拿起枕頭邊的手機一看，" },
          { id: 2, text: "竟然已經十點多了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "沒人來叫我，" },
          { id: 2, text: "大概就是沒什麼事吧！" },
          { id: 3, text: "我懶洋洋地起床，" },
          { id: 4, text: "慢吞吞地梳洗完，" },
          { id: 5, text: "這才走下樓。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "走來走去都沒看見人。" },
          { id: 2, text: "怎麼覺得比平常更冷清了呢？" },
          { id: 3, text: "也許是……" },
          { id: 4, text: "沒聽見桑妮的笑聲跟老媽的嘮叨吧？" },
          { id: 5, text: "人都去哪兒了？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "我在旅館內繞了一圈，" },
          { id: 2, text: "最後先在玄關處發現了老媽，" },
          { id: 3, text: "她難得在櫃台待命。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "客人還在房間嗎？",
      },
      {
        // 人文字訊息
        chatSN: 8,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "不知道，敲了門也沒回應，早餐也沒吃。",
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "還是……她出去了？",
      },
      {
        // 人文字訊息
        chatSN: 10,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "真是的！要不要退房也不說一聲，害我在這兒等她。",
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "或許，她還沒要退房呢！",
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "可能嗎？在我們這種地方住到第三晚，那真是破了紀錄。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "老媽，" },
          { id: 2, text: "你這樣說自己的旅館好嗎？" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 14,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "算了，這件事交給你，去找她問個清楚吧！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "老媽決定不再等下去，" },
          { id: 2, text: "逕自離開了櫃台。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "當初有加她的聯絡方式，" },
          { id: 2, text: "現在派上用場了。" },
          { id: 3, text: "我傳了訊息給她，" },
          { id: 4, text: "問她現在人在哪裡？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "我一邊等待桑妮回覆，" },
          { id: 2, text: "一邊走出了玄關。" },
        ],
      },
    ],
  },
  {
    backSN: 27,
    backImg: require("./back/S01-02-01.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　月蘭溫泉旅館門口" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [{ id: 1, text: "我假裝在自家旅館外頭閒晃。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "也不能說是完全假裝，" },
          { id: 2, text: "或許，" },
          { id: 3, text: "我會在附近遇到桑妮。" },
          { id: 4, text: "不時瀏覽了一下手機，" },
          { id: 5, text: "但她還沒回覆我。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "將注意力再拉回到我家對面。" },
          { id: 2, text: "我最主要的目的……" },
          { id: 3, text: "還是在監視黃克洋家。" },
          { id: 4, text: "等他一出門，" },
          { id: 5, text: "我就能馬上堵到他。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "黃克洋的家是獨棟的老房子，" },
          { id: 2, text: "他的房間在二樓，" },
          { id: 3, text: "以前可以透過窗戶……" },
          { id: 4, text: "看見他與那群壞男生在裡面鬼混。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "然而，" },
          { id: 2, text: "現在窗簾卻緊緊拉上，" },
          { id: 3, text: "看不出房內到底有沒有人？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [{ id: 1, text: "還要再等下去嗎？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "就在這時，" },
          { id: 2, text: "我發現有名男子正走向我家，" },
          { id: 3, text: "猛一瞧，" },
          { id: 4, text: "還以為是客人上門，" },
          { id: 5, text: "沒想到，" },
          { id: 6, text: "對方竟然揮手跟我打招呼。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "L",
        name: "李正翰",
        photo: require("./profile/Hans.png"),
        text: "嗨，好久不見了，莎葉。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "這不就是……" },
          { id: 2, text: "曾被我寫在小紙人上的壞男生之一嗎？" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……你想幹嘛？",
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "L",
        name: "李正翰",
        photo: require("./profile/Hans.png"),
        text: "聽說……你回來了，特地來找你。",
      },
      {
        // 人文字訊息
        chatSN: 13,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "啊？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "這傢伙不只沒敵意，" },
          { id: 2, text: "還一臉笑容是怎樣？" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 15,
        type: "P",
        speaker: "L",
        name: "李正翰",
        photo: require("./profile/Hans.png"),
        text: "那個……我想問你……有沒有空？中午一起吃飯，如何？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "你在開玩笑吧？" },
          { id: 2, text: "吃什麼飯？" },
          { id: 3, text: "鴻門宴嗎？" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……是黃克洋要你來的嗎？",
      },
      {
        // 人文字訊息
        chatSN: 18,
        type: "P",
        speaker: "L",
        name: "李正翰",
        photo: require("./profile/Hans.png"),
        text: "什麼意思？我聽不太懂。",
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你們不是很熟嗎？",
      },
      {
        // 人文字訊息
        chatSN: 20,
        type: "P",
        speaker: "L",
        name: "李正翰",
        photo: require("./profile/Hans.png"),
        text: "喔，我們早就沒一起混了……這麼說來，有好一陣子沒看到他了。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "這傢伙跟我印象中的混蛋，" },
          { id: 2, text: "簡直判若兩人……" },
          { id: 3, text: "是發生什麼事了嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "算了，" },
          { id: 2, text: "先不管他為什麼變了一個人。" },
          { id: 3, text: "既然找不到黃克洋，" },
          { id: 4, text: "那就來好好逼問一下這傢伙。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 23,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我問你，你還記得小艾失蹤那天的事嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "李正翰的笑容瞬間僵住了。" },
          { id: 2, text: "是嘛！" },
          { id: 3, text: "這樣的反應才對嘛！" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 25,
        type: "P",
        speaker: "L",
        name: "李正翰",
        photo: require("./profile/Hans.png"),
        text: "那……那件事，我們不是跟警察說過很多次了嗎？",
      },
      {
        // 人文字訊息
        chatSN: 26,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我不管你說了幾次！你們是不是在說謊？",
      },
      {
        // 人文字訊息
        chatSN: 27,
        type: "P",
        speaker: "L",
        name: "李正翰",
        photo: require("./profile/Hans.png"),
        text: "沒有呀！我們幹嘛要說謊？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [{ id: 1, text: "我說出了自己假想的推論。" }],
      },
      {
        // 人文字訊息
        chatSN: 29,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你們是不是在吊橋上……對小艾做了什麼壞事？所以才要一起串供！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [
          { id: 1, text: "一度以為他會反擊，" },
          { id: 2, text: "令人意外的是……" },
          { id: 3, text: "他有問必答。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 31,
        type: "P",
        speaker: "L",
        name: "李正翰",
        photo: require("./profile/Hans.png"),
        text: "真的沒有呀！那天，林義賢說，他拿了老爸的蘇格蘭威士忌，找我們一起去森林裡喝喝看。後來，我們全喝掛了，到傍晚才下山。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 32,
        type: "N",
        text: [
          { id: 1, text: "這傢伙擺出無辜的表情，" },
          { id: 2, text: "看起來……" },
          { id: 3, text: "的確不像在說謊。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 33,
        type: "N",
        text: [
          { id: 1, text: "不過，" },
          { id: 2, text: "我還是半信半疑。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 34,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "如果，你們是清白的，那黃克洋為什麼良心不安，還說自己看見了小艾的鬼魂？",
      },
      {
        // 人文字訊息
        chatSN: 35,
        type: "P",
        speaker: "L",
        name: "李正翰",
        photo: require("./profile/Hans.png"),
        text: "我……我不知道，真的不知道。這你要去問他……",
      },
      {
        // 人文字訊息
        chatSN: 36,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "那小艾有變鬼來找你嗎？",
      },
      {
        // 人文字訊息
        chatSN: 37,
        type: "P",
        speaker: "L",
        name: "李正翰",
        photo: require("./profile/Hans.png"),
        text: "什麼？我又沒對她怎樣？而且，我一直以為……小艾只是逃家了，警察不是這麼說嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 38,
        type: "N",
        text: [
          { id: 1, text: "以前，" },
          { id: 2, text: "這傢伙明明很壞的，" },
          { id: 3, text: "怎麼變成弱雞了？" },
          { id: 4, text: "反倒是威嚇他的我……" },
          { id: 5, text: "還比較像壞人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 39,
        type: "N",
        text: [
          { id: 1, text: "再問最後一個問題……" },
          { id: 2, text: "就放過你吧！" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 40,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你剛剛為什麼想約我？到底有什麼目的？",
      },
      {
        // 人文字訊息
        chatSN: 41,
        type: "P",
        speaker: "L",
        name: "李正翰",
        photo: require("./profile/Hans.png"),
        text: "咦？就只是普通的約會呀？",
      },
      {
        // 人文字訊息
        chatSN: 42,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你以前不是很討厭我嗎？",
      },
      {
        // 人文字訊息
        chatSN: 43,
        type: "P",
        speaker: "L",
        name: "李正翰",
        photo: require("./profile/Hans.png"),
        text: "那只有國中而已呀！那時候的小屁孩都是這樣子啊！我都已經二十幾歲了耶！",
      },
      {
        // 人文字訊息
        chatSN: 44,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "所以，你現在不討厭我了？",
      },
      {
        // 人文字訊息
        chatSN: 45,
        type: "P",
        speaker: "L",
        name: "李正翰",
        photo: require("./profile/Hans.png"),
        text: "……也不是從現在呀！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 46,
        type: "N",
        text: [
          { id: 1, text: "我根本不在乎這傢伙討厭不討厭我，" },
          { id: 2, text: "只是想追根究柢。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 47,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "那是從什麼時候開始？",
      },
      {
        // 人文字訊息
        chatSN: 48,
        type: "P",
        speaker: "L",
        name: "李正翰",
        photo: require("./profile/Hans.png"),
        text: "……從你去台北讀書以後。",
      },
    ],
  },
  {
    backSN: 28,
    backImg: require("./back/S01-06-08.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　北巫鎮上" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "如今回想起來……" },
          { id: 2, text: "還是有一點尷尬。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "的確，" },
          { id: 2, text: "有那麼一段很短暫的時期，" },
          { id: 3, text: "我曾經是鎮上的風雲人物。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [{ id: 1, text: "那是我高中時代的事了。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "熬過痛苦的國中三年，" },
          { id: 2, text: "一心想逃離這座小鎮的我……" },
          { id: 3, text: "只能拼命地用功讀書。" },
          { id: 4, text: "最後，" },
          { id: 5, text: "我如願考上了台北的一所名校。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "當我提著行李、踏上公車，" },
          { id: 2, text: "準備展開全新的住校生活時，" },
          { id: 3, text: "過去壓抑在心裡的鬱悶……" },
          { id: 4, text: "瞬間一掃而空。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "之後，" },
          { id: 2, text: "整整一個學期，" },
          { id: 3, text: "我一次也沒回來過。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "直到高一那年的寒假，" },
          { id: 2, text: "我才又回到鎮上。" },
          { id: 3, text: "那一天，" },
          { id: 4, text: "我身上穿的……" },
          { id: 5, text: "就是那所名校的制服。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "不需要這麼招搖，" },
          { id: 2, text: "我就讀名校的新聞……" },
          { id: 3, text: "早就在這個小鎮上傳開了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "更別提……" },
          { id: 2, text: "這是老媽最愛跟人炫耀的事蹟。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "當時，" },
          { id: 2, text: "每個住過我家旅館的客人……" },
          { id: 3, text: "都聽過老媽的吹噓。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "肯定是虛榮心作祟的關係。" },
          { id: 2, text: "原本，" },
          { id: 3, text: "預計在家鄉只留三天的我……" },
          { id: 4, text: "待了整整一個寒假。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "以前，" },
          { id: 2, text: "我跟鎮上的女孩們一樣，" },
          { id: 3, text: "都是素顏慣了。" },
          { id: 4, text: "自從去了台北，" },
          { id: 5, text: "我學會了化妝，" },
          { id: 6, text: "把髮尾燙得捲捲的，" },
          { id: 7, text: "連穿著也變得時髦起來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "但我在這兒最愛穿的……" },
          { id: 2, text: "還是那一套名校制服。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "說到這兒……" },
          { id: 2, text: "甚至還發生過一個插曲……" },
          { id: 3, text: "不知道哪個變態偷走了我的制服？" },
          { id: 4, text: "害我還去重買了一套！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "我強烈懷疑……" },
          { id: 2, text: "是酒鬼伯幹的好事！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "不管怎樣，" },
          { id: 2, text: "那個時期……" },
          { id: 3, text: "我彷彿成了這個小鎮的偶像，" },
          { id: 4, text: "走到哪裡……" },
          { id: 5, text: "都可以感受到大家的目光。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "就連黃克洋那群壞男生……" },
          { id: 2, text: "他們看我的眼神也變了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "其實，" },
          { id: 2, text: "變的人並不是他們，" },
          { id: 3, text: "而是我。" },
        ],
      },
    ],
  },
  {
    backSN: 29,
    backImg: require("./back/S02-02-05.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　月蘭溫泉旅館" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "手機上傳給桑妮的訊息……" },
          { id: 2, text: "依然未顯示「已讀」。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "回到家後，" },
          { id: 2, text: "我在玄關等了又等，" },
          { id: 3, text: "一直等到傍晚，" },
          { id: 4, text: "桑妮還是不見蹤影。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "心裡非常不安，" },
          { id: 2, text: "我決定不再空等，" },
          { id: 3, text: "跑去找老媽討論。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 5,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "客人都沒回來，你不覺得……不太對勁嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [{ id: 1, text: "老媽一副老神在在的模樣。" }],
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "搞不好，她已經走了。",
      },
      {
        // 人文字訊息
        chatSN: 8,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "怎麼會不說一聲……就這麼走了？",
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "……以前又不是沒發生過。",
      },
      {
        // 人文字訊息
        chatSN: 10,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "她不像是那種奧客。",
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "人不可貌相呀！老媽我可是吃過大虧的。還好，我學聰明了，現在都要他們先付完房錢。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "老媽的話……" },
          { id: 2, text: "讓我有一點動搖。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "畢竟，" },
          { id: 2, text: "我跟桑妮認識還不到兩天，" },
          { id: 3, text: "就算她不告而別、已讀不回，" },
          { id: 4, text: "我又能怎樣呢？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [{ id: 1, text: "她又不欠我什麼。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "我們算是朋友嗎？" },
          { id: 2, text: "可能只是我的一廂情願罷了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "……不對！" },
          { id: 2, text: "怎麼想都覺得怪怪的。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "備用鑰匙給我。",
      },
      {
        // 人文字訊息
        chatSN: 18,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "你想幹嘛？",
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你不是說……她走了嗎？那我不能去整理房間嗎？",
      },
    ],
  },
  {
    backSN: 30,
    backImg: require("./back/S02-02-02.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　月蘭溫泉旅館走廊" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "我用備用鑰匙打開了門，" },
          { id: 2, text: "客房內空無一人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "瀏覽了一下房間，" },
          { id: 2, text: "並沒有看到行李箱，" },
          { id: 3, text: "也沒有見到她的衣物。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "難道說……" },
          { id: 2, text: "桑妮真的走了嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "在和式的房間內，" },
          { id: 2, text: "床是直接鋪在地板上，" },
          { id: 3, text: "棉被跟枕頭都還沒收拾，" },
          { id: 4, text: "浴衣也隨手扔在角落。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "顯然，" },
          { id: 2, text: "桑妮昨晚在這兒過了一夜後，" },
          { id: 3, text: "早上才起床離開。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "茶几上……" },
          { id: 2, text: "散落著幾片被拆封的餅乾包裝，" },
          { id: 3, text: "杯子裡還有涼掉的紅茶。" },
          { id: 4, text: "睡前，" },
          { id: 5, text: "她曾在這兒坐了一會兒嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "就在這時，" },
          { id: 2, text: "我的視線被一個物品所吸引。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 9,
        type: "N",
        img: require("./images/D02-18-01.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "我將它拿在手中瞧了瞧，" },
          { id: 2, text: "那是一支錄音筆。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [{ id: 1, text: "桑妮忘記拿走了嗎？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "她在記錄什麼呢？" },
          { id: 2, text: "或許是……" },
          { id: 3, text: "旅行日誌吧？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "說不定，" },
          { id: 2, text: "她會提到今天的行程，" },
          { id: 3, text: "那不就可以知道她去了哪裡嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "這樣偷聽別人的隱私，" },
          { id: 2, text: "雖然不太道德……" },
          { id: 3, text: "可是，" },
          { id: 4, text: "基於我對桑妮的關心，" },
          { id: 5, text: "我還是開啟了錄音筆。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "在資料夾中，" },
          { id: 2, text: "最近的一個檔案……" },
          { id: 3, text: "是昨天我們兩人在北巫橋上，" },
          { id: 4, text: "剛走完「神隱之路」的時候。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "再往前回放，" },
          { id: 2, text: "陸續是我們去老街、鎮史館，" },
          { id: 3, text: "以及北巫國中的錄音。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "整趟行程……" },
          { id: 2, text: "她都錄起來了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "這都是我已知的內容，" },
          { id: 2, text: "直到最前面的那一個檔案，" },
          { id: 3, text: "錄音日期是在她來北巫鎮之前。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [{ id: 1, text: "那是一段桑妮的自白。" }],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 20,
        type: "N",
        sound: require("./sound/02-06.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "就跟在泡湯時說的一樣，" },
          { id: 2, text: "桑妮原本懷著輕生的念頭……" },
          { id: 3, text: "來到了北巫鎮。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "難道說……" },
          { id: 2, text: "她最後還是選擇在這兒了結生命嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "這支錄音筆……" },
          { id: 2, text: "就像是她的遺書。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "不！" },
          { id: 2, text: "我不相信！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "雖然桑妮說自己想死，" },
          { id: 2, text: "可是，" },
          { id: 3, text: "從昨晚我們談話的氣氛中，" },
          { id: 4, text: "我看得出來……" },
          { id: 5, text: "她其實還是想要活下去。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "她之所以不回我，" },
          { id: 2, text: "一定是發生什麼事了？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "出事的時間點……" },
          { id: 2, text: "應該就是在她一早出門後。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "我不認為她離開了。" },
          { id: 2, text: "房間內沒有她的物品，" },
          { id: 3, text: "可能是她根本沒帶行李箱，" },
          { id: 4, text: "只有隨身的背包，" },
          { id: 5, text: "並沒有帶其他的換洗衣物。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 29,
        type: "N",
        text: [
          { id: 1, text: "如果她沒走，" },
          { id: 2, text: "那她人應該還在鎮上。" },
          { id: 3, text: "我必須找到她！" },
        ],
      },
    ],
  },
  {
    backSN: 31,
    backImg: require("./back/S02-02-05.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "傍晚　月蘭溫泉旅館" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "我直奔櫃台，" },
          { id: 2, text: "拿起了電話。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 3,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "你要打給誰？",
      },
      {
        // 人文字訊息
        chatSN: 4,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "報警。",
      },
      {
        // 人文字訊息
        chatSN: 5,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "啊？報什麼警？你在房間發現什麼了嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "我沒理會老媽，" },
          { id: 2, text: "自顧自地撥打電話報警。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "老媽覺得不妙，" },
          { id: 2, text: "趕緊跑向了客房。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "電話的那一端……" },
          { id: 2, text: "傳來了員警的聲音。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "L",
        name: "員警",
        photo: require("./profile/Police.png"),
        text: "喂……北巫派出所。",
      },
      {
        // 人文字訊息
        chatSN: 10,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "這裡是月蘭溫泉旅館，我們有一位女客人失蹤了，我擔心……她是不是出了意外？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "然而，" },
          { id: 2, text: "員警的下一句話……" },
          { id: 3, text: "馬上就讓我愣住了。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "L",
        name: "員警",
        photo: require("./profile/Police.png"),
        text: "她叫什麼名字？",
      },
      {
        // 人文字訊息
        chatSN: 13,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "呃……這個……",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "我手忙腳亂地在櫃台處翻找，" },
          { id: 2, text: "從一疊雜誌底下，" },
          { id: 3, text: "挖到了住宿登記本。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "沒想到，" },
          { id: 2, text: "打開本子一看，" },
          { id: 3, text: "根本沒留下任何旅客記錄。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [{ id: 1, text: "老媽又偷懶沒記了！" }],
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……我查一下……等等再打給你。",
      },
      {
        // 人文字訊息
        chatSN: 18,
        type: "P",
        speaker: "L",
        name: "員警",
        photo: require("./profile/Police.png"),
        text: "……喂？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "我放下電話，" },
          { id: 2, text: "老媽氣喘吁吁地站在我的面前。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 20,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "你在說什麼嘛？房裡什麼都沒有啊！",
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你知道……那位客人叫什麼名字嗎？",
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "我哪知道？你跟人家不是很熟嗎？你應該知道才對啊！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "看樣子，" },
          { id: 2, text: "沒辦法找警察幫忙了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "的確，" },
          { id: 2, text: "只靠那一支錄音筆，" },
          { id: 3, text: "無法百分之百證明……" },
          { id: 4, text: "桑妮是不是真的失蹤了？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "就這樣，" },
          { id: 2, text: "又過了一個難以入睡的夜晚。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "手機上……" },
          { id: 2, text: "始終等不到桑妮的回覆。" },
        ],
      },
    ],
  },
  {
    backSN: 32,
    backImg: require("./back/S01-05-07.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　老街" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "一大早，" },
          { id: 2, text: "我不想在旅館繼續苦等下去，" },
          { id: 3, text: "決定主動前往鎮上找人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "老街成了我的第一站。" },
          { id: 2, text: "因為，" },
          { id: 3, text: "這裡的人最多，" },
          { id: 4, text: "又有唯一的公車站……" },
          { id: 5, text: "如果，" },
          { id: 6, text: "她離開了北巫鎮，" },
          { id: 7, text: "也許，" },
          { id: 8, text: "有人曾看到過她。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "但我沒想到，" },
          { id: 2, text: "在老街附近才問沒多久，" },
          { id: 3, text: "馬上就遇到了阻礙。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "不知道……" },
          { id: 2, text: "幾乎成了店家們一致的回應，" },
          { id: 3, text: "並不約而同地擺出了臭臉。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "我一路問到了玉梅家的麵攤，" },
          { id: 2, text: "前腳才剛踏進店裡，" },
          { id: 3, text: "玉梅就緊張兮兮地迎了上來。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……正好。玉梅，我想問一下，你有沒有看到……之前跟我一起逛老街的一個女生？",
      },
      {
        // 人文字訊息
        chatSN: 8,
        type: "P",
        speaker: "L",
        name: "玉梅",
        photo: require("./profile/May.png"),
        backColor: "#F2D9DE",
        text: "你先回去吧……今天不太方便。",
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "為什麼？我只是來問一下，問完就走。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "玉梅還沒回答，" },
          { id: 2, text: "店裡就傳來了胖子老闆的怒吼。" },
          { id: 3, text: "我沒看到人，" },
          { id: 4, text: "只聽見他大喊，" },
          { id: 5, text: "別讓那個瘋女人進來！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "我明白了。" },
          { id: 2, text: "果然是這樣。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "我扭頭就走，" },
          { id: 2, text: "把老街甩在腦後。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "從背後傳來了大家的閒言閒語，" },
          { id: 2, text: "有人說得很大聲，" },
          { id: 3, text: "擺明是故意說給我聽。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [{ id: 1, text: "她怎麼又來了？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "就是啊！" },
          { id: 2, text: "讓我們好好做生意……" },
          { id: 3, text: "不行嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "難道要把我們搞到關門，" },
          { id: 2, text: "她才會高興嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "一樣！" },
          { id: 2, text: "跟當年都一樣！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "那一年，" },
          { id: 2, text: "我為了找到小艾，" },
          { id: 3, text: "每天都去纏著鎮民們問東問西。" },
          { id: 4, text: "甚至不只一次，" },
          { id: 5, text: "我就在這條老街上，" },
          { id: 6, text: "痛批著大家的冷血無情。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "然後，" },
          { id: 2, text: "我就從風雲人物……" },
          { id: 3, text: "淪為了全鎮公敵。" },
        ],
      },
    ],
  },
  {
    backSN: 33,
    backImg: require("./back/S02-01-02.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, .3)",
        },
        text: [{ id: 1, text: "白天　溫泉旅館大街" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "我差點忘記了……" },
          { id: 2, text: "是啊！" },
          { id: 3, text: "我不再是以前的我了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "小艾失蹤之後，" },
          { id: 2, text: "一切都變了！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "如今，" },
          { id: 2, text: "我變得跟小艾一樣……" },
          { id: 3, text: "只是鎮上的討厭鬼。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 5,
        type: "N",
        img: require("./images/D02-02-14.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [{ id: 1, text: "我氣呼呼地走在大街上。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "儘管這次是我自取其辱，" },
          { id: 2, text: "心裡還是很不甘心。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "別被他們影響了！" },
          { id: 2, text: "我沒有錯！" },
          { id: 3, text: "我……" },
          { id: 4, text: "只是想要幫助朋友。" },
          { id: 5, text: "對！" },
          { id: 6, text: "小艾是我的朋友，" },
          { id: 7, text: "桑妮也是。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "六年前，" },
          { id: 2, text: "我已經失敗過一次了。" },
          { id: 3, text: "這一次，" },
          { id: 4, text: "我絕不要再帶著遺憾離開。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "沒關係！" },
          { id: 2, text: "你們儘管抵制我，" },
          { id: 3, text: "愈是打壓我，" },
          { id: 4, text: "我就愈要找出真相。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "我開始懷疑……" },
          { id: 2, text: "這絕對不是什麼恐怖的巧合。" },
          { id: 3, text: "桑妮的失蹤……" },
          { id: 4, text: "很可能跟當年小艾的失蹤有關。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "我一邊想著……" },
          { id: 2, text: "下一步要去哪裡找人？" },
          { id: 3, text: "一邊彎進了小巷，" },
          { id: 4, text: "打算抄捷徑穿過溫泉街。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "忽然間，" },
          { id: 2, text: "我的背脊一陣發涼。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 14,
        type: "N",
        img: require("./images/D02-03-29.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "走進巷子時，" },
          { id: 2, text: "我並沒有看到其他人，" },
          { id: 3, text: "也沒有聽見腳步聲。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "但我感覺到……" },
          { id: 2, text: "有人在我的背後！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "我停下了腳步，" },
          { id: 2, text: "仔細傾聽任何動靜。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [{ id: 1, text: "還是沒聽見腳步聲。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [{ id: 1, text: "開始有點毛毛的了。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "如果，" },
          { id: 2, text: "我不是撞邪……" },
          { id: 3, text: "那只有一個可能性。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "我在心裡數著……" },
          { id: 2, text: "一、二、三！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [{ id: 1, text: "我猛然一回頭。" }],
      },
      {
        // 旁白影片訊息
        chatSN: 23,
        type: "N",
        videpDirection: "col",
        video: require("./video/D02-01.mp4"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [{ id: 1, text: "那是誰？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [{ id: 1, text: "為什麼要跟蹤我？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "這裡的巷弄狹窄偏僻……" },
          { id: 2, text: "又錯綜複雜……" },
          { id: 3, text: "不熟的人很容易迷路，" },
          { id: 4, text: "觀光客應該不敢進來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "該不會是老街的店家吧？" },
          { id: 2, text: "……是來監視我的嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "看樣子，" },
          { id: 2, text: "對方膽子還滿小的。" },
          { id: 3, text: "我暫時不予理會。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 29,
        type: "N",
        text: [{ id: 1, text: "下次再來跟蹤我試試看！" }],
      },
    ],
  },
  {
    backSN: 34,
    backImg: require("./back/S02-03-01.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　鎮史館外" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "那時，" },
          { id: 2, text: "鎮史館還不叫鎮史館。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "那時，" },
          { id: 2, text: "兩位女孩也還沒國中畢業。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "她們翻牆爬出那所還沒廢校的北巫國中，" },
          { id: 2, text: "翹課跑到了這棟封閉多年的陰森館邸。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "這裡……" },
          { id: 2, text: "不是傳說中的鬼屋嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [{ id: 1, text: "長髮女孩顯得有些不安。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "是啊！" },
          { id: 2, text: "我們去裡頭玩捉迷藏，" },
          { id: 3, text: "一定很刺激！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "隨便闖進去……" },
          { id: 2, text: "這樣好嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "那我要先進去囉！" },
          { id: 2, text: "晚進去的人……" },
          { id: 3, text: "要當鬼！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [{ id: 1, text: "……我不要當鬼。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "不然，" },
          { id: 2, text: "那我們都躲起來……" },
          { id: 3, text: "看誰先被鬼找到？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "短髮女孩話一說完，" },
          { id: 2, text: "便自顧自地跑向館邸，" },
          { id: 3, text: "留下一臉錯愕的長髮女孩。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "喂！" },
          { id: 2, text: "你再不來找我，" },
          { id: 3, text: "我就要消失囉！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "那時，" },
          { id: 2, text: "她們一定沒想到……" },
          { id: 3, text: "這句話竟然會一語成讖。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 15,
        type: "N",
        img: require("./images/D02-04-05.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [{ id: 1, text: "我又來到這棟紅色館邸。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "身為第一位目擊者的我……" },
          { id: 2, text: "忠實地向警方描述了……" },
          { id: 3, text: "我最後一次見到小艾的情境。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "但是，" },
          { id: 2, text: "那天卻有另一件事……" },
          { id: 3, text: "我從沒有跟任何人說過。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "那就是第二位目擊者的供詞……" },
          { id: 2, text: "存在一個令我不解的疑點。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "那一天，" },
          { id: 2, text: "我在跟小艾道別前，" },
          { id: 3, text: "我對她說，" },
          { id: 4, text: "我等一下還有事。" },
          { id: 5, text: "其實……" },
          { id: 6, text: "是我跟人有約，" },
          { id: 7, text: "地點就在這棟鎮史館。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "跟我約碰面的人……" },
          { id: 2, text: "不是別人，" },
          { id: 3, text: "正是館長林鈞堂。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "我待在館內……" },
          { id: 2, text: "直到閉館，" },
          { id: 3, text: "館長都在我身邊。" },
          { id: 4, text: "我沒見過其他人出現。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "然而，" },
          { id: 2, text: "他卻跟警方說，" },
          { id: 3, text: "小艾來過館內，" },
          { id: 4, text: "結果把自己列入了目擊者的名單中。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "館長究竟為什麼要說謊？" },
          { id: 2, text: "我一直沒有勇氣問他。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "因為，" },
          { id: 2, text: "從小艾失蹤的那一天起，" },
          { id: 3, text: "我就再也沒有進去過鎮史館。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "拖了這麼多年，" },
          { id: 2, text: "這個心結終究得解開。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "於是，" },
          { id: 2, text: "我硬著頭皮走了進去。" },
        ],
      },
    ],
  },
  {
    backSN: 35,
    backImg: require("./back/S02-06-03.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　鎮史館一樓" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "這棟大詩人的故居……" },
          { id: 2, text: "據說……" },
          { id: 3, text: "已經有百年以上的歷史。" },
          { id: 4, text: "我十七歲那年的青春，" },
          { id: 5, text: "也偷偷被記錄在這段歲月裡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "那是一個很美好的故事，" },
          { id: 2, text: "只可惜，" },
          { id: 3, text: "並沒有美好的結局。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "想更了解鎮史館的人……" },
          { id: 2, text: "可以參加館內的導覽，" },
          { id: 3, text: "會由館長親自解說，" },
          { id: 4, text: "一天就只有兩場而已，" },
          { id: 5, text: "分成上午跟下午……" },
          { id: 6, text: "每場約二十分鐘。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "視情況而定。" },
          { id: 2, text: "有時候，" },
          { id: 3, text: "一整天也沒半個人來參觀；" },
          { id: 4, text: "有時候，" },
          { id: 5, text: "連續一個禮拜，" },
          { id: 6, text: "都只有我一個人全程參與。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "此刻，" },
          { id: 2, text: "在一樓的展示廳裡，" },
          { id: 3, text: "館長的導覽正在進行中，" },
          { id: 4, text: "本場的參與者是一對情侶。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "為什麼來的不是懷舊的老爺爺、老奶奶，" },
          { id: 2, text: "或是來校外教學的孩子們呢？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [{ id: 1, text: "偏偏是一對情侶！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "我靜靜地站在角落裡，" },
          { id: 2, text: "但我相信……" },
          { id: 3, text: "館長一定早就看到我了。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 10,
        type: "N",
        img: require("./images/D02-05-03.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "莊士郎……出身於本地望族。在日據時代，他們家族跟日本人的關係一直很好。當初，在興建時，也是委託日本建築師所設計，打造出這棟融合和式與西洋風格的雙層館邸。完工後，曾經風光一時，館內還曾經招待過日本的皇太子。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "林鈞堂一邊說明，" },
          { id: 2, text: "一邊帶領那對情侶，" },
          { id: 3, text: "順著參觀路線，" },
          { id: 4, text: "一路穿過大廳。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "我尾隨著導覽隊伍，" },
          { id: 2, text: "刻意與他們保持一大段的距離。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "在一條筆直的長廊上，" },
          { id: 2, text: "右側是面對中庭的整排窗戶，" },
          { id: 3, text: "翠綠的庭園映入眼簾；" },
          { id: 4, text: "而在左側的牆壁上，" },
          { id: 5, text: "則掛著一幅幅色彩繽紛的油畫。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 15,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "這些畫作……都是莊士郎的作品，描繪出北巫鎮的四季風光。你們可以一邊欣賞這些畫，一邊對照著窗外的風景，那就是莊士郎眼中所看到的家鄉。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "莊士郎的詩……" },
          { id: 2, text: "我其實讀不太懂，" },
          { id: 3, text: "只能說……" },
          { id: 4, text: "我的文學造詣欠佳。" },
          { id: 5, text: "至於畫作呢……" },
          { id: 6, text: "我個人並不是很欣賞。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "的確，" },
          { id: 2, text: "他畫得很好，" },
          { id: 3, text: "但就是不寫實。" },
          { id: 4, text: "因為，" },
          { id: 5, text: "畫裡的小鎮太美好了，" },
          { id: 6, text: "像是只存在於莊士郎自己的腦海裡，" },
          { id: 7, text: "而不是我土生土長的地方。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "如果要我來畫這座小鎮，" },
          { id: 2, text: "大概會用掉全部的白色與黑色顏料，" },
          { id: 3, text: "把畫紙塗成一片灰濛濛的。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "導覽一如往常地在此停下。" },
          { id: 2, text: "那對情侶根本沒在認真看畫，" },
          { id: 3, text: "只顧著到處自拍。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "反倒是我……" },
          { id: 2, text: "意外地被一幅畫作所吸引，" },
          { id: 3, text: "不自覺地停下了腳步。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "那幅畫中……" },
          { id: 2, text: "畫著一名俏立濃霧中的神秘女子，" },
          { id: 3, text: "她的身影縹緲虛幻，" },
          { id: 4, text: "她的容貌朦朧不清，" },
          { id: 5, text: "散發出一股詭異的美感。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 22,
        type: "N",
        img: require("./images/D02-06-08.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "我太專注在看畫，" },
          { id: 2, text: "不知何時，" },
          { id: 3, text: "館長竟已來到了我的面前。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "館長看著我的神情，" },
          { id: 2, text: "就像我望著那幅畫一樣。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "進館前，" },
          { id: 2, text: "我曾經想過……" },
          { id: 3, text: "時隔多年，" },
          { id: 4, text: "要怎麼開口跟他說第一句話？" },
          { id: 5, text: "既然怎麼想都想不好，" },
          { id: 6, text: "乾脆就拿這個當話題好了！" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 26,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我……第一次看到這幅畫。",
      },
      {
        // 人文字訊息
        chatSN: 27,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "這是莊士郎的隱藏作品，我也是後來才找到的。只是，當我掛上去的時候，你已經離開了……",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "館長淡淡地回答，" },
          { id: 2, text: "透露出一絲絲的感傷。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 29,
        type: "N",
        text: [{ id: 1, text: "我的眼眶忍不住紅了起來。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [
          { id: 1, text: "那一瞬間，" },
          { id: 2, text: "我的思緒又飛回了高一的那個寒假。" },
        ],
      },
    ],
  },
  {
    backSN: 36,
    backImg: require("./back/S02-03-01.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　鎮史館外" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "這棟紅色館邸……" },
          { id: 2, text: "為什麼會被人們稱為鬼屋呢？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "我聽過很多種版本的傳說，" },
          { id: 2, text: "但大多是孩子們編出來的。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "不過，" },
          { id: 2, text: "大家唯一公認的是……" },
          { id: 3, text: "棲息在這屋子裡的鬼……" },
          { id: 4, text: "指的應該是英年早逝的莊士郎。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "現在仔細想想……" },
          { id: 2, text: "詩人的鬼魂……" },
          { id: 3, text: "聽起來似乎不是很可怕。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "總之，" },
          { id: 2, text: "那一天，" },
          { id: 3, text: "闖進這棟鬼屋的我……" },
          { id: 4, text: "並沒有遇見鬼。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [{ id: 1, text: "我遇見了一位優雅而溫柔的青年。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "他正在走廊上打掃環境，" },
          { id: 2, text: "而我正在跟小艾玩捉迷藏。" },
          { id: 3, text: "我們發現了彼此，" },
          { id: 4, text: "也不知道誰看到誰比較驚訝。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "就這樣……" },
          { id: 2, text: "我們聊了起來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "他告訴我，" },
          { id: 2, text: "以後不需要再偷偷闖進來了。" },
          { id: 3, text: "因為，" },
          { id: 4, text: "這裡即將要對外開放。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "後來，" },
          { id: 2, text: "我才打聽到，" },
          { id: 3, text: "他是一位大學的副教授，" },
          { id: 4, text: "專門研究台灣的鄉土歷史，" },
          { id: 5, text: "因為被莊士郎的畫作所吸引，" },
          { id: 6, text: "才來到了北巫鎮。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "據說，" },
          { id: 2, text: "他放棄了學校教職，" },
          { id: 3, text: "透過各種關係說服了鎮長，" },
          { id: 4, text: "決定將莊士郎的房子……" },
          { id: 5, text: "改成鎮上的新景點。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "從此，" },
          { id: 2, text: "這棟鬼屋就變成了鎮史館，" },
          { id: 3, text: "而他就是新任的館長。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "我本來是最不擅長人際關係的……" },
          { id: 2, text: "偏偏在那段時期，" },
          { id: 3, text: "我充滿了莫名的自信。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "那一年的寒假，" },
          { id: 2, text: "大概有一半的時間，" },
          { id: 3, text: "我都待在鎮史館裡，" },
          { id: 4, text: "幫忙館長準備開館的工作。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "他對莊士郎十分崇拜，" },
          { id: 2, text: "就像位狂熱的粉絲，" },
          { id: 3, text: "守護這棟館邸顯然就是他的使命。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "我喜歡聽他說起莊士郎的事情。" },
          { id: 2, text: "其實，" },
          { id: 3, text: "身為本地人的我……" },
          { id: 4, text: "既不了解、也不關心這位詩人。" },
          { id: 5, text: "我只是喜歡看他一臉沉迷的模樣。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "我跟他一起整理文物，" },
          { id: 2, text: "一起布置展間，" },
          { id: 3, text: "一起掛上油畫……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [{ id: 1, text: "終於到了開幕的那一天……" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "結果……" },
          { id: 2, text: "一個客人也沒有。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "沒關係，" },
          { id: 2, text: "那我們就再來練習導覽吧！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "我拉起了館長的手，" },
          { id: 2, text: "繞著全館跑了一圈又一圈，" },
          { id: 3, text: "我們的笑聲迴盪在整棟房子裡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "我永遠都記得……" },
          { id: 2, text: "他的手是多麼的溫暖。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 24,
        type: "N",
        img: require("./images/D02-07-49.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "對我來說，" },
          { id: 2, text: "這棟鎮史館……" },
          { id: 3, text: "紀念了我與館長的回憶。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [{ id: 1, text: "……也紀念了我的初吻。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "我曾經發過誓……" },
          { id: 2, text: "如果，" },
          { id: 3, text: "我要談戀愛，" },
          { id: 4, text: "絕對不要找這個鎮上的男人。" },
          { id: 5, text: "可是，" },
          { id: 6, text: "我偏偏又逃不出這裡……" },
          { id: 7, text: "那該怎麼辦呢？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "所以，" },
          { id: 2, text: "我愛上了待在小鎮、卻又不屬於小鎮的館長。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 29,
        type: "N",
        text: [{ id: 1, text: "但我們並不是男女朋友。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [
          { id: 1, text: "我跟館長之間，" },
          { id: 2, text: "沒有誰追誰，" },
          { id: 3, text: "也沒有什麼告白，" },
          { id: 4, text: "當然也沒有任何約定與承諾。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 31,
        type: "N",
        text: [{ id: 1, text: "我們只是單純地愛著彼此。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 32,
        type: "N",
        text: [{ id: 1, text: "只在這一棟時光凍結的館邸……" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 33,
        type: "N",
        text: [{ id: 1, text: "只在那一個稍縱即逝的寒假……" }],
      },
    ],
  },
  {
    backSN: 37,
    backImg: require("./back/S02-06-03.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　鎮史館一樓" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "不行！" },
          { id: 2, text: "我絕對不能哭！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "雖然我的眼睛看起來一定紅紅的，" },
          { id: 2, text: "我還是故作鎮定，" },
          { id: 3, text: "硬把自己當成觀光客。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 4,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "所以，這……畫的是誰呢？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "館長終於不再看著我，" },
          { id: 2, text: "他將視線轉移到那幅畫作上，" },
          { id: 3, text: "認真地回答了這個問題。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 6,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "……女巫。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "我感覺手腳一陣冰冷。" },
          { id: 2, text: "館長這麼一說，" },
          { id: 3, text: "那幅畫……" },
          { id: 4, text: "彷彿突然變得可怕了起來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "有那麼一瞬間，" },
          { id: 2, text: "我忽然覺得……" },
          { id: 3, text: "畫中的女子神似小艾。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "但又有點不太一樣……" },
          { id: 2, text: "她的模樣比較成熟，" },
          { id: 3, text: "就好像是小艾長大了……" },
          { id: 4, text: "或者說……" },
          { id: 5, text: "如果，" },
          { id: 6, text: "小艾沒有失蹤……" },
          { id: 7, text: "有可能長得像她這樣嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "怎麼可能？" },
          { id: 2, text: "莊士郎早在小艾失蹤前就死了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "這麼一想……" },
          { id: 2, text: "又覺得她跟小艾不太像了……" },
          { id: 3, text: "應該只是我的錯覺罷了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "就在這時，" },
          { id: 2, text: "那對情侶結束了曬恩愛的自拍秀，" },
          { id: 3, text: "自動往館長的方向集合。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [{ id: 1, text: "館長迅速恢復了專業的口吻。" }],
      },
      {
        // 人文字訊息
        chatSN: 14,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "……接下來，我們要參觀的是宴會廳……請繼續往前走。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "我還有很多問題想問他，" },
          { id: 2, text: "不過，" },
          { id: 3, text: "還是先等導覽結束吧！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "於是，" },
          { id: 2, text: "我悄悄往後退了一步，" },
          { id: 3, text: "正要轉身離開，" },
          { id: 4, text: "忽然間，" },
          { id: 5, text: "館長私下叫住了我。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 17,
        type: "N",
        img: require("./images/D02-08-08.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 18,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "……閉館以後……在老地方等我。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "看來，" },
          { id: 2, text: "他也有話想跟我說。" },
          { id: 3, text: "正合我意！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "館長明明背朝著我，" },
          { id: 2, text: "我還是傻傻地點了點頭，" },
          { id: 3, text: "不確定他有沒有接收到這個訊息。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "我目送著館長的身影……" },
          { id: 2, text: "在長廊的盡頭緩緩消失。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "再看了一眼手機上的時間，" },
          { id: 2, text: "現在是下午兩點半。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "距離閉館時間，" },
          { id: 2, text: "還有一個半小時。" },
        ],
      },
    ],
  },
  {
    backSN: 38,
    backImg: require("./back/S03-09-03.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　鎮史館二樓" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "鎮史館的二樓……" },
          { id: 2, text: "向來不開放參觀。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [{ id: 1, text: "我正一步一步地往樓上走去……" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "寧靜到有點過份的館邸……" },
          { id: 2, text: "隱隱傳來了一樓館長的聲音，" },
          { id: 3, text: "掩蓋住我輕盈的腳步聲。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "鑽過只能阻擋遊客的紅龍柱，" },
          { id: 2, text: "我推開了書房的大門，" },
          { id: 3, text: "當是自己家一樣地走了進去。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "與其說是書房，" },
          { id: 2, text: "我覺得……" },
          { id: 3, text: "這裡更像是一間小型的圖書館，" },
          { id: 4, text: "排排的書架上陳列著豐富的藏書，" },
          { id: 5, text: "大部份是文學與哲學書籍。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "我聽館長說，" },
          { id: 2, text: "在這些書中，" },
          { id: 3, text: "最珍貴的是北巫鎮的鄉土史料，" },
          { id: 4, text: "但我不太愛看書，" },
          { id: 5, text: "從沒拿起來翻過。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "窗邊本來有張書桌，" },
          { id: 2, text: "被我跟館長搬到了一樓，" },
          { id: 3, text: "並在那裡陳設了另外一間書房。" },
          { id: 4, text: "其實，" },
          { id: 5, text: "莊士郎真正寫作的地方……" },
          { id: 6, text: "是在二樓這裡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "二樓之所以不開放，" },
          { id: 2, text: "是因為館長平時就住在館內，" },
          { id: 3, text: "算是他的私人空間，" },
          { id: 4, text: "也成了我打發時間的去處。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "閒著也是閒著，" },
          { id: 2, text: "我隨手拿起一本書，" },
          { id: 3, text: "正要翻開時，" },
          { id: 4, text: "偶然看到有一顆閃閃發光的東西，" },
          { id: 5, text: "被遺落在地板上。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 11,
        type: "N",
        img: require("./images/D02-09-19.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "我走近撿起來一看，" },
          { id: 2, text: "那是一個軟糖，" },
          { id: 3, text: "有著古早風格的包裝，" },
          { id: 4, text: "看起來很眼熟。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [{ id: 1, text: "……到底在哪裡見過呢？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "我拆開了包裝，" },
          { id: 2, text: "一不小心，" },
          { id: 3, text: "裡頭的軟糖掉了下來，" },
          { id: 4, text: "在地上彈了兩下，" },
          { id: 5, text: "滾進了書櫃底下。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "也不知為何那麼執著，" },
          { id: 2, text: "我趴了下來，" },
          { id: 3, text: "將手伸進書櫃底下，" },
          { id: 4, text: "想要撈出那顆軟糖。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "就在這時，" },
          { id: 2, text: "我從櫃子的縫隙間瞧見了一道光芒。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "我心念一動，" },
          { id: 2, text: "迅速起身，" },
          { id: 3, text: "把書櫃上的書全拿了下來，" },
          { id: 4, text: "發現後頭竟然是一扇門。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "鎮史館的二樓……" },
          { id: 2, text: "竟然會有秘室？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "我感覺到心臟怦怦地跳著，" },
          { id: 2, text: "但還是鼓起勇氣，" },
          { id: 3, text: "將門打開來一看，" },
          { id: 4, text: "門後是一道往下的樓梯。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "謎底顯然尚未揭曉，" },
          { id: 2, text: "我無法克制住強烈的好奇心，" },
          { id: 3, text: "沿著樓梯一路走了下去。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 21,
        type: "N",
        img: require("./images/D02-09-10.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "樓梯帶領我來到地下室。" },
          { id: 2, text: "盡頭處……" },
          { id: 3, text: "只有另一扇門。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "我深呼吸了一口，" },
          { id: 2, text: "轉開門把，" },
          { id: 3, text: "眼前出現了一間正方形的小房間。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "房間的四面都是牆壁，" },
          { id: 2, text: "只有一張白床，" },
          { id: 3, text: "地板蓋了一層灰塵，" },
          { id: 4, text: "似乎多年沒有人進來過。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "床上留下了有人睡過的痕跡，" },
          { id: 2, text: "還散落了一堆糖果跟餅乾，" },
          { id: 3, text: "雖然大多只剩下包裝紙而已，" },
          { id: 4, text: "但它們跟二樓的那顆軟糖一樣，" },
          { id: 5, text: "令我似曾相識。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "這一刻，" },
          { id: 2, text: "我全想起來了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "那是秋子婆婆雜貨店裡的零食，" },
          { id: 2, text: "一般店裡沒有在賣，" },
          { id: 3, text: "只有鎮上的怪孩子才愛吃。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [{ id: 1, text: "而我就認識一個愛吃這種糖果的怪咖。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 29,
        type: "N",
        text: [
          { id: 1, text: "她總是隨手在雜貨店一抓，" },
          { id: 2, text: "把這些戰利品偷塞在她的包包裡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [{ id: 1, text: "小艾！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 31,
        type: "N",
        text: [{ id: 1, text: "我感到無比的震驚。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 32,
        type: "N",
        text: [
          { id: 1, text: "為什麼在鎮史館的地下秘室裡……" },
          { id: 2, text: "會出現這些東西？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 33,
        type: "N",
        text: [
          { id: 1, text: "難道說……" },
          { id: 2, text: "小艾來過這裡！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 34,
        type: "N",
        text: [
          { id: 1, text: "可是，" },
          { id: 2, text: "她人在這裡做什麼？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 35,
        type: "N",
        text: [
          { id: 1, text: "我仰起頭，" },
          { id: 2, text: "小房間的天花板足足有兩層樓高，" },
          { id: 3, text: "上頭僅開了一扇小小的天窗。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 36,
        type: "N",
        text: [
          { id: 1, text: "異樣的空間感壓迫著我。" },
          { id: 2, text: "忽然間，" },
          { id: 3, text: "我有種可怕的念頭，" },
          { id: 4, text: "這間密室……" },
          { id: 5, text: "簡直就像是牢房一樣。" },
        ],
      },
    ],
  },
  {
    backSN: 39,
    backImg: require("./back/S02-07-03.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　鎮史館川堂" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [{ id: 1, text: "下午三點四十分。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "眼看就快要閉館了，" },
          { id: 2, text: "我所剩的時間不多，" },
          { id: 3, text: "動作得加快才行。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "我離開地下秘室後，" },
          { id: 2, text: "先返回二樓書房。" },
          { id: 3, text: "憑著不太可靠的記憶力，" },
          { id: 4, text: "盡力還原了書架上的每一本書。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "勉強完成後，" },
          { id: 2, text: "我悄悄從原路走下一樓，" },
          { id: 3, text: "抵達樓梯間旁邊的川堂。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "這裡就是我與館長約好的老地方。" },
          { id: 2, text: "以前在閉館後，" },
          { id: 3, text: "我們都會先在此碰面，" },
          { id: 4, text: "再一起上二樓去，" },
          { id: 5, text: "度過只屬於兩人的時光。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "然而，" },
          { id: 2, text: "我現在完全沒有那種心情。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 8,
        type: "N",
        img: require("./images/D02-11-06.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "……那間秘室的門關好了嗎？" },
          { id: 2, text: "書架上的書有放對嗎？" },
          { id: 3, text: "我有沒有不小心弄倒了什麼東西？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [{ id: 1, text: "我為什麼要這麼謹慎？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [{ id: 1, text: "我在害怕什麼？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "害怕小艾、桑妮的失蹤……" },
          { id: 2, text: "跟那個人有關嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "害怕那個人……" },
          { id: 2, text: "其實就是幕後的真兇嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [{ id: 1, text: "我還要傻傻地在這邊等他嗎？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [{ id: 1, text: "我會是下一個失蹤的人嗎？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [{ id: 1, text: "是不是該逃走比較好呢？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "不！" },
          { id: 2, text: "這都只是我的胡思亂想。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "就算這就是真相，" },
          { id: 2, text: "我也要當面質問那個人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [{ id: 1, text: "我忐忑不安地等待著。" }],
      },
      {
        // 旁白圖片訊息
        chatSN: 20,
        type: "N",
        img: require("./images/D02-10-03.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "早在一個小時前，" },
          { id: 2, text: "館內的訪客就全走光了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "下午四點已過，" },
          { id: 2, text: "這間大房子裡……" },
          { id: 3, text: "只剩下館長規律的腳步聲迴盪著。" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 23,
        type: "N",
        sound: require("./sound/02-05.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "腳步聲從近而遠，" },
          { id: 2, text: "再由遠而近……" },
          { id: 3, text: "表示他正在巡視全館，" },
          { id: 4, text: "並關閉所有的出入口。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "最後一道工作……" },
          { id: 2, text: "就是大門從內反鎖。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "然後，" },
          { id: 2, text: "我忽然聽不見腳步聲了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "在川堂等了好一會兒，" },
          { id: 2, text: "我有點坐不住了，" },
          { id: 3, text: "正要去找人時，" },
          { id: 4, text: "館長卻在意想不到的地方出現了。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 28,
        type: "N",
        img: require("./images/D02-12-05.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 29,
        type: "N",
        text: [{ id: 1, text: "他什麼時候跑去二樓了？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [
          { id: 1, text: "該不會……" },
          { id: 2, text: "他知道我發現祕室了？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 31,
        type: "N",
        text: [
          { id: 1, text: "他要我留下來……" },
          { id: 2, text: "到底有什麼目的？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 32,
        type: "N",
        text: [
          { id: 1, text: "在我腦海閃過種種不安的念頭時，" },
          { id: 2, text: "館長一步步地走下了樓梯。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 33,
        type: "N",
        text: [
          { id: 1, text: "他總是一副冷靜的模樣，" },
          { id: 2, text: "我實在很難猜出他在想什麼。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 34,
        type: "N",
        text: [
          { id: 1, text: "但我終究沒有離開，" },
          { id: 2, text: "也許，" },
          { id: 3, text: "我一直很想再見到他一面。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 35,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "……這些年來……你過得好嗎？",
      },
      {
        // 人文字訊息
        chatSN: 36,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……就這樣嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 37,
        type: "N",
        text: [
          { id: 1, text: "不應該就這樣！" },
          { id: 2, text: "我要聽的……" },
          { id: 3, text: "不是這種無關緊要的話。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 38,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你特地把我留下來……就是為了問我這個？",
      },
      {
        // 人文字訊息
        chatSN: 39,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "那你來找我……又是為了什麼呢？",
      },
      {
        // 人文字訊息
        chatSN: 40,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我不是來找你，是來找我的一位朋友。她前天有來這裡參觀，現在人卻失蹤了……你有看到她嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 41,
        type: "N",
        text: [
          { id: 1, text: "我一邊說，" },
          { id: 2, text: "一邊拿出手機上的桑妮照片給他看。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 42,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "是她啊！我有印象……但她就來那麼一次，聽完導覽很快就走了。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 43,
        type: "N",
        text: [
          { id: 1, text: "很耳熟的證詞……" },
          { id: 2, text: "就像小艾失蹤那時一樣。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 44,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "這次……你又說謊了嗎？",
      },
      {
        // 人文字訊息
        chatSN: 45,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "什麼意思？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 46,
        type: "N",
        text: [
          { id: 1, text: "館長很聰明，" },
          { id: 2, text: "他早就知道我的意思，" },
          { id: 3, text: "卻非要我講白了。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 47,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "小艾失蹤那天，我們明明一起待在二樓，你卻說看到小艾來過館內……你為什麼要說謊？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 48,
        type: "N",
        text: [
          { id: 1, text: "這麼多年來，" },
          { id: 2, text: "我一直沒有拆穿他。" },
          { id: 3, text: "我曾天真地以為……" },
          { id: 4, text: "他只是想隱瞞我跟他的關係。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 49,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "……是的，我的確說了謊。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 50,
        type: "N",
        text: [{ id: 1, text: "但事實總是那麼殘酷。" }],
      },
      {
        // 人文字訊息
        chatSN: 51,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "我曾經想過告訴你這件事，但你再也沒有來找我……",
      },
      {
        // 人文字訊息
        chatSN: 52,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……所以，那天……你到底有沒有看到小艾？",
      },
      {
        // 人文字訊息
        chatSN: 53,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "有，她的確來過館內……但那一天，她並沒有離開。",
      },
      {
        // 人文字訊息
        chatSN: 54,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我也在館內……那為什麼我沒看到她？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 55,
        type: "N",
        text: [
          { id: 1, text: "我話說到一半，" },
          { id: 2, text: "猛然想起了那間秘室，" },
          { id: 3, text: "一切恍然大悟。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 56,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我懂了……你是把小艾關在那間牢房裡嗎？",
      },
      {
        // 人文字訊息
        chatSN: 57,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "牢房？",
      },
      {
        // 人文字訊息
        chatSN: 58,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "就是藏在二樓書櫃後面的那間地下室。",
      },
      {
        // 人文字訊息
        chatSN: 59,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "那並不是什麼牢房，那是莊士郎的畫室。",
      },
      {
        // 人文字訊息
        chatSN: 60,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "不管那是什麼，小艾的確在裡頭待過，對吧？那她現在人在哪裡？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 61,
        type: "N",
        text: [
          { id: 1, text: "館長嘆了一口氣，" },
          { id: 2, text: "說出了那天的實情。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 62,
        type: "N",
        img: require("./images/D02-13-11.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 63,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "那天，小艾跑來館內……她說，有人正在追她，她不能回家，也不能被人找到。所以，我才收留她，安排她住在畫室裡。",
      },
      {
        // 人文字訊息
        chatSN: 64,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……後來呢？",
      },
      {
        // 人文字訊息
        chatSN: 65,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "她在這裡住了一晚。第二天早上，我送早餐給她……就發現她人已經不見了。我本來以為……她回家了，沒想到，她後來真的失蹤了。",
      },
      {
        // 人文字訊息
        chatSN: 66,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你為什麼沒跟警察說？",
      },
      {
        // 人文字訊息
        chatSN: 67,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "她要我不能告訴別人，只能說她來過，然後就走了……我也是這樣跟警察說的。",
      },
      {
        // 人文字訊息
        chatSN: 68,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你為什麼要聽她的？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 69,
        type: "N",
        text: [{ id: 1, text: "館長突然沉默不語。" }],
      },
      {
        // 人文字訊息
        chatSN: 70,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……你們早就認識了，對吧？她跟我一樣……以前也常來館內找你，是嗎？",
      },
      {
        // 人文字訊息
        chatSN: 71,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "……現在再說這些……已經沒有意義了。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 72,
        type: "N",
        text: [
          { id: 1, text: "那再問下去……" },
          { id: 2, text: "似乎也沒有意義了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 73,
        type: "N",
        text: [
          { id: 1, text: "我心裡知道，" },
          { id: 2, text: "他跟小艾之間……" },
          { id: 3, text: "一定有什麼不可告人的關係。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 74,
        type: "N",
        text: [{ id: 1, text: "女人的第六感很準的。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 75,
        type: "N",
        text: [
          { id: 1, text: "原來，" },
          { id: 2, text: "我不是第一個被他吸引的傻女孩。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 76,
        type: "N",
        text: [
          { id: 1, text: "他騙了我……" },
          { id: 2, text: "一定也騙了小艾！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 77,
        type: "N",
        text: [{ id: 1, text: "我再也不會相信他了！" }],
      },
    ],
  },
  {
    backSN: 40,
    backImg: require("./back/S02-03-01.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　鎮史館外" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "我從鎮史館內脫身，" },
          { id: 2, text: "目前看來是平安無事。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "沒有人從我背後襲擊，" },
          { id: 2, text: "也沒有人把我迷昏綁架，" },
          { id: 3, text: "我就這樣走出館外。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [{ id: 1, text: "他甚至沒有攔我。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "如果，" },
          { id: 2, text: "他真的是兇手，" },
          { id: 3, text: "怎麼會放我離開？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [{ id: 1, text: "我該去報警嗎？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "可是，" },
          { id: 2, text: "只靠那間祕室裡的那堆零食垃圾……" },
          { id: 3, text: "能證明什麼嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "至少，" },
          { id: 2, text: "我確定了一件事。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "館長不只說了一個謊，" },
          { id: 2, text: "他還隱瞞我很多事。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "我只能繼續追查真相，" },
          { id: 2, text: "拆穿他的假面具。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "……但又或者……" },
          { id: 2, text: "我也能證明他的清白。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 12,
        type: "N",
        img: require("./images/D02-15-01.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "遠離了傷心地，" },
          { id: 2, text: "我的情緒稍微冷靜了下來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [{ id: 1, text: "……將心思拉回到小艾的失蹤事件上。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "在鎮史館裡，" },
          { id: 2, text: "我查出了小艾不為人知的蹤跡……" },
          { id: 3, text: "但謎團並未因此解開，" },
          { id: 4, text: "反而產生了更多疑惑。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "那天，" },
          { id: 2, text: "小艾到底在躲誰？" },
          { id: 3, text: "有人在追她……" },
          { id: 4, text: "是要對她不利嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "可是，" },
          { id: 2, text: "問題來了……" },
          { id: 3, text: "如果，" },
          { id: 4, text: "小艾在館裡躲了一整個晚上……" },
          { id: 5, text: "又為什麼會被人看見……" },
          { id: 6, text: "她曾經出現在北巫橋上呢？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "目擊者們的供詞……" },
          { id: 2, text: "顯然出現了矛盾。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "在這個鎮上，" },
          { id: 2, text: "到底誰的話才可以相信呢？" },
        ],
      },
    ],
  },
  {
    backSN: 41,
    backImg: require("./back/S01-07-02.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　巷弄間" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "我總是穿著帆布鞋，" },
          { id: 2, text: "走路的步伐很輕，" },
          { id: 3, text: "也不太會有什麼腳步聲。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "所以，" },
          { id: 2, text: "在我回程的路上，" },
          { id: 3, text: "我很快就察覺到……" },
          { id: 4, text: "那個跟蹤者又出現了。" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 4,
        type: "N",
        sound: require("./sound/02-02.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "這一次，" },
          { id: 2, text: "可不能再讓你跑掉了！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "我刻意轉進小巷子裡，" },
          { id: 2, text: "引誘跟蹤者到偏僻無人的地帶。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "這種做法多少會有些風險……" },
          { id: 2, text: "常在電影裡看到的變態殺人魔，" },
          { id: 3, text: "就是會在這種暗巷裡……" },
          { id: 4, text: "襲擊那些落單女子。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [{ id: 1, text: "但我可不一樣！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "因為，" },
          { id: 2, text: "這裡是我的地盤！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "埋伏的地點……" },
          { id: 2, text: "我早就挑選好了，" },
          { id: 3, text: "一切照計畫進行。" },
          { id: 4, text: "我忽然加快腳步，" },
          { id: 5, text: "確定對方跟過來後，" },
          { id: 6, text: "迅速躲到了牆後。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "只要跟蹤者再走一步……" },
          { id: 2, text: "就會進入我的視野內，" },
          { id: 3, text: "他的真面目將無所遁形。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 12,
        type: "N",
        img: require("./images/D02-16-02.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [{ id: 1, text: "我總算揪出你了！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [{ id: 1, text: "黃克洋！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "如果現身的是兇神惡煞，" },
          { id: 2, text: "我會立馬轉身逃跑，" },
          { id: 3, text: "既然是他……" },
          { id: 4, text: "只能說來得正好。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "我二話不說，" },
          { id: 2, text: "直接從轉角處跳了出來，" },
          { id: 3, text: "大聲喝住他。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你幹嘛跟蹤我？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "之前，" },
          { id: 2, text: "追你就逃走……" },
          { id: 3, text: "現在又偷偷跟著……" },
          { id: 4, text: "一定有鬼！" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "你……你在說什麼？我是要回家……只是……跟你走的路一樣而已！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "很好！" },
          { id: 2, text: "至少，" },
          { id: 3, text: "你肯開口了……" },
          { id: 4, text: "雖然你說的是謊話連篇。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [{ id: 1, text: "你到底在隱瞞什麼？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "狹窄的巷子裡……" },
          { id: 2, text: "黃克洋前面的路被我擋住。" },
          { id: 3, text: "他回頭看了一眼，" },
          { id: 4, text: "似乎又打著逃跑的主意。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "我得把他留下，" },
          { id: 2, text: "讓他把話全都說清楚！" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 24,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你少裝！我都知道了！",
      },
      {
        // 人文字訊息
        chatSN: 25,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "……你知道什麼？",
      },
      {
        // 人文字訊息
        chatSN: 26,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "那些目擊者的情報……是你散布在網路上的吧！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "黃克洋動搖的表情……" },
          { id: 2, text: "證實了我的推論。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 28,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你一直在懷疑……那篇諷刺北巫鎮的貼文是我寫的，所以才故意這麼做……以為我看到後，就會回來這裡，對吧？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 29,
        type: "N",
        text: [{ id: 1, text: "黃克洋的臉色愈來愈難看。" }],
      },
      {
        // 人文字訊息
        chatSN: 30,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你的目的達到了。我人就在你面前……你到底想怎樣？",
      },
      {
        // 人文字訊息
        chatSN: 31,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "我……",
      },
      {
        // 人文字訊息
        chatSN: 32,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "小艾的失蹤跟你有關嗎？你到底在吊橋上看到了什麼？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 33,
        type: "N",
        text: [
          { id: 1, text: "不管他來不來得及反應過來，" },
          { id: 2, text: "我要把一整天的怒氣……" },
          { id: 3, text: "全都出在這傢伙身上。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 34,
        type: "N",
        text: [
          { id: 1, text: "沉默了好一陣子，" },
          { id: 2, text: "黃克洋終於有了回應。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 35,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "我……我才想知道……你到底在想什麼？你又為什麼要寫那一篇東西？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 36,
        type: "N",
        text: [
          { id: 1, text: "沒想到，" },
          { id: 2, text: "這傢伙反問起我來了。" },
          { id: 3, text: "做賊的卻喊捉賊……" },
          { id: 4, text: "這是怎麼回事？" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 37,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "這還用說嗎？當然是為了找到小艾啊！她很有可能已經死了……如果，她是被人殺死的，那更要找出誰是兇手啊？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 38,
        type: "N",
        text: [{ id: 1, text: "黃克洋像是突然被激怒似地咆哮了起來。" }],
      },
      {
        // 人文字訊息
        chatSN: 39,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "所以，我才更不懂啊！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 40,
        type: "N",
        text: [
          { id: 1, text: "我說的他聽不懂，" },
          { id: 2, text: "他說的我聽不懂。" },
          { id: 3, text: "我們兩人的談話……" },
          { id: 4, text: "簡直是鬼打牆。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 41,
        type: "N",
        text: [
          { id: 1, text: "然而，" },
          { id: 2, text: "就在下一秒，" },
          { id: 3, text: "他卻說出了……" },
          { id: 4, text: "我絕對料想不到的話。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 42,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "……因為……那個兇手就是你，莎葉！",
      },
      {
        // 人文字訊息
        chatSN: 43,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "感謝您完成了第二幕的閱讀。",
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 44,
        type: "N",
        sound: require("./sound/00-05.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 人文字訊息
        chatSN: 45,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "當我們得知館長與莎葉的戀情時，也就表示……小艾失蹤事件的所有關係人，都已經浮出了檯面。",
      },
      {
        // 人圖片訊息
        chatSN: 46,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        img: require("./images/M00-01.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 47,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "在這座小鎮裡，您選擇相信誰呢？又或者是……誰都不能相信？",
      },
      {
        // 人文字訊息
        chatSN: 48,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "就連莎葉跟小艾之間的友誼，看起來也沒那麼可靠。",
      },
      {
        // 人文字訊息
        chatSN: 49,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "在我們追蹤真相的過程中，疑點反而愈來愈多。",
      },
      {
        // 人文字訊息
        chatSN: 50,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "消失的小艾與桑妮……究竟是生是死？",
      },
      {
        // 人文字訊息
        chatSN: 51,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "鎮史館的女巫畫作……背後又隱藏了什麼線索呢？",
      },
      {
        // 人文字訊息
        chatSN: 52,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "最後一幕即將開始，所有的謎團都將一一解開……",
      },
      {
        // 人文字訊息
        chatSN: 53,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "真相將令您意想不到！",
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 54,
        type: "N",
        sound: require("./sound/00-06.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
    ],
  },
  {
    backSN: 42,
    backImg: require("./back/S03-02-07.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　放學路上" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "放學後，" },
          { id: 2, text: "兩位女孩並肩走在林間小路上。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "她們穿著同樣的國中制服，" },
          { id: 2, text: "理著一樣的西瓜皮頭髮。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "右邊女孩一邊走著，" },
          { id: 2, text: "一邊從書包裡拿出了一卷錄音帶。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 5,
        type: "N",
        img: require("./images/D03-20-01.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "我昨天錄ICRT的時候，" },
          { id: 2, text: "聽到一首很棒的英文歌。" },
          { id: 3, text: "雖然我不曉得是什麼歌，" },
          { id: 4, text: "但猜想你應該會喜歡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "既然你這麼說，" },
          { id: 2, text: "我一定會喜歡！" },
          { id: 3, text: "等我回家馬上就聽。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [{ id: 1, text: "左邊女孩開心地收下了錄音帶。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "兩位女孩繼續往前走，" },
          { id: 2, text: "不一會兒，" },
          { id: 3, text: "視野內出現了一棟紅色宅邸。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "你知道嗎？" },
          { id: 2, text: "我昨天經過這棟房子，" },
          { id: 3, text: "看見露台上有個很帥的男生。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "真的嗎？" },
          { id: 2, text: "我怎麼沒看過。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "左邊女孩被勾起了好奇心，" },
          { id: 2, text: "正要探頭張望時，" },
          { id: 3, text: "卻發現宅邸門外站著一位貴婦，" },
          { id: 4, text: "她瞧見兩人，" },
          { id: 5, text: "立刻親切地揮著手。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "同學們，" },
          { id: 2, text: "午安。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [{ id: 1, text: "兩位女孩不自覺地停下了腳步。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "我常看到你們經過這裡，" },
          { id: 2, text: "要不要進來坐坐喝杯茶呢？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [{ id: 1, text: "貴婦露出了溫柔的微笑。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "左邊女孩有點猶豫，" },
          { id: 2, text: "轉頭看了同伴一眼。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "不用了！" },
          { id: 2, text: "我們要回家了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "貴婦並不介意，" },
          { id: 2, text: "依然笑容可掬。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "下次歡迎來我們家玩，" },
          { id: 2, text: "我兒子在鎮上沒什麼朋友，" },
          { id: 3, text: "有機會的話……" },
          { id: 4, text: "希望你們可以認識認識他。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [{ id: 1, text: "好啊！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "左邊女孩一口答應，" },
          { id: 2, text: "卻被右邊女孩拉起手，" },
          { id: 3, text: "匆匆忙忙帶離了宅邸大門。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "臨走前，" },
          { id: 2, text: "左邊女孩回望了一眼，" },
          { id: 3, text: "果然看見露台上有人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "那是一名膚色蒼白、一臉憂鬱的俊美青年。" },
          { id: 2, text: "他一動也不動，" },
          { id: 3, text: "彷彿是尊希臘石膏像。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "石像冰冷的眼神……" },
          { id: 2, text: "直盯著她們看。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [{ id: 1, text: "這是發生在距今四十年前的往事。" }],
      },
    ],
  },
  {
    backSN: 43,
    backImg: require("./back/S02-02-02.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　莎葉房間" }],
      },
      {
        // 旁白文字訊息，有底色
        chatSN: 2,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "第三幕　女巫" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "這間旅館唯一的客人消失了……" },
          { id: 2, text: "露天池自然也不再開放。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "我獨自在房間內的小浴室裡泡澡，" },
          { id: 2, text: "然而，" },
          { id: 3, text: "心中的鬱悶卻揮之不去。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 5,
        type: "N",
        img: require("./images/D01-08-64.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [{ id: 1, text: "……是我殺死了小艾？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [{ id: 1, text: "為什麼黃克洋要這麼說？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "如果，" },
          { id: 2, text: "他不是兇手……" },
          { id: 3, text: "為什麼又這麼肯定……" },
          { id: 4, text: "小艾已經死了？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "這傢伙只丟下不負責任的指控，" },
          { id: 2, text: "之後就頭也不回地逃走了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "難道說……" },
          { id: 2, text: "我曾經犯了什麼無心的過錯，" },
          { id: 3, text: "直接或間接地導致了小艾的失蹤嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "六年前的那一天……" },
          { id: 2, text: "小艾有什麼異狀嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "我們在校園聚會時……" },
          { id: 2, text: "明明很開心呀？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "那在校門口分開的時候呢？" },
          { id: 2, text: "我們說了什麼？" },
          { id: 3, text: "她看起來怎麼樣？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "我拼命地回想……" },
          { id: 2, text: "這很可能是破案的關鍵。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "隨便洗了個澡，" },
          { id: 2, text: "我開始翻箱倒櫃。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "我怎麼找……" },
          { id: 2, text: "也找不到『那個東西』。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "這才猛然想起……" },
          { id: 2, text: "它被我在森林裡燒掉了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [{ id: 1, text: "我只好打電話給玉梅。" }],
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……喂，又是我。",
      },
      {
        // 人文字訊息
        chatSN: 20,
        type: "P",
        speaker: "L",
        name: "玉梅",
        photo: require("./profile/May.png"),
        backColor: "#F2D9DE",
        text: "怎麼了嗎？",
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你有沒有國中的畢業紀念冊？",
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "L",
        name: "玉梅",
        photo: require("./profile/May.png"),
        backColor: "#F2D9DE",
        text: "有啊！",
      },
      {
        // 人文字訊息
        chatSN: 23,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "可以幫我拍一下小艾的照片嗎？",
      },
      {
        // 人文字訊息
        chatSN: 24,
        type: "P",
        speaker: "L",
        name: "玉梅",
        photo: require("./profile/May.png"),
        backColor: "#F2D9DE",
        text: "……嗯……那我拍好以後……再傳給你。",
      },
      {
        // 人文字訊息
        chatSN: 25,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "謝謝你，玉梅。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "玉梅其實人很好，" },
          { id: 2, text: "以前，" },
          { id: 3, text: "我卻跟她不怎麼熟。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 27,
        type: "P",
        speaker: "L",
        name: "玉梅",
        photo: require("./profile/May.png"),
        backColor: "#F2D9DE",
        text: "……莎葉，你還會待在鎮上多久呢？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "從她的語氣中，" },
          { id: 2, text: "好像我隨時都會離開一樣。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 29,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……我也不知道。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [
          { id: 1, text: "結束通話後，" },
          { id: 2, text: "我坐在空盪盪的餐廳裡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 31,
        type: "N",
        text: [
          { id: 1, text: "回想著這幾天發生的各種事件，" },
          { id: 2, text: "發呆了好一陣子。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 32,
        type: "N",
        text: [{ id: 1, text: "手機傳來了玉梅的訊息。" }],
      },
      {
        // 人圖片訊息
        chatSN: 33,
        type: "P",
        speaker: "L",
        name: "玉梅",
        photo: require("./profile/May.png"),
        img: require("./images/M01-09.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 34,
        type: "N",
        text: [
          { id: 1, text: "……小艾……" },
          { id: 2, text: "好像跟我記憶中的一樣，" },
          { id: 3, text: "又好像有點不太一樣。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 35,
        type: "N",
        text: [
          { id: 1, text: "我一直以為……" },
          { id: 2, text: "小艾是短髮，" },
          { id: 3, text: "但照片裡的她卻是長髮。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 36,
        type: "N",
        text: [
          { id: 1, text: "仔細想想……" },
          { id: 2, text: "在畢業的時候，" },
          { id: 3, text: "她似乎把頭髮留長了。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 37,
        type: "N",
        img: require("./images/D01-06-13.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 38,
        type: "N",
        text: [
          { id: 1, text: "關於小艾……" },
          { id: 2, text: "還有一件事令我耿耿於懷。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 39,
        type: "N",
        text: [
          { id: 1, text: "小艾知不知道……" },
          { id: 2, text: "我跟館長交往的事呢？" },
          { id: 3, text: "她一定知道才對。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 40,
        type: "N",
        text: [
          { id: 1, text: "可是，" },
          { id: 2, text: "小艾並沒有告訴我……" },
          { id: 3, text: "她跟館長之間的關係。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 41,
        type: "N",
        text: [{ id: 1, text: "這算是一種背叛嗎？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 42,
        type: "N",
        text: [
          { id: 1, text: "另外，" },
          { id: 2, text: "小艾又為什麼敢叫館長包庇她，" },
          { id: 3, text: "還幫她作偽證？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 43,
        type: "N",
        text: [
          { id: 1, text: "是不是……" },
          { id: 2, text: "館長有什麼把柄在她手上？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 44,
        type: "N",
        text: [
          { id: 1, text: "我忍不住在想……" },
          { id: 2, text: "他們倆也許比我想像中的更親密。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 45,
        type: "N",
        text: [
          { id: 1, text: "如果，" },
          { id: 2, text: "館長不聽她的話……" },
          { id: 3, text: "她就要揭發他，" },
          { id: 4, text: "指控他跟未成年少女發生關係的惡行。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 46,
        type: "N",
        text: [
          { id: 1, text: "這樣一來，" },
          { id: 2, text: "他就再也不能當館長了，" },
          { id: 3, text: "甚至不能再留在這個鎮上……" },
          { id: 4, text: "這的確是他最害怕的事。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 47,
        type: "N",
        text: [
          { id: 1, text: "可是，" },
          { id: 2, text: "小艾會這樣威脅別人嗎？" },
          { id: 3, text: "那個傻里傻氣的小艾？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 48,
        type: "N",
        text: [{ id: 1, text: "我實在很難想像。" }],
      },
    ],
  },
  {
    backSN: 44,
    backImg: require("./back/S02-01-02.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, .3)",
        },
        text: [{ id: 1, text: "白天　溫泉旅館大街" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "二十年前的某個淡季，" },
          { id: 2, text: "有一位提著古董皮箱的旅人……" },
          { id: 3, text: "前來冷冷清清的月蘭溫泉旅館投宿。" },
          { id: 4, text: "在老闆娘的親切招待下，" },
          { id: 5, text: "他一住就是三年。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "後來，" },
          { id: 2, text: "這間旅館就從兩個人變成了三個人，" },
          { id: 3, text: "一位母親、一位父親，" },
          { id: 4, text: "還有我。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "在積欠了房錢第四年的時候，" },
          { id: 2, text: "那位旅人跨出了月蘭溫泉旅館的大門，" },
          { id: 3, text: "自此一去不返。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "老媽等候著每個淡季的到來，" },
          { id: 2, text: "期盼那位旅人會重返北巫鎮……" },
          { id: 3, text: "一直到我七歲的那一年，" },
          { id: 4, text: "他依然不見蹤影。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "有一天，" },
          { id: 2, text: "那口熟悉的古董皮箱……" },
          { id: 3, text: "竟莫名其妙地郵寄上門。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "老媽懷著忐忑不安的心情，" },
          { id: 2, text: "她打開一看，" },
          { id: 3, text: "裡頭卻什麼東西也沒有。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [{ id: 1, text: "這就是關於我身世的故事。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "我也常站在溫泉大街上，" },
          { id: 2, text: "看著人來人往的外地旅客。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "……期待有一天……" },
          { id: 2, text: "那個神秘旅人會再重返北巫鎮。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "但他始終沒有出現。" },
          { id: 2, text: "因為，" },
          { id: 3, text: "這裡並不是他的故鄉。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "今天一早，" },
          { id: 2, text: "我沒來由地跑到大街上吹風……" },
          { id: 3, text: "是開始感到厭倦了嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "忽然間，" },
          { id: 2, text: "我有種想逃避一切的念頭。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "……好想就這樣跳上公車，" },
          { id: 2, text: "遠離這座小鎮。" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 15,
        type: "N",
        sound: require("./sound/03-08.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "我轉頭一瞧，" },
          { id: 2, text: "一名機車騎士停在路旁。" },
          { id: 3, text: "我根本沒擋住他的去路，" },
          { id: 4, text: "他竟然又朝我按了一聲喇叭！" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 17,
        type: "N",
        sound: require("./sound/03-08-01.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "對方顯然是在叫我……" },
          { id: 2, text: "但先生……" },
          { id: 3, text: "你是哪位？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "機車騎士脫下安全帽，" },
          { id: 2, text: "露出了真面目。" },
          { id: 3, text: "抱歉，" },
          { id: 4, text: "我還是對你沒印象。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 20,
        type: "P",
        speaker: "L",
        name: "阿彥",
        photo: require("./profile/Yen.png"),
        text: "我是地獄香腸攤的老闆啦！你忘記啦！我叫阿彥。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "就只跟你買過一次而已……" },
          { id: 2, text: "我怎麼知道你叫什麼？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "我瞄了一眼他的機車，" },
          { id: 2, text: "後座載了一整箱貨物。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 23,
        type: "P",
        speaker: "L",
        name: "阿彥",
        photo: require("./profile/Yen.png"),
        text: "因為，我不住在鎮上……所以，每天都要騎車來擺攤。",
      },
      {
        // 人文字訊息
        chatSN: 24,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……有什麼事嗎？",
      },
      {
        // 人文字訊息
        chatSN: 25,
        type: "P",
        speaker: "L",
        name: "阿彥",
        photo: require("./profile/Yen.png"),
        text: "喔，那天……你不是來老街上嗎？本來想跟你說，但是你走得太急了……我叫了你幾聲，你都沒理我。",
      },
      {
        // 人文字訊息
        chatSN: 26,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "所以，你想說什麼？",
      },
      {
        // 人文字訊息
        chatSN: 27,
        type: "P",
        speaker: "L",
        name: "阿彥",
        photo: require("./profile/Yen.png"),
        text: "我有聽到……你是不是在找你那個美女朋友啊？我有看到她喔！",
      },
      {
        // 人文字訊息
        chatSN: 28,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "真的嗎？",
      },
      {
        // 人文字訊息
        chatSN: 29,
        type: "P",
        speaker: "L",
        name: "阿彥",
        photo: require("./profile/Yen.png"),
        text: "是啊！我還跟她聊了一會兒呢！她說……她還有一個地方沒有逛完。",
      },
      {
        // 人文字訊息
        chatSN: 30,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "什麼地方？",
      },
      {
        // 人文字訊息
        chatSN: 31,
        type: "P",
        speaker: "L",
        name: "阿彥",
        photo: require("./profile/Yen.png"),
        text: "北巫森林。",
      },
    ],
  },
  {
    backSN: 45,
    backImg: require("./back/S03-01-01.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　北巫橋一帶" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "彷彿是有一股無形的力量……" },
          { id: 2, text: "在冥冥之中引導著我，" },
          { id: 3, text: "讓我繼續留在這裡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "要不然的話……" },
          { id: 2, text: "就不會在我正想放棄的時候，" },
          { id: 3, text: "又丟給我一條新的線索。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "桑妮失蹤當天的行蹤……" },
          { id: 2, text: "獲得了目擊者的證實。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "小吃攤老闆的說法……" },
          { id: 2, text: "聽起來十分合理。" },
          { id: 3, text: "他不是本地人士，" },
          { id: 4, text: "與小艾失蹤案也無關，" },
          { id: 5, text: "更沒必要騙我。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "桑妮跟我一樣，" },
          { id: 2, text: "對解開神隱之路的真相……" },
          { id: 3, text: "還沒有完全放棄。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "因為，" },
          { id: 2, text: "那一天臨時起了大霧……" },
          { id: 3, text: "所以，" },
          { id: 4, text: "我們沒有進入北巫森林……" },
          { id: 5, text: "桑妮才會想再來一探究竟。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "我也不確定……" },
          { id: 2, text: "跑來這裡能不能找到桑妮？" },
          { id: 3, text: "但我還是想來看看……" },
          { id: 4, text: "希望她不是在山裡迷了路。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 9,
        type: "N",
        img: require("./images/D03-01-07.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "經過吊橋時，" },
          { id: 2, text: "我忍不住又想起了小艾失蹤案的疑點。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "小艾那天究竟是怎麼做到的？" },
          { id: 2, text: "一下子，" },
          { id: 3, text: "人在鎮史館的秘室躲藏；" },
          { id: 4, text: "一下子，" },
          { id: 5, text: "人又飛到了吊橋上發呆？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "令人匪夷所思……" },
          { id: 2, text: "簡直就像是女巫的法術一樣。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [{ id: 1, text: "我是不是應該換個角度來思考呢？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "也許，" },
          { id: 2, text: "小艾是怎麼憑空不見的……" },
          { id: 3, text: "並不是這個案子的重點。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "桑妮曾經說過……" },
          { id: 2, text: "大家都只在乎她是如何消失，" },
          { id: 3, text: "卻沒人關心她為什麼會失蹤？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "的確……" },
          { id: 2, text: "這起失蹤案的動機到底是什麼？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "如果，" },
          { id: 2, text: "照警方所說……" },
          { id: 3, text: "小艾是逃家……" },
          { id: 4, text: "那她的理由是什麼？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "如果，" },
          { id: 2, text: "小艾是被人殺死的……" },
          { id: 3, text: "那兇手又為什麼要鎖定她？" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 19,
        type: "N",
        img: require("./images/D03-02-22.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "不知不覺間……" },
          { id: 2, text: "我穿過了吊橋，" },
          { id: 3, text: "往前走了將近五十公尺。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "前面不遠處……" },
          { id: 2, text: "就是小艾家了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [{ id: 1, text: "我忽然湧現了一個全新的假設。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "既然小艾能在鎮上神出鬼沒，" },
          { id: 2, text: "那她是不是有可能……" },
          { id: 3, text: "在不被所有目擊者看到的狀況下……" },
          { id: 4, text: "成功回到了她家？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "不管是小鎮、學校、溪邊、森林，" },
          { id: 2, text: "在尋找小艾的所有行動裡，" },
          { id: 3, text: "各種可疑的地方都有人找過，" },
          { id: 4, text: "而唯一的盲點……" },
          { id: 5, text: "就是小艾的家。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [{ id: 1, text: "我居然現在才想到！" }],
      },
    ],
  },
  {
    backSN: 46,
    backImg: require("./back/S03-07-02.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, .3)",
        },
        text: [{ id: 1, text: "白天　深山農舍" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "其實，" },
          { id: 2, text: "小艾失蹤這件事……" },
          { id: 3, text: "並非所有人都漠不關心。" },
          { id: 4, text: "除了我以外，" },
          { id: 5, text: "鎮上還有一個人……" },
          { id: 6, text: "仍然積極尋找她的下落。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "那就是小艾的爸爸……" },
          { id: 2, text: "老羅。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "老羅打從一開始就不相信警察，" },
          { id: 2, text: "也沒打算找誰幫忙。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "這些年來……" },
          { id: 2, text: "他總是一個人拿著獵槍，" },
          { id: 3, text: "在北巫森林四處徘徊。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "有好幾次，" },
          { id: 2, text: "老羅去我們家旅館喝酒，" },
          { id: 3, text: "一喝醉就胡言亂語起來。" },
          { id: 4, text: "據老媽轉述，" },
          { id: 5, text: "老羅一直認為……" },
          { id: 6, text: "小艾是被森林裡的女巫帶走的。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "反觀小艾的媽媽，" },
          { id: 2, text: "原本就鮮少外出的她……" },
          { id: 3, text: "自從小艾失蹤後，" },
          { id: 4, text: "更是不曾出現大家面前。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "就我所知，" },
          { id: 2, text: "小艾的媽媽大病了一場，" },
          { id: 3, text: "但也有傳聞說……" },
          { id: 4, text: "老羅把錯都歸咎在老婆身上，" },
          { id: 5, text: "對她拳打腳踢，" },
          { id: 6, text: "她滿身是傷，" },
          { id: 7, text: "才不願見人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "是真是假？" },
          { id: 2, text: "畢竟都是別人的家務事。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 10,
        type: "N",
        img: require("./images/D03-03-03.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [{ id: 1, text: "我走到了小艾家門前。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "屋舍的大門根本沒關，" },
          { id: 2, text: "附近卻不見有人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "院子裡雜草叢生，" },
          { id: 2, text: "堆放著許多肥料與農業用品，" },
          { id: 3, text: "牆邊停靠著一台手推車，" },
          { id: 4, text: "車上載滿了各種土工器具，" },
          { id: 5, text: "看得出來……" },
          { id: 6, text: "屋主的本業是經營果園。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "我鼓起勇氣，" },
          { id: 2, text: "按了一下門邊的電鈴。" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 15,
        type: "N",
        sound: require("./sound/03-07.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "經過了令人忐忑不安的幾秒鐘，" },
          { id: 2, text: "沒人出來回應。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "有人在嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "我朝著門口喊了幾聲，" },
          { id: 2, text: "結果還是一樣。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [{ id: 1, text: "……就這樣離開嗎？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "即使六年前有人在……" },
          { id: 2, text: "我不也吃了閉門羹嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "現在沒人在家……" },
          { id: 2, text: "不是正好嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [{ id: 1, text: "敞開的大門引誘著我。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "不知為何……" },
          { id: 2, text: "我膽子忽然大了起來，" },
          { id: 3, text: "直接走進了小艾家。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [{ id: 1, text: "我已經不是當年的小女孩了。" }],
      },
      {
        // 旁白圖片訊息
        chatSN: 25,
        type: "N",
        img: require("./images/D03-03-07.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "屋內的擺設十分簡陋，" },
          { id: 2, text: "不管什麼傢具還是電器，" },
          { id: 3, text: "都顯得老舊而過時，" },
          { id: 4, text: "不曉得是家境不好，" },
          { id: 5, text: "還是生活檢樸。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "茶几上有幾盤吃剩的小菜，" },
          { id: 2, text: "地板上則散落著啤酒空罐。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "就在這時，" },
          { id: 2, text: "我注意到……" },
          { id: 3, text: "牆上掛了一張全家福照。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 29,
        type: "N",
        text: [
          { id: 1, text: "照片上……" },
          { id: 2, text: "是年輕時代的老羅，" },
          { id: 3, text: "以及一名抱著嬰兒的少婦。" },
          { id: 4, text: "兩人的臉上都沒有笑容，" },
          { id: 5, text: "表情十分僵硬。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [
          { id: 1, text: "奇怪……" },
          { id: 2, text: "那個女人怎麼有點眼熟？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 31,
        type: "N",
        text: [
          { id: 1, text: "對！" },
          { id: 2, text: "我知道她是小艾的母親，" },
          { id: 3, text: "但從小到大……" },
          { id: 4, text: "我大概沒見過她幾次，" },
          { id: 5, text: "為什麼會覺得似曾相識呢？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 32,
        type: "N",
        text: [
          { id: 1, text: "好像……" },
          { id: 2, text: "最近才在哪裡看過？" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 33,
        type: "N",
        img: require("./images/D03-14-02.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 34,
        type: "N",
        text: [
          { id: 1, text: "是記錯了吧！" },
          { id: 2, text: "小艾的媽媽早就已經過世了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 35,
        type: "N",
        text: [
          { id: 1, text: "但我還是無法釋懷，" },
          { id: 2, text: "偏偏一時又想不起來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 36,
        type: "N",
        text: [
          { id: 1, text: "繼續往裡頭探索……" },
          { id: 2, text: "穿過主臥房後，" },
          { id: 3, text: "我發現了另外一間寢室。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 37,
        type: "N",
        text: [{ id: 1, text: "這應該就是小艾房間了。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 38,
        type: "N",
        text: [
          { id: 1, text: "房間內空無一人，" },
          { id: 2, text: "只見衣物亂堆、床舖骯髒，" },
          { id: 3, text: "很多垃圾看起來已經累積了多年，" },
          { id: 4, text: "環境十分惡劣。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 39,
        type: "N",
        text: [
          { id: 1, text: "小艾就住在這種房間嗎？" },
          { id: 2, text: "我可以理解……" },
          { id: 3, text: "小艾是個生活習慣邋遢的女孩，" },
          { id: 4, text: "可是，" },
          { id: 5, text: "他的家人也不清理……" },
          { id: 6, text: "有點太超過了吧！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 40,
        type: "N",
        text: [
          { id: 1, text: "好吧！" },
          { id: 2, text: "既然闖進來了，" },
          { id: 3, text: "也許能找到小艾失蹤的線索。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 41,
        type: "N",
        text: [
          { id: 1, text: "於是，" },
          { id: 2, text: "我在垃圾堆裡翻找著，" },
          { id: 3, text: "不意外地，" },
          { id: 4, text: "找到了很多小艾曾在鎮上店家偷來的東西。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 42,
        type: "N",
        text: [
          { id: 1, text: "其中，" },
          { id: 2, text: "最令我驚訝的是……" },
          { id: 3, text: "我找到了幾份手寫的稿紙，" },
          { id: 4, text: "還有毛筆、硯台等書法文具。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 43,
        type: "N",
        text: [
          { id: 1, text: "那是鎮史館裡的莊士郎文物！" },
          { id: 2, text: "我在開館整理時有看過，" },
          { id: 3, text: "後來卻不見了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 44,
        type: "N",
        text: [
          { id: 1, text: "小艾連這個都偷來了嗎？" },
          { id: 2, text: "要是館長知道了……" },
          { id: 3, text: "一定會很生氣吧？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 45,
        type: "N",
        text: [
          { id: 1, text: "然後，" },
          { id: 2, text: "我終於找到跟我有關的物品了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 46,
        type: "N",
        text: [
          { id: 1, text: "那是一堆被揉爛的紙片。" },
          { id: 2, text: "我一眼就認出來……" },
          { id: 3, text: "那是我們的詛咒小紙人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 47,
        type: "N",
        text: [
          { id: 1, text: "沒想到，" },
          { id: 2, text: "她做了這麼多張！" },
          { id: 3, text: "可是，" },
          { id: 4, text: "我們去森林燒紙人的時候，" },
          { id: 5, text: "她只帶了一張。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 48,
        type: "N",
        text: [
          { id: 1, text: "我曾問過小艾……" },
          { id: 2, text: "上頭寫的是誰？" },
          { id: 3, text: "她沒有回答。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 49,
        type: "N",
        text: [
          { id: 1, text: "如今，" },
          { id: 2, text: "謎底就要揭曉了……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 50,
        type: "N",
        text: [
          { id: 1, text: "我把小紙人都攤開來，" },
          { id: 2, text: "每一張寫的都是同樣的四個字。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 51,
        type: "N",
        text: [{ id: 1, text: "「我的爸爸」。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 52,
        type: "N",
        text: [{ id: 1, text: "這是怎麼回事？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 53,
        type: "N",
        text: [{ id: 1, text: "小艾為什麼要詛咒她的父親？" }],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 54,
        type: "N",
        sound: require("./sound/03-11.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 55,
        type: "N",
        text: [{ id: 1, text: "老羅回來了！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 56,
        type: "N",
        text: [
          { id: 1, text: "我在一片驚慌中……" },
          { id: 2, text: "迅速將自己藏身在房內的死角。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 57,
        type: "N",
        img: require("./images/D03-04-08.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 58,
        type: "N",
        text: [{ id: 1, text: "我為什麼要躲呢？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 59,
        type: "N",
        text: [
          { id: 1, text: "從小，" },
          { id: 2, text: "我就很怕老羅，" },
          { id: 3, text: "不敢跟他說話，" },
          { id: 4, text: "甚至不敢看他一眼。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 60,
        type: "N",
        text: [
          { id: 1, text: "也沒有什麼理由……" },
          { id: 2, text: "就覺得他是個壞人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 61,
        type: "N",
        text: [
          { id: 1, text: "老羅並沒有往裡頭走來，" },
          { id: 2, text: "似乎直接在客廳坐下。" },
          { id: 3, text: "我悄悄往門邊移動，" },
          { id: 4, text: "偷瞄了一眼……" },
          { id: 5, text: "老羅正打開一罐啤酒，" },
          { id: 6, text: "大口喝了起來。" },
        ],
      },
      {
        // 人聲音訊息
        chatSN: 62,
        type: "P",
        speaker: "L",
        name: "老羅",
        photo: require("./profile/Logan.png"),
        sound: require("./sound/M03-09.mp3"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 63,
        type: "N",
        text: [{ id: 1, text: "桌上擺了新買的半打啤酒。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 64,
        type: "N",
        text: [
          { id: 1, text: "糟糕！" },
          { id: 2, text: "萬一，" },
          { id: 3, text: "他就這樣喝個不停……" },
          { id: 4, text: "喝到太陽下山，" },
          { id: 5, text: "那我該怎麼辦？" },
          { id: 6, text: "總不能躲在這裡一整晚吧！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 65,
        type: "N",
        text: [
          { id: 1, text: "我正在煩惱時，" },
          { id: 2, text: "老羅忽然拿著那半打啤酒，" },
          { id: 3, text: "從椅子站起身來，" },
          { id: 4, text: "往門外走去。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 66,
        type: "N",
        text: [{ id: 1, text: "……要趁機逃走嗎？" }],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 67,
        type: "N",
        sound: require("./sound/03-06.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 68,
        type: "N",
        text: [
          { id: 1, text: "正當我猶豫不決時，" },
          { id: 2, text: "突然一道槍聲響起，" },
          { id: 3, text: "嚇了我一大跳。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 69,
        type: "N",
        text: [
          { id: 1, text: "我克制著發抖的膝蓋，" },
          { id: 2, text: "從房間窗戶往外偷看。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 70,
        type: "N",
        text: [
          { id: 1, text: "後院裡……" },
          { id: 2, text: "老羅正舉著獵槍，" },
          { id: 3, text: "瞄準放在板凳上的啤酒空罐。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 71,
        type: "N",
        text: [
          { id: 1, text: "原來，" },
          { id: 2, text: "他一邊喝酒，" },
          { id: 3, text: "一邊在練習射擊。" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 72,
        type: "N",
        sound: require("./sound/03-06.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 73,
        type: "N",
        text: [
          { id: 1, text: "老羅一槍沒打中，" },
          { id: 2, text: "又開了第二槍、第三槍，" },
          { id: 3, text: "這才打爆了罐子。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 74,
        type: "N",
        text: [
          { id: 1, text: "接著，" },
          { id: 2, text: "他又開了一罐啤酒，" },
          { id: 3, text: "打算一口氣喝乾，" },
          { id: 4, text: "好繼續射擊。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 75,
        type: "N",
        text: [{ id: 1, text: "這對我是個大好的機會！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 76,
        type: "N",
        text: [
          { id: 1, text: "老羅又在板凳上擺上了新的空罐。" },
          { id: 2, text: "他返回原位後，" },
          { id: 3, text: "開始裝填子彈。" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 77,
        type: "N",
        sound: require("./sound/03-10.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 78,
        type: "N",
        text: [
          { id: 1, text: "我壓低著身子，" },
          { id: 2, text: "悄悄地往門口前進，" },
          { id: 3, text: "最後蹲在門邊等待。" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 79,
        type: "N",
        sound: require("./sound/03-06.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 80,
        type: "N",
        text: [
          { id: 1, text: "槍聲響起……" },
          { id: 2, text: "我利用聲音的掩護，" },
          { id: 3, text: "立馬起跑，" },
          { id: 4, text: "以我最快的速度，" },
          { id: 5, text: "成功逃出了小艾家。" },
        ],
      },
    ],
  },
  {
    backSN: 47,
    backImg: require("./back/S02-02-05.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　月蘭溫泉旅館" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "驚魂未定的我……" },
          { id: 2, text: "連森林也忘了去，" },
          { id: 3, text: "就匆匆跑下山……" },
          { id: 4, text: "直到返回旅館，" },
          { id: 5, text: "這才鬆了一口氣。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "稍作休息後，" },
          { id: 2, text: "我開始整理在小艾家發現的情報。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "看樣子……" },
          { id: 2, text: "小艾跟爸爸的關係並不好。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "人們都說……" },
          { id: 2, text: "小艾像爸爸，" },
          { id: 3, text: "所以才會常常在鎮上惹麻煩……" },
          { id: 4, text: "但真的是這樣嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "我詛咒過別人，" },
          { id: 2, text: "很了解那種心情。" },
          { id: 3, text: "如果不是老羅對她做了什麼事……" },
          { id: 4, text: "小艾不會如此恨他！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "這的確能構成小艾逃家的動機。" },
          { id: 2, text: "可是依然無法解釋……" },
          { id: 3, text: "那一天，" },
          { id: 4, text: "她是往回家的方向走。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "對了！" },
          { id: 2, text: "還有小艾的母親……" },
          { id: 3, text: "那張照片讓我非常在意。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "我到底是在哪兒看過她？" },
          { id: 2, text: "或者是……" },
          { id: 3, text: "長得像她的人？" },
          { id: 4, text: "總覺得自己快要想起來了……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "正好！" },
          { id: 2, text: "老媽走了過來……" },
          { id: 3, text: "不如問問看她好了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "把溫泉旅館經營成居酒屋的老媽……" },
          { id: 2, text: "號稱是北巫鎮的八卦情報站站長……" },
          { id: 3, text: "她當之無愧。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 12,
        type: "N",
        img: require("./images/D03-07-06.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 13,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你應該認識小艾的媽媽吧？",
      },
      {
        // 人文字訊息
        chatSN: 14,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "這小鎮上……有誰我不認識？你問她幹嘛？",
      },
      {
        // 人文字訊息
        chatSN: 15,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "不能問一下嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [{ id: 1, text: "老媽嘆了一口氣。" }],
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "你別再去管小艾家的事了！你知道嗎？大家忍你很久了。",
      },
      {
        // 人文字訊息
        chatSN: 18,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "哼，我也忍他們很久了。",
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "好啦、好啦！你到底想知道什麼？問我就好……不要去煩其他人了，行嗎？",
      },
      {
        // 人文字訊息
        chatSN: 20,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "很好。我想知道……小艾的媽媽叫什麼名字？",
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "沈伊芳。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "我要老媽寫在紙上……" },
          { id: 2, text: "也許，" },
          { id: 3, text: "等一下我可以上網搜尋看看。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 23,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "她幾歲？是本地人嗎？",
      },
      {
        // 人文字訊息
        chatSN: 24,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "一樣……都跟你老媽一樣。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [{ id: 1, text: "我忽然聯想到一事。" }],
      },
      {
        // 人文字訊息
        chatSN: 26,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你們同年齡，又都住在這裡……那你們也讀過北巫國中囉？",
      },
      {
        // 人文字訊息
        chatSN: 27,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "……我們是同班同學。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "竟然有這種事！" },
          { id: 2, text: "老媽跟小艾的媽媽……" },
          { id: 3, text: "我跟小艾……" },
          { id: 4, text: "產生了跨越年代的巧合。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 29,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "所以，你們倆熟嗎？",
      },
      {
        // 人文字訊息
        chatSN: 30,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "我跟她八字不合。",
      },
      {
        // 人文字訊息
        chatSN: 31,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "這種說法……聽起來就是挺熟的。",
      },
      {
        // 人文字訊息
        chatSN: 32,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "……曾經還不錯啦！後來……就互看不順眼了。",
      },
      {
        // 人文字訊息
        chatSN: 33,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "為什麼？",
      },
      {
        // 人文字訊息
        chatSN: 34,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "你老媽最討厭見色忘友的人。",
      },
      {
        // 人文字訊息
        chatSN: 35,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "喔，你們搶同一個男人呀！",
      },
      {
        // 人文字訊息
        chatSN: 36,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "亂講什麼？沒這回事！",
      },
      {
        // 人文字訊息
        chatSN: 37,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "不然……是發生什麼事了？",
      },
      {
        // 人文字訊息
        chatSN: 38,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "那個女人不聽我的勸告，跑去陌生男人家裡……喝紅茶、吃點心……真是不知羞恥！",
      },
      {
        // 人文字訊息
        chatSN: 39,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "誰？",
      },
      {
        // 人文字訊息
        chatSN: 40,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "還不就是那個莊家大少爺。",
      },
      {
        // 人文字訊息
        chatSN: 41,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "莊士郎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 42,
        type: "N",
        text: [
          { id: 1, text: "老媽聽到這個名字……" },
          { id: 2, text: "突然不再多話了。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 43,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "……關於這個人的事……我不太想講，你也別再問了。總之，後來……我跟那個女人就不相往來了，不管是她結婚，還是她的葬禮，我都沒去。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 44,
        type: "N",
        text: [
          { id: 1, text: "老媽自顧自地說著……" },
          { id: 2, text: "我的腦子卻突然靈光了起來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 45,
        type: "N",
        text: [
          { id: 1, text: "等等……" },
          { id: 2, text: "我知道了！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 46,
        type: "N",
        text: [{ id: 1, text: "我想起來在哪裡看過沈伊芳了！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 47,
        type: "N",
        text: [
          { id: 1, text: "但是……" },
          { id: 2, text: "怎麼會有這種事？" },
        ],
      },
    ],
  },
  {
    backSN: 48,
    backImg: require("./back/S02-06-03.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　鎮史館一樓" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "我站在館史館的走廊上……" },
          { id: 2, text: "那幅畫作就在我的面前。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "果然沒錯！" },
          { id: 2, text: "畫中的女子……" },
          { id: 3, text: "比起神似小艾，" },
          { id: 4, text: "倒不如說她是小艾的媽媽……" },
          { id: 5, text: "還更加傳神。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "在這幅畫的底下……" },
          { id: 2, text: "註明了作品的標題：『女巫』。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "據館長所說……" },
          { id: 2, text: "這是莊士郎的隱藏畫作。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "可是，" },
          { id: 2, text: "為什麼莊士郎會認為……" },
          { id: 3, text: "沈伊芳是女巫？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "難道說……" },
          { id: 2, text: "北巫鎮的女巫真的存在嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "我腦子裡湧現了一個很荒謬的想法……" },
          { id: 2, text: "說不定，" },
          { id: 3, text: "小艾的母親有著女巫的血統。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "換句話說，" },
          { id: 2, text: "小艾身上也流著女巫的血。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "所以，" },
          { id: 2, text: "小艾才會使用某種超自然的巫術，" },
          { id: 3, text: "操縱山裡的大霧，" },
          { id: 4, text: "在鎮上來去無蹤……" },
          { id: 5, text: "最後在吊橋上消失於無形，" },
          { id: 6, text: "成為了糾纏這個小鎮的鬼影。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [{ id: 1, text: "我到底在想些什麼？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "但愈是這麼想……" },
          { id: 2, text: "就愈覺得害怕。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "我忽然想起……" },
          { id: 2, text: "在二樓的書房裡……" },
          { id: 3, text: "收藏了本地的鄉土史料。" },
          { id: 4, text: "也許，" },
          { id: 5, text: "我能找到有關於女巫的紀載。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "館內此刻……" },
          { id: 2, text: "只有我一個人。" },
          { id: 3, text: "其實，" },
          { id: 4, text: "我是偷溜進來的。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "在館長尚未洗清嫌疑前，" },
          { id: 2, text: "我可不想再跟他碰面。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "今天正好是休館日。" },
          { id: 2, text: "館長通常都會利用這天……" },
          { id: 3, text: "到鎮上採買用品。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "我還有足夠的時間可以溜上二樓，" },
          { id: 2, text: "一探女巫傳說的真相。" },
        ],
      },
    ],
  },
  {
    backSN: 49,
    backImg: require("./back/S03-09-03.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　鎮史館二樓" }],
      },
      {
        // 旁白圖片訊息
        chatSN: 2,
        type: "N",
        img: require("./images/D03-08-08.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "憑著當年的印象……" },
          { id: 2, text: "我穿梭在書架之間，" },
          { id: 3, text: "把相關的史書一本一本地找了出來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "……包括了清朝的「噶瑪蘭廳志」、" },
          { id: 2, text: "日據時期「臺北州理蕃誌」，" },
          { id: 3, text: "以及民國之後的「宜蘭縣志」等等。" },
          { id: 4, text: "我快速翻閱……" },
          { id: 5, text: "看能不能發現有用的情報？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "我發現……" },
          { id: 2, text: "在一本鄉土誌中……" },
          { id: 3, text: "提到了北巫鎮名字的由來……" },
          { id: 4, text: "是源自於巴賽族部落的女巫傳說。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "巴賽族……" },
          { id: 2, text: "是凱達格蘭族的分支，" },
          { id: 3, text: "是最早定居在台北盆地的原住民。" },
          { id: 4, text: "在數百年前，" },
          { id: 5, text: "有一支部落遷移到了蘭陽平原。" },
          { id: 6, text: "然而，" },
          { id: 7, text: "當地已經被噶瑪蘭族佔據。" },
          { id: 8, text: "為了避免衝突，" },
          { id: 9, text: "他們便隱居在這處山谷裡，" },
          { id: 10, text: "建立了村莊。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "據說，" },
          { id: 2, text: "族中一位法力高強的女巫施展法術，" },
          { id: 3, text: "讓山裡終年彌漫大霧，" },
          { id: 4, text: "用來保護族人，" },
          { id: 5, text: "不受外族侵犯。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "自清朝以後，" },
          { id: 2, text: "漢人大舉來此開墾……" },
          { id: 3, text: "這支巴賽族逐漸被漢化。" },
          { id: 4, text: "他們的傳統與文化……" },
          { id: 5, text: "慢慢消失在歷史之中，" },
          { id: 6, text: "始終沒變的是……" },
          { id: 7, text: "山裡的大霧。" },
          { id: 8, text: "唯一剩下的是……" },
          { id: 9, text: "這座小鎮的名字……" },
          { id: 10, text: "北巫鎮。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "我還找到了一本宜蘭的鄉野異聞錄……" },
          { id: 2, text: "記載著一則先民口傳的故事。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "故事發生在古早年代……" },
          { id: 2, text: "住在北巫森林裡的女巫……" },
          { id: 3, text: "心地十分善良，" },
          { id: 4, text: "每次在山裡遇到迷路受傷的人，" },
          { id: 5, text: "她都會好心地帶對方回家治療。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "有一次，" },
          { id: 2, text: "一名被女巫所救的年輕人……" },
          { id: 3, text: "因此愛上了美貌的女巫……" },
          { id: 4, text: "於是，" },
          { id: 5, text: "他自願留在山上，" },
          { id: 6, text: "希望能贏得女巫的芳心，" },
          { id: 7, text: "但他終究沒能如願。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "女巫為了逃避他的追求，" },
          { id: 2, text: "施法躲進了大霧裡，" },
          { id: 3, text: "再也沒有現身。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "那位年輕人傷心之餘，" },
          { id: 2, text: "再也沒有下山，" },
          { id: 3, text: "從此失去了蹤影。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "他的家人因為找不到他，" },
          { id: 2, text: "便開始謠傳……" },
          { id: 3, text: "女巫拐走了他，" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "不管那則傳說是真是假……" },
          { id: 2, text: "都不是什麼恐怖事件，" },
          { id: 3, text: "相反地……" },
          { id: 4, text: "只是一段愛情悲劇。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 16,
        type: "N",
        img: require("./images/D03-08-30.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "我從未聽說過……" },
          { id: 2, text: "小艾或是她的家人具有原住民身份。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "在我們鎮上……" },
          { id: 2, text: "的確也有原住民，" },
          { id: 3, text: "大部分都是泰雅族。" },
          { id: 4, text: "老街上也有他們開的店面，" },
          { id: 5, text: "專賣小米酒等知名特產。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "巴賽族與噶瑪蘭族如今已成為歷史，" },
          { id: 2, text: "可女巫卻是真實的存在。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "我還找到了一本北台灣的考古研究書籍，" },
          { id: 2, text: "上面提到有一支大學團隊……" },
          { id: 3, text: "他們在北巫森林裡……" },
          { id: 4, text: "曾經發現過疑似巴賽族的遺跡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "如果，" },
          { id: 2, text: "女巫真的有後裔……" },
          { id: 3, text: "那裡……" },
          { id: 4, text: "可能就是她們的聖地。" },
        ],
      },
    ],
  },
  {
    backSN: 50,
    backImg: require("./back/S03-06-18.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　北巫森林" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "森林裡尚未被霧氣籠罩……" },
          { id: 2, text: "空氣清澈，" },
          { id: 3, text: "視野良好。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [{ id: 1, text: "女巫是否正在沉睡呢？" }],
      },
      {
        // 旁白圖片訊息
        chatSN: 4,
        type: "N",
        img: require("./images/D01-03-01.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "我獨自踏進了這片神秘的森林，" },
          { id: 2, text: "試圖找尋巴賽族的遺跡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "天黑以前，" },
          { id: 2, text: "我就得離開。" },
          { id: 3, text: "不管有沒有起霧，" },
          { id: 4, text: "一旦入夜後，" },
          { id: 5, text: "在森林裡很容易失去方向。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "最初的一小段路……" },
          { id: 2, text: "應該是以前農夫跟獵人開出來的小徑，" },
          { id: 3, text: "勉強還算好走。" },
          { id: 4, text: "一般來說，" },
          { id: 5, text: "鎮上的人如果要進森林，" },
          { id: 6, text: "也只會走到這裡為止。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [{ id: 1, text: "我選擇繼續前進。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "接著……" },
          { id: 2, text: "我經過了幾處營火堆。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "這一帶是青少年們的秘密基地。" },
          { id: 2, text: "其中一處……" },
          { id: 3, text: "正是我跟小艾以前燒小紙人的地方。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "我翻開了從鎮史館裡「借閱」的那本考古書。" },
          { id: 2, text: "就考古團隊的調查，" },
          { id: 3, text: "遺跡所在處……" },
          { id: 4, text: "比我想像中的更遠。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "我從來沒有走得如此深入。" },
          { id: 2, text: "就算我是土生土長的本地人……" },
          { id: 3, text: "也依然走得提心吊膽。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 13,
        type: "N",
        img: require("./images/D03-09-31.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "就在這時，" },
          { id: 2, text: "那一道令人毛骨悚然的聲音……" },
          { id: 3, text: "再度在林間響起。" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 15,
        type: "N",
        sound: require("./sound/01-05.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "我心裡有數。" },
          { id: 2, text: "轉頭一看……" },
          { id: 3, text: "老羅正推著手推車，" },
          { id: 4, text: "一路穿過森林。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "真糟糕！" },
          { id: 2, text: "我跟老羅尷尬地相遇……" },
          { id: 3, text: "竟在這陰森偏僻的地帶。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "說點什麼話吧？" },
          { id: 2, text: "莎葉！" },
          { id: 3, text: "不然，" },
          { id: 4, text: "氣氛會更詭異。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "我忽然注意到……" },
          { id: 2, text: "那輛推車跟上次看到的不太一樣，" },
          { id: 3, text: "上頭覆蓋著一層防水帆布。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [{ id: 1, text: "我聞到了一股可怕的惡臭。" }],
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "這上面……載了什麼？",
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "L",
        name: "老羅",
        photo: require("./profile/Logan.png"),
        text: "山裡的野猴子……放心，已經死透了。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "藍色的帆布下……" },
          { id: 2, text: "隱隱透出了黑紅色的血跡。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 24,
        type: "P",
        speaker: "L",
        name: "老羅",
        photo: require("./profile/Logan.png"),
        text: "……這群山猴常跑來果園偷吃，不打死幾隻……牠們不會怕。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "我沒說什麼，" },
          { id: 2, text: "老羅就自己解釋起來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "這樣的解釋……" },
          { id: 2, text: "並無法消除我心中強烈的不安。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "老羅瞄了我一眼，" },
          { id: 2, text: "正要推著車子離開……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "既然都遇到了……" },
          { id: 2, text: "我也想要證實我的假設，" },
          { id: 3, text: "便故意試探他。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 29,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我有看過小艾身上的傷……那是你打的，對吧？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [{ id: 1, text: "老羅的臉色瞬間變了。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 31,
        type: "N",
        text: [
          { id: 1, text: "我猜對了！" },
          { id: 2, text: "小艾果然被老羅家暴！" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 32,
        type: "P",
        speaker: "L",
        name: "老羅",
        photo: require("./profile/Logan.png"),
        text: "關你什麼事？你想怎樣？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 33,
        type: "N",
        text: [
          { id: 1, text: "老羅朝我怒吼了一聲……" },
          { id: 2, text: "讓我不敢再追問下去。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 34,
        type: "N",
        text: [
          { id: 1, text: "我趕緊往反方向走，" },
          { id: 2, text: "迅速遠離老羅。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 35,
        type: "N",
        text: [
          { id: 1, text: "其實，" },
          { id: 2, text: "我並沒走遠。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 36,
        type: "N",
        text: [
          { id: 1, text: "我偷偷跟在老羅後頭……" },
          { id: 2, text: "看看他到底要去哪裡？" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 37,
        type: "N",
        sound: require("./sound/01-05-01.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 38,
        type: "N",
        text: [{ id: 1, text: "老羅將手推車停在樹林間的一處空地上。" }],
      },
      {
        // 旁白圖片訊息
        chatSN: 39,
        type: "N",
        img: require("./images/D03-11-02.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 40,
        type: "N",
        text: [
          { id: 1, text: "我躲在一棵大樹後頭……" },
          { id: 2, text: "窺伺著他的一舉一動。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 41,
        type: "N",
        text: [
          { id: 1, text: "老羅拿起壓在帆布上的圓鍬，" },
          { id: 2, text: "開始在地面上挖起洞來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 42,
        type: "N",
        text: [
          { id: 1, text: "我趁老羅專心挖洞時，" },
          { id: 2, text: "慢慢走向那輛手推車……" },
          { id: 3, text: "想要知道車內到底藏了什麼？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 43,
        type: "N",
        text: [
          { id: 1, text: "終於來到手推車旁邊……" },
          { id: 2, text: "我戰戰兢兢地伸出手……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 44,
        type: "N",
        text: [
          { id: 1, text: "一把將帆布揭開……" },
          { id: 2, text: "竟出現一具鮮血淋漓的女人屍體！" },
        ],
      },
      {
        // 人聲音訊息
        chatSN: 45,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        sound: require("./sound/M03-05.mp3"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 46,
        type: "N",
        text: [{ id: 1, text: "桑妮！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 47,
        type: "N",
        text: [
          { id: 1, text: "我嚇了一大跳，" },
          { id: 2, text: "向後退了幾步，" },
          { id: 3, text: "撞到了站在身後的人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 48,
        type: "N",
        text: [
          { id: 1, text: "猛一轉身，" },
          { id: 2, text: "老羅赫然出現在身後。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 49,
        type: "P",
        speaker: "L",
        name: "老羅",
        photo: require("./profile/Logan.png"),
        text: "看夠了嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 50,
        type: "N",
        text: [{ id: 1, text: "老羅正兇狠地瞪著我。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 51,
        type: "N",
        text: [{ id: 1, text: "我嚇得拔腿就跑。" }],
      },
      {
        // 旁白圖片訊息
        chatSN: 52,
        type: "N",
        img: require("./images/D03-10-54.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 53,
        type: "N",
        text: [{ id: 1, text: "我沒命地在森林裡狂奔。" }],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 54,
        type: "N",
        sound: require("./sound/01-03.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 55,
        type: "N",
        text: [
          { id: 1, text: "明明知道……" },
          { id: 2, text: "這時候不應該想東想西的，" },
          { id: 3, text: "但我的腦子還是不停地運轉著……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 56,
        type: "N",
        text: [{ id: 1, text: "桑妮竟然被殺死了！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 57,
        type: "N",
        text: [{ id: 1, text: "……是老羅殺死了她？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 58,
        type: "N",
        text: [{ id: 1, text: "為什麼？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 59,
        type: "N",
        text: [{ id: 1, text: "小艾也是被他殺死的嗎？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 60,
        type: "N",
        text: [
          { id: 1, text: "我忍不住回頭一看……" },
          { id: 2, text: "老羅在後頭追了過來！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 61,
        type: "N",
        text: [
          { id: 1, text: "我一陣緊張……" },
          { id: 2, text: "沒注意到地上的樹枝，" },
          { id: 3, text: "當場被絆倒在地。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 62,
        type: "N",
        text: [
          { id: 1, text: "慘了！" },
          { id: 2, text: "我正要狼狽地爬起身來，" },
          { id: 3, text: "突然伸出來一雙大手……" },
          { id: 4, text: "直接把我整個人拎起。" },
        ],
      },
      {
        // 人聲音訊息
        chatSN: 63,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        sound: require("./sound/M03-05.mp3"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 64,
        type: "N",
        text: [
          { id: 1, text: "老羅抓住了我！" },
          { id: 2, text: "沒想到，" },
          { id: 3, text: "他的力氣這麼大！" },
          { id: 4, text: "他將我的身體撞在樹幹上，" },
          { id: 5, text: "痛得我叫出聲來。" },
        ],
      },
      {
        // 人聲音訊息
        chatSN: 65,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        sound: require("./sound/M03-02.mp3"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 66,
        type: "N",
        text: [
          { id: 1, text: "我的聲音在林間迴盪，" },
          { id: 2, text: "老羅卻不再給我呼救的機會……" },
          { id: 3, text: "他緊緊勒住了我的脖子。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 67,
        type: "N",
        img: require("./images/D03-12-42.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 68,
        type: "P",
        speaker: "L",
        name: "老羅",
        photo: require("./profile/Logan.png"),
        text: "就是你……對吧？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 69,
        type: "N",
        text: [
          { id: 1, text: "我？" },
          { id: 2, text: "什麼意思？" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 70,
        type: "P",
        speaker: "L",
        name: "老羅",
        photo: require("./profile/Logan.png"),
        text: "……是你把她藏起來了！是你！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 71,
        type: "N",
        text: [{ id: 1, text: "你在說什麼？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 72,
        type: "N",
        text: [
          { id: 1, text: "殺人的明明是你！" },
          { id: 2, text: "你還反過來懷疑我？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 73,
        type: "N",
        text: [{ id: 1, text: "但我根本說不出話來。" }],
      },
      {
        // 人文字訊息
        chatSN: 74,
        type: "P",
        speaker: "L",
        name: "老羅",
        photo: require("./profile/Logan.png"),
        text: "把小艾還來！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 75,
        type: "N",
        text: [
          { id: 1, text: "老羅完全失去了理智，" },
          { id: 2, text: "掐住我的力道愈來愈強。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 76,
        type: "N",
        text: [
          { id: 1, text: "我動彈不得，" },
          { id: 2, text: "雙腳幾乎懸空……" },
          { id: 3, text: "就快要無法呼吸……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 77,
        type: "N",
        text: [{ id: 1, text: "……我要死了嗎？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 78,
        type: "N",
        text: [{ id: 1, text: "……死在森林裡沒人知道的地方。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 79,
        type: "N",
        text: [
          { id: 1, text: "不！" },
          { id: 2, text: "我不要死！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 80,
        type: "N",
        text: [
          { id: 1, text: "我奮力地掙扎……" },
          { id: 2, text: "想為自己爭取多一秒鐘的活命機會。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 81,
        type: "N",
        text: [{ id: 1, text: "奇蹟出現了！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 82,
        type: "N",
        text: [
          { id: 1, text: "突然間，" },
          { id: 2, text: "老羅遭到一記重擊，" },
          { id: 3, text: "放開了雙手。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 83,
        type: "N",
        text: [
          { id: 1, text: "當老羅倒下去後……" },
          { id: 2, text: "出現在我面前的是……" },
          { id: 3, text: "黃克洋！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 84,
        type: "N",
        text: [{ id: 1, text: "竟然是這傢伙救了我？" }],
      },
      {
        // 人文字訊息
        chatSN: 85,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "你沒事吧？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 86,
        type: "N",
        text: [
          { id: 1, text: "說沒事還太早！" },
          { id: 2, text: "那一記突襲顯然打得還不夠重，" },
          { id: 3, text: "老羅又爬了起來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 87,
        type: "N",
        text: [
          { id: 1, text: "老羅看到黃克洋，" },
          { id: 2, text: "沒有直接反擊，" },
          { id: 3, text: "而是跑回推車去拿他的獵槍。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 88,
        type: "N",
        text: [
          { id: 1, text: "我跟黃克洋互看一眼，" },
          { id: 2, text: "直覺不妙。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 89,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "快走！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 90,
        type: "N",
        text: [
          { id: 1, text: "黃克洋拉著我的手，" },
          { id: 2, text: "頭也不回地往山下跑去。" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 91,
        type: "N",
        sound: require("./sound/03-06.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 92,
        type: "N",
        text: [
          { id: 1, text: "老羅開槍了！" },
          { id: 2, text: "他非要致我們於死地不可！" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 93,
        type: "N",
        sound: require("./sound/03-06-01.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 94,
        type: "N",
        text: [
          { id: 1, text: "這一槍就打在我們旁邊的樹上……" },
          { id: 2, text: "飛濺的木屑噴到我的臉上。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 95,
        type: "N",
        text: [
          { id: 1, text: "我們已經曝露在老羅的射程範圍內，" },
          { id: 2, text: "下一槍還能躲得掉嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 96,
        type: "N",
        text: [
          { id: 1, text: "就在這時，" },
          { id: 2, text: "一陣大霧席捲而來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 97,
        type: "N",
        text: [
          { id: 1, text: "只是一瞬間的事，" },
          { id: 2, text: "白茫茫的濃霧吞沒了森林裡的一切。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 98,
        type: "N",
        text: [
          { id: 1, text: "我、黃克洋，以及老羅……" },
          { id: 2, text: "全都消失在霧中。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 99,
        type: "N",
        text: [{ id: 1, text: "是女巫救了我們一命嗎？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 100,
        type: "N",
        text: [
          { id: 1, text: "如果是的話……" },
          { id: 2, text: "那就跟傳說一樣，" },
          { id: 3, text: "她的確是個心地善良的女巫。" },
        ],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 101,
        type: "N",
        sound: require("./sound/03-06.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 102,
        type: "N",
        text: [
          { id: 1, text: "槍聲還在持續著……" },
          { id: 2, text: "聲音聽起來很遠，" },
          { id: 3, text: "似乎是朝著天空射擊。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 103,
        type: "N",
        text: [
          { id: 1, text: "隱隱還能聽見……" },
          { id: 2, text: "老羅不停咒罵的聲音，" },
          { id: 3, text: "彷彿他正在跟霧中的女巫對決似的。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 104,
        type: "N",
        text: [{ id: 1, text: "但他絕對贏不了！" }],
      },
    ],
  },
  {
    backSN: 51,
    backImg: require("./back/S01-08-03.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, .3)",
        },
        text: [{ id: 1, text: "白天　北巫橋頭" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "一路跑到北巫橋邊……" },
          { id: 2, text: "見老羅沒有追來，" },
          { id: 3, text: "我跟黃克洋才確定真的逃過了一劫。" },
        ],
      },
      {
        // 人聲音訊息
        chatSN: 3,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        sound: require("./sound/M03-04.mp3"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "我已經累得喘不過氣來……" },
          { id: 2, text: "也跑不動了。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 5,
        type: "N",
        img: require("./images/D03-13-01.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 6,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "接下來……該怎麼辦？",
      },
      {
        // 人文字訊息
        chatSN: 7,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "那還用說！當然是趕快回鎮上報警！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "我拖著腳步，" },
          { id: 2, text: "正要走過吊橋，" },
          { id: 3, text: "黃克洋卻還留在原地。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "怎麼了嗎？",
      },
      {
        // 人文字訊息
        chatSN: 10,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "那個……你去就好了，我留在這邊。萬一，他追來了……我還可以引開他。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "雖然我跟他是宿敵，" },
          { id: 2, text: "但我們畢竟共同經歷了生死關頭，" },
          { id: 3, text: "現在就這樣丟下他……" },
          { id: 4, text: "好像有點太沒良心。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "不用了，一起來吧！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "黃克洋這才慢吞吞地跟了上來。" },
          { id: 2, text: "我看得出來……" },
          { id: 3, text: "他有滿肚子心事想說，" },
          { id: 4, text: "我也有一大堆問題想問……" },
          { id: 5, text: "可是，時機不對！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "當我們走到吊橋中央時，" },
          { id: 2, text: "黃克洋忽然自己先開口了。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 15,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "你問我……那一天在吊橋上看見了什麼？我……真的看見了小艾！我沒有說謊！",
      },
      {
        // 人文字訊息
        chatSN: 16,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "不過，你隱瞞了一些事沒說……對嗎？",
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "嗯。其實，小艾當天有主動跟我說話。",
      },
      {
        // 人文字訊息
        chatSN: 18,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "她說了什麼？",
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "小艾說……你約我晚上在北巫森林見面，還要我準時到。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [{ id: 1, text: "我聽得目瞪口呆。" }],
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "她為什麼要這麼說？我怎麼會約你？根本沒這回事呀！",
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "她是你的好朋友……所以，我相信她。",
      },
      {
        // 人文字訊息
        chatSN: 23,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "也就是說，你那晚去了森林……結果呢？你被耍了嗎？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "我忽然想到他之前的那番指控，" },
          { id: 2, text: "心頭一涼。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 25,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……還是……你看到了什麼？",
      },
      {
        // 人文字訊息
        chatSN: 26,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "我……在森林裡看見了你……你殺死了小艾！",
      },
      {
        // 人文字訊息
        chatSN: 27,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "不可能！小艾不是我殺的！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "黃克洋又說了同樣的話，" },
          { id: 2, text: "而且很清楚地表示……" },
          { id: 3, text: "我就是殺人兇手，" },
          { id: 4, text: "而不是什麼間接殺人或是教唆殺人。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 29,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "等等……你是親眼看見的嗎？那我是怎樣殺死小艾？是用刀子，還是用繩子？",
      },
      {
        // 人文字訊息
        chatSN: 30,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "我……沒看到你是怎麼殺的。",
      },
      {
        // 人文字訊息
        chatSN: 31,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "那你又說……小艾是我殺的？",
      },
      {
        // 人文字訊息
        chatSN: 32,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "因為……我看見……你在埋小艾的屍體。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 33,
        type: "N",
        text: [{ id: 1, text: "黃克洋描述了他所目擊的畫面。" }],
      },
      {
        // 旁白圖片訊息
        chatSN: 34,
        type: "N",
        img: require("./images/D03-17-02.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 35,
        type: "N",
        text: [{ id: 1, text: "豈有此理！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 36,
        type: "N",
        text: [
          { id: 1, text: "我不可能連自己殺人都不曉得！" },
          { id: 2, text: "更別提是埋屍了！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 37,
        type: "N",
        text: [
          { id: 1, text: "而且，" },
          { id: 2, text: "那晚……" },
          { id: 3, text: "我明明是在家裡睡覺，" },
          { id: 4, text: "怎麼可能瞬間飛到森林去？" },
          { id: 5, text: "又不是女巫……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 38,
        type: "N",
        text: [
          { id: 1, text: "也許，" },
          { id: 2, text: "看在黃克洋的眼中，" },
          { id: 3, text: "我……" },
          { id: 4, text: "才是巴賽族女巫的後裔吧！" },
        ],
      },
    ],
  },
  {
    backSN: 52,
    backImg: require("./back/S02-01-02.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, .3)",
        },
        text: [{ id: 1, text: "白天　北巫派出所" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "鎮上唯一的派出所……" },
          { id: 2, text: "就設在溫泉旅館大街上。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "我與黃克洋一逃回這裡……" },
          { id: 2, text: "第一件事就是趕快報警。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "在描述了我們在北巫森林的可怕遭遇，" },
          { id: 2, text: "以及老羅的瘋狂舉動之後，" },
          { id: 3, text: "派出所的員警不敢大意，" },
          { id: 4, text: "全員出動，" },
          { id: 5, text: "前往山上逮人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "出乎意料的是……" },
          { id: 2, text: "老羅並沒有逃跑，" },
          { id: 3, text: "也沒有抵抗。" },
          { id: 4, text: "他待在家裡等著警方上門，" },
          { id: 5, text: "乖乖束手就擒，" },
          { id: 6, text: "似乎已經接受自己的下場。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "經過一番搜索後，" },
          { id: 2, text: "員警們也在森林裡發現了桑妮的屍體。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "我坐在派出所裡，" },
          { id: 2, text: "一邊做著筆錄，" },
          { id: 3, text: "一邊看著老羅被警方帶了進來。" },
          { id: 4, text: "他雙手上銬，" },
          { id: 5, text: "眼神渙散，" },
          { id: 6, text: "臉色宛如死灰。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "老羅默默地坐在角落的長椅上，" },
          { id: 2, text: "頭垂得低低的。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "L",
        name: "員警",
        photo: require("./profile/Police.png"),
        text: "筆錄做完了……你們可以離開了。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "黃克洋對員警點了點頭，" },
          { id: 2, text: "往門口走去。" },
          { id: 3, text: "他們卻沒想到……" },
          { id: 4, text: "我反而往裡頭走，" },
          { id: 5, text: "直接來到老羅面前。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "小艾也是被你殺死的嗎？是不是？",
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "L",
        name: "老羅",
        photo: require("./profile/Logan.png"),
        text: "……",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "老羅理也不理我，" },
          { id: 2, text: "連一眼也不肯看我。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 14,
        type: "P",
        speaker: "L",
        name: "員警",
        photo: require("./profile/Police.png"),
        text: "小姐，請不要靠近犯人！很危險的！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "員警上前把我帶開，" },
          { id: 2, text: "黃克洋也過來拉我，" },
          { id: 3, text: "並將我帶到派出所外。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "既然老羅不回答，" },
          { id: 2, text: "我只好追問員警。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 17,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你們有沒有問他……為什麼要殺人？",
      },
      {
        // 人文字訊息
        chatSN: 18,
        type: "P",
        speaker: "L",
        name: "員警",
        photo: require("./profile/Police.png"),
        text: "喔，當然有啊！他說……那個女遊客在森林裡亂晃，他以為是森林裡的女巫出現了，一時驚慌開槍……才會誤殺了她。",
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你們不會相信這種藉口吧？",
      },
      {
        // 人文字訊息
        chatSN: 20,
        type: "P",
        speaker: "L",
        name: "員警",
        photo: require("./profile/Police.png"),
        text: "反正，等下分局的刑警就會過來，帶他回去偵訊。",
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "那你們要記得問他……他女兒羅心艾失蹤的事……是不是跟他有關？",
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "L",
        name: "員警",
        photo: require("./profile/Police.png"),
        text: "就說了……那是分局刑警的工作。好了、好了，你們快點回家吧！",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "可惡！" },
          { id: 2, text: "被打發了！" },
        ],
      },
    ],
  },
  {
    backSN: 53,
    backImg: require("./back/S02-09-03.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　巷弄間" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "老羅殺人的消息……" },
          { id: 2, text: "很快就在鎮上傳了開來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "一時之間……" },
          { id: 2, text: "搞得大家人心惶惶。" },
          { id: 3, text: "據說，" },
          { id: 4, text: "已經有記者打電話來問了……" },
          { id: 5, text: "如果，" },
          { id: 6, text: "這起案件有新聞值得炒作，" },
          { id: 7, text: "就算本鎮位在深山，" },
          { id: 8, text: "他們也會飛車來採訪。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "我想，" },
          { id: 2, text: "大家最關心的……" },
          { id: 3, text: "還是會不會影響觀光吧？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "忙了一整天，" },
          { id: 2, text: "直到傍晚……" },
          { id: 3, text: "我才跟黃克洋一道回家。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "當然，" },
          { id: 2, text: "我們倆的家很近，" },
          { id: 3, text: "走的也是同一條路。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "然而，" },
          { id: 2, text: "我跟他竟然並肩而行……" },
          { id: 3, text: "這真的是八百年來也遇不上的事！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "沉默了好一陣子，" },
          { id: 2, text: "我說出了一直想問的話。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你為什麼要救我？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "黃克洋看著我，" },
          { id: 2, text: "吞吞吐吐地回答。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "L",
        name: "黃克洋",
        photo: require("./profile/Yang.png"),
        text: "你都沒發現嗎？莎葉，我……一直喜歡著你。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [{ id: 1, text: "我啞口無言。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "在這小鎮上，" },
          { id: 2, text: "每個人都有秘密。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "黃克洋的告白看起來莫名其妙，" },
          { id: 2, text: "但這一切都是有跡可尋的。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "黃克洋誰都不欺負，" },
          { id: 2, text: "只愛欺負我一個……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "只因為聽到我要約他，" },
          { id: 2, text: "就半夜跑去深山赴約……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "老是鬼鬼祟祟地跟著我，" },
          { id: 2, text: "但是，" },
          { id: 3, text: "當我發生危險的時候，" },
          { id: 4, text: "他又跳出來救了我……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "就連老媽都說他喜歡我……" },
          { id: 2, text: "我還不信！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "他認為……" },
          { id: 2, text: "我殺死了小艾，" },
          { id: 3, text: "卻一直沒有向警方舉發我。" },
          { id: 4, text: "多年來，" },
          { id: 5, text: "他獨自隱瞞了這件事……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "就跟我當年沒有舉發館長說謊……" },
          { id: 2, text: "是一樣的道理。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "當你喜歡一個人的時候……" },
          { id: 2, text: "就會做出這樣的傻事。" },
        ],
      },
    ],
  },
  {
    backSN: 54,
    backImg: require("./back/S02-06-03.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　鎮史館一樓" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "桑妮失蹤事件就此落幕了。" },
          { id: 2, text: "對我、對鎮上的所有人來說，" },
          { id: 3, text: "可以說是最壞的結果。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "至於小艾失蹤事件……" },
          { id: 2, text: "依然撲朔迷離。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "可是，" },
          { id: 2, text: "在經歷了這一連串的風波後，" },
          { id: 3, text: "我得到了新的啟示。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "尤其是看到了黃克洋大膽坦承心聲的模樣，" },
          { id: 2, text: "更給了我面對真相的勇氣。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "所以，" },
          { id: 2, text: "我也想要效法他……" },
          { id: 3, text: "再去見館長一次。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "這一次，" },
          { id: 2, text: "我要把心中的疑問……" },
          { id: 3, text: "向他問個明白。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "當我一走進館內，" },
          { id: 2, text: "館長人已站在大廳……" },
          { id: 3, text: "就好像是已經等我很久了。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 9,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "我聽說了……你在山上的事情……你還好吧？",
      },
      {
        // 人文字訊息
        chatSN: 10,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我不是站在這裡嗎？",
      },
      {
        // 人文字訊息
        chatSN: 11,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "我……很擔心你。",
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "我知道。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "曾經，" },
          { id: 2, text: "我們心靈相通，" },
          { id: 3, text: "不用開口也能猜到彼此的心意……" },
          { id: 4, text: "只是……" },
          { id: 5, text: "那個感覺後來就消失了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "但就在此時此刻……" },
          { id: 2, text: "館長顯然很了解我的來意。" },
          { id: 3, text: "我猜……" },
          { id: 4, text: "他也很想找人傾訴吧！" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 15,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "你願意聽我說嗎？雖然這個故事……可能有點長。",
      },
      {
        // 人文字訊息
        chatSN: 16,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "沒關係……我時間很多。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "館長跟我在會客廳的沙發上坐了下來。" },
          { id: 2, text: "然後，" },
          { id: 3, text: "他開始說起多年前的往事。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 18,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "二十多年前……我還是高中生。在一次校外教學時……造訪了北巫鎮，我就被這個小鎮所吸引了……特別是莊士郎的宅邸。",
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "隔年暑假……我自己搭車來這裡，主動上門找莊士郎。出乎意料地……他很親切地招待我，還帶我參觀這棟房子。從此，我就對這裡深深著迷了。",
      },
      {
        // 人文字訊息
        chatSN: 20,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "莊士郎不只是個詩人，他也是一名出色的畫家。我非常喜歡他的畫作！我請他教我畫畫，他也答應了。於是，我就在這裡住了三個月。",
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "我以為……他會帶我去鎮上寫生……沒想到，他卻說……他所有的畫作……都是在畫室裡畫出來的。我想看那間畫室，但他從不讓人進去，非常的神秘！",
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "暑假結束後，我依依不捨地離開了這裡……一直等到放寒假，我又興沖沖地跑來。然而，莊士郎的態度卻變得很冷淡，把我拒於門外，什麼理由也沒說。",
      },
      {
        // 人文字訊息
        chatSN: 23,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "我不死心……先在鎮上的旅館住下，卻意外聽到了一個很不好的傳聞。他們說……莊士郎誘拐鎮上的女孩子，還將她軟禁在宅邸中……謠言傳得沸沸揚揚的……那也是我最後一次見到莊士郎。",
      },
      {
        // 人文字訊息
        chatSN: 24,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "隔了好幾年，我大學畢業，又回到了北巫鎮，第一個想去找的就是莊士郎。沒想到，宅邸大門深鎖。一問之下……才知道他受不了謠言中傷，在家中割腕輕生。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "聽到這裡……" },
          { id: 2, text: "我才恍然大悟……" },
          { id: 3, text: "那就是鬼屋傳說的由來。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 26,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "鎮上的人極力掩蓋莊士郎自殺的真相。因為，他是小鎮的驕傲，便對外說……他得了憂鬱症。隨著時間流逝，大家也慢慢遺忘了這件醜聞。",
      },
      {
        // 人文字訊息
        chatSN: 27,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "我卻依然念念不忘莊士郎，以及這棟宅邸。我下定決心……總有一天，我會再回來這裡，盡一切努力，讓它重新開放。",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "館長第一次告訴我這個故事。" },
          { id: 2, text: "或許，" },
          { id: 3, text: "他也是為了保護莊士郎的名聲吧！" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 29,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……你已經履行了你的承諾……繼承了這裡。",
      },
      {
        // 人文字訊息
        chatSN: 30,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "但你想聽的不是這個……是我跟小艾的事，對吧？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 31,
        type: "N",
        text: [{ id: 1, text: "我點了點頭。" }],
      },
      {
        // 人文字訊息
        chatSN: 32,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "其實，這全都是有因果關係的。",
      },
      {
        // 人文字訊息
        chatSN: 33,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "什麼意思？",
      },
      {
        // 人文字訊息
        chatSN: 34,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "我在莊士郎的秘密畫室裡，找到了那幅女巫的畫作。然後，有一天……小艾闖進了館內……我發現……她長得跟畫裡的女人很像。",
      },
      {
        // 人文字訊息
        chatSN: 35,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "小艾不會是女巫吧？",
      },
      {
        // 人文字訊息
        chatSN: 36,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "我一度這麼認為。在我認識你之前，小艾就常跑來這裡偷東西……後來，她發現了我跟你的關係，變得更加大膽。有一次，她跑來要脅我……如果，我不照她的話做……她就要將這件事跟別人說。",
      },
      {
        // 人文字訊息
        chatSN: 37,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……她要你做什麼？",
      },
      {
        // 人文字訊息
        chatSN: 38,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "聽起來很可笑……她只是要我牽著她的手，帶她一起導覽，跟她一起整理東西、一起在二樓看書……",
      },
      {
        // 人文字訊息
        chatSN: 39,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "就像我們做的一樣。",
      },
      {
        // 人文字訊息
        chatSN: 40,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "嗯，但並不一樣。我對她沒有感覺，只有畏懼。",
      },
      {
        // 人文字訊息
        chatSN: 41,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "原來，你是為了我……",
      },
      {
        // 旁白圖片訊息
        chatSN: 42,
        type: "N",
        img: require("./images/D02-14-01.jpg"),
      },
      {
        // 人文字訊息
        chatSN: 43,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "不！我是個自私的人！我害怕……自己變得莊士郎一樣……失去這裡的一切。我很後悔……沒有把這件事跟你說……對不起。",
      },
      {
        // 人文字訊息
        chatSN: 44,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "有一件事……我希望……你告訴我實話。小艾的失蹤跟你有關嗎？",
      },
      {
        // 人文字訊息
        chatSN: 45,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "就跟我那天說的一樣……我把她藏在畫室，隔天，她就失蹤了。我真的不曉得她去了哪裡？不過……",
      },
      {
        // 人文字訊息
        chatSN: 46,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "不過什麼？",
      },
      {
        // 人文字訊息
        chatSN: 47,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "那一天……小艾突然告訴我一個驚人的秘密，要我絕對不能告訴別人。",
      },
      {
        // 人文字訊息
        chatSN: 48,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "什麼秘密？",
      },
      {
        // 人文字訊息
        chatSN: 49,
        type: "P",
        speaker: "L",
        name: "林鈞堂",
        photo: require("./profile/Tom.png"),
        text: "她說……其實，她是莊士郎的女兒。",
      },
    ],
  },
  {
    backSN: 55,
    backImg: require("./back/S03-06-06.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　北巫森林" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "無論是再燦爛的陽光……" },
          { id: 2, text: "也照不進這片深邃的森林。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "我在樹林間徘徊，" },
          { id: 2, text: "已不再像上次來訪時，" },
          { id: 3, text: "充滿了不安與恐懼。" },
          { id: 4, text: "這一刻……" },
          { id: 5, text: "我更多的情緒是悲傷。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "在一棵枝幹扭曲的大樹前，" },
          { id: 2, text: "我停下了腳步，" },
          { id: 3, text: "然後閉上了雙眼……" },
          { id: 4, text: "靜靜地哀悼著桑妮之死。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 5,
        type: "N",
        img: require("./images/D03-15-08.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "待在北巫鎮的最後一天……" },
          { id: 2, text: "桑妮走進了這片森林裡。" },
          { id: 3, text: "她究竟在想些什麼……" },
          { id: 4, text: "已經不得而知。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "也許，" },
          { id: 2, text: "她有意在此尋短……" },
          { id: 3, text: "我不否認有這種可能。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "但我寧願相信……" },
          { id: 2, text: "她是因為不想留下遺憾，" },
          { id: 3, text: "才來女巫的聖地，" },
          { id: 4, text: "進行最後的巡禮。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "之後，" },
          { id: 2, text: "她就會如釋重負地走下山，" },
          { id: 3, text: "搭公車離開小鎮，" },
          { id: 4, text: "揮別過去的不幸，" },
          { id: 5, text: "展開自己全新的人生。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [{ id: 1, text: "那我呢？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [{ id: 1, text: "我還有什麼遺憾嗎？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "這麼多年來，" },
          { id: 2, text: "小艾的失蹤……" },
          { id: 3, text: "成了我心中最深沉的陰影。" },
          { id: 4, text: "我一度選擇了逃避……" },
          { id: 5, text: "可是，" },
          { id: 6, text: "我很明白……" },
          { id: 7, text: "一天沒找出真相，" },
          { id: 8, text: "我就沒辦法好好地過日子。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "如今，" },
          { id: 2, text: "隨著謎團一個接著一個地解開，" },
          { id: 3, text: "我反而害怕了起來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "因為，" },
          { id: 2, text: "隱藏在事件幕後的犯人……" },
          { id: 3, text: "很可能是我完全意想不到的人物。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [{ id: 1, text: "那就是小艾自己！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "這一切的行動……" },
          { id: 2, text: "似乎是她計劃好的。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "然而，" },
          { id: 2, text: "她的目的到底是什麼呢？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "我照著黃克洋所說的地點……" },
          { id: 2, text: "找到了這一棵畸形的大樹。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "當年，" },
          { id: 2, text: "黃克洋就是半夜來到這兒赴約。" },
          { id: 3, text: "沒想到，" },
          { id: 4, text: "他看到的……" },
          { id: 5, text: "卻是我把小艾的屍體埋在樹下。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "既然說是我埋的……" },
          { id: 2, text: "那我就把屍體挖出來看看吧！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "我跪在大樹旁，" },
          { id: 2, text: "開始挖了起來。" },
          { id: 3, text: "這裡的土質頗為鬆軟，" },
          { id: 4, text: "再向下挖了一會兒後，" },
          { id: 5, text: "我的手指碰到了異物……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "用力將它從土裡拉了出來……" },
          { id: 2, text: "那是小艾慣用的包包。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "我繼續往下挖，" },
          { id: 2, text: "又挖出了一套衣物，" },
          { id: 3, text: "正是小艾失蹤當天穿的服裝。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "然後……" },
          { id: 2, text: "什麼也沒有了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "當然沒有小艾的屍體。" },
          { id: 2, text: "因為，" },
          { id: 3, text: "我根本沒有殺她！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [{ id: 1, text: "以下是我的假設。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "黃克洋所看到的……" },
          { id: 2, text: "只是『我』在掩埋小艾的衣服……" },
          { id: 3, text: "就以為是『我』殺了小艾。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "而這個『我』……" },
          { id: 2, text: "並不是我本人，" },
          { id: 3, text: "而是小艾。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 29,
        type: "N",
        img: require("./images/D03-17-24.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [{ id: 1, text: "那為什麼黃克洋會認為是我呢？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 31,
        type: "N",
        text: [
          { id: 1, text: "因為，" },
          { id: 2, text: "小艾偷走了我那套名校制服，" },
          { id: 3, text: "將它穿在身上……" },
          { id: 4, text: "那代表我在鎮上最醒目的形象。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 32,
        type: "N",
        text: [
          { id: 1, text: "另外，" },
          { id: 2, text: "小艾還留了跟我一樣的髮型。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 33,
        type: "N",
        text: [
          { id: 1, text: "在黑夜的森林中，" },
          { id: 2, text: "黃克洋會把她誤認為是我……" },
          { id: 3, text: "也就不意外了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 34,
        type: "N",
        text: [
          { id: 1, text: "小艾利用了館長，" },
          { id: 2, text: "製造出她離奇失蹤的假象。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 35,
        type: "N",
        text: [
          { id: 1, text: "然後，" },
          { id: 2, text: "她又利用了黃克洋，" },
          { id: 3, text: "讓他誤以為我是殺人兇手。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 36,
        type: "N",
        text: [
          { id: 1, text: "如此可怕的心機……" },
          { id: 2, text: "讓我不寒而慄。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 37,
        type: "N",
        text: [
          { id: 1, text: "然而，" },
          { id: 2, text: "我竟又感到一絲絲的欣慰。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 38,
        type: "N",
        text: [
          { id: 1, text: "這是不是意味著……" },
          { id: 2, text: "小艾還活著呢？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 39,
        type: "N",
        text: [
          { id: 1, text: "就在這一瞬間，" },
          { id: 2, text: "我感覺到……" },
          { id: 3, text: "有人在背後窺伺著我。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 40,
        type: "N",
        text: [
          { id: 1, text: "我轉過身來，" },
          { id: 2, text: "赫然看見一道人影……" },
          { id: 3, text: "遠遠地站在樹林後方。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 41,
        type: "N",
        text: [
          { id: 1, text: "那是一名身形痀僂的怪人，" },
          { id: 2, text: "頭戴斗笠，" },
          { id: 3, text: "全身罩著簑衣，" },
          { id: 4, text: "看不見長相。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 42,
        type: "N",
        text: [{ id: 1, text: "那是誰？" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 43,
        type: "N",
        text: [
          { id: 1, text: "怪人朝我招了招手，" },
          { id: 2, text: "隨即潛入了森林中。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 44,
        type: "N",
        text: [
          { id: 1, text: "我被好奇心所驅使，" },
          { id: 2, text: "立即跟了上去……" },
          { id: 3, text: "只見怪人在前方引導著我，" },
          { id: 4, text: "愈走愈偏僻。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 45,
        type: "N",
        text: [
          { id: 1, text: "我看著怪人的背影，" },
          { id: 2, text: "隱約可以辨識出來……" },
          { id: 3, text: "對方是名年邁的女性。" },
          { id: 4, text: "腦海中……" },
          { id: 5, text: "不禁浮現了那個形象。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 46,
        type: "N",
        text: [
          { id: 1, text: "那是……" },
          { id: 2, text: "女巫？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 47,
        type: "N",
        text: [
          { id: 1, text: "老女巫在鑽過一片樹叢後，" },
          { id: 2, text: "身影忽然不見了。" },
          { id: 3, text: "我跟著她也鑽了進去，" },
          { id: 4, text: "眼前豁然開朗。" },
        ],
      },
    ],
  },
  {
    backSN: 56,
    backImg: require("./back/S03-06-08.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　森林遺跡" }],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 2,
        type: "N",
        sound: require("./sound/03-12.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "我來到了一處林間秘境，" },
          { id: 2, text: "從岩壁飛濺而下的瀑布……" },
          { id: 3, text: "圍出了一池泉水，" },
          { id: 4, text: "一座石造的祭壇就設在正中央。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "這裡……" },
          { id: 2, text: "不就是巴賽族的遺跡嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [{ id: 1, text: "我的心臟怦怦跳個不停。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "在那面聳立的岩壁上，" },
          { id: 2, text: "我看見了一個天然的洞穴……" },
          { id: 3, text: "那該不會就是老女巫的巢穴吧？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "就這樣冒然闖進去嗎？" },
          { id: 2, text: "這難道不會是什麼陷阱嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [{ id: 1, text: "我卻不由自主地往裡頭走去。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "因為……" },
          { id: 2, text: "離真相只差這一步了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "洞穴並不算深……" },
          { id: 2, text: "很明顯有人居住的痕跡，" },
          { id: 3, text: "而且一點兒都不原始落後……" },
          { id: 4, text: "裡頭有電燈、暖爐等電器，" },
          { id: 5, text: "以及一堆儲藏的糧食……" },
          { id: 6, text: "有點像是一處避難所。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "我注意到……" },
          { id: 2, text: "地上鋪了兩張床。" },
          { id: 3, text: "從擺設的生活用品也能看出……" },
          { id: 4, text: "住在這裡的應該有兩個人，" },
          { id: 5, text: "而且，" },
          { id: 6, text: "其中一個是年輕女孩。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "小桌子上……" },
          { id: 2, text: "擺著一整套化妝用品，" },
          { id: 3, text: "還有梳子、小鏡子等等。" },
          { id: 4, text: "沒錯！" },
          { id: 5, text: "我看過那些東西，" },
          { id: 6, text: "也知道是誰用的。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "不用懷疑，" },
          { id: 2, text: "正是小艾！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "引誘我來這裡的老女巫……" },
          { id: 2, text: "就默默地坐在角落裡。" },
          { id: 3, text: "一等我靠近時，" },
          { id: 4, text: "她這才脫下了那件簑衣。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "當我看見老女巫的真面目時，" },
          { id: 2, text: "簡直驚訝得不得了！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [{ id: 1, text: "竟然是雜貨店的秋子婆婆！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "人們都謠傳她死了……" },
          { id: 2, text: "沒想到，" },
          { id: 3, text: "她還活著……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [{ id: 1, text: "這是怎麼一回事？" }],
      },
      {
        // 人文字訊息
        chatSN: 19,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "婆婆……你為什麼在這裡？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "秋子婆婆沒有回答。" },
          { id: 2, text: "她只是用布滿皺紋的眼神凝視著我，" },
          { id: 3, text: "彷彿看穿了……" },
          { id: 4, text: "我並不是真的想問這個問題。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "……跟你住在這裡的……是不是小艾？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [{ id: 1, text: "秋子婆婆點了點頭。" }],
      },
      {
        // 人文字訊息
        chatSN: 23,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "那她人在哪裡？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "秋子婆婆搖了搖頭，" },
          { id: 2, text: "比了一個手勢。" },
          { id: 3, text: "我並不懂手語，" },
          { id: 4, text: "卻好像能了解她的意思。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "小艾……" },
          { id: 2, text: "已經走了……" },
          { id: 3, text: "不在這裡了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [{ id: 1, text: "我露出了失落的神情。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "這時，" },
          { id: 2, text: "秋子婆婆拿出了一個信封……" },
          { id: 3, text: "遞給了我。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "原來，" },
          { id: 2, text: "她叫我來這裡……" },
          { id: 3, text: "就是為了給我這封信。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 29,
        type: "N",
        text: [
          { id: 1, text: "在我拆開信後……" },
          { id: 2, text: "終於解開了神隱之路的真相。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [
          { id: 1, text: "寫這封信的人……" },
          { id: 2, text: "並不是小艾，" },
          { id: 3, text: "而是沈伊芳。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 31,
        type: "N",
        text: [{ id: 1, text: "日期是小艾失蹤的前一天。" }],
      },
    ],
  },
  {
    backSN: 57,
    backImg: require("./back/S03-07-02.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, .3)",
        },
        text: [{ id: 1, text: "白天　深山農舍" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "十八年前……" },
          { id: 2, text: "我年輕不懂事，" },
          { id: 3, text: "嫁給了一個愛施暴的老公。" },
          { id: 4, text: "這段糟糕的婚姻……" },
          { id: 5, text: "讓我心力交瘁。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "我很少外出，" },
          { id: 2, text: "也不跟親戚朋友來往……" },
          { id: 3, text: "害怕成為大家八卦的對象。" },
          { id: 4, text: "於是，" },
          { id: 5, text: "我變得更寂寞無助。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "有一天，" },
          { id: 2, text: "我不知為什麼鬼迷心竅……" },
          { id: 3, text: "跑去拜訪了莊士郎。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "也許，" },
          { id: 2, text: "我只是想重溫少女時代……" },
          { id: 3, text: "那次夢幻的下午茶約會。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "莊士郎溫柔地接待我，" },
          { id: 2, text: "就跟以前一樣……" },
          { id: 3, text: "我忍不住把滿腹的委屈……" },
          { id: 4, text: "全部向他傾訴。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "我以前就很仰慕他，" },
          { id: 2, text: "而他在我人生最谷底的時候出現……" },
          { id: 3, text: "給了我活下去的溫暖與力量。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "但我們之間的關係……" },
          { id: 2, text: "也就這樣開始失控了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "後來，" },
          { id: 2, text: "我就有了小艾……" },
          { id: 3, text: "雖然我老公也曾經懷疑過，" },
          { id: 4, text: "可他一直沒有證據……" },
          { id: 5, text: "頂多是在我懷孕的時候，" },
          { id: 6, text: "讓我身上多掛了點彩。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "就在小艾出生的那一年，" },
          { id: 2, text: "莊士郎死了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "不知道是哪兒來的謠言……" },
          { id: 2, text: "逼死了他！" },
          { id: 3, text: "我明明知道……" },
          { id: 4, text: "謠言裡的那個女孩子就是我……" },
          { id: 5, text: "可是，" },
          { id: 6, text: "我沒有勇氣出來澄清。" },
          { id: 7, text: "他的死……" },
          { id: 8, text: "都是我的錯！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "小艾一天一天長大了……" },
          { id: 2, text: "我老公對我失去了興趣，" },
          { id: 3, text: "他的目標開始轉移到女兒身上。" },
          { id: 4, text: "這麼多年來……" },
          { id: 5, text: "他一直都在對小艾施暴，" },
          { id: 6, text: "我卻阻止不了他。" },
          { id: 7, text: "我不但是個糟糕的妻子，" },
          { id: 8, text: "更是個糟糕的媽媽！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "每次，" },
          { id: 2, text: "我看到小艾傷痕累累的樣子……" },
          { id: 3, text: "都是一陣心痛。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "然後，" },
          { id: 2, text: "有一天……" },
          { id: 3, text: "我聽說……" },
          { id: 4, text: "莊士郎的家要改為鎮史館，" },
          { id: 5, text: "並對外開放。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "我害怕極了……" },
          { id: 2, text: "害怕自己隱瞞多年的秘密……" },
          { id: 3, text: "將會被人拆穿！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "我救不了我自己，" },
          { id: 2, text: "但至少……" },
          { id: 3, text: "我還可以救小艾。" },
          { id: 4, text: "於是，" },
          { id: 5, text: "有一天……" },
          { id: 6, text: "我把實情全告訴了她。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "小艾的反應……" },
          { id: 2, text: "比我想像中的冷靜。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "媽……" },
          { id: 2, text: "我可以假裝不知道就好嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "不行！" },
          { id: 2, text: "你得離開這裡！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "那你跟我一起走，" },
          { id: 2, text: "好不好？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "……媽走不了……" },
          { id: 2, text: "但你不一樣……" },
          { id: 3, text: "你現在長大了，" },
          { id: 4, text: "可以逃去任何地方。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "我不要離開！" },
          { id: 2, text: "不管爸爸怎麼對我，" },
          { id: 3, text: "我都不會反抗……" },
          { id: 4, text: "我想留在這裡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "媽是為你好……" },
          { id: 2, text: "你一定要走！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "……那明天再走，" },
          { id: 2, text: "好嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "我沒有堅持……" },
          { id: 2, text: "緊緊地抱著小艾。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "然而，" },
          { id: 2, text: "這個『明天』……" },
          { id: 3, text: "一直往後拖延了下去。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "我只好跟小艾達成約定。" },
          { id: 2, text: "她答應我……" },
          { id: 3, text: "當有一天……" },
          { id: 4, text: "我叫她非走不可的時候，" },
          { id: 5, text: "她就要馬上逃走；" },
          { id: 6, text: "而我……" },
          { id: 7, text: "將會為她安排好逃亡的計畫。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 28,
        type: "N",
        text: [
          { id: 1, text: "事情的發展……" },
          { id: 2, text: "卻比我想像中的更可怕！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 29,
        type: "N",
        text: [
          { id: 1, text: "那一天……" },
          { id: 2, text: "我老公突然告訴我……" },
          { id: 3, text: "他去了鎮史館參觀，" },
          { id: 4, text: "看到了一幅很有趣的畫。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 30,
        type: "N",
        text: [
          { id: 1, text: "畫裡的女人……" },
          { id: 2, text: "跟你長得很像呢！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 31,
        type: "N",
        text: [
          { id: 1, text: "他長久以來的懷疑……" },
          { id: 2, text: "終於成了事實。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 32,
        type: "N",
        text: [
          { id: 1, text: "意外地……" },
          { id: 2, text: "他沒對我怎樣。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 33,
        type: "N",
        text: [
          { id: 1, text: "我偷偷觀察他……" },
          { id: 2, text: "發現他常跑去找小艾。" },
          { id: 3, text: "他的態度突然轉變了！" },
          { id: 4, text: "一開始……" },
          { id: 5, text: "他還試圖對小艾套話。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 34,
        type: "N",
        text: [
          { id: 1, text: "聽說……" },
          { id: 2, text: "你常跑去鎮史館？" },
          { id: 3, text: "你到底去那裡做什麼？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 35,
        type: "N",
        text: [{ id: 1, text: "我只是去玩而已。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 36,
        type: "N",
        text: [
          { id: 1, text: "家裡不好玩嗎？" },
          { id: 2, text: "以前……" },
          { id: 3, text: "你不是都跟爸一起玩？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 37,
        type: "N",
        text: [
          { id: 1, text: "可是，" },
          { id: 2, text: "我現在長大了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 38,
        type: "N",
        text: [
          { id: 1, text: "小艾長大了……" },
          { id: 2, text: "還是個壞女孩嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 39,
        type: "N",
        text: [{ id: 1, text: "我今天很乖。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 40,
        type: "N",
        text: [
          { id: 1, text: "我老公用力摟抱著小艾，" },
          { id: 2, text: "眼神盯著她柔嫩的胸口、雪白的大腿，" },
          { id: 3, text: "忍不住伸手撫摸起來。" },
          { id: 4, text: "小艾只能默默承受。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 41,
        type: "N",
        text: [
          { id: 1, text: "……以後……" },
          { id: 2, text: "爸不會再打你了……" },
          { id: 3, text: "爸會對你好一點。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 42,
        type: "N",
        text: [
          { id: 1, text: "躲在暗處的我……" },
          { id: 2, text: "神情恐懼地看著這一幕。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 43,
        type: "N",
        text: [
          { id: 1, text: "發現小艾不是自己的女兒後，" },
          { id: 2, text: "我老公的內心孳生了更邪惡的想法。" },
          { id: 3, text: "那一刻，" },
          { id: 4, text: "他的眼神跟笑容……" },
          { id: 5, text: "都讓我不寒而慄。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 44,
        type: "N",
        text: [
          { id: 1, text: "如果，" },
          { id: 2, text: "小艾再待在這個家……" },
          { id: 3, text: "不！" },
          { id: 4, text: "這個鎮上……" },
          { id: 5, text: "絕對會毀了她的一生！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 45,
        type: "N",
        text: [
          { id: 1, text: "就在那一天晚上，" },
          { id: 2, text: "我告訴小艾……" },
          { id: 3, text: "明天……" },
          { id: 4, text: "就是你要逃走的日子了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 46,
        type: "N",
        text: [
          { id: 1, text: "不能讓大家認為小艾是逃家！" },
          { id: 2, text: "最好是她就這樣失蹤了……" },
          { id: 3, text: "所以，" },
          { id: 4, text: "她必須跟平常一樣……" },
          { id: 5, text: "也不能帶走任何東西。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 47,
        type: "N",
        text: [{ id: 1, text: "小艾的神情十分不安。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 48,
        type: "N",
        text: [
          { id: 1, text: "我……" },
          { id: 2, text: "一定要走嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 49,
        type: "N",
        text: [
          { id: 1, text: "嗯……" },
          { id: 2, text: "我們約定好的，" },
          { id: 3, text: "不是嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 50,
        type: "N",
        text: [
          { id: 1, text: "媽……" },
          { id: 2, text: "我好怕！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 51,
        type: "N",
        text: [
          { id: 1, text: "你要鼓起勇氣！" },
          { id: 2, text: "明天……" },
          { id: 3, text: "等你爸一出門……" },
          { id: 4, text: "你就馬上出發。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 52,
        type: "N",
        text: [
          { id: 1, text: "可是，" },
          { id: 2, text: "我明天跟莎葉有約。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 53,
        type: "N",
        text: [
          { id: 1, text: "沒關係……" },
          { id: 2, text: "你照樣去找她，" },
          { id: 3, text: "大家才不會起疑。" },
          { id: 4, text: "結束後……" },
          { id: 5, text: "你就趕快回家。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 54,
        type: "N",
        text: [{ id: 1, text: "小艾心中還有猶豫。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 55,
        type: "N",
        text: [
          { id: 1, text: "別想那麼多！" },
          { id: 2, text: "你還記得……" },
          { id: 3, text: "媽為你安排好的計畫，" },
          { id: 4, text: "對吧？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 56,
        type: "N",
        text: [{ id: 1, text: "小艾點了點頭。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 57,
        type: "N",
        text: [
          { id: 1, text: "很好！" },
          { id: 2, text: "你出發以後……" },
          { id: 3, text: "要先去找誰？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 58,
        type: "N",
        text: [
          { id: 1, text: "去雜貨店……" },
          { id: 2, text: "找秋子婆婆。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 59,
        type: "N",
        text: [
          { id: 1, text: "沒錯！" },
          { id: 2, text: "因為，" },
          { id: 3, text: "秋子婆婆……" },
          { id: 4, text: "是莊士郎的媽媽，" },
          { id: 5, text: "也就是你真正的奶奶。" },
        ],
      },
    ],
  },
  {
    backSN: 58,
    backImg: require("./back/S03-06-01.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(41, 40, 50, .3)",
        },
        text: [{ id: 1, text: "白天　北巫森林一帶" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "小艾的失蹤……" },
          { id: 2, text: "依舊是北巫鎮上永遠解不開的懸案。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "因為，" },
          { id: 2, text: "就算有人找到了真相……" },
          { id: 3, text: "也寧可保持沉默。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [{ id: 1, text: "……就像我一樣。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "沈伊芳所寫下的這封自白信……" },
          { id: 2, text: "完整敘述了關於她們一家的不幸悲劇。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "而秋子婆婆之所以把信交給我，" },
          { id: 2, text: "其實……" },
          { id: 3, text: "是要我轉交給我老媽……" },
          { id: 4, text: "她才是真正的收信人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "雖然老媽常說……" },
          { id: 2, text: "她跟小艾的媽媽不合……" },
          { id: 3, text: "可是，" },
          { id: 4, text: "沈伊芳還是想對昔日好友吐露心聲……" },
          { id: 5, text: "根本不用懷疑她們的友誼！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "秋子婆婆始終沒開口說話……" },
          { id: 2, text: "那封信中也沒說明……" },
          { id: 3, text: "小艾逃亡計畫的下一步。" },
          { id: 4, text: "這對祖孫顯然在山裡待了好一陣子。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "黃克洋曾經提到……" },
          { id: 2, text: "自己在森林裡看見過小艾的鬼魂。" },
          { id: 3, text: "其實，" },
          { id: 4, text: "那並不是鬼……" },
          { id: 5, text: "他應該是看到小艾真的在林間出沒。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "我猜想……" },
          { id: 2, text: "小艾可能在等待母親跟她會合……" },
          { id: 3, text: "但沒多久，" },
          { id: 4, text: "沈伊芳卻死了。" },
          { id: 5, text: "於是，" },
          { id: 6, text: "小艾就這樣離開了……" },
          { id: 7, text: "如今不知去向。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "至於秋子婆婆為何沒走？" },
          { id: 2, text: "她又是怎麼從貴婦淪落至此的？" },
          { id: 3, text: "就只能等待別人來解開這個秘密。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 12,
        type: "N",
        img: require("./images/D03-19-05.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "後來，" },
          { id: 2, text: "我又去了幾次森林裡的巴賽族遺跡……" },
          { id: 3, text: "但那裡已經空無一人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "秋子婆婆不見蹤影，" },
          { id: 2, text: "洞穴裡的日常用品也被搬空，" },
          { id: 3, text: "完全沒留下有人住過的痕跡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "要不是有那封信……" },
          { id: 2, text: "我幾乎以為……" },
          { id: 3, text: "自己不曾遇見過秋子婆婆，" },
          { id: 4, text: "這一切……" },
          { id: 5, text: "只是我的一場幻覺。" },
        ],
      },
    ],
  },
  {
    backSN: 59,
    backImg: require("./back/S01-02-01.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　月蘭溫泉旅館門口" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "我又回到了溫泉旅館……" },
          { id: 2, text: "繼續當老媽的免費勞工。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "偶爾……" },
          { id: 2, text: "我會在門口遇見黃克洋。" },
          { id: 3, text: "至少，" },
          { id: 4, text: "我們現在會揮手打招呼了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "有幾家新聞媒體……" },
          { id: 2, text: "報導了北巫鎮的一起意外事件……" },
          { id: 3, text: "一名女遊客被當地獵人誤擊身亡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "雖然有寫出那名女遊客的本名，" },
          { id: 2, text: "但我只想記得……" },
          { id: 3, text: "她叫作桑妮……" },
          { id: 4, text: "還有她臉上總是燦爛如陽光般的笑容。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "老羅被羈押在看守所……" },
          { id: 2, text: "沒有人出面保釋他。" },
          { id: 3, text: "所有人都希望他去坐牢吧？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "有人謠傳……" },
          { id: 2, text: "他的老婆沈伊芳……" },
          { id: 3, text: "其實不是病死，" },
          { id: 4, text: "而是死於他的家暴之下。" },
          { id: 5, text: "只是說歸說……" },
          { id: 6, text: "並沒有任何證據。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "當然，" },
          { id: 2, text: "我沒忘記自己還有一個任務……" },
          { id: 3, text: "那就是將沈伊芳的信交給老媽。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "老媽沒有當面拆開來看，" },
          { id: 2, text: "我也沒說自己偷看過內容……" },
          { id: 3, text: "就這樣過了兩天……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "那晚……" },
          { id: 2, text: "我看到她獨自在餐廳喝酒，" },
          { id: 3, text: "便坐下來跟她一起喝。" },
          { id: 4, text: "母女倆聊起了一堆陳年往事……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "然後，" },
          { id: 2, text: "老媽忽然嘆了一口氣。" },
        ],
      },
      {
        // 人文字訊息
        chatSN: 12,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "其實，莊士郎誘拐女孩子的謠言……是我傳出去的。",
      },
      {
        // 人文字訊息
        chatSN: 13,
        type: "P",
        speaker: "R",
        name: "莎葉",
        photo: require("./profile/Sara.png"),
        text: "你早就知道……他跟沈伊芳的關係了……對吧？",
      },
      {
        // 人文字訊息
        chatSN: 14,
        type: "P",
        speaker: "L",
        name: "月蘭",
        photo: require("./profile/Lan.png"),
        backColor: "#F2D9DE",
        text: "……我真的沒想過……事情會變成那樣。不過是一個小鎮的八卦……誰知道竟然會害死一條人命？",
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "老媽拿出了那封自白信，" },
          { id: 2, text: "將它在煙灰缸內燒成了灰燼。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [{ id: 1, text: "我也支持她的做法。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "有些事……" },
          { id: 2, text: "就讓它永遠成為秘密吧！" },
        ],
      },
    ],
  },
  {
    backSN: 60,
    backImg: require("./back/S02-06-03.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　鎮史館一樓" }],
      },
      {
        // 旁白語音訊息，無底色
        chatSN: 2,
        type: "N",
        sound: require("./sound/01-01-01.mp3"),
        soundImg: require("./../../Sound-W.png"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "這一天……" },
          { id: 2, text: "鎮史館非常熱鬧……" },
          { id: 3, text: "難得有這麼多人前來參觀！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "我被擠到走廊的邊緣……" },
          { id: 2, text: "看著館長正在為一整團的觀光客導覽……" },
          { id: 3, text: "感覺他整個人都精神奕奕了起來。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "這就是我們一直以來盼望的光景……" },
          { id: 2, text: "重振這座館邸的榮光！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "本來我到這裡……" },
          { id: 2, text: "是要向館長道別……" },
          { id: 3, text: "但見他如此忙碌……" },
          { id: 4, text: "決定還是在遠處靜靜地看著他吧？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "我告訴自己……" },
          { id: 2, text: "沒關係，" },
          { id: 3, text: "這樣也好。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "有時候，" },
          { id: 2, text: "說太多話……" },
          { id: 3, text: "反而破壞了我們的心有靈犀。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "我相信……" },
          { id: 2, text: "他一定看到了我，" },
          { id: 3, text: "也知道我要離開了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "如果可以……" },
          { id: 2, text: "我想要他……" },
          { id: 3, text: "最後再一次……" },
          { id: 4, text: "單獨為我導覽。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "最後再一次……" },
          { id: 2, text: "牽著我的手。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "最後再一次……" },
          { id: 2, text: "跑過長長的迴廊。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [{ id: 1, text: "……彷彿在跳著雙人舞一樣。" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [{ id: 1, text: "只有我們清脆悅耳的腳步聲……" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [{ id: 1, text: "迴盪在這棟寧靜的宅邸。" }],
      },
      {
        // 旁白圖片訊息
        chatSN: 16,
        type: "N",
        img: require("./images/D02-07-31.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "然而，" },
          { id: 2, text: "那一幕……" },
          { id: 3, text: "終究只存在我的腦海裡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "就像是足不出戶的莊士郎……" },
          { id: 2, text: "筆下所畫出來的北巫鎮……" },
          { id: 3, text: "是他最美麗的幻想。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [{ id: 1, text: "雖然我跟館長之間的誤會解開了……" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [{ id: 1, text: "但已經褪色的感情……" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [{ id: 1, text: "卻再也回不來了。" }],
      },
      {
        // 旁白圖片訊息
        chatSN: 22,
        type: "N",
        img: require("./images/D03-16-06.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "再見了……" },
          { id: 2, text: "館長。" },
        ],
      },
    ],
  },
  {
    backSN: 61,
    backImg: require("./back/S01-09-01.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　北巫國中" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 2,
        type: "N",
        text: [
          { id: 1, text: "兩位女孩站在一起……" },
          { id: 2, text: "她們的身材一樣瘦、" },
          { id: 3, text: "頭髮也一樣長。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "不一樣的是……" },
          { id: 2, text: "其中一位女孩穿著名校制服。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "過完寒假……" },
          { id: 2, text: "你就要回台北了嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "開學了……" },
          { id: 2, text: "當然要回去呀！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "我……" },
          { id: 2, text: "可以跟你一起去嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "不行吧！" },
          { id: 2, text: "你又不是我們學校的人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "但我是你的好朋友，" },
          { id: 2, text: "不是嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "你又不喜歡讀書……" },
          { id: 2, text: "去那裡幹嘛？" },
          { id: 3, text: "你應該做你想做的事才對！" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "我想像你一樣……" },
          { id: 2, text: "莎葉。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "離開校園時，" },
          { id: 2, text: "穿制服的長髮女孩先走了。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 12,
        type: "N",
        text: [
          { id: 1, text: "另一個長髮女孩站在原地，" },
          { id: 2, text: "看著好友逐漸遠去的背影。" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 13,
        type: "N",
        img: require("./images/D01-11-04.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [{ id: 1, text: "我終於想起來了……" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "小艾失蹤的那一天……" },
          { id: 2, text: "我們在校園裡所說過的話。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [
          { id: 1, text: "……並不是我故意隱瞞，" },
          { id: 2, text: "而是我根本忽視了話裡的含意。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "我沒有發覺到……" },
          { id: 2, text: "小艾從很早以前……" },
          { id: 3, text: "就開始在模仿我。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [
          { id: 1, text: "……模仿我化妝、留長髮，" },
          { id: 2, text: "甚至模仿我跟館長談戀愛。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 19,
        type: "N",
        text: [
          { id: 1, text: "依照沈伊芳原本的計畫……" },
          { id: 2, text: "小艾一展開逃亡……" },
          { id: 3, text: "就應該直接去找秋子婆婆。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 20,
        type: "N",
        text: [
          { id: 1, text: "可是，" },
          { id: 2, text: "她卻走出了一條『神隱之路』。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 21,
        type: "N",
        text: [
          { id: 1, text: "我們一直認為的路線……" },
          { id: 2, text: "其實根本搞錯了順序。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 22,
        type: "N",
        text: [
          { id: 1, text: "小艾離開學校後……" },
          { id: 2, text: "是先過吊橋碰到了黃克洋……" },
          { id: 3, text: "然後就回到了家中。" },
          { id: 4, text: "接著……" },
          { id: 5, text: "在母親的催促下……" },
          { id: 6, text: "正式出發。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 23,
        type: "N",
        text: [
          { id: 1, text: "後來，" },
          { id: 2, text: "她跑去了鎮史館，" },
          { id: 3, text: "並在畫室裡躲了一個晚上，" },
          { id: 4, text: "隔天才去找秋子婆婆。" },
          { id: 5, text: "最後，" },
          { id: 6, text: "兩人一起逃往山上的遺跡。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 24,
        type: "N",
        text: [
          { id: 1, text: "也就是說……" },
          { id: 2, text: "在鎮史館藏匿，" },
          { id: 3, text: "以及約黃克洋半夜碰面……" },
          { id: 4, text: "都是小艾臨時追加的行動。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 25,
        type: "N",
        text: [
          { id: 1, text: "我一度以為……" },
          { id: 2, text: "這是小艾的心機。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 26,
        type: "N",
        text: [
          { id: 1, text: "如今，" },
          { id: 2, text: "我有了不一樣的看法。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 27,
        type: "N",
        text: [
          { id: 1, text: "也許是我一廂情願吧？" },
          { id: 2, text: "我覺得……" },
          { id: 3, text: "小艾是為了我……" },
          { id: 4, text: "才用這種方式對黃克洋進行復仇，" },
          { id: 5, text: "讓他以後再也不敢欺負我。" },
        ],
      },
    ],
  },
  {
    backSN: 62,
    backImg: require("./back/S01-06-08.jpg"),
    // 左邊人物的名字顏色
    nameColorL: "#ffffff",
    // 右邊人物的名字顏色
    nameColorR: "#ffffff",
    chats: [
      {
        // 旁白文字訊息，有底色
        chatSN: 1,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "白天　北巫鎮上" }],
      },
      {
        // 旁白圖片訊息
        chatSN: 2,
        type: "N",
        img: require("./images/D03-18-12.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 3,
        type: "N",
        text: [
          { id: 1, text: "穿過故鄉街道的我……" },
          { id: 2, text: "是一位即將遠行的旅人。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 4,
        type: "N",
        text: [
          { id: 1, text: "雖然我不曉得我父親到底是誰，" },
          { id: 2, text: "但我身上終究流著他的血。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 5,
        type: "N",
        text: [
          { id: 1, text: "展開一趟不知何時回來的旅途……" },
          { id: 2, text: "似乎是我所背負的宿命。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 6,
        type: "N",
        text: [
          { id: 1, text: "我要去哪裡？" },
          { id: 2, text: "我還不知道。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 7,
        type: "N",
        text: [
          { id: 1, text: "不過，" },
          { id: 2, text: "我的目的是什麼？" },
          { id: 3, text: "我很清楚。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 8,
        type: "N",
        text: [
          { id: 1, text: "這條神隱之路……" },
          { id: 2, text: "尚未走完。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 9,
        type: "N",
        text: [
          { id: 1, text: "我要繼續走下去……" },
          { id: 2, text: "看看它的盡頭到底在哪裡？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 10,
        type: "N",
        text: [
          { id: 1, text: "這一刻……" },
          { id: 2, text: "我又想起了當年跟小艾玩的捉迷藏，" },
          { id: 3, text: "還有她對我說的那一番話。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 11,
        type: "N",
        text: [
          { id: 1, text: "你再不來找我……" },
          { id: 2, text: "我就要消失囉！" },
        ],
      },
      {
        // 旁白圖片訊息
        chatSN: 12,
        type: "N",
        img: require("./images/D03-17-32.jpg"),
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 13,
        type: "N",
        text: [
          { id: 1, text: "對小艾來說……" },
          { id: 2, text: "這只是一場遊戲嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 14,
        type: "N",
        text: [
          { id: 1, text: "因為，" },
          { id: 2, text: "我不讓你來找我……" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 15,
        type: "N",
        text: [
          { id: 1, text: "所以……" },
          { id: 2, text: "換你想要我來找你……" },
          { id: 3, text: "是嗎？" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 16,
        type: "N",
        text: [{ id: 1, text: "那我現在就出發！" }],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 17,
        type: "N",
        text: [
          { id: 1, text: "我頭也不回地離開了小鎮，" },
          { id: 2, text: "沿著山路往前走。" },
        ],
      },
      {
        // 旁白文字訊息，無底色
        chatSN: 18,
        type: "N",
        text: [{ id: 1, text: "……只有白茫茫的大霧為我送行。" }],
      },
      {
        // 旁白影片訊息
        chatSN: 19,
        type: "N",
        videpDirection: "col",
        video: require("./video/D03-03.mp4"),
      },
      {
        // 人文字訊息
        chatSN: 20,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "這一齣迷霧小鎮推理劇……至此宣告落幕。",
      },
      {
        // 人文字訊息
        chatSN: 21,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "看似平凡純樸的小鎮，鎮民之間的人際關係……可能比我們想像中的更錯綜複雜。",
      },
      {
        // 人文字訊息
        chatSN: 22,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "下次，當您有機會走訪溫泉小鎮，除了品嚐小吃、逛逛景點之外，也許，也可以去想想……在這些觀光小鎮上，住的會是什麼樣的人？他們有著什麼樣的故事？",
      },
      {
        // 人文字訊息
        chatSN: 23,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "很高興有您陪著我……一起看到了故事的最後。",
      },
      {
        // 人文字訊息
        chatSN: 24,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "再次感謝您的支持，也希望您感受到獨特的閱讀體驗。",
      },
      {
        // 人文字訊息
        chatSN: 25,
        type: "P",
        speaker: "L",
        name: "X",
        photo: require("./profile/X.png"),
        text: "我們在下一個故事裡相見！",
      },
      {
        // 旁白文字訊息，有底色
        chatSN: 26,
        type: "N",
        backStyle: {
          backgroundColor: "rgba(228, 232, 235, .3)",
        },
        text: [{ id: 1, text: "全劇終" }],
      },
    ],
  },
];
