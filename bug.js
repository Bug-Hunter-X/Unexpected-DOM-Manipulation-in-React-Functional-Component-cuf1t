```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs only once on mount
    console.log('Component mounted');
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  const handleClick = () => {
    setCount(count + 1);
    // Incorrectly trying to access a DOM element directly
    const element = document.getElementById('my-element');
    if (element) {
      element.style.color = 'red';
    }
  };

  return (
    <div>
      <p id="my-element">Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
```