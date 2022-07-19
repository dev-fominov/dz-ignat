import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import thunkMiddleware, { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { changeThemeCType, themeReducer } from '../../h12/bll/themeReducer'
import { onChangeType, successReduser } from '../../h13/components/request-reducer'
import { loadingACType, loadingReducer } from './loadingReducer'

const reducers = combineReducers({
    loading: loadingReducer,
    theme: themeReducer,
    success: successReduser,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppActionsType = loadingACType | changeThemeCType | onChangeType 

export type AppStoreType = ReturnType<typeof reducers>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ThunkDispatch<RootState, unknown, AppActionsType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActionsType>

// @ts-ignore
window.store = store // for dev
