import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([{ count: 0 }]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const handleSubtract = () => {
    if (count <= 0) {
      alert('Minimum number is reached');
    } else {
      const newCount = count - 1;
      const newHistory = [...history.slice(0, historyIndex + 1), { count: newCount }];
      setCount(newCount);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    }
  };

  const handleIncrease = () => {
    if (count >= 150) {
      alert('Maximum number is reached');
    } else {
      const newCount = count + 1;
      const newHistory = [...history.slice(0, historyIndex + 1), { count: newCount }];
      setCount(newCount);
      setHistory(newHistory);
      setHistoryIndex(newHistory.length - 1);
    }
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setCount(history[historyIndex - 1].count);
      setHistoryIndex(historyIndex - 1);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setCount(history[historyIndex + 1].count);
      setHistoryIndex(historyIndex + 1);
    }
  };

  return (
    <div className='flex min-h-screen flex-col justify-center items-center'>
      <div>
        <div className='flex flex-col justify-center items-center'>
          <label>{count}</label>
        </div>
        <div className='flex'>
          <h2 className='mr-2'>0</h2>
          <progress className="progress progress-bar w-56 mt-2" value={count} max="150"></progress>
          <h2 className='ml-2'>150</h2>
        </div>
      </div>
      <div className="flex mt-4">
        <button onClick={handleSubtract} className='btn btn-ghost'>Subtract</button>
        <button onClick={handleIncrease} className='btn btn-ghost'>Increase</button>
        <button onClick={handleUndo} className='btn btn-ghost ml-2' disabled={historyIndex === 0}>Undo</button>
        <button onClick={handleRedo} className='btn btn-ghost ml-2' disabled={historyIndex === history.length - 1}>Redo</button>
      </div>
    </div>
  );
}

export default App;
