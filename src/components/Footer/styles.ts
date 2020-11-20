import styled, { css } from 'styled-components'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

export const Container = styled.footer`
  background: var(--main);

  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;

  > a {
    text-decoration: none;
    background: none;
  }
`

const iconCss = css`
  fill: white;
  background: var(--main);
  height: 40px;
  width: 40px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

export const GithubLogo = styled(AiOutlineGithub)`
  ${iconCss}
`

export const LinkedinLogo = styled(AiOutlineLinkedin)`
  ${iconCss}
`
