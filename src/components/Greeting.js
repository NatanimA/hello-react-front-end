import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../redux/store';

export default function Greeting() {
  const greeting = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetings());
  }, [dispatch]);

  return (
    <div className="greetings-container">
      <p>
        Language:
        {greeting.language}
      </p>
      <span>
        Greetings:
        <q>{greeting.message}</q>
      </span>
      <button type="button" onClick={() => dispatch(fetchGreetings())}>
        Get Other Greetings
      </button>
    </div>
  );
}
