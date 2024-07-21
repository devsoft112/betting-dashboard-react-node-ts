import React from 'react';
import EventList from '../components/betting/EventList';
import BetSlip from '../components/betting/BetSlip';

const Home: React.FC = () => {
  return (
    <div className="flex">
      <div className="w-3/4">
        <EventList />
      </div>
      <div className="w-1/4">
        <BetSlip />
      </div>
    </div>
  );
};

export default Home;
