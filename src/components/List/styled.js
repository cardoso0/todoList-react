import styled from 'styled-components'

export const Ul = styled.ul`
  display: block;
  margin-block-start: 1em;

  li {
    border-bottom: 1px solid #eaeaea;
    font-size: 1.2rem;
    padding: 17px 0;

    #checkBox {
      margin-right: 15px;
    }
    button {
      background: #f1f3f4;
      border: none;
      border-radius: 100px;
      cursor: pointer;
      float: right;
      font-size: 13px;
      height: 50px;
      margin: -10px 0 0 10px;
      outline: none;
      width: 50px;
    }
  }
`