import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import { CaseContainer, Title, MediaContainer, MediaWrapper, StyledImage, MediaDescription, TopContainer, ExpandIconContainer } from './Case.styles'
import {MediaProps} from './Case.type'
import { useDispatch, useSelector } from 'react-redux'
import { SetCaseVisible, SetMoveToLocation } from '../../reducers/stateReducer'
import { RootState } from '../../store'

const testData = [
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    lat: 56.26392,
    lng: 9.501785,
  },
  {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    lat: 60.128161,
    lng: 18.643501,
  },
]

const Media = ({ description,lng,lat }: MediaProps) => {
  const dispatch = useDispatch()

  const onClickHandler = () =>{
    console.log('description', description)
    console.log('lng', lng)
    console.log('lat', lat)

    dispatch(SetCaseVisible(false))
    dispatch(SetMoveToLocation(lng,lat))
  }
  return (
    <MediaWrapper onClick={() => onClickHandler()}>
      <StyledImage src={process.env.PUBLIC_URL + '/image.jpeg'} alt={''} />
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
            <Media key={i} description ={item.description} lng={item.lng} lat={item.lat}/>
          ))}
        </MediaContainer>
      </CaseContainer>
    </>
  )
}

export default Case
export { Case }
