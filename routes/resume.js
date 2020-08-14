const fs = require('fs');

module.exports = {
    addResumePage: (req, res) => {
        res.render('add-resume.ejs', {
            title: "Add Resume"
            , message: ''
        });
    },
    addResume: (req, res) => {
        if (!req.body.resumeTitle) {
            return res.status(400).send("No files were uploaded.");
        }

        let message = '';
        let career = req.body.career;
        let date = req.body.date;
        let resumeTitle = req.body.resumeTitle;
        let resumeDescription = req.body.resumeDescription;
 
        let resumeTitleQuery = "SELECT * FROM `resume` WHERE title = '" + resumeTitle + "'";

        db.query(resumeTitleQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            if (result.length > 0) {
                message = 'Title already exists';
                res.render('add-resume.ejs', {
                    message,
                    title: "Add Resume"
                });
            }
            // send resume's item to the database
            let query = "INSERT INTO `resume` (career, date, title, description) VALUES ('" + career + "','" + date + "', '" + resumeTitle + "', '" + resumeDescription + "')";
            db.query(query, (err, result) => {
                if (err) {
                    return res.status(500).send(err);
                }
                res.redirect('/resume');

            });
        });

    },
 
    editResumePage: (req, res) => {
        let resumeId = req.params.id;
        let query = "SELECT * FROM `resume` WHERE id = '" + resumeId + "' ";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.render('edit-resume.ejs', {
                title: "Edit Resume"
                , resumes: result[0]
                , message: ''
            });
        });
    },

    editResume: (req, res) => {
        let resumeId = req.params.id;
        let career = req.body.career;
        let date = req.body.date;
        let resumeTitle = req.body.title;
        let resumeDescription = req.body.description;

        //update item from resume table through id selected 
        let query = "UPDATE `resume` SET `career` = '" + career + "', `date` = '" + date + "',`title` = '" + resumeTitle + "', `description` = '" + resumeDescription + "' WHERE `resume`.`id` = '" + resumeId + "'";
        db.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/resume');
        });
    },

    //delete item from resume table through id selected 
    deleteResume: (req, res) => {
        let resumeId = req.params.id;
        let deleteUserQuery = 'DELETE FROM `resume` WHERE id = "' + resumeId + '"';



        db.query(deleteUserQuery, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/resume');
        });
    }

};