function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";
import { updateTask, getTasksList } from "./tasksGateway.js";
export const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains("list-item__checkbox");

  if (!isCheckbox) {
    return;
  }

  const taskId = e.target.dataset.id;
  const tasksList = getItem("tasksList");
  const {
    text,
    createDate
  } = tasksList.find(task => task.id === taskId);
  const done = e.target.checked;
  const updatedTask = {
    text,
    createDate,
    done,
    doneDate: done ? new Date().toISOString() : null
  };
  updateTask(taskId, updatedTask).then(() => getTasksList()).then(newTasksList => {
    setItem("tasksList", newTasksList);
    renderTasks();
  });
  const newTasksList = tasksList.map(task => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return _objectSpread(_objectSpread({}, task), {}, {
        done,
        doneDate: done ? new Date().toISOString() : null
      });
    }

    return task;
  });
  setItem("tasksList", newTasksList);
  renderTasks();
}; // 1. Prepare data
// 2. Update data ib db
// 3. Read new data from server
// 4. Save new data to front-end storrage
// 5. Update UI based on new data