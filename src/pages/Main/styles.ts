import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProductList = styled.div`
  max-width: 700px;
  margin: 20px auto 0;
  padding: 0 20px;

  height: 80vh;

  strong {
    font-size: 30px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
    color: #999;
    margin-top: 5px;
    line-height: 24px;
  }

  a {
    height: 42px;
    border-radius: 5px;
    border: 2px solid var(--primary);
    background: none;
    margin-top: 10px;
    color: var(--primary);
    font-weight: 700;
    font-size: 16px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;

    &:hover {
      background: var(--primary);
      color: #fff;
    }
  }
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  > button {
    padding: 10px;
    border-radius: 5px;
    border: 0;
    background: var(--primary);
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      opacity: 0.7;
    }
  }

  > button:nth-child(1) {
    margin-right: 15px;
  }
`
