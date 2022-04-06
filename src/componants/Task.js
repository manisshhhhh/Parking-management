import { FaTimes } from "react-icons/fa";
import React from "react";

const Task = ({ task, onDelete , onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder': '' }`} onDoubleClick={()=>onToggle(task.id)}>
      <h5>
        Name of User: {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() =>onDelete(task.id)}
        />
      </h5>
      <p>
        Vehicle Rejister No: {task.vehicleNo} , Mobile No: {task.mobile}
      </p>
      <p>Day & Time :{task.day} , Duration: {task.duration}</p>
    </div>
  );
};

export default Task;
