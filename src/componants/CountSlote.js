import React, { useState } from 'react';

const CountSlote = () => {
  const [booked, setBooked] = useState(0);
  const [slote, setSlote] = useState(100);

  return (
    <>
      <section className='slotes'>
        <div className='slote'>
          <h3>Booked Slotes: {booked}</h3>
        </div>
        <div className='slote'>
          <h3>Avialable slotes:{slote}</h3>
        </div>
      </section>
      <div className='btn1'>
        <button onClick={() => setBooked((prevBooked) => prevBooked + 1)}>
          Add
        </button>
      </div>
    </>
  );
};

export default CountSlote;
