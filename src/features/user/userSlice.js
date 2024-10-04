import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: [],
    isLoading: false,
    errorMessage: ""
  },
  reducers: {
    fetchUsersSuccess: (state, action) => {
      state.isLoading = false
      state.errorMessage = ""
      state.data = action.payload
    },
    fetchUsersLoading: (state, action) => {
      state.isLoading = action.payload
    },
    fetchUsersError: (state, action) => {
      state.errorMessage = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { fetchUsersSuccess, fetchUsersLoading, fetchUsersError } = userSlice.actions

export default userSlice.reducer

export function fetchUsers() {
  return async (dispatch, getState) => {
    dispatch(fetchUsersLoading(true))
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      if (!response.ok) {
        throw "Something wicked happened"
      }
      const data = await response.json()
      dispatch(fetchUsersSuccess(data))
    } catch (error) {
      dispatch(fetchUsersError(error))
    } finally {
      dispatch(fetchUsersLoading(false))
    }
  }
}


export const getTwoCountries = (countryId1, countryId2) => {
  return async (dispatch, getState) => {
    try {
      const country1 = await fetch(countryId1)

      const country2 = await fetch(countryId2)

      
      dispatch(fungsinyaaaa({ country1, country2 }))
    } catch (error) {
      
    }
  }
}