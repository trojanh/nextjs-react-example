import React from 'react';

const _error = props => {
  return (
    <div style={{
      width: "100%",
      color: "RED",
      textAlign: 'center',
    }}>
    <h1 style={{
      margin: '0',
      width: '100%',
      paddingTop: '80px',
      lineHeight: '1.15',
      fontSize: '48px',
    }}>404! </h1>
      <p className="description">
      Sorry, but the page you were trying to view does not exist.
      </p>
    </div>
  );
};


export default _error;
