var userModel = require('./userModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
        userModel.find({}, function returnData(error, result) {

            if(error) {
                reject(error);
            }else {
                
                resolve(result);
            }
        });
    });
}

const userService = require('./userService'); // Adjust the path accordingly

userService.getDataFromDBService()
    .then(data => {
        console.log("Data retrieved:", data);
        // Handle data
    })
    .catch(error => {
        console.error("Error retrieving data:", error);
        // Handle error
    });


module.exports.createUserDBService = (userDetails) => {

    return new Promise(function myFn(resolve, reject) {

        var userModelData = new userModel();

        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;

        userModelData.save(function(error, result) {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }

        });

    });
}


const userDetails = {
    name: "John",
    address: "123 Main St",
    phone: "123-456-7890"
};

userService.createUserDBService(userDetails)
    .then(() => {
        console.log("User created successfully");
        // Handle success
    })
    .catch(error => {
        console.error("Error creating user:", error);
        // Handle error
    });

    module.exports.updateUserDBService = (id,userDetails) => {     
        console.log(userDetails);
        return new Promise(function myFn(resolve, reject) {
            userModel.findByIdAndUpdate(id,userDetails, function returnData(error, result) {
              if(error)
              {
                    reject(false);
              }
              else
              {
                 resolve(result);
              }
            });
     
        });
     }

     module.exports.removeUserDBService = (id) => { 
        return new Promise(function myFn(resolve, reject) {
            userModel.findByIdAndDelete(id, function returnData(error, result) {
     
              if(error)
              {
                    reject(false);
              }
              else
              {
                 resolve(result);
              }          
            });
        });
     
     } 