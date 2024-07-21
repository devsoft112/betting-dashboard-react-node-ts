import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

interface Event {
  id: number;
  event_name: string;
  team1_name: string;
  team2_name: string;
  event_date: string;
  event_time: string;
  odds_win: number;
  odds_draw: number;
  odds_lose: number;
}

interface EventsState {
  events: Event[];
  loading: boolean;
  error: string | null;
}

const initialState: EventsState = {
  events: [],
  loading: false,
  error: null,
};

export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
  const response = await api.get('/events'); 
  return response.data;
});

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch events';
      });
  },
});

export default eventsSlice.reducer;
export type { Event };
