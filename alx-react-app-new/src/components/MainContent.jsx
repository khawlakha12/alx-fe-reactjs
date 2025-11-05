import React from 'react';

function MainContent() {
  return (
    <main
      style={{
        backgroundColor: '#eef2f3',
        padding: '20px',
        textAlign: 'center',
        minHeight: '200px',
      }}
    >
      <h2 style={{ color: '#333' }}>Welcome to My Favorite Cities App</h2>
      <p style={{ color: '#555', maxWidth: '600px', margin: '10px auto' }}>
        Explore profiles of users and their favorite destinations around the world!
      </p>
    </main>
  );
}

export default MainContent;
