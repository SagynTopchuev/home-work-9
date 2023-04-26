import React, { useEffect } from "react";
import { useState } from "react";
// import styled from "styled-components";

export const Users = () => {
  const [openUser, setOpenUser] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/users";

  async function name() {
    const response = await fetch(url);
    const data = await response.json();
    setOpenUser(data);
  }

  useEffect(() => {
    name();
  }, []);
  return (
    <div>
      {openUser.map((item) => {
        return (
          <div>
            <h3>{item.name}</h3>
            <h5>{item.email}</h5>
          </div>
        );
      })}
    </div>
  );
};
