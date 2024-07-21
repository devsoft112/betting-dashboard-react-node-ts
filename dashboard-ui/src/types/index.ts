export interface Event {
    id: number;
    event_name: string;
    odds_win: number;
    odds_draw: number;
    odds_lose: number;
  }
  
  export interface Bet {
    id: number;
    user_id: number;
    event_id: number;
    amount: number;
    bet_type: string;
    odds: number;
    potential_payout: number;
    status: string;
  }
  
  export interface User {
    username: string;
    email: number;
  }
  