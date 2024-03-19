// let to_do_list_1 = [];

// let to_do_list_2 = [];

// function add_task_1() {
//   const task_1 = document.querySelector(".input_1");
//   const task = task_1.value;
//   to_do_list_1.push(task);
//   console.log(to_do_list_1);

//   //   resetting the textbox
//   task_1.value = "";
// }

// function add_task_2() {
//   const task_2 = document.querySelector(".input_2");
//   const task = task_2.value;
//   to_do_list_2.push(task);

//   let to_do_list = "";

//   for (let i = 0; i < to_do_list_2.length; i++) {
//     const tasks = to_do_list_2[i];
//     const html_element = `<p>${tasks}</p>`;
//     to_do_list += html_element;
//   }
//   console.log(to_do_list);
//   document.querySelector(".todoliststuff").innerHTML = to_do_list;
//   task_2.value = "";
// }

const to_do_list_final = [];
const dates_list = [];
renderList();

function renderList() {
  let to_do_list = "";
  for (let i = 0; i < to_do_list_final.length; i++) {
    const tasks = to_do_list_final[i];
    // const dates = dates_list[i];
    const html_element = `
        <div class="div-class">
            <p class="task-details">
                ${tasks.task}
            </p>
            <p class="date-details">
                ${tasks.date}
            </p>
            <button class="delete-button" 
                    onclick="
                        to_do_list_final.splice(${i}, 1); 
                        renderList();
                    ">Delete
                </button>
        </div>`;

    to_do_list += html_element;
  }
  console.log(to_do_list);
  document.querySelector(".todoliststuff").innerHTML = to_do_list;
}

function add_task_final() {
  const tasks = document.querySelector(".task_name");
  const dates = document.querySelector(".task-date");
  const date = dates.value;
  const task = tasks.value;
  console.log(task);
  to_do_list_final.push({
    task,
    date,
  });
  //   dates_list.push(date);
  console.log(to_do_list_final);

  tasks.value = "";
  renderList();
}
