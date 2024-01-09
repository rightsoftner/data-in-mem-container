'use strict';

import { assert } from 'chai';
import { should } from 'chai';
should();
import { newData } from './test-data.js';
import { container } from '../container.js';

const task_example = {
  id: 3,
  status: 'complete',
  title: 'Task title (edited)',
  text: 'Completed task',
};

// Init the container
for (let i = 0; i < 10; i++) {
  container('add', {
    task: { ...newData },
  });
}

console.log('Tests');
console.log('Tests GET method');
assert(Array.isArray(container('get')), "container isn't an array");
assert(container('get').length === 10, "container length isn't equal to 10");
assert(container('get', { id: 3 }).id === 3, "task with id 3 doesn't exist");

console.log('Tests EDIT method');
container('edit', {
  task: task_example,
});
const task = container('get', { id: 3 });

assert(
  task.id === 3 &&
    task.status === task_example.status &&
    task.title === task_example.title &&
    task.text === task_example.text,
  "task is don't edited",
);

console.log('Tests DELETE method');
container('delete', { id: 2 });
assert(
  typeof container('get', { id: 2 }) !== 'object',
  "DELETE method isn't working",
);

console.log('Tests CLEAR method');
container('clear');
assert(container('get').length === 0, "CLEAR method isn't working");
