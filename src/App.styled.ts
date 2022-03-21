import styled from "styled-components"
import Montserrat from './fonts/Montserrat/Montserrat-VariableFont_wght.ttf'

export const AppStyled = styled.div`
  @font-face {
    font-family: 'Montserrat';
    src: url(${Montserrat}) format('ttf supports variations'),
        url(${Montserrat}) format('ttf-variations');
    font-weight: 100 1000;
    font-stretch: 25% 151%;
  }

  font-family: 'Montserrat';
  flex: 1 0 auto;
  background-color: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
`