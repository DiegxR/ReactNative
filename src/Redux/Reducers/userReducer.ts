import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  user: {
    id: number,
    name: string,
    email: string
    
  } | null
  userError: {state: boolean, message: {}} | null,
  userLoading: boolean,
  token: string
}

const initialState: CounterState = {
  user: null,
  userError: null,
  userLoading: false,
  token: ''
}

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{id: number; name: string; email: string}>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.userLoading = action.payload;
    },
    setError: (state, action: PayloadAction<{state: boolean, message: {}}>) =>{
    state.userError = action.payload
    }
  },
})

export const { setUser, setLoading, setError } = userSlice.actions
