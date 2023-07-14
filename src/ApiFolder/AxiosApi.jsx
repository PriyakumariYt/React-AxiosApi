import React, { useEffect, useState } from "react";
import axios from "axios";

const AxiosApi = () => {
  const [data, setData] = useState([]);

    // useEffect(() => {
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //         .then((response) => setData(response.data))
    //         .catch((error) =>
    //             console.log(error));

    // }, []);
  // async await
  const getApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(res.data);
    } catch(error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getApiData();
  }, []);

  return (
    <>
      <div className="containers">
        <h1>Axios Api Data</h1>
        <div className="cards">
          {data.slice(0,60).map((currData) => {
            const { id, title, body } = currData;
            return (
              <div className="card" key={id}>
                <h2>{title.slice(0, 10)}</h2>
                <p>{body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AxiosApi;
