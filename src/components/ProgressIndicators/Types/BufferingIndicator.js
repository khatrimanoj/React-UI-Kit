import React from 'react';
import LinearIndicator from './LinearIndicator';

export default function LinearBuffer() {
    const [completed, setCompleted] = React.useState(0);
    const [buffer, setBuffer] = React.useState(10);
  
    const progress = React.useRef(() => {});
    React.useEffect(() => {
      progress.current = () => {
        if (completed > 100) {
          setCompleted(0);
          setBuffer(10);
        } else {
          const diff = Math.random() * 10;
          const diff2 = Math.random() * 10;
          setCompleted(completed + diff);
          setBuffer(completed + diff + diff2);
        }
      };
    });
  
    React.useEffect(() => {
      function tick() {
        progress.current();
      }
      const timer = setInterval(tick, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return (
      <div className="buff-indicator">
        <LinearIndicator variant="buffer" value={completed} valueBuffer={buffer} />
      </div>
    );
  }
