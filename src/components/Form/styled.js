import styled from 'styled-components'

export const Form = styled.form`
  border-radius: 50px;
  box-shadow: 0 1px 6px 0 rgb(0 0 0 / 38%);
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  width: 100%;
  margin: 0 auto;

  .input-text, .input-submit {
    border: none;
    height: 45px;
    outline: none;
  }

  input {
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 400;
    padding-left: 10px;
    padding-right: 5px;
    width: 85%;
  }

  button {
    background: transparent;
    color: #5b5b5b;
    cursor: pointer;
    font-weight: 600;
    margin-right: 10px;
    text-transform: capitalize;
  }

`