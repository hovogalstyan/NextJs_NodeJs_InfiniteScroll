import {createSlice} from "@reduxjs/toolkit";
import {getPhotosId, getPhotosScroll} from "@/store/action";
import {act} from "react-dom/test-utils";

const initialState = {
    data: [],
    isLoading: false,
    errorMassage: null
}

const photosScroll = createSlice({
    name: 'photos-scroll',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getPhotosScroll.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getPhotosScroll.fulfilled, (state, action) => {
                state.isLoading = false
                state.data = action.payload

            })
            .addCase(getPhotosScroll.rejected, (state, action) => {
                state.errorMasage = action.payload
            })
    }
})
export default photosScroll.reducer