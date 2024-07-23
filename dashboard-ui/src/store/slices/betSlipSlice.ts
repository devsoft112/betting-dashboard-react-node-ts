import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BetSlip {
  id: number;
  event_name: string;
  team1_name: string;
  team2_name: string;
  bet_type: string;
  odds: number;
  amount: number;
}

interface BetSlipState {
  bets: BetSlip[];
  selectedBetId: number | null;
  balance: number;
}

const initialState: BetSlipState = {
  bets: [],
  selectedBetId: null,
  balance: 0, // Initial balance
};

const betSlipSlice = createSlice({
  name: 'betSlip',
  initialState,
  reducers: {
    addBet: (state, action: PayloadAction<BetSlip>) => {
      const existingBetIndex = state.bets.findIndex(bet => bet.id === action.payload.id);
      if (existingBetIndex !== -1) {
        state.bets[existingBetIndex] = action.payload; // Update existing bet
      } else {
        state.bets.push(action.payload); // Add new bet
      }
      state.selectedBetId = action.payload.id; // Track selected bet
    },
    updateBetAmount: (state, action: PayloadAction<{ id: number; amount: number }>) => {
      const bet = state.bets.find(bet => bet.id === action.payload.id);
      if (bet) {
        bet.amount = action.payload.amount;
      }
    },
    removeBet: (state, action: PayloadAction<number>) => {
      state.bets = state.bets.filter(bet => bet.id !== action.payload);
      if (state.selectedBetId === action.payload) {
        state.selectedBetId = null; // Clear selected bet if it matches the removed bet
      }
    },
    updateBalance: (state, action: PayloadAction<number>) => {
      state.balance = action.payload;
    },
  },
});

export const { addBet, updateBetAmount, removeBet, updateBalance } = betSlipSlice.actions;
export default betSlipSlice.reducer;
