import {createSlice} from "@reduxjs/toolkit";
import {getPhotosId} from "@/store/action";


const initialState = {
    data: null,
    isLoading: false,
    errorMassage: null
}


const photosSlide = createSlice({
    name: 'photos-slid',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getPhotosId.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPhotosId.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(getPhotosId.rejected, (state, action) => {
                state.errorMassage = action.payload
            })
    }
})

export default photosSlide.reducer