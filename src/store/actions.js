import * as types from './mutation-types'

export const setAuth = ({commit}, data) => {
    commit(types.SET_AUTH, data)
}
export const setHeadImage = ({commit}, data) => {
    commit(types.SET_HEADIMAGE, data)
}

export const getAuth = ({commit}) => {
    commit(types.GET_AUTH)
}

export const setCount = ({commit}, data) => {
    commit(types.SET_COUNT, data)
}
export const setVersion = ({commit}, data) => {
    commit(types.SET_VERSION, data)
}

export const setButtons = ({commit}, buttons) => {
    if (buttons instanceof Array) {
        commit(types.SET_BUTTONS, buttons)
    }
}
export const refreshMsg = ({commit}, is) =>{
  commit(types.REFRESH_MSG, is)
}
