import { Dispatch, SetStateAction } from "react";

export interface CaseContainerStyleprops {
  showCase: boolean
}

export interface StateProps {
  state: {
    isCaseVisible: boolean
    setCaseVisible: Dispatch<SetStateAction<boolean>>
  }
}

export interface MediaProps {
  description: string
  otherData?: string
}
