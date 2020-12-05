import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 400px;
  margin: 16px;
  padding: 16px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.1);

  transition: opacity 4s;

  p {
    color: #000;
  }

  textarea {
    color: #000;
    font-size: 16px;

    height: 100%;
    resize: none;
    display: block;

    border: none;
    background-image: none;
    background-color: transparent;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
  }

  div {
    display: flex;
    flex: 1;
    justify-content: flex-end;
  }

  button {
    background: none;
    border: none;
    margin-left: 12px;
  }

  @media (max-width: 1100px) {
    max-width: 100%;
  }
`;
