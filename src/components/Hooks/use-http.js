import React, { useState, useCallback } from "react";

const UseHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestData, handlingData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestData.url, {
        method: requestData.method ? requestData.method : "GET",
        body: requestData.body ? requestData.body : null,
        headers: requestData.headers ? requestData.headers : {},
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const res = await response.json();
      let myData = [];
      myData = res.data;
      console.log(myData);

      handlingData(myData);
    } catch (err) {
      console.log(err);
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading: isLoading,
    error: error,
    sendRequest: sendRequest,
  };
};

export default UseHttp;
