class Student{
  constructor(name,age,phoneNum,boardMarks){
    this.name = name;
    this.age = age;
    this.phoneNum = phoneNum;
    this.boardMarks = boardMarks;
  };

  eligibleForplacement(){
    if (this.boardMarks > 40){
      console.log(`${this.name} is Eligible`)
      return () => {
        if (this.age > 22){
          return true
        }else{
          return false
        }
      }
    } else {
      console.log(`${this.name} is not Eligible`)
      return () => {return false}
      
    }
  }

};


const student1 = new Student('Mohammed',25,97000837822,100)
const student2 = new Student('Ahmed',29,97837822,90)
const student3 = new Student('Abdullah',21,97837822,89)
const student4 = new Student('Abdul Malik',21,97837822,32)
const student5 = new Student('Saib',23,97837822,56)
console.log(student1.eligibleForplacement()())
console.log(student2.eligibleForplacement()())
console.log(student3.eligibleForplacement()())
console.log(student4.eligibleForplacement()())
console.log(student5.eligibleForplacement()())