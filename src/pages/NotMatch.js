import React from 'react';

const NotMatch = () => {
  const style = {
    color: 'red',
    fontSize: '25px',
    textAlign: 'center',
    marginTop: '5rem',
  };
  return (
    <div>
      <div>
        <h1 style={style}>There is nothing on this page</h1>
      </div>
    </div>
  );
};

export default NotMatch;
