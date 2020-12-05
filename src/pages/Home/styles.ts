import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  p {
    color: white;
  }
`;

export const Content = styled.div`
  background: #f6f6f6;
  border-radius: 12px;
  width: 45%;
  justify-content: center;
`;

export const Header = styled.div`
  display: flex;
  flex: 1;
  background: #e0e0e0;
  border-radius: 12px 12px 0 0;
  padding: 18px;
  justify-content: center;

  h1 {
    font-size: 1.45rem;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

export const TaskListContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const TaskList = styled.div`
  width: 100%;
  justify-content: center;
  margin: 12px;

  h2 {
    justify-content: center;
    text-align: center;
    font-size: 1.35rem;
    font-weight: 400;
    text-transform: capitalize;
  }

  > button {
    width: 100%;
    background: none;
    border: none;
    margin-bottom: 8px;
  }
`;

export const TaskCard = styled.div`
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
`;
