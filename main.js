const bodyParser = require('body-parser');
const express = require('express')


//config app
const app = express()

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


//app Logic
app.post('/validation', function (req   , res) {

    //Phone
    if ("phone" in req.body) {
        checkPhone(req.body.phone);
    } else {
        console.log("Phone not provided")
    }

    //Full Name
    if ("fullname" in req.body) {
        checkFullName(req.body.fullname);
    } else {
        console.log("Full Name not provided")
    }

    //Username
    if ("username" in req.body) {
        checkUsername(req.body.username);
    } else {
        console.log("Username not provided")
    }

    //Email
    if ("email" in req.body) {
        checkEmail(req.body.email);
    } else {
        console.log("Email not provided")
    }

    //Zip
    if ("zip" in req.body) {
        checkZip(req.body.zip);
    } else {
        console.log("Zip not provided")
    }

    res.send("");
})


//validations

// Check phone is valid
function checkPhone(input) {
    if (input.length == 0) {
        console.log("Phone not provided")
        return false;
    }
    const re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if (re.test(input.trim())) {
        console.log(input,
            ` - Is valid!`);
        return true;
    }
    console.error(input, "  -  Phone is not valid");
    return false;
}



// Check Full Name
function checkFullName(input) {
    if (input.length == 0) {
        console.log("Full Name not provided")
        return false;
    }
    else if (input.length < 6) {
        console.log(input,
            ` - Full Name must be at least 6 characters`
        );
        return false
    } else if (input.length > 25) {
        console.error(input,
            ` - Full Name must be less than 25 characters`
        );
        return false
    } else {
        console.log(input,
            ` - Is valid!`);
        return true
    }
}

// Check Username
function checkUsername(input) {
    if (input.length == 0) {
        console.log("Username not provided")
        return false;
    }
    else if (input.length < 3) {
        console.log(input,
            ` - Username must be at least 3 characters`
        );
        return false
    } else if (input.length > 25) {
        console.error(input,
            ` - Username must be less than 25 characters`
        );
        return false
    } else {
        console.log(input,
            ` - Is valid!`);
        return true
    }
}

// Check email is valid
function checkEmail(input) {
    if (input.length == 0) {
        console.log("Email not provided")
        return false;
    }
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.trim())) {
        console.log(input,
            ` - Is valid!`);
        return true
    } else {
        console.error(input, ' - Email is not valid');
        return false
    }
}

// Check zip is valid
function checkZip(input) {
    if (input.length == 0) {
        console.log("Zip not provided")
        return false;
    }
    const re = /^[1-9]\d{3}$/;
    if (re.test(input.trim())) {
        console.log(input,
            ` - Is valid!`);
            return true
    } else {
        console.error(input, " - Zip is not valid");
        return false
    }
}





//app Start
app.listen(3000)