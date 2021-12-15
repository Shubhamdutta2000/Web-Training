CREATE DATABASE test2 ;

USE test2;

///////////////////////////////////// Create Table ////////////////////////////////////////////////

CREATE TABLE `students` (
    `student_name` VARCHAR(255) NOT NULL ,
    `student_roll` INT(200) NOT NULL ,
    `marks` INT(100) NOT NULL ,
    `percenntage` INT(100) NOT NULL ,
    PRIMARY KEY (`student_roll`)
    );



/////////////////////////////////////   INSERT new Row in the table ////////////////////////////////

INSERT INTO `students` (
    `student_name`, `student_roll`, `marks`, `percenntage`
    ) VALUES ('Avik', '12', '99', '99');


INSERT INTO `students` (
    `student_name`, `student_roll`, `marks`, `percenntage`
    ) VALUES ('Akash', '11', '100', '100');



///////////////////////////////////// DELETE particular Row /////////////////////////////////////

DELETE FROM `students` WHERE `students`.`student_roll` = 11";



/////////////////////////////////////  UPDATE COL in particular Row /////////////////////////////////////

UPDATE `students` SET `student_name` = 'Avik2' WHERE `students`.`student_roll` = 12; 



///////////////////////////////////// READ particular row from the table  /////////////////////////////////////

SELECT * FROM `students`;

SELECT * FROM `students` WHERE col_name = value;