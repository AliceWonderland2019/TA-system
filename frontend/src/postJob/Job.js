export class Job {
    constructor(employeeID, classes, classId, schedule, semster, jobTitle, jobDescription, postDate, endDate, salary, status) {
        this.employee_id = employeeID;
        this.course_name = classes;
        this.course_id = classId;
        this.schedule = schedule;
        this.semster = semster;
        this.position = jobTitle;
        this.introduction = jobDescription;
        this.posted_date = postDate.toDateString();
        this.deadline = endDate.toDateString();
        this.salary = salary;
        this.status = status;
    }
}

// employee_id:employeeID, status:status, course_id:classId, course_name:classes, schedule:schedule, semster:semster, position:jobTitle,
    // introduction:jobDescription, posted_date:postDate, deadline:endDate, salary:salary