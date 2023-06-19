const mongoose = require('mongoose');
const connectDB= () =>{
    mongoose.connect('mongodb+srv://gowthami:gowthami-atlas@blog-cluster.zy7uvvt.mongodb.net/blog?retryWrites=true&w=majority',{
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

.then(db =>console.log('DB is connected'))
.catch(err => console.log(err));
};
module.exports = connectDB;