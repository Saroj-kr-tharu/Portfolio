import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: localStorage.getItem('theme') || 'dark',
    dark: localStorage.getItem('themeStatus') === 'false' ? false : true
};

const themeSlice = createSlice({
    name: 'ThemeSlicer',
    initialState,
    reducers: {
        setTheme(state, action) {
            state.theme = action.payload;
            localStorage.setItem('theme', action.payload);
            
            if(action.payload !== 'dark') {
                state.dark = false;
                localStorage.setItem('themeStatus', false);
            } else {
                state.dark = true;
                localStorage.setItem('themeStatus', true);
            }
        }
    },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;