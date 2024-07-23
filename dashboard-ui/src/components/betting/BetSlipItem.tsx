import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBet } from '../../store/slices/betSlipSlice';
import { BetSlip } from '../../store/slices/betSlipSlice';
import { useAuth } from '../../context/AuthContext';

interface BetSlipItemProps {
  bet: BetSlip;
  invalidBetIds: number[];
  handleSingleBetAmountChange: (id: number, amount: number) => void;
  betType: 'single' | 'combo';
}

const BetSlipItem: React.FC<BetSlipItemProps> = ({ bet, invalidBetIds, handleSingleBetAmountChange, betType }) => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div key={bet.id} className="mb-4 bg-gray-700 p-4 rounded">
      <div className="flex justify-between items-center mb-2">
        <div>
          <p className="text-sm font-bold">{bet.team1_name} vs {bet.team2_name}</p>
          <p className="text-sm">Winner: {bet.bet_type === 'win' ? bet.team1_name : bet.bet_type === 'draw' ? 'Draw' : bet.team2_name}</p>
        </div>
        <button
          className="text-red-500"
          onClick={() => dispatch(removeBet(bet.id))}
        >
          🗑
        </button>
      </div>
      <p className="text-sm mt-2">Odds: {bet.odds}</p>
      <p className="text-sm">Possible win: ${bet.amount ? (bet.amount * bet.odds).toFixed(2) : '0.00'}</p>
      {betType === 'single' && (
        <div className="flex items-center space-x-2 mt-2">
          <input
            type="number"
            className={`bg-gray-600 text-white p-2 rounded w-full ${invalidBetIds.includes(bet.id) ? 'border border-red-500' : ''}`}
            value={bet.amount || ''}
            onChange={(e) => handleSingleBetAmountChange(bet.id, parseFloat(e.target.value) || 0)}
            placeholder="Bet amount"
          />
          <button
            className="bg-gray-600 text-white p-2 rounded"
            onClick={() => handleSingleBetAmountChange(bet.id, user?.balance ?? 0)}
          >
            Max
          </button>
        </div>
      )}
    </div>
  );
};

export default BetSlipItem;
