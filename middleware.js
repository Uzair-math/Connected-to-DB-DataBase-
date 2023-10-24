
async function middleware(req,res,next) {
    
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (name.length > 4){
        if(email < 12){
            res.status(401).json({
                message : "email not correct"
            })
        }
        else if(password < 8){
            res.status(401).json({
                message : "password not correct"
            })
        }
        else{
            req.name = name;
            req.email = email;
            req.password = password;
            next()
        }
    }
    else{
        res.status(401).json({
            message : "enter all data wrong"
        })
    }
}

module.exports = middleware;