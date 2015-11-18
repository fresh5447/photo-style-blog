var mongoose = require('mongoose');
var User = require('../models/user');

// app/routes.js
module.exports = function(app, passport) {

    app.get('/', function(req, res){
        res.render('index.ejs',
            { user : req.user})
    });

    app.get('/blog', function(req, res){
        res.render('blog.ejs',
            { user : req.user})
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/blog', // redirect to the secure profile section
        failureRedirect : '/signup', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/blog', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/login', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });


    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    app.get('/profile', isLoggedIn, function(req, res) {
        mongoose.model('Comment').find({user:req.user._id}).populate('blog').exec( function(err, comments){
            console.log(comments);
           res.render('profile.ejs', {
                user : req.user, // get the user out of session and pass to template
                comments: comments
            });
        })
 
    });

    app.get('/post', isAdmin, function(req, res) {
        res.render('blogForm.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    app.get('/blog', function(req, res) {
        res.render('blog.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    app.get('/contact', function(req, res) {
        res.render('contact.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });


    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


app.get('/admin', isAdmin, function(req, res) {
        mongoose.model('User').find({}, function(err, users){
            if(err){
                return console.log(err);
            } else {
                res.render('adminProfile.ejs', {
                    users : users,
                    user : req.user
            });
        }
    });


    });
};
// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

// route middleware to make sure a user is admin
function isAdmin(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated() && req.user.local.role === 'admin')

        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}
