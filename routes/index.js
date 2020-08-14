module.exports = {


    getLoginPage: (req, res) => {
        res.render('login.ejs', {
            title: "Login Page"
        });

    },

    getAdminPage: (req, res) => {
        res.render('admin.ejs', {
            title: "Admin Page"
        });

    },

    
    getContactPage: (req, res) => {
        let query = "SELECT * FROM contact ORDER BY id ASC"; // query database to get all the contacts

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/contact');
            }
            res.render('contact-index.ejs', {
                title: "Contact Page"
                , contacts: result
            });
        });
    },

     
    getResumePage: (req, res) => {
        let query = "SELECT * FROM resume ORDER BY id ASC"; // query database to get all the resume items

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/resume');
            }
            res.render('resume-index.ejs', {
                title: "Resume Page"
                , resumes: result
            });
        });
    },
     
    getPortfolioPage: (req, res) => {
        let query = "SELECT * FROM portfolio ORDER BY id ASC"; // query database to get all portfolio items

        // execute query
        db.query(query, (err, result) => {
            if (err) {
                res.redirect('/portfolio');
            }
            res.render('portfolio-index.ejs', {
                title: "Portfolio Page"
                , portfolios: result
            });
        });
    },

};
