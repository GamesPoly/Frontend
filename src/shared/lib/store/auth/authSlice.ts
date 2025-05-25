import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface User {
    id: string
    name: string
    email: string
    avatar?: string
    status?: string
    online?: boolean
    favouriteGames?: any[]
    userGames?: any[]
    achievements?: any[]
    activity?: number
}

interface AuthState {
    user: User | null
    token: string | null
    loading: boolean
    error: string | null
}

const initialState: AuthState = {
    user: null,
    token: null,
    loading: false,
    error: null,
}

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (
        credentials: { email: string; password: string },
        { rejectWithValue }
    ) => {
        try {
            const response: {
                data: {
                    token: string
                }
            } = await axios.post(
                'https://polygames-backend.onrender.com/api/users/login/',
                credentials,
               /*  {
                    headers: {
                        'X-Requested-With': 'XMLHttpRequest',
                    },
                } */
            )
            localStorage.setItem('authToken', response.data.token)
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)

export const getCurrentUser = createAsyncThunk(
    'auth/getCurrentUser',
    async (_, { rejectWithValue }) => {
        const token = localStorage.getItem('authToken')
        if (!token) {
            return rejectWithValue('No auth token found')
        }

        try {
            const response = await axios.get(
                'https://polygames-backend.onrender.com/api/users/me/',
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Failed to fetch user data')
        }
    }
)

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (
        credentials: { username:string, email: string; password: string },
        { rejectWithValue }
    ) => {
        try {
            const response: { token: string } = (
                await axios.post(
                    'https://polygames-backend.onrender.com/api/users/register/',
                    credentials,
                  /*   {
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest',
                        },
                    } */
                )
            ).data
            localStorage.setItem('authToken', response.token)
            return response
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(
                loginUser.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false
                    state.user = action.payload.user
                    state.token = action.payload.token
                }
            )
            .addCase(
                loginUser.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false
                    state.error = action.payload || 'Login failed'
                }
            )
            .addCase(registerUser.pending, (state: AuthState) => {
                state.loading = true
                state.error = null
            })
            .addCase(
                registerUser.fulfilled,
                (state: AuthState, action: PayloadAction<any>) => {
                    state.loading = false
                    state.user = action.payload.user
                    state.error = null
                }
            )
            .addCase(
                registerUser.rejected,
                (state: AuthState, action: PayloadAction<any>) => {
                    state.loading = false
                    state.error = action.payload || 'Register failed'
                }
            )
            .addCase(getCurrentUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(
                getCurrentUser.fulfilled,
                (state, action: PayloadAction<any>) => {
                    state.loading = false
                    state.user = action.payload.user || action.payload
                    state.error = null
                }
            )
            .addCase(
                getCurrentUser.rejected,
                (state, action: PayloadAction<any>) => {
                    state.loading = false
                    state.error = action.payload || 'Failed to fetch user data'
                }
            )
    },
})

export const { logout } = authSlice.actions
export default authSlice.reducer
