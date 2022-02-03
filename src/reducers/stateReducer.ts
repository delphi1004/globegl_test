enum Actions {
  SetCaseVisible = 'SET_CASE_VISIBLE',
}

export interface SystemState {
  isCaseVisible: boolean
  isSystemRunning: boolean
}

const initState: SystemState = {
  isCaseVisible: true,
  isSystemRunning: true,
}

interface Action {
  type: Actions
  isCaseVisible: boolean
  isSystemRunning : boolean
}

export const SetCaseVisible = (visible:boolean) =>{
    return{
        type:Actions.SetCaseVisible,
        isCaseVisible:visible
    }
}

const stateReducer = (state = initState, action: Action) => {
  switch (action.type) {
    case Actions.SetCaseVisible: {
      return {
        ...state,
        isCaseVisible: action.isCaseVisible,
      }
    }
    default:
  }
  return state
}

export default stateReducer
