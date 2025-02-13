import React from 'react';

const Tooltip = ({ message }) => {
  return (
    <div style={{
      position: 'absolute',
      backgroundColor: '#333',
      color: 'white',
      padding: '5px 10px',
      borderRadius: '5px',
      fontSize: '12px',
      zIndex: 1000,
      whiteSpace: 'nowrap',
      pointerEvents: 'none'
    }}>
      {message}
    </div>
  );
}

export default Tooltip;
