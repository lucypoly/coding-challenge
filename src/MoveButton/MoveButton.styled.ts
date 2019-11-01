import styled from 'styled-components'

import { Color } from 'constants/types'

interface ButtonProps {
  color: Color;
}

export const Button = styled.button<ButtonProps>`
  background-color: ${p => p.color};
  color: white;
  
  margin: 5px;
  padding: 15px;
  border: 0;
  outline: none;
  
  font-size: 24px;
`
