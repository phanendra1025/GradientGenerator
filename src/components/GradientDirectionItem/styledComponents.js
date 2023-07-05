// Style your elements here
import styled from 'styled-components'

export const GradientDirectionListItem = styled.li`
  list-style: none;
`
export const DirectionButton = styled.button`
  height: 36px;
  width: 130px;
  background-color: #ededed;
  color: #014f7b;
  font-family: 'Roboto';
  border-width: 0px;
  border-radius: 3px;
  opacity: ${props => (props.value ? 1 : 0.5)};
  cursor: pointer;
`
