import styled, { css } from "styled-components";

interface Props {
  isDragging: boolean;
}

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

  @media (max-width: 900px) {
    width: 85%;
  }
`;

export const TaskListContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-evenly;

  @media (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const TaskList = styled.div`
  width: 100%;
  justify-content: center;
  padding: 12px;
  align-items: center;

  h2 {
    justify-content: center;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 400;
    text-transform: capitalize;
  }

  @media (max-width: 1100px) {
    padding: 12px 0;
  }

  ${(props: Props) =>
    props.isDragging &&
    css`
      background: #eeeeee;
    `}
`;
