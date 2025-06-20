import { createSlice } from '@reduxjs/toolkit';



const userHasSavedPreference = localStorage.getItem('themeStatus') !== null;
const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const initialState = {
    theme: localStorage.getItem('theme') || 'dark',
    dark: userHasSavedPreference 
        ? localStorage.getItem('themeStatus') === 'false' ? false : true
        : systemPrefersDark
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