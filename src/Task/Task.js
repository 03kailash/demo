import React from 'react';

const Task = ({ task }) => {
  return (
    <div className="task">
      {task.title}
    </div>
  );
};

export default Task;
