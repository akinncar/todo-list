import styled, { css } from "styled-components";

interface Props {
  hasTasks: boolean;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;

  ${(props: Props) =>
    !props.hasTasks &&
    css`
      align-items: center;
    `};

  button {
    background: #fff;
    box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    width: 42px;
    height: 42px;
    border: none;
    margin: 8px 0;
  }
`;
