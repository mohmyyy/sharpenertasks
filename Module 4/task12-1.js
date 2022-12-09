// Design Pattern Problem -How will you design a Student class which stores the name , age , phone number, board marks of each student. Make a constructor to initialize the values.

class Student{
  static countStudent = 0
  constructor(name,age,phoneNum,boardMarks){
    this.name = name;
    this.age = age;
    this.phoneNum = phoneNum;
    this.boardMarks = boardMarks;
    Student.countStudent++;
  };
  eligibilityCriteria(){
    if (this.boardMarks > 40){
      console.log(`${this.name} is Eligible for the College Admission`)
    } else {
      console.log(`${this.name} is not Eligible for the College Admission`)
    } 
  }
  static NocountStudent(){
    console.log(`The total numbers of students are ${Student.countStudent}`)
  }

};


const student1 = new Student('Mohammed',22,97000837822,100)
const student2 = new Student('Ahmed',22,97837822,90)
const student3 = new Student('Abdullah',22,97837822,89)
const student4 = new Student('Abdul Malik',22,97837822,32)
const student5 = new Student('Saib',22,97837822,56)
student1.eligibilityCriteria()
student4.eligibilityCriteria()
Student.NocountStudent()