'use client'
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import photosScroll from "@/store/reducer/photosScroll";
import photosSlide from "@/store/reducer/photosSlide";

const root = {
    photosScroll,
    photosSlide
}
const store = configureStore({reducer: root});
export default function Providers({children}) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );

}