import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { removeBet, updateBetAmount } from '../../store/slices/betSlipSlice';

const BetSlip: React.FC = () => {
  const dispatch = useDispatch();
  const bets = useSelector((state: RootState) => state.betSlip.bets);

  const handleAmountChange = (id: number, amount: number) => {
    dispatch(updateBetAmount({ id, amount }));
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Bet Slip</h2>
      {bets.length === 0 && <p className="text-gray-400">No bets added</p>}
      {bets.map(bet => (
        <div key={bet.id} className="mb-4 bg-gray-700 p-4 rounded">
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-sm font-bold">{bet.event_name}</p>
              <p className="text-sm">{bet.team1_name} vs {bet.team2_name}</p>
              <p className="text-sm">Bet Type: {bet.bet_type}</p>
            </div>
            <button
              className="text-red-500"
              onClick={() => dispatch(removeBet(bet.id))}
            >
              🗑
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              className="bg-gray-600 text-white p-2 rounded w-24"
              value={bet.amount}
              onChange={(e) => handleAmountChange(bet.id, parseFloat(e.target.value))}
              placeholder="Bet amount"
            />
            <button
              className="bg-gray-600 text-white p-2 rounded"
              onClick={() => handleAmountChange(bet.id, 610)}
            >
              610
            </button>
            <button
              className="bg-gray-600 text-white p-2 rounded"
              onClick={() => handleAmountChange(bet.id, 1200)}
            >
              1.2k
            </button>
            <button
              className="bg-gray-600 text-white p-2 rounded"
              onClick={() => handleAmountChange(bet.id, bet.amount)}
            >
              Max
            </button>
          </div>
          <p className="text-sm mt-2">Odds: {bet.odds}</p>
          <p className="text-sm">Possible win: ${(bet.amount * bet.odds).toFixed(2)}</p>
        </div>
      ))}
      <button className="bg-green-500 text-white w-full py-2 rounded mt-4">Place Bet</button>
    </div>
  );
};

export default BetSlip;
