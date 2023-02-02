import { createSlice } from '@reduxjs/toolkit';

type SaturdayLiveSlice = {
  showNavAside: boolean;
  repertoireAlphabetical: boolean;
};

const initialState: SaturdayLiveSlice = {
  showNavAside: false,
  repertoireAlphabetical: false
};

const saturdayLiveSlice = createSlice({
  name: 'saturdayLive',
  initialState,
  reducers: {
    setMobileNavClose: (state) => ({
      ...state,
      showNavAside: false
    }),
    setMobileNavOpen: (state) => ({
      ...state,
      showNavAside: true
    }),
    setToggleRepertoire: (state) => ({
      ...state,
      repertoireAlphabetical: !state.repertoireAlphabetical
    })
  }
});

export const { setMobileNavClose, setMobileNavOpen, setToggleRepertoire } =
  saturdayLiveSlice.actions;

export default saturdayLiveSlice.reducer;
