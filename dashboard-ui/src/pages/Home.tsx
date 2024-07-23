import React from 'react';
import EventList from '../components/events/EventList';
import BetSlip from '../components/betting/BetSlip';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col xl:flex-row">
      <div className="w-full xl:w-2/3">
        <EventList />
      </div>
      <div className="w-full xl:w-1/3">
        <BetSlip />
      </div>
    </div>
  );
};

export default Home;
