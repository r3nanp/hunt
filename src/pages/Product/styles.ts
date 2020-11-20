import styled from 'styled-components'

export const Container = styled.div``

export const ProductInfo = styled.div`
  max-width: 700px;
  margin: 20px auto 0;
  padding: 20px;
  background: white;
  border-radius: 5px;
  border: 1px solid #ddd;

  > h1 {
    font-size: 34px;
    font-weight: 700;
    background: white;
  }

  > p {
    color: #666;
    line-height: 24px;
    margin-top: 5px;
    background: white;

    > a {
      color: #069;
      background: white;
    }
  }
`
