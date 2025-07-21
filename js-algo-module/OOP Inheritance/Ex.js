class Person {
  constructor(name, startYear) {
    this.name = name;
    this.startYear = startYear;
    this.courses = [];
  }

  addCourse(course) {
    this.courses.push(course);
  }
}

class Student extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.grades = [];
  }

  receiveGrade(courseName, finalGrade) {
    this.grades.push({
      course: courseName,
      grade: finalGrade,
    });
  }
}

class Teacher extends Person {
  constructor(name, startYear, salary) {
    super(null, startYear);
    this.salary = salary;
    this.name = "Professor " + name;
  }
}

class TeachingAssistant extends Teacher {
  constructor(name, startYear, salary) {
    super(name, startYear, salary);
  }
}

class Principal extends Person {
  constructor(name, startYear) {
    super(name, startYear);
    this.teachers = [];
    this.students = [];
  }

  hireTeacher(teacher) {
    this.teachers.push(teacher);
    console.log(`${this.name} just hired ${teacher.name}`);
  }
  recruitStudent(student) {
    this.students.push(student);
  }
  expelStudent(student) {
    let indexOfStudent = this.students.indexOf(student);
    if (indexOfStudent === -1) {
      console.log(`${student.name} isn't enlisted here`);
    } else {
      this.students.splice(indexOfStudent, 1);      
    }
  }

  transferStudent(student, principal) {
    this.expelStudent(student);
    principal.students.push(student);
  }
}

module.exports = { Principal, Student, Teacher };
