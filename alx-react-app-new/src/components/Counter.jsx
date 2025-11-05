import React, { useState } from 'react';

function Counter() {
 
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '50px',
        padding: '20px',
        border: '2px solid #ccc',
        borderRadius: '10px',
        width: '300px',
        margin: '50px auto',
        backgroundColor: '#f8f9fa',
      }}
    >
      <h2 style={{ color: '#333' }}>Simple Counter</h2>
      <p style={{ fontSize: '24px', fontWeight: 'bold', margin: '20px 0' }}>
        Current Count: {count}
      </p>

      <div>
        <button
          style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>

        <button
          style={{ margin: '5px', padding: '10px 20px', backgroundColor: '#008CBA', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
