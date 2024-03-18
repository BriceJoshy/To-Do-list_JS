let to_do_list = [];

function add_task_1() {
  const task_1 = document.querySelector(".input_1");
  const task = task_1.value;
  to_do_list.push(task);
  console.log(to_do_list);

  //   resetting the textbox
  task_1.value = "";
}
