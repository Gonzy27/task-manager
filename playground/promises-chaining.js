require('../src/db/mongoose');
const User = require('../src/models/user');

//5e2525fb09837b1e50fbc027

// User.findByIdAndUpdate('5e25278b72f818396415e229', {age: 1}).then( (user) => {
//     console.log(user);
//     return User.countDocuments({age: 1})
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const updateAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({ age });
    return count;
}

updateAndCount('5e25278b72f818396415e229', 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
})