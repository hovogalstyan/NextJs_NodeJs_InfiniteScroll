import {createAsyncThunk} from "@reduxjs/toolkit";
import {Api} from "@/store/Api";

export const getPhotosScroll = createAsyncThunk('get/photos-scroll', async (arg, thunkAPI) => {
    const {page, limit} = arg
    try {
        const {data} = await Api.getPhotosScroll(page, limit)
        return data
    } catch (e) {
        thunkAPI.rejectWithValue(e.response)
    }
})

export const getPhotosId = createAsyncThunk('get/photos-id', async (id, thunkAPI) => {
    try {
        const {data} = await Api.getIdPhotos(id)
        return data
    } catch (e) {
        thunkAPI.rejectWithValue(e.response)
    }
})