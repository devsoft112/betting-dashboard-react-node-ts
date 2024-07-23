import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchEvents, Event } from '../../store/slices/eventsSlice';
import { RootState, useAppDispatch } from '../../store';
import EventItem from './EventItem';
import EventItemSkeleton from './EventItemSkeleton';

const EventList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { events, loading, error } = useSelector((state: RootState) => state.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Sports Events</h2>
      <div>
        {loading ? (
          <>
            {[...Array(4)].map((_, idx) => <EventItemSkeleton key={idx} />)}
          </>
        ) : error ? (
          <p>{error}</p>
        ) : (
          events.map((event: Event) => (
            <EventItem key={event.id} event={event} />
          ))
        )}
      </div>
    </div>
  );
};

export default EventList;
