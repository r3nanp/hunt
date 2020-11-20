import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 100vh;

  > form {
    width: 700px;
    margin: 64px auto;
    background: white;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    padding: 64px 80px;
    overflow: hidden;
  }
`

export const Register = styled.fieldset`
  border: 0;
  background: white;
  > legend {
    text-align: center;
    background: white;
    width: 100%;
    font-size: 32px;
    line-height: 34px;
    color: #5c8599;
    font-weight: 700;
    border-bottom: 1px solid #d3e2e5;
    margin-bottom: 40px;
    padding-bottom: 24px;
  }
`

export const Button = styled.button`
  display: flex;
  margin: 0 auto;

  padding: 10px;
  border-radius: 5px;

  color: white;
  cursor: pointer;
  background: var(--primary);
  transition: 0.3s;

  &:hover {
    background: var(--primary-hover);
  }
`
