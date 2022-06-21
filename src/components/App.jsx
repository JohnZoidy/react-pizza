import React, { useState } from 'react';
import { uniqueId } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { taskSelectors, addTask } from '../slices/tasksSlice.js';

const App = () => {
  const now = Date.now();
  const date = new Date(now);
  const dispatch = useDispatch();
  const tasks = useSelector(taskSelectors.selectAll);
  const [taskName, setText] = useState('');
  const addTaskHandler = () => {
    dispatch(addTask({ id: uniqueId('tk_'), name: taskName }));
    setText('');
  };

  return (
    <div className="plate">
      <h1>Hello World!</h1>
      <p>You succesfully run React Boilerplate!</p>
      <p>
        It&apos;s result of Date.now:
        {date.toUTCString()}
      </p>
      <p>And it&#39;s tasks from redux state:</p>
      {tasks.map((task) => <div key={task.id}>{task.name}</div>)}
      <p>You can add a task below:</p>
      <input type="text" placeholder="Enter a task name" value={taskName} onChange={(e) => setText(e.target.value)} />
      <button type="button" onClick={addTaskHandler}>Add task</button>
    </div>
  );
};

export default App;
