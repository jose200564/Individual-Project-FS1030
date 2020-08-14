# Individual-Project-FS1030

nodejs-express-mysql-crud


To start the project run: node app.js

MYSQL Script 

CREATE DATABASE jrh1030;
Use jrh1030;
CREATE TABLE IF NOT EXISTS   `contact` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(25) NOT NULL,
  `lastname` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
INSERT INTO `contact` VALUES (5,'John','Smith','abc@mail.com');

CREATE TABLE IF NOT EXISTS   `portfolio` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `caption` varchar(50) NOT NULL,
  `description` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
INSERT INTO `portfolio` VALUES (5,'Bridge','Bridge Construction');

CREATE TABLE IF NOT EXISTS  `resume` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `career` varchar(10) NOT NULL,
  `date` varchar(25) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
INSERT INTO `resume` VALUES (1,'Engineer',2015,'Project Manager','Construction');

ABSTRACT CODE

LOGIN
● User enters username (‘$Username’) and password (‘$Password’) in input fields
● IF username is not empty AND password is not empty, AND Username does not contain
invalid characters AND password does not contain any escape string THEN:
● When Login button is clicked:
● IF user record is found but User.Password != ‘$Password’
● Go back to Login from with error message
● ELSE:
● Store login information as session variable ‘$uid’
● IF User.role = ‘Administrator’
● Store ‘yes’ in session variable ‘$isAdmin’
● ELSE
● Store ‘no’ in session variable ‘$isAdmin’
● Go to User Menu page
● ELSE username or password field value is invalid, display Login form with error
Message

CREATE PORTFOLIO 
● User on admin panel
● User selects Add to PORTFOLIO  button
● Portfolio form is displayed
● User inputs caption in input field
● User inputs description in input field
● IF caption field value is not empty AND description field value is not empty THEN:
● When submit button is clicked:
● Store portfolio information
● List of portfolio  displayed
● ELSE portfolio caption or description is invalid, display Portfolio form with error message

READ PORTFOLIO 
● User on admin panel
● User selects PORTFOLIO button
● Portfolio are displayed	

DELETE PORTFOLIO 
● User on admin panel
● User selects PORTFOLIO button
● User selects which submission to delete
● IF DELETE button is clicked THEN:
● Submission is deleted
● List of Portfolio  are displayed

UPDATE PORTFOLIO 
● User on admin panel
● User selects PORTFOLIO button
● Portfolio are displayed
● User selects which item to update
● IF UPDATE button is clicked, THEN:
● Form is displayed
● User updates input fields
● When Update button is clicked:
● Store portfolio information
● List of portfolio  are displayed
● ELSE ID field value is invalid, display search submission with error message

CREATE RESUME
● User on admin panel
● User selects Add to RESUME button
● Resume form is displayed
● User inputs resume information in field values
● IF field values are not empty THEN:
● When ADD TO RESUME button is clicked:
● Store resume information
● List of resume are displayed
● ELSE resume information is invalid, display resume form with error message

READ RESUME 
● User on admin panel
● User selects RESUME button
● Resume submissions are displayed

DELETE RESUME 
● User on admin panel
● User selects RESUME button
● Resume are displayed
● User selects which resume item to delete
● IF a submission is displayed, THEN:
● IF DELETE button is clicked THEN:
● Submission is deleted from database
● List of Resume displayed
● ELSE ID field value is invalid, display search submission with error message

UPDATE RESUME 
● User on admin panel
● User selects RESUME button
● Resume are displayed
● User selects which resume item to be updated
● IF UPDATE button is clicked, THEN:
● Form is displayed
● User updates input fields
● IF UPDATE button is clicked THEN:
● Store resume information
● List of resume are displayed	

CREATE CONTACT 
● User on admin panel
● User selects Add CONTACT button
● Contact form is displayed
● User inputs contact information in field values
● IF field values are not empty THEN:
● When Add CONTACT button is clicked:
● Store contact information
● List of contact item are displayed
● ELSE contact information is invalid, display resume form with error message

READ CONTACT 
● User on admin panel
● User selects CONTACT button
● CONTACT are displayed

UPDATE CONTACT 
● User on admin panel
● User selects CONTACT button
● Contact are displayed
● User selects which contact item to be updated
● IF UPDATE button is clicked, THEN:
● Form is displayed
● User updates input fields
● IF UPDATE button is clicked THEN:
● Store contact information
● List of contact are displayed

DELETE CONTACT 
● User on admin panel
● User selects CONTACT button
● Contact are displayed
● User selects which contact item to delete
● IF a submission is displayed, THEN:
● IF DELETE button is clicked THEN:
● Submission is deleted from database
● List of contact displayed
● ELSE ID field value is invalid, display search submission with error message
