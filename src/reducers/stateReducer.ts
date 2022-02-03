enum Actions {
  SetCaseVisible = 'SET_CASE_VISIBLE',
  SetMoveToLocation = 'SET_MOVE_TO_LOCATION'
}

export interface SystemState {
  isCaseVisible: boolean
  isSystemRunning: boolean
  moveToLocation: {
    lng: number
    lat: number
  }
}

const initState: SystemState = {
  isCaseVisible: true,
  isSystemRunning: true,
  moveToLocation: {
    lng: 0,
    lat: 0
  }
}

interface Action extends SystemState {
  type: Actions
}

export const SetCaseVisible = (visible:boolean) =>{
  return {
    type: Actions.SetCaseVisible,
    isCaseVisible: visible,
  }
}

export const SetMoveToLocation = (lng: number,lat:number) => {
  return {
    type: Actions.SetMoveToLocation,
    moveToLocation: {
      lng: lng,
      lat: lat,
    },
  }
}

const stateReducer = (state = initState, action: Action) => {

  console.log('action', action)
  switch (action.type) {
    case Actions.SetCaseVisible: {
      return {
        ...state,
        isCaseVisible: action.isCaseVisible,
      }
    }
    case Actions.SetMoveToLocation: {
      return {
        ...state,
        moveToLocation: {
          lng: action.moveToLocation.lng,
          lat: action.moveToLocation.lat,
        },
      }
    }
    default:
      return { ...state }
  }
}

export default stateReducer
