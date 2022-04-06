import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [vehicleNo, setVehicleNo] = useState('');
  const [mobile, setMobile] = useState(0);
  const [day, setDay] = useState('');
  const [duration, setDuration] = useState(0);
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert('Name Required ! Please Add Name');
      return;
    }
    if (!vehicleNo) {
      alert('VehicleNo Required ! Please Add VehicleNo');
      return;
    }
    if (!mobile) {
      alert('Mobile No Required ! Please Add Mobile No');
      return;
    }
    if (!duration) {
      alert('Name Duration ! Please Add Duration');
      return;
    }

    onAdd({ text, vehicleNo, mobile, day, duration, reminder });

    setText('');
    setVehicleNo('');
    setMobile(0);
    setDay('');
    setDuration(0);
    setReminder(false);
  };

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Name of User</label>
        <input
          type='text'
          placeholder='Enter Name'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Vehicle No</label>
        <input
          type='text'
          placeholder='Enter Vehcle No'
          value={vehicleNo}
          onChange={(e) => setVehicleNo(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Mobile No</label>
        <input
          type='number'
          placeholder='Enter Mobile'
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Day & Time</label>
        <input
          type='text'
          placeholder='Enter Day & Time'
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Duration</label>
        <input
          type='number'
          placeholder='Enter Duration in Hours'
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <div className=' form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type='submit' value='Submit Details' className='btn2 btn2-block' />
    </form>
  );
};

export default AddTask;
