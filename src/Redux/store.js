import { configureStore } from "@reduxjs/toolkit";
import themeSliceReducer from 'Redux/Slice/themeSlice';


export default  configureStore({
    reducer: {
        theme: themeSliceReducer,
        
    },
    devTools:true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
});