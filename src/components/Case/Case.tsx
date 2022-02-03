import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { CaseContainer, Title, MediaContainer, MediaWrapper, StyledImage, MediaDescription, TopContainer, ExpandIconContainer } from './Case.styles'
import {MediaProps} from './Case.type'
import { useDispatch, useSelector } from 'react-redux'
import { SetCaseVisible } from '../../reducers/stateReducer'
import { RootState } from '../../store'

const testData = [
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imageUrl: '/image.jpeg',
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    imageUrl: '/image.jpeg',
  },
]

const Media = ({ description, imageUrl }: MediaProps) => {
  const dispatch = useDispatch()
  return (
    <MediaWrapper onClick={() => dispatch(SetCaseVisible(false))}>
      <StyledImage src={imageUrl} alt={''} />
      <MediaDescription>{description}</MediaDescription>
    </MediaWrapper>
  )
}

const Case = () => {
  const dispatch = useDispatch()
  const isCaseVisible = useSelector((state: RootState) => state.systemState.isCaseVisible)

  return (
    <>
      <TopContainer>
        <Title>LIVE FROM THE GREEN TRANSITION</Title>
        <ExpandIconContainer showCase={isCaseVisible}>
          <ArrowDownwardIcon onClick={() => dispatch(SetCaseVisible(true))} />
        </ExpandIconContainer>
      </TopContainer>
      <CaseContainer showCase={isCaseVisible}>
        <MediaContainer>
          {testData.map((item, i) => (
            <Media key={i} description={item.description} imageUrl={item.imageUrl} />
          ))}
        </MediaContainer>
      </CaseContainer>
    </>
  )
}

export default Case
export { Case }
