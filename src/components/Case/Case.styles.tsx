import styled from 'styled-components'
import { CaseContainerStyleprops } from './Case.type'


export const TopContainer = styled.div`
  display: flex;
  flex-direction:column;
  background-color: black;
  width: 100%;
`

export const ExpandIconContainer = styled.div<CaseContainerStyleprops>`
  width: 100%;
  color: white;
  transition:all 0.2s ease-in-out;
  opacity: ${({ showCase }) => (showCase ? 0 : 1)};
` 

export const CaseContainer = styled.div<CaseContainerStyleprops>`
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 100%;
  height: 10%;
  transition: all 0.5s ease-in-out;
  opacity: ${({ showCase }) => (showCase ? '1' : '0')};
  height: ${({ showCase }) => (showCase ? '50%' : '0px')};
`

export const Title = styled.p`
  font-size:1.3rem;
  color:white;
  margin-bottom:1rem;
`

export const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2rem;
  margin-bottom:1rem;
`

export const MediaWrapper = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing:border-box;
  width: 100%;
  color: white;
  padding: 0 1rem;
` 

export const MediaDescription = styled.p`
  text-align: left;
  word-break: break-word;
`

export const StyledImage = styled.img`
    max-width:10rem;
    max-height:10rem;
    object-fit:10rem;
    margin-right:1rem;

`
