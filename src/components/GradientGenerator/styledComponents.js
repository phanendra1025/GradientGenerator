// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.colorDirection},
    ${props => props.bgFirstColor},
    ${props => props.bgSecondColor}
  );
`

export const AppHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
`
export const ChooseDirectionText = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 18px;
`

export const GradientDirectionsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
  width: 600px;
  justify-content: space-between;
`

export const PickColorsText = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 18px;
`
export const ColorInputAndHexContainers = styled.div`
  display: flex;
  align-items: center;
  width: 250px;
  justify-content: space-between;
  margin-top: 10px;
`
export const ColorInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const ColorHexCode = styled.p`
  color: #ededed;
  font-family: 'Roboto';
`
export const ColorInput = styled.input`
  width: 70px;
  height: 30px;
  border-width: 0px;
  padding: 0px;
  margin: 0px;
`
export const GenerateButton = styled.button`
  background-color: #00c9b7;
  width: 130px;
  height: 30px;
  color: #1e293b;
  border-width: 0px;
  border-radius: 3px;
  margin-top: 45px;
  cursor: pointer;
`
