
const User = require("../Model/schema")

async function seve_Data(req,res){

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = {

        name: name,
        email: email,
        password: password
    };

      await User.create(newUser)

        .then((user) => {

            res.status(200).json({

                Message: "User is Saved!",
                User_data: user
            });
        })

        .catch((error) => {
            console.log(error);

            res.json({

                Status: "Error Saving User! Try Again",
                Message: error
            });
        });



};

module.exports = seve_Data