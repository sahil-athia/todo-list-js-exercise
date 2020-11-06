// Arrays to keep track of each task's state

// Create a new task by adding to the arrays
// A new task will be created as incomplete
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markComplete: function() {
      this.complete = true;
    }
  };
  return task
}

// DRIVER CODE BELOW

const task1 = newTask("clean the cat", "the cat is dirty clean it")
const task2 = newTask('do the laundry', "0_0")
const tasks = [task1, task2]

task1.logState(); // Clean Cat Litter has not been completed
task1.markComplete();
task1.logState(); // Clean Cat Litter has been completed

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1


