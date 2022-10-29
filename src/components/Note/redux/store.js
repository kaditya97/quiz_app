import { configureStore } from '@reduxjs/toolkit'
import notesReducer from '../redux/notesReducer'
import notesMiddleware from './middleware/notesMiddleware'

export default configureStore({
  reducer: {
    notes: notesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notesMiddleware)
})
