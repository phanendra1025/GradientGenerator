import {Component} from 'react'
import {
  AppContainer,
  AppHeading,
  GradientDirectionsContainer,
  ChooseDirectionText,
  PickColorsText,
  ColorInputAndHexContainers,
  ColorInputContainer,
  ColorHexCode,
  ColorInput,
  GenerateButton,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    activeButtonId: gradientDirectionsList[0].directionId,
    activeDirectionValue: 'top',
    activeFirstColor: '#8ae323',
    activeSecondColor: '#014f7b',
    firstColor: '#8ae323',
    secondColor: '#014f7b',
  }

  getTheActiveId = () => {
    const {activeButtonId} = this.state
    const valueObject = gradientDirectionsList.filter(
      eachObject => eachObject.directionId === activeButtonId,
    )
    const directionValueObject = valueObject[0]
    const {value} = directionValueObject
    this.setState({activeDirectionValue: value})
  }

  changeTheActiveButtonId = id => {
    this.setState({activeButtonId: id}, this.getTheActiveId)
  }

  onChangeFirstColor = event => {
    this.setState({firstColor: event.target.value})
  }

  onChangeSecondColor = event => {
    this.setState({secondColor: event.target.value})
  }

  generateColors = () => {
    const {firstColor, secondColor} = this.state
    this.setState({
      activeFirstColor: firstColor,
      activeSecondColor: secondColor,
    })
  }

  render() {
    const {
      activeFirstColor,
      activeSecondColor,
      firstColor,
      secondColor,
      activeButtonId,
      activeDirectionValue,
    } = this.state

    console.log(activeDirectionValue)

    return (
      <AppContainer
        data-testid="gradientGenerator"
        bgFirstColor={activeFirstColor}
        bgSecondColor={activeSecondColor}
        colorDirection={activeDirectionValue}
      >
        <AppHeading>Generate a CSS Color Gradient</AppHeading>
        <ChooseDirectionText>Choose Direction</ChooseDirectionText>
        <GradientDirectionsContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              key={eachDirection.directionId}
              details={eachDirection}
              isActive={eachDirection.directionId === activeButtonId}
              changeTheActiveButtonId={this.changeTheActiveButtonId}
            />
          ))}
        </GradientDirectionsContainer>
        <PickColorsText>Pick the Colors</PickColorsText>
        <ColorInputAndHexContainers>
          <ColorInputContainer>
            <ColorHexCode>{activeFirstColor}</ColorHexCode>
            <ColorInput
              type="color"
              onChange={this.onChangeFirstColor}
              value={firstColor}
            />
          </ColorInputContainer>
          <ColorInputContainer>
            <ColorHexCode>{activeSecondColor}</ColorHexCode>
            <ColorInput
              type="color"
              onChange={this.onChangeSecondColor}
              value={secondColor}
            />
          </ColorInputContainer>
        </ColorInputAndHexContainers>
        <GenerateButton type="button" onClick={this.generateColors}>
          Generate
        </GenerateButton>
      </AppContainer>
    )
  }
}

export default GradientGenerator
