import React from 'react';
import Add from './Add';

const Formhead = ({ onAdd, showAdd }) => {
  return (
    <div className='header'>
      <h3>Add Details</h3>
      <Add
        color={showAdd ? 'red' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
        onClick={onAdd}
      />
    </div>
  );
};

export default Formhead;
