import { useState, useEffect } from 'react';
import axios from 'axios';

const useEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('/api/events')
      .then(response => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to fetch events');
        setLoading(false);
      });
  }, []);

  return { events, loading, error };
};

export default useEvents;
