import AsyncStorage from "@react-native-async-storage/async-storage";

// storeKey: continueStory or finishStory

const storeStory = async (story, storeKey) => {
  try {
    const value = await AsyncStorage.getItem(storeKey);

    // 第一次開啟app的時候會得到空值
    if (!value) {
      console.log("空值");
      // 如果是空值就存一個array進去
      await AsyncStorage.setItem(
        storeKey,
        JSON.stringify([{ ...story, id: 1 }])
      );
    } else {
      // 找到故事名稱一樣的index
      let _value = JSON.parse(value);
      const idx = _value.findIndex((v) => v.name === story.name);

      // 如果沒找到就是還沒有存這個故事，所以要push
      idx === -1
        ? _value.push({ ...story, id: _value.length + 1 })
        : (_value[idx] = { ...story, id: _value[idx].id });

      // console.log(_value);
      // console.log(_value.length);
      await AsyncStorage.setItem(storeKey, JSON.stringify(_value));
    }
  } catch (error) {
    console.log(error);
  }
};

const getStorys = async (storeKey) => {
  try {
    const value = await AsyncStorage.getItem(storeKey);
    // console.log("@@@@@@@", JSON.parse(value));
    return value !== null ? JSON.parse(value) : null;
  } catch (error) {
    console.log(error);
  }
};

const deleteStory = async (story, storeKey) => {
  try {
    const value = await AsyncStorage.getItem(storeKey);
    // 找到故事名稱一樣的index
    let _value = JSON.parse(value);
    let idx = _value.findIndex((v) => v.name === story.name);

    // 故事結束，刪除此故事
    _value.splice(idx, 1);

    await AsyncStorage.setItem(storeKey, JSON.stringify(_value));
  } catch (error) {
    console.log(error);
  }
};

const deleteAllStorage = async () => {
  AsyncStorage.clear();
};

export default { storeStory, getStorys, deleteStory, deleteAllStorage };
