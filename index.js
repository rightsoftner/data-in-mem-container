const { clear,  get,  add,  del,  edit } = require("./container.js");

console.log(add(({
  "status": "incomplete",
  "title": "vxcvxcv",
  "text": "sdfsfsdfsdfcvxcx xcv xcv xc xc sdf"
})));

console.log(add(({
  "status": "incomplete",
  "title": "vxcvxcv",
  "text": "sdfsfsdfsdfcvxcx xcv xcv xc xc sdf"
})));

console.log(add(({
  "status": "incomplete",
  "title": "vxcvxcv",
  "text": "sdfsfsdfsdfcvxcx xcv xcv xc xc sdf"
})));


//console.log(del(undefined,2));
/*
console.log(edit(({
  "id": 3,
  "status": "complete",
  "title": "vxcvxcv",
  "text": "sdfsfsdfsdfcvxcx xcv xcv xc xc sdf"
})));
*/
console.log(get());