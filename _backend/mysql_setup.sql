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
VALUES ('employee1', 'password'), ('employee2', 'password');

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
        UNIQUE INDEX `id_UNIQUE` (`student_id`)
    );

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
VALUES ('employee1', '1234'), ('employee2', '1324');

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
    `db`.`job` (
        `id`,
        `employee_id`,
        `course_id`,
        `schedule`,
        `posted_date`,
        `status`,
        `course_name`,
        `semster`,
        `salary`,
        `deadline`,
        `position`,
        `introduction`
    )
VALUES (
        '1',
        '1234',
        'CSE 4351',
        'MWF 11:00-12:00',
        'NOV 13,2022',
        '1',
        'Senior Design I',
        'Spring 2023',
        15,
        'Jan 10, 2023',
        'TA assistant',
        'First part of a project course, with a major design component. Students participate in a multidisciplinary group project team. Topical, project-related discussions include project team organization, project planning and scheduling, management, testing and validation methods, and the importance of lifelong learning. Prerequisite: Senior standing in Computer Science (BS or BA) or Computer Engineering.'
    ), (
        '2',
        '1324',
        'CSE 4352',
        'MWF 9:00-10:00',
        'NOV 14,2022',
        '1',
        'Senior Design II',
        'Spring 2023',
        15,
        'Jan 10, 2023',
        'TA assistant',
        'Second part of a project course, with a major design component. Students participate in a multidisciplinary group project team. Topical, project-related discussions include project team organization, project planning and scheduling, management, testing and validation methods, and the importance of lifelong learning. Prerequisite: CSE 4351.'
    ), (
        '3',
        '1234',
        'CSE 1341',
        'TTH 11:00-12:30',
        'NOV 15,2022',
        '1',
        'Principles of Computer Science',
        'Spring 2023',
        18,
        'Jan 10, 2023',
        'TA assistant head',
        'Introduces the fundamental concepts of computer science and object-oriented design of reusable modules. Covers basic object-oriented concepts of composition, inheritance, polymorphism, and containers. First course for computer science and computer engineering majors and minors.'
    ), (
        '4',
        '1234',
        'CSE 2341',
        'TTH 2:00-2:30',
        'NOV 13,2022',
        '1',
        'Data Structures',
        'Spring 2023',
        15,
        'Jan 10, 2023',
        'TA assistant',
        'Emphasizes the object-oriented implementation of data structures and associated algorithms, including sorting algorithms, linked lists, stacks, queues, binary trees, and priority queues. Introduces graphs and algorithm analysis, and covers object-oriented software engineering strategies and approaches to programming. Prerequisite: C- or better in CSE 1342 or equivalent.'
    ), (
        '5',
        '1324',
        'CSE 3342',
        'TTH 5:00-6:30',
        'NOV 13,2022',
        '1',
        'Programming Languages',
        'Spring 2023',
        15,
        'Jan 10, 2023',
        'TA assistant',
        'Provides an understanding of how advances in hardware and networks have influenced the design and capabilities of programming languages from the 1950s to the present. Covers major programming paradigms (procedural, declarative, object-oriented, and functional) and requires problem-solving using a variety of languages. Topics include the history of programming languages, the Chomsky language hierarchy, the development of formal models for specifying languages, data structures for programming language implementation, and the ways different languages deal with problem of concurrency in a world of multicore and distributed computing. Prerequisite: C- or better in CSE 2341.'
    ), (
        '6',
        '1324',
        'CSE 3353',
        'MWF 5:00-6:00',
        'NOV 16,2022',
        '1',
        'Fundamentals of Algorithms',
        'Spring 2023',
        15,
        'Jan 10, 2023',
        'TA assistant',
        'Introduces algorithm analysis; big-Oh, omega, and theta notation; and algorithm classification by efficiency. Also, basic algorithm design strategies and approaches to problem-solving (e.g., greedy, divide and conquer, and dynamic programming), an introduction to graph algorithms, and intractability. Prerequisites: C- or better in CSE 2341, CSE 2353.'
    ), (
        '7',
        '1234',
        'CSE 3381',
        'MWF 3:00-4:00',
        'NOV 16,2022',
        '1',
        'Digital Logic Design',
        'Spring 2023',
        15,
        'Jan 10, 2023',
        'TA assistant',
        'Covers the history of logic and its application to digital switching circuitry. Topics include algebraic, combinational, and sequential circuitry. Emphasizes programmable logic and hardware description languages for modeling, synthesis, and simulation. Introduces the controller plus datapath architecture present in the majority of modern information processing circuits. Requires a weekly corequisite laboratory. Prerequisites: C- or better in CSE 2240, CSE 2353 or permission of instructor.'
    ), (
        '8',
        '1234',
        'CSE 3353',
        'TTH 3:30-5:00',
        'NOV 13,2022',
        '1',
        'Fundamentals of Algorithms',
        'Spring 2023',
        15,
        'Jan 10, 2023',
        'TA assistant',
        'Introduces algorithm analysis; big-Oh, omega, and theta notation; and algorithm classification by efficiency. Also, basic algorithm design strategies and approaches to problem-solving (e.g., greedy, divide and conquer, and dynamic programming), an introduction to graph algorithms, and intractability. Prerequisites: C- or better in CSE 2341, CSE 2353.'
    ), (
        '9',
        '1324',
        'CSE 4344',
        'T 6:30-9:00',
        'NOV 15,2022',
        '1',
        'Computer Networks and Distributed Systems',
        'Spring 2023',
        15,
        'Jan 10, 2023',
        'TA assistant',
        'Introduces network protocols, layered communication architecture, wired and wireless data transmission, data link protocols, network routing, TCP/IP and UDP, email and the World Wide Web, distributed computing, mutual exclusion, linearizability, locks, and multithreaded computing. Prerequisite: C- or better in CSE 2341.'
    ), (
        '10',
        '1324',
        'CSE 5343',
        'TH 6:30-9:00',
        'NOV 16,2022',
        '1',
        'Operating Systems and Systems Software',
        'Spring 2023',
        15,
        'Jan 10, 2023',
        'TA assistant',
        'Theoretical and practical aspects of operating systems: overview of system software, timesharing and multiprogramming operating systems, network operating systems and the Internet, virtual memory management, interprocess communication and synchronization, file organization, and case studies. Prerequisites: C- or better in CSE 2240, CSE 3353.'
    );

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
        UNIQUE INDEX `id_UNIQUE` (`id`),
        FOREIGN KEY (`job_id`) REFERENCES job(`id`),
        FOREIGN KEY (`student_id`) REFERENCES student(`student_id`)
    );

-- insert sample entry

INSERT INTO
    `db`.`application` (
        `id`,
        `job_id`,
        `student_id`,
        `status`
    )
VALUES ('01', '1', '123456', '1');