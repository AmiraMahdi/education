// import express module
const express = require("express");
// import body parser
const bodyParser = require("body-parser");

// import bcrypt module
const bcrypt = require("bcrypt");

// import path and multer
const path = require('path');
const multer = require('multer');

// import mongoose module
const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/educationDB');



// creer une app BE named app
const app = express();

// pour pouvoir exporter l app (la rendre exportable)
// hethi 7atineha louta 
// module.exports = app;

// configurer body-parser pour structurer la reponse du BE sous format Json
app.use(bodyParser.json());
//  configurer body-parser pour parser le req reçu du FE (acceder au contenu)
app.use(bodyParser.urlencoded({ extended: true }));
//security config
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PATCH, PUT");
    next();
})

app.use('/images', express.static(path.join('backend/images')));

const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
};


const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        // let error = new Error("Mime type is invalid");
        // if (isValid) {
        //     error = null;
        // }
        cb(null, 'backend/images')
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});



// import models
const User = require('./models/user');
const Event = require('./models/event');
const Course = require('./models/course');


// base de donnèe statique
allCourses = [
    { id: 1, courseName: "english", price: "500", duration: "2 weeks", places: "20", description: "beginner" },
    { id: 2, courseName: "english", price: "800", duration: "3 weeks", places: "20", description: "advanced" },
    { id: 3, courseName: "espagnol", price: "400", duration: "2 weeks", places: "20", description: "beginner" },

]
allEvents = [
    { id: 1, title: "event1", description: "vip", starting: "30/11/2023", ending: "10/12/2023", time: "14:00", address: "hammamet", price: "400" },
    { id: 2, title: "event2", description: "english", starting: "10/12/2023", ending: "12/12/2023", time: "14:30", address: "tabarka", price: "90" },
    { id: 3, title: "event3", description: "espagnol", starting: "15/12/2023", ending: "29/12/2023", time: "19:00", address: "sousse", price: "800" }

]
allUsers = [
    { id: 1, firstName: "amira", lastName: "mahdi", tel: "46943997", email: "amira@gmail.com", address: "riadhlandalos", password: "123456" },
    { id: 2, firstName: "med", lastName: "werch", tel: "21002425", email: "med@gmail.com", address: "riadhlandalos", password: "123456" },
    { id: 3, firstName: "souhail", lastName: "landolsi", tel: "99852635", email: "souhail@gmail.com", address: "riadhlandalos", password: "123456" },
    { id: 4, firstName: "wadi3", lastName: "chelly", tel: "21440897", email: "wadi3@gmail.com", address: "riadhlandalos", password: "123456" }
]
allTeachers = [
    { id: 1, firstName: "amiraM", lastName: "mahdi", tel: "46943997", email: "amira@gmail.com", address: "riadhlandalos", password: "123456", speciality: "math" },
    { id: 3, firstName: "souhailL", lastName: "landolsi", tel: "99852635", email: "souhail@gmail.com", address: "riadhlandalos", password: "123456", speciality: "physique" },
    { id: 4, firstName: "wadi3C", lastName: "chelly", tel: "21440897", email: "wadi3@gmail.com", address: "riadhlandalos", password: "123456", speciality: "info" }
]
//  business logic

//  business logic for courses 
app.post("/courses", multer({storage:storage}).single("img") , (req, res) => {
    console.log("Here into BL: addCourse", req.body);
    User.findById(req.body.teacherId).then(
        (teacher) => {
            if (!teacher) {
                return res.json({
                    msg: "Teacher Not Found"
                })
            }
            req.body.avatar = `http://localhost:3000/images/${req.file.filename}`;
            let course = new Course(req.body);
            console.log("Here course obj", course);

            course.save((err, doc) => {
                if (err) {
                    res.json({ msg: "Error" });
                } else {
                    teacher.courses.push(doc);
                    teacher.save();
                    res.json({
                        msg: "Course added with success"
                    })
                }
            })

        }
    )
});

app.get("/courses", (req, res) => {
    console.log("Here into BL : getAllCourses");
    Course.find().then(
        (docs) => (
            res.json({
                T: docs,

            })
        )
    )
});

app.get("/courses/:id", (req, res) => {
    console.log("Here into BL:getCourseById");
    let courseId = req.params.id;
    Course.findById(courseId).then(
        (doc) => (
            console.log("here courseFound", doc),
            res.json({
                courseFound: doc
            })
        )
    )
});

app.delete("/courses/:id", (req, res) => {
    let courseId = req.params.id;
    Course.deleteOne({ _id: courseId }).then(
        (deleteResponse) => {
            console.log("Here delete response", deleteResponse);
            if (deleteResponse.deletedCount == 1) {
                res.json({
                    msg: "success"
                })
            } else {
                res.json({
                    msg: "echec"
                })
            }
        }
    )
});

app.put("/courses", (req, res) => {
    console.log("Here into BL: courseEdit");
    let course = req.body;
    Course.updateOne({ _id: course._id }, course).then(
        (updateResponse) => {
            console.log("here update response", updateResponse);
            if (updateResponse.nModified == 1) {
                res.json({
                    msg: "success"
                })
            } else {
                res.json({
                    msg: "error"
                })
            }
        }
    )


}
);


//  business logic for users 
app.post("/users/signup", multer({storage:storage}).single("img") , (req, res) => {
    console.log("Here signup BL", req.body);
    bcrypt.hash(req.body.password, 10).then(
        (cryptedPwd) => {
            console.log("Here crypted pwd", cryptedPwd);
            req.body.password = cryptedPwd;
            req.body.avatar = `http://localhost:3000/images/${req.file.filename}`;
            let user = new User(req.body);
            console.log("Here user obj", user);
            user.save();
            res.json({
                msg: "User added with success"
            });
        });
});

// business logic to login
app.post("/users/login", (req, res) => {
    console.log("Here into login BL", req.body);
    User.findOne({ email: req.body.email }).then(
        (doc) => {
            if (!doc) {
                return res.json({
                    msg: "email not found"
                })
            }
            bcrypt.compare(req.body.password, doc.password).then(
                (compareResult) => {
                    if (!compareResult) {
                        return res.json({
                            msg: "False"
                        })
                    }
                    res.json({
                        msg: "User found"
                    })
                }
            )
        }
    )
});

// get all users
app.get("/users", (req, res) => {
    console.log("Here into BL : getAllUsers");
    User.find().then(
        (docs) => (
            res.json({
                T: docs
            })
        )
    );
});



app.delete("/users/:id", (req, res) => {
    let userId = req.params.id;
    User.deleteOne({ _id: userId }).then(
        (deleteResponse) => {
            console.log("Here delete response", deleteResponse);
            if (deleteResponse.deletedCount == 1) {
                res.json({
                    msg: "success"
                })
            } else {
                res.json({
                    msg: "echec"
                })
            }
        }
    )
}
);


//  business logic for events 
app.post("/events", (req, res) => {
    console.log("Here into BL: addEvent", req.body);
    let event = new Event(req.body);
    event.save();
    res.json({
        msg: "event added with success",
    })
}
);

app.get("/events", (req, res) => {
    console.log("Here into BL : getAllEvents");
    Event.find().then(
        (docs) => (
            res.json({
                T: docs,

            })
        )
    )
});

app.get("/events/:id", (req, res) => {
    console.log("Here into BL:getEventById");
    let eventId = req.params.id;
    Event.findById(eventId).then(
        (doc) => (
            console.log("here eventFound", doc),
            res.json({
                eventFound: doc
            })
        )
    )
});

app.delete("/events/:id", (req, res) => {
    console.log("Here into BL: deleteEvent")
    let eventId = req.params.id;
    Event.deleteOne({ _id: eventId }).then(
        (deleteResponse) => {
            console.log("Here delete response", deleteResponse);
            if (deleteResponse.deletedCount == 1) {
                res.json({
                    msg: "success"
                })
            } else {
                res.json({
                    msg: "echec"
                })
            }
        }
    )
});

app.put("/events", (req, res) => {
    console.log("Here into BL: eventEdit");
    let event = req.body;
    Event.updateOne({ _id: event._id }, event).then(
        (updateResponse) => {
            console.log("here update response", updateResponse);
            if (updateResponse.nModified == 1) {
                res.json({
                    msg: "success"
                })
            } else {
                res.json({
                    msg: "error"
                })
            }
        }
    )


}
);






// pour pouvoir exporter l app (la rendre exportable)
// hethi 7atineha louta 
module.exports = app;