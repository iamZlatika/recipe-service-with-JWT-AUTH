const mongoose = require('mongoose');
const {isEmail} =require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Please enter an password'],
    minlength: [6, 'Minimum password length is 6 characters']
  }
});

//fire a func after doc saved to db
userSchema.post('save', function(doc, next){
  console.log('after', doc);
  next()
})

//fire a func before doc saved to db
userSchema.pre('save', function(next){
  console.log('before', this)
  next();
  
})

const User = mongoose.model('user', userSchema);


module.exports = User;