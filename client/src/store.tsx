import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { combineReducers } from 'redux'
import appSlice from 'slices/appSlice'
import notesSlice from 'slices/notesSlice'
import userSlice, { setToken } from 'slices/userSlice'

const reducer = combineReducers({
  app: appSlice,
  notes: notesSlice,
  user: userSlice
})

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof reducer>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store

setToken(store.getState().user.token)
