import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchEvents, Event } from '../../store/slices/eventsSlice';
import { RootState, useAppDispatch } from '../../store';
import EventItem from './EventItem';

const EventList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { events, loading, error } = useSelector((state: RootState) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Sports Events</h2>
      <div>
        {events.map((event: Event) => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
