import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 20px auto;
  width: 98%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 15px 0px;
  gap: 10px;

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

export const Label = styled.label``;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  outline: none;
  border-radius: 6px;
  padding: 5px 10px;
  font-size: 15px;
  border-style: none;
  background-color: #f2f2f2;
`;

export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input[type="radio"] {
    margin-left: 20px;
    margin-right: 5px;
    accent-color: black;
    margin-top: 0;
    width: 20px;
    height: 20px;
  }
`;

export const Button = styled.button`
    background-color: #F38342;
    color: #fff;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    margin-bottom: 20px;
    transition: all .5s;
    width: 80%;
    height: 30px;
`;
