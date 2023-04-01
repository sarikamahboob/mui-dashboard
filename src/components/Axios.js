import { Box } from "@mui/material";

import React, { useEffect, useState } from "react";

import axios from "../apis/axios";

const Axios = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState("");
  const getApiData = async (url) => {
    try {
      const res = await axios.get("/posts");
      setData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };
  useEffect(() => {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => setData(res.data))
    //   .catch((error) => setIsError(error.message));
    getApiData();
  }, []);

  return (
    <Box>
      {isError !== "" && <h2>{isError}</h2>}
      {!isError && (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gridGap: "20px",
          }}
        >
          {data.map((item) => {
            const { id, title, body } = item;
            return (
              <Box
                textAlign="center"
                key={id}
                sx={{ border: "1px solid #565656", padding: "10px" }}
              >
                <h2>{title.slice(0, 15).toUpperCase()}</h2>
                <p>{body.slice(0, 100)}</p>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
};

export default Axios;
