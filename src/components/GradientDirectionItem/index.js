import {GradientDirectionListItem, DirectionButton} from './styledComponents'

// Write your code here

const GradientDirectionItem = props => {
  const {details, isActive, changeTheActiveButtonId} = props
  const {directionId, displayText} = details

  const changeButton = () => {
    changeTheActiveButtonId(directionId)
  }
  return (
    <GradientDirectionListItem>
      <DirectionButton value={isActive} onClick={changeButton} type="button">
        {displayText}
      </DirectionButton>
    </GradientDirectionListItem>
  )
}

export default GradientDirectionItem
