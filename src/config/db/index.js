const mongoose=require('mongoose');

async function connect () {
    
    try{
        await mongoose.connect('mongodb://localhost:27017/NewsWebsite');
        console.log("connect successfully!!");
    }
    catch(ex){
        console.log("connect failue!!");
    }
}

module.exports={connect};
