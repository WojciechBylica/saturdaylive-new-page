import { createSlice } from '@reduxjs/toolkit';

type SaturdayLiveSlice = {
  showNavAside: boolean;
};

const initialState: SaturdayLiveSlice = {
  showNavAside: false
};

const saturdayLiveSlice = createSlice({
  name: 'saturdayLive',
  initialState,
  reducers: {
    setMobileNavClose: (_) => ({
      showNavAside: false
    }),
    setMobileNavOpen: (_) => ({
      showNavAside: true
    })
  }
});

export const { setMobileNavClose, setMobileNavOpen } =
  saturdayLiveSlice.actions;

export default saturdayLiveSlice.reducer;
