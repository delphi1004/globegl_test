import React from 'react'
import {MainContainer} from './BlockContainer.styles'
import { Case } from '../Case/Case'
import {Globegl} from '../Globe/Globegl'

const BlockContainer = () => {
  return (
    <MainContainer>
      <Case />
      <Globegl />
    </MainContainer>
  )
}

export default BlockContainer
export { BlockContainer }
