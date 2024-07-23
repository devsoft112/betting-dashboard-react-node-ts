import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { updateBetAmount, updateBalance } from '../../store/slices/betSlipSlice';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import BetSlipItem from './BetSlipItem';

const BetSlip: React.FC = () => {
  const dispatch = useDispatch();
  const { user, updateBalance: updateAuthBalance } = useAuth();
  const bets = useSelector((state: RootState) => state.betSlip.bets);

  const [comboBetAmount, setComboBetAmount] = useState<number>(0);
  const [invalidBetIds, setInvalidBetIds] = useState<number[]>([]);
  const [betType, setBetType] = useState<'single' | 'combo'>('single');

  const handleComboAmountChange = (amount: number) => {
    setComboBetAmount(amount);
    if (invalidBetIds.length > 0 && amount > 0) {
      setInvalidBetIds([]);
    }
  };

  const handleSingleBetAmountChange = (id: number, amount: number) => {
    dispatch(updateBetAmount({ id, amount }));
    if (invalidBetIds.includes(id) && amount > 0) {
      setInvalidBetIds(invalidBetIds.filter(betId => betId !== id));
    }
  };

  const handlePlaceBet = () => {
    if (betType === 'single') {
      const invalidBets = bets.filter(bet => bet.amount === 0);
      if (invalidBets.length > 0) {
        setInvalidBetIds(invalidBets.map(bet => bet.id));
        toast.error('Please enter a valid amount for all bets.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
    } else {
      if (comboBetAmount === 0) {
        setInvalidBetIds(bets.map(bet => bet.id));
        toast.error('Please enter a valid amount for the bet.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return;
      }
    }

    const totalBetAmount = betType === 'combo' ? comboBetAmount : bets.reduce((sum, bet) => sum + bet.amount, 0);

    if (totalBetAmount > (user?.balance ?? 0)) {
      toast.error('Insufficient balance to place the bet.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    // Deduct the bet amount from the balance
    const newBalance = (user?.balance ?? 0) - totalBetAmount;
    updateAuthBalance(newBalance);
    dispatch(updateBalance(newBalance));

    // Logic to place the bet (e.g., sending to server) goes here
    toast.success('Bet placed successfully!', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const totalOdds = bets.reduce((acc, bet) => acc * bet.odds, 1);
  const possibleWin = betType === 'combo'
    ? (comboBetAmount * totalOdds).toFixed(2)
    : bets.reduce((sum, bet) => sum + (bet.amount * bet.odds), 0).toFixed(2);

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <p className="text-white mb-4">Balance: ${user?.balance?.toFixed(2) ?? '0.00'}</p>
      <h2 className="text-xl font-bold mb-4">Bet Slip ({bets.length})</h2>
      {bets.length === 0 ? (
        <div className="flex flex-col items-center text-center text-gray-400">
          <p className="mb-2">Choose the odds and Just Bet It</p>
        </div>
      ) : (
        <>
          <div className="flex mb-4">
            <button
              className={`flex-1 p-2 rounded ${betType === 'single' ? 'bg-[#35FF97] text-gray-700' : 'bg-gray-700'}`}
              onClick={() => setBetType('single')}
            >
              Single Bet
            </button>
            <button
              className={`flex-1 p-2 rounded ${betType === 'combo' ? 'bg-[#35FF97] text-gray-700' : 'bg-gray-700'}`}
              onClick={() => setBetType('combo')}
            >
              Combo
            </button>
          </div>
          {bets.map(bet => (
            <BetSlipItem
              key={bet.id}
              bet={bet}
              invalidBetIds={invalidBetIds}
              handleSingleBetAmountChange={handleSingleBetAmountChange}
              betType={betType}
            />
          ))}
          {betType === 'combo' && (
            <div className="mb-4">
              <input
                type="number"
                className={`bg-gray-600 text-white p-2 rounded w-full ${invalidBetIds.length > 0 ? 'border border-red-500' : ''}`}
                value={comboBetAmount || ''}
                onChange={(e) => handleComboAmountChange(parseFloat(e.target.value) || 0)}
                placeholder="Enter bet amount"
              />
              <button
                className="bg-gray-600 text-white p-2 rounded w-full mt-2"
                onClick={() => handleComboAmountChange(user?.balance ?? 0)}
              >
                Max
              </button>
            </div>
          )}
          <p className="text-sm mb-2">Possible win: ${possibleWin}</p>
          <button
            className="bg-[#35FF97] text-gray-700 w-full py-2 rounded mt-4"
            onClick={handlePlaceBet}
          >
            Place Bet (${betType === 'combo' ? comboBetAmount.toFixed(2) : bets.reduce((sum, bet) => sum + bet.amount, 0).toFixed(2)})
          </button>
        </>
      )}
    </div>
  );
};

export default BetSlip;
