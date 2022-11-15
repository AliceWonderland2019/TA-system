USE db;

drop database db;

create database db;

CREATE TABLE
    `db`.`user` (
        `username` VARCHAR(45) NOT NULL,
        `password` VARCHAR(100) NOT NULL, 
        PRIMARY KEY (`username`)
    );

-- insert sample entry

INSERT INTO
    `db`.`user` (`username`, `password`)
VALUES ('student1', 'password');

INSERT INTO
    `db`.`user` (`username`, `password`)
VALUES ('employee1', 'password');

CREATE TABLE
    `db`.`student` (
        `student_id` INTEGER NOT NULL,
        `username` VARCHAR(45) NOT NULL,
        `firstname` VARCHAR(100),
        `lastname` VARCHAR(100),
        `email` VARCHAR(50),
        `profile_pic` VARCHAR(10000),
        `introduction` VARCHAR(1000),
        PRIMARY KEY (`student_id`),
        FOREIGN KEY (`username`) REFERENCES `db`.`user`(`username`),
        UNIQUE INDEX `id_UNIQUE` (`student_id`));

-- insert sample entry

INSERT INTO
    `db`.`student` (`username`, `student_id`)
VALUES ('student1', '123456');

CREATE TABLE
    `db`.`employee` (
        `employee_id` INTEGER NOT NULL,
        `username` VARCHAR(45) NOT NULL,
        `firstname` VARCHAR(100),
        `lastname` VARCHAR(100),
        `profile_pic` VARCHAR(10000),
        `introduction` VARCHAR(1000),
        `email` VARCHAR(50),
        PRIMARY KEY (`employee_id`),
        FOREIGN KEY (`username`) REFERENCES `db`.`user`(`username`),
        UNIQUE INDEX `id_UNIQUE` (`employee_id`)
    );

-- insert sample entry

INSERT INTO
    `db`.`employee` (`username`, `employee_id`)
VALUES ('employee1', '1234');

CREATE TABLE
    `db`.`job` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `employee_id` INTEGER NOT NULL, 
        `course_id` VARCHAR(15) NOT NULL,
        `schedule` VARCHAR(50) NOT NULL, 
        `posted_date` VARCHAR(15) NOT NULL, 
        `status` INTEGER NOT NULL,
        `course_name` VARCHAR(50),
        `semster` VARCHAR(15),  
        `salary` FLOAT,  
        `deadline` VARCHAR(50),
        `position` VARCHAR(50),
        `introduction` VARCHAR(1000),
        PRIMARY KEY (`id`),
        UNIQUE KEY `id_UNIQUE` (`id`),
        FOREIGN KEY (`employee_id`) REFERENCES employee(`employee_id`)
    );

-- insert sample entry
INSERT INTO
    `db`.`job` (`id`,`employee_id`, `course_id`,`schedule`, `posted_date`, `status`)
VALUES ('1','1234', 'CS4345', 'MWF 11:00-12:00','NOV 13,2022', '1');

-- INSERT INTO
--     `db`.`job` (
--         `id`,
--         `employee_id`,
--         `course_id`
--     )
-- VALUES ('1', '1234', 'CS1300');

CREATE TABLE
    `db`.`application` (
        `id` INTEGER NOT NULL AUTO_INCREMENT,
        `job_id` INTEGER NOT NULL,
        `student_id` INTEGER NOT NULL,
        `status` INTEGER NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE INDEX `id_UNIQUE` (`id` ) ,
        FOREIGN KEY (`job_id`) REFERENCES job(`id`),
        FOREIGN KEY (`student_id`) REFERENCES student(`student_id`)
    );

-- insert sample entry

INSERT INTO
    `db`.`application` (`id`, `job_id`, `student_id`,`status`)
VALUES ('01', '1', '123456', '1');