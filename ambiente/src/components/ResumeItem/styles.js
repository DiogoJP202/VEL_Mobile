import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F38342;
  border-radius: 5px;
  padding: 5px 15px;
  width: 30%;
  color: #fff;
  font-weight: bold;

  @media (max-width: 750px) {
    width: 20%;

    p {
      font-size: 12px;
      color: #fff;
    }

    span {
      font-size: 20px;
      color: #fff;
    }

    svg {
      display: none;
      color: #fff;
    }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  gap: 10px;
  margin: 20px auto;

  svg {
    width: 25px;
    height: 25px;
    color: #fff;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 20px;
  color: #fff;
`;

export const Total = styled.span`
  font-size: 30px;
  font-weight: bold;
`;
