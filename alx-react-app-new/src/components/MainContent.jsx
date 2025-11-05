import React from 'react';

function MainContent() {
  return (
    <main
      style={{
        backgroundColor: '#eef2f3',
        padding: '20px',
        textAlign: 'center',
        minHeight: '200px',
        margin: '20px',
        borderRadius: '10px',
      }}
    >
      <h2 style={{ color: '#333', marginBottom: '10px' }}>Welcome to My Favorite Cities App</h2>
      <p style={{ color: '#555', maxWidth: '600px', margin: '0 auto' }}>
        Explore profiles of users and their favorite destinations around the world!
      </p>
    </main>
  );
}

export default MainContent;
