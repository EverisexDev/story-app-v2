# story-app-v2

### Api


### 關於管理

```

http://api.xstudio-mclub.url.tw/api/v1/admin/about


```

|     項目      | 資料類型 |     欄位     |
| :-----------: | :------: | :----------: |
|     lang      |  string  |     語系     |
| about_content |  number  | 關於管理內容 |

### 分章節管理

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/chapter

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/chapter/{storyid}

```

|        項目         | 資料類型 |       欄位       |
| :-----------------: | :------: | :--------------: |
|        lang         |  string  |       語系       |
|       storyid       |  string  |     故事 id      |
|        order        |  string  |       順序       |
|    chapter_name     |  string  |     章節名稱     |
|  chapter_name_size  |  string  | 章節名稱(大/小)  |
| chapter_name_weight |  string  | 章節名稱(粗/細)  |
| chapter_name_color  |  string  |  章節名稱(顏色)  |
|    chapter_infor    |  string  |     章節簡介     |
|     chapter_img     |  string  |     章節圖片     |
|    window_title     |  string  |   防呆視窗標題   |
|   window_btn_left   |  string  |  防呆視窗選項左  |
|  window_btn_right   |  string  |  防呆視窗選項右  |
|      free_open      |  string  | 是否開放免費試閱 |
|   read_range_end    |  string  | 試閱場次範圍(尾) |

### 故事內容

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/content

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/content/{storyid}/{chapterid}/{screeningid}

```

|         項目         | 資料類型 |     欄位      |
| :------------------: | :------: | :-----------: |
|         lang         |  string  |     語系      |
|       storyid        |  number  |    故事 id    |
|      chapterid       |  number  |    章節 id    |
|        order         |  string  |     順序      |
|         role         |  string  |     角色      |
|       roleName       |  string  |   角色名稱    |
|     textContent      |  string  |   文的內容    |
|   textContentSize    |  string  |   文的大小    |
|  textContentWeight   |  string  |   文的粗細    |
|   textContentColor   |  string  |   文的顏色    |
| textContentBaseColor |  string  |   文的底色    |
|        graphy        |  string  |      图       |
|        voice         |  string  |     聲音      |
|        video         |  string  |     影片      |
|     videoFormat      |  string  | 影片顯示方式  |
|    choice1Content    |   text   |  選項 1 內容  |
|     choice1Size      |  string  |  選項 1 大小  |
|    choice1Weight     |  string  |  選項 1 粗細  |
|     choice1Color     |  string  |  選項 1 顏色  |
|   choice1BaseColor   |  string  |  選項 1 底色  |
|     choice1Next      |  string  | 選項 1 連結點 |
|    choice2Content    |  string  |  選項 2 內容  |
|     choice2Size      |  string  |  選項 2 大小  |
|    choice2Weight     |  string  |  選項 2 粗細  |
|     choice2Color     |  string  |  選項 2 顏色  |
|   choice2BaseColor   |  string  |  選項 2 底色  |
|     choice2Next      |  string  | 選項 2 連結點 |
|    choice3Content    |  string  |   選項 內容   |
|     choice3Size      |  string  |  選項 3 大小  |
|    choice3Weight     |  string  |  選項 3 粗細  |
|     choice3Color     |  string  |  選項 3 顏色  |
|   choice3BaseColor   |  string  |  選項 3 底色  |
|     choice3Next      |  string  | 選項 3 連結點 |

### 主選單內容管理

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/main-menu

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/main-menu/{id}

```

|        項目         | 資料類型 |     欄位     |
| :-----------------: | :------: | :----------: |
|        lang         |  string  |     語系     |
|   main_menu_name    |  string  |   故事名稱   |
| main_menu_font_size |  string  | 故事名稱大小 |
|  main_menu_weight   |  string  | 故事名稱粗細 |
|   main_menu_color   |  string  | 故事名稱顏色 |
|   main_menu_image   |  string  |   故事首圖   |
|   main_menu_title   |  string  |     標題     |
|  main_menu_content  |  string  |     內容     |
| main_menu_btn_left  |  string  |    選項左    |
| main_menu_btn_right |  string  |    選項右    |

### 主選單-防呆視窗參數設定

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/menu-foolproof

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/menu-foolproof/{id}

```

|                  項目                   | 資料類型 |      欄位      |
| :-------------------------------------: | :------: | :------------: |
|                  lang                   |  string  |      語系      |
|     menu_foolproof_story_name_size      |  string  |    標題大小    |
|    menu_foolproof_story_name_weight     |  string  |    標題粗細    |
|     menu_foolproof_story_name_color     |  string  |    標題顏色    |
|  menu_foolproof_stroy_information_size  |  string  |  故事簡介大小  |
| menu_foolproof_stroy_information_weight |  string  |  故事簡介粗細  |
| menu_foolproof_stroy_information_color  |  string  |  故事簡介顏色  |
|     menu_foolproof_stroy_item1_size     |  string  | 選項 1(左)大小 |
|    menu_foolproof_stroy_item1_weight    |  string  | 選項 1(左)粗細 |
|    menu_foolproof_stroy_item1_color     |  string  | 選項 1(左)顏色 |
|     menu_foolproof_stroy_item2_size     |  string  | 選項 2(右)大小 |
|    menu_foolproof_stroy_item2_weight    |  string  | 選項 2(右)粗細 |
|    menu_foolproof_stroy_item2_color     |  string  | 選項 2(右)顏色 |

### 主選單參數設定

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/menu

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/menu/{id}


```

|       項目        | 資料類型 |     欄位     |
| :---------------: | :------: | :----------: |
|       lang        |  string  |     語系     |
|    view_color     |  string  |   背景底色   |
|  news_font_size   |  string  | 最新消息大小 |
|    news_color     |  string  | 故事類別顏色 |
|    news_weight    |  string  | 故事類別粗細 |
|  story_type_size  |  string  | 故事類別大小 |
| story_type_color  |  string  | 故事類別顏色 |
| story_type_weight |  string  | 故事類別粗細 |

### 最新消息管理

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/news

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/news/{id}

```

|     項目     | 資料類型 |     欄位     |
| :----------: | :------: | :----------: |
|     lang     |  string  |     語系     |
| news_content |  string  | 最新消息內容 |

### (不分)章節管理

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/nochapter

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/nochapter/{storyid}

```

|      項目      | 資料類型 |       欄位       |
| :------------: | :------: | :--------------: |
|      lang      |  string  |       語系       |
|    storyid     |  string  |     故事編號     |
|   read_free    |  string  | 是否開放免費試閱 |
| read_range_end |  string  | 試閱場次範圍(尾) |

### 購買紀錄

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/purchasehistory

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/purchasehistory/{menberid}

```

|     項目     | 資料類型 |   欄位   |
| :----------: | :------: | :------: |
|   menberid   |  string  | 會員編號 |
|  order_num   |  string  | 訂單編號 |
|  order_time  |  string  | 訂購時間 |
| product_name |  string  | 商品名稱 |

### 故事角色管理

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/role

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/role/{storyid}

```

|          項目          | 資料類型 |    欄位    |
| :--------------------: | :------: | :--------: |
|          lang          |  string  |    語系    |
|        storyid         |  string  |  故事編號  |
|       role_name        |  string  |  人物名稱  |
|        role_sex        |  string  |  人物性別  |
|       role_infor       |  string  |  人物簡介  |
|        role_pic        |  string  | 人物大頭貼 |
|  role_foolproof_title  |  string  |    標題    |
| role_foolproof_content |  string  |    按鈕    |

### 章節-防呆視窗參數設定

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/screenings

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/screenings/{storyid}/{chapterid}

```

|      項目       | 資料類型 |       欄位       |
| :-------------: | :------: | :--------------: |
|      lang       |  string  |       語系       |
|      order      |  string  |       順序       |
|     storyid     |  string  |     故事編號     |
|    chapterid    |  string  |     章節編號     |
| screenings_name |  string  |     場次名稱     |
|     bg_view     |  string  |     背景底圖     |
|  field_effect   |  string  |     換場效果     |
|    field_sec    |  string  |     換場秒數     |
|    free_read    |  string  | 是否開放免費試閱 |
|    main_role    |  string  |       主角       |

### 章節-防呆視窗參數設定

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/setup-chapter-foolproof

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/setup-chapter-foolproof/{id}

```

|                    項目                    | 資料類型 |      欄位      |
| :----------------------------------------: | :------: | :------------: |
|                    lang                    |  string  |      語系      |
|     chapter_foolproof_story_name_size      |  string  |  章節名稱大小  |
|    chapter_foolproof_story_name_weight     |  string  |  章節名稱粗細  |
|     chapter_foolproof_story_name_color     |  string  |  章節名稱顏色  |
|  chapter_foolproof_stroy_information_size  |  string  |  章節簡介大小  |
| chapter_foolproof_stroy_information_weight |  string  |  章節簡介粗細  |
| chapter_foolproof_stroy_information_color  |  string  |  章節簡介顏色  |
|     chapter_foolproof_stroy_item1_size     |  string  | 選項 1(左)大小 |
|    chapter_foolproof_stroy_item1_weight    |  string  | 選項 1(左)粗細 |
|    chapter_foolproof_stroy_item1_color     |  string  | 選項 1(左)顏色 |
|     chapter_foolproof_stroy_item2_size     |  string  | 選項 2(右)大小 |
|    chapter_foolproof_stroy_item2_weight    |  string  | 選項 2(右)粗細 |
|    chapter_foolproof_stroy_item2_color     |  string  | 選項 2(右)顏色 |

### (分)章節參數設定

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/setup-chapter

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/setup-chapter/{id}
```

|         項目         | 資料類型 |     欄位     |
| :------------------: | :------: | :----------: |
|         lang         |  string  |     語系     |
|  chapter_infor_size  |  string  | 章節簡介大小 |
| chapter_infor_weight |  string  | 章節簡介粗細 |
| chapter_infor_color  |  string  | 章節簡介顏色 |

### 故事列表

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/setup-story-list

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/setup-story-list/{id}

```

|        項目        | 資料類型 |     欄位     |
| :----------------: | :------: | :----------: |
|        lang        |  string  |     語系     |
|       order        |  number  |     順序     |
|  stroy_name_size   |  string  | 故事名稱大小 |
| stroy_name_weight  |  string  | 故事名稱粗細 |
|  stroy_name_color  |  string  | 故事名稱顏色 |
|    author_size     |  string  | 作者名稱大小 |
|   author_weight    |  string  | 作者名稱粗細 |
|    author_color    |  string  | 作者名稱顏色 |
|  story_infor_size  |  string  | 故事簡介大小 |
| story_infor_weight |  string  | 故事簡介粗細 |
| story_infor_color  |  string  | 故事簡介顏色 |

### 故事角色-防呆視窗參數設定

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/setup-story-role-foolproof
FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/setup-story-role-foolproof/{id}

```

|                     項目                      | 資料類型 |       欄位       |
| :-------------------------------------------: | :------: | :--------------: |
|                     lang                      |  string  |       語系       |
|     setup_story_role_foolproof_name_size      |  string  |   人物名稱大小   |
|    setup_story_role_foolproof_name_weight     |  string  |   人物名稱粗細   |
|     setup_story_role_foolproof_name_color     |  string  |   人物名稱顏色   |
|  setup_story_role_foolproof_information_size  |  string  |   人物簡介大小   |
| setup_story_role_foolproof_information_weight |  string  |   人物簡介粗細   |
| setup_story_role_foolproof_information_color  |  string  |   人物簡介顏色   |
|             main_Role_Name_Color              |  string  |  主角對話框底色  |
|             boy_Supporting_Color              |  string  | 男配角對話框底色 |
|             girl_Supporting_Color             |  string  | 女配角對話框底色 |

### 故事角色參數設定

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/setup-story-role

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/setup-story-role/{id}

```

|         項目          | 資料類型 |       欄位       |
| :-------------------: | :------: | :--------------: |
|         lang          |  string  |       語系       |
|    role_name_size     |  string  |   人物名稱大小   |
|   role_name_weight    |  string  |   人物名稱粗細   |
|    role_name_color    |  string  |   人物名稱顏色   |
|    role_infor_size    |  string  |   人物簡介大小   |
|   role_infor_weight   |  string  |   人物簡介粗細   |
|   role_infor_color    |  string  |   人物簡介顏色   |
| main_Role_Name_Color  |  string  |  主角對話框底色  |
| boy_Supporting_Color  |  string  | 男配角對話框底色 |
| girl_Supporting_Color |  string  | 女配角對話框底色 |

### 故事參數設定

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/setup-story

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/setup-story/{id}
```

|        項目        | 資料類型 |     欄位     |
| :----------------: | :------: | :----------: |
|        lang        |  string  |     語系     |
|  stroy_name_size   |  string  | 故事名稱大小 |
| stroy_name_weight  |  string  | 故事名稱粗細 |
|  stroy_name_color  |  string  | 故事名稱顏色 |
|  author_name_size  |  string  | 作者名稱大小 |
| author_name_weight |  string  | 作者名稱粗細 |
| author_name_color  |  string  | 作者名稱顏色 |
|  story_infor_size  |  string  | 故事簡介大小 |
| story_infor_weight |  string  | 故事簡介粗細 |
| story_infor_color  |  string  | 故事簡介顏色 |

### 故事列表管理

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/story-list

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/story-list/{id}

```

|    項目     | 資料類型 |   欄位   |
| :---------: | :------: | :------: |
|    lang     |  string  |   語系   |
|    order    |  string  |   順序   |
| stroy_name  |  string  | 故事名稱 |
|   author    |  string  | 作者名稱 |
| story_infor |  string  | 故事簡介 |
| story_type  |  string  | 故事類別 |
|    price    |  string  | 單本定價 |
|    open     |  string  | 是否公開 |
| view_times  |  string  | 觀看次數 |
|  buy_times  |  string  | 購買次數 |

### 故事類別

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/story-type

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/story-type/{id}
```

|    項目    | 資料類型 |   欄位   |
| :--------: | :------: | :------: |
|    lang    |  string  |   語系   |
| story_type |  number  | 故事類別 |

### 訂閱紀錄管理

```
All:
http://api.xstudio-mclub.url.tw/api/v1/admin/subscriptionrecord

FindOne:
http://api.xstudio-mclub.url.tw/api/v1/admin/subscriptionrecord/{menberid}
```

|      項目      | 資料類型 |     欄位     |
| :------------: | :------: | :----------: |
|    menberid    |  string  |   會員編號   |
|    sub_num     |  number  |   訂閱編號   |
| sub_start_time |  number  | 訂閱開始時間 |
|  sub_end_time  |  number  | 訂閱結束時間 |
|    sub_plan    |  number  |   訂閱方案   |

## Author

Michael Huang
