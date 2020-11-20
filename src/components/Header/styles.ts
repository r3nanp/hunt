import styled from 'styled-components'

import { FiPlus } from 'react-icons/fi'

export const Container = styled.header`
  padding: 0 20px;
  background: var(--primary);
  height: 56px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: sticky;
  top: 0;

  > div {
    margin: 0 auto;
    > h1 {
      background: var(--primary);
      font-size: 20px;
      font-weight: 700;
      color: white;
      text-align: center;
    }
  }

  .create-product {
    z-index: 1000;
    position: absolute;
    right: 40px;
    bottom: 7px;
    width: 40px;
    height: 40px;
    background: var(--link-color);
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
    &:hover {
      background: var(--link-color-hover);
    }
  }
`

export const PlusIcon = styled(FiPlus)`
  size: 35;
  background: transparent;
`
