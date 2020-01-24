require('../src/db/mongoose');
const Task = require('../src/model/task');

//5e2529682de25c574861f352
// Task.findByIdAndDelete('5e2529682de25c574861f352').then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed: false});
// }).then((result) => {
//     console.log(result);    
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = Task.countDocuments({ completed: false });
    return count;
}

deleteTaskAndCount('5e2677a58c7e6255446f6229').then((count) =>{
    console.log((count));
}).catch((e) => {
    console.log(e);
})