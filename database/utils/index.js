const mongoose = require("mongoose");


module.exports.connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("Connected to mLab succefully")   
  } catch (error) {
    console.error(error)
  }

}