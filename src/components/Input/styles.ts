import styled from 'styled-components'

export const Container = styled.div`
  > input {
    color: black;
    border: 2px solid #ddd;
    border-radius: 5px;

    width: 100%;
    height: 50px;
    font-size: 18px;

    resize: none;
    margin-bottom: 15px;
    transition: border-color 0.3s;

    &:focus {
      border-bottom: 4px solid var(--primary);
    }
  }

  > span {
    font-size: 20px;
    font-weight: 700;
    color: red;
  }
`
