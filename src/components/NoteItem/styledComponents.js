// Style your elements here
import styled from 'styled-components'

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #cbd5e1;
  border-radius: 7px;
  margin-bottom: 15px;
  padding: 24px 15px;
  @media screen and (min-width: 768px) {
    width: 31%;
    min-width: 255px;
    margin: 0px 8px 24px 8px;
  }
`

export const Title = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
  margin: 0;
  line-height: 1.33;
`

export const Note = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 15px;
  margin: 0;
  margin-top: 17px;
  line-height: 23px;
`
