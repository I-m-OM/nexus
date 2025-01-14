import React, { useState } from "react";
import styled from "styled-components";
import Heading from "./Heading";

const Div = styled.div`
  width: 80%;
  margin: 7rem auto 0rem auto;
`;

const Input = styled.textarea`
  margin: 4rem auto 0 auto;
  box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.1),
    0 6px 20px 0 rgba(255, 255, 255, 0.09);
  background: rgba(255, 255, 255, 0.2);
  outline: none;
  padding: 5px 10px;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 75%;
  height: 20rem;
  resize: none;
  color: rgba(255, 255, 255, 0.6);
`;

function Flexbox() {
  const [val, setVal] = useState("Type your paragraph here...");
  const onChange = (e) => {
    setVal(e.target.value);
  };

  return (
    <Div>
      <Heading title="AI Emotion Detector" subTitle="- Problem Statement #5" />
      <Input type="text" value={val} onChange={onChange} row={4} />
    </Div>
  );
}

export default Flexbox;
