let taskList = [];

const tasksOperation = function (action) {
  let counter = 1;
  return function(task = undefined, id = 0) {
    const actions =  {
      clear: () => {
        taskList = [];
        return taskList;
      },
      get: () => {
        return [...taskList];
      },
      add: () => {
        if (!task) return;
        task.id = counter;
        taskList.push(task);
        counter++;
        return task;
      },
      edit: () => {
        const pos = taskList.find((t) => t.id === task.id);
        if (pos) return taskList[pos] = task;
        return;
      },
      delete: () => {
        const res = taskList.filter((t) => t.id === id);
        taskList = taskList.filter((t) => t.id !== id);
        return res;
      }
    };
    return actions[action]();
  }
}

const clear = tasksOperation("clear");
const get = tasksOperation("get");
const add = tasksOperation("add");
const del = tasksOperation("delete");
const edit = tasksOperation("edit");

module.exports = {
  clear,
  get,
  add,
  del,
  edit,
};



