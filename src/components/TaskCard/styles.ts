import styled, { css } from "styled-components";

interface Props {
  isDragging: boolean;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  flex-direction: column;
  max-width: 400px;
  max-height: 90px;
  margin: 12px;
  padding: 16px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.1);

  cursor: grab;

  p {
    color: #000;
  }

  textarea {
    color: #000;
    font-size: 1em;

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
    padding-left: 8px;
    padding-right: 8px;
  }

  @media (max-width: 1100px) {
    width: 80%;
  }

  ${(props: Props) =>
    props.isDragging &&
    css`
      border: 2px dashed rgba(0, 0, 0, 0.2);
      background: transparent;
      box-shadow: none;
      cursor: grabbing;

      div,
      button,
      textarea {
        opacity: 0;
      }
    `}
`;
