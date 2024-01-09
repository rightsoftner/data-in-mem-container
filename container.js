
const tasksOperation = function () {
  let counter = 1;
  let taskList = [];
  return function(action, data = { task:  undefined, id: 0 }) {
    const actions =  {
      clear: () => {
        taskList = [];
        return taskList;
      },
      get: () => {
        if(data.id > 0) {
          return taskList.find(task => task.id === data.id);
        }
        return [...taskList];
      },
      add: () => {
        if (!data.task) return;
        data.task.id = counter;
        taskList.push(data.task);
        counter++;
        return data.task;
      },
      edit: () => {
        let pos = taskList.findIndex((t) => t.id === data.task.id);
        if (pos) {
          console.dir(pos);
          taskList[pos] = data.task;
          return taskList[pos];
        }
        return;
      },
      delete: () => {
        const res = taskList.filter((t) => t.id === data.id);
        taskList = taskList.filter((t) => t.id !== data.id);
        return res;
      }
    };
    return actions[action]();
  }
}

const container = tasksOperation();

module.exports = { container };
