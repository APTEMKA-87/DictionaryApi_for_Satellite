import {Dispatch} from 'redux';
import {dictionaryAPI, wordType} from './api/api';

const initialState = {
    items: [] as wordType[]
}

type initItemsReducerType = typeof initialState

export const itemsReducer = (state = initialState, action: any): initItemsReducerType => {
    switch (action.type) {
        case 'items-loaded':
            return {...state, items: action.items}
        default:
            return state
    }
}

export const itemsLoaderAC = (items: wordType[]) => ({type: 'items-loaded', items})

export const loadItemsTC = (value: string) => (dispatch: Dispatch) => {
  return   dictionaryAPI.getWord(value)
        .then((res) => {
            dispatch(itemsLoaderAC(res.data))
            return true
        })
      .catch((error)=>{
          console.error(error)
          return false
      })

}

