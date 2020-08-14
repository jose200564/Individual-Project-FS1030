const fs = require('fs');

module.exports = {

    addPortfolioPage: (req, res) => {
        res.render('add-portfolio.ejs', {
            title: "Add Portfolio"
            , message: ''
        });
    },
    addPortfolio: (req, res) => {
        if (!req.body.caption) {
            return res.status(400).send("No files were uploaded.");
        }

        let message = '';
        let caption = req.body.caption;
        let description = req.body.description; 

        let captionQuery = "SELECT * FROM `portfolio` WHERE caption = '" + caption + "'";

        db.query(captionQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Title already exists';
                res.render('add-portfolio.ejs', {
                    message,
                    title: "Add Portfolio"
                });
            }

            // send portfolio's item to the database
            let query = "INSERT INTO `portfolio` (caption, description) VALUES ('" + caption + "', '" + description + "')";
            db.query(query, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.redirect('/portfolio');

            });
        });

    },
    editPortfolioPage: (req, res) => {
        let portfolioId = req.params.id;
        let query = "SELECT * FROM `portfolio` WHERE id = '" + portfolioId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-portfolio.ejs', {
                title: "Edit Portfolio"
                , portfolios: result[0]
                , message: ''
            });
        });
    },
    editPortfolio: (req, res) => {
        let portfolioId = req.params.id;
        let caption = req.body.caption;
        let description = req.body.description;

    let query = "UPDATE `portfolio` SET `caption` = '" + caption + "', `description` = '" + description + "' WHERE `portfolio`.`id` = '" + portfolioId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/portfolio');
        });
    },

     
    deletePortfolio: (req, res) => {
        let portfolioId = req.params.id;
        let deleteUserQuery = 'DELETE FROM `portfolio` WHERE id = "' + portfolioId + '"';

        db.query(deleteUserQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/portfolio');
        });
    }

};