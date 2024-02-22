import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(false);
  useEffect(() => {
    let intervalId;
    if (run) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [time, run]);

  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 60000) / 100);
  const milliseconds = time % 100;

  function startTimer() {
    setRun(!run);
  }
  function resetTimer() {
    setTime(0);
  }
  return (
    <>
      <h3>
        {hours.toString().padStart(2, '0')} :{' '}
        {minutes.toString().padStart(2, '0')} :{' '}
        {seconds.toString().padStart(2, '0')} :{' '}
        {milliseconds.toString().padStart(2, '0')}
      </h3>
      <button onClick={startTimer}>{run ? 'Stop' : 'Start'}</button>
      <button onClick={resetTimer}>Reset</button>
    </>
  );
}

export default App;
