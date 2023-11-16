import { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [apiError, setApiError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  const reqAboutApi = async (...args) => {
    // setLoading(true);
    
    try {
      const response = await axios.get("http://api.xstudio-mclub.url.tw/api/v1/admin/about");
      
      if (response.status === 200) {
        // 成功獲取數據
        const responseData = response.data;
        setData(responseData);
        setApiError(false);
      } else {
        console.error("About API請求失敗：", response.statusText);
        setApiError(true);
      }
    } catch (error) {
      console.error("About API請求錯誤：", error);
      setApiError(true);
    }
    
    setLoading(false);
  };
  
  return { data, apiError, loading, request };
};
