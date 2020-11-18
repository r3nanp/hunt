import styled from 'styled-components'

export const Container = styled.header`
  background: var(--primary);
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: sticky;
  top: 0;

  > h1 {
    background: var(--primary);
    font-size: 20px;
    font-weight: 700;
    color: white;
  }
`
