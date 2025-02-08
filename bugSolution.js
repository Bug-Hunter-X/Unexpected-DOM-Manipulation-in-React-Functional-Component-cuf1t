```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    if (elementRef.current) {
      elementRef.current.style.color = count % 2 === 0 ? 'blue' : 'red';
    }
  }, [count]);

  return (
    <div>
      <p ref={elementRef} id="my-element">Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
```