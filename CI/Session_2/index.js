class Student {
  constructor(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  getAge() {
    return this.age;
  }
}

class Admin extends Student {
  constructor(name,age,address, listStudent) {
    super(name,age,address);
    this.listStudent = [];
  }
  addStudent(...student) {
    this.listStudent.push(...student);
  }
  getListStudent() {
    let studentArray = this.listStudent.map(student => {
      return `Toi ten la ${student.name}
              Toi ${student.age} tuoi
              Toi den tu ${student.address}
              `
    })
    return studentArray.join(' ');
  }
  

}

const nmh = new Student('Nguyen Manh Hung', 20, 'Hung Yen');
const dmd = new Student('Dang Minh Duc', 23, 'Ha Noi')
const admin = new Admin();
admin.addStudent(nmh,dmd);

console.log(admin.getListStudent());


// class Animal {
//   constructor(name, color, numOfLegs) {
//     this.name = name;
//     this.color = color;
//     this.numOfLegs = numOfLegs;
//   }
//   eat() {
//     console.log (`Con ${this.name} dang an`);
//   }
//   isDangerous() {
//     return this.numOfLegs < 2 || this.numOfLegs > 4 
//   }


// }

// class Dog extends Animal {
//   constructor(name, color, numOfLegs,gender) {
//     super(name, color, numOfLegs);
//     this.gender = gender;
//   }
//   eat() {
//     super.eat();
//     console.log('Gau Gau');
//   }
// }

// // const dog = new Animal('cho shiba', 'den', 3);
// // console.log(dog.isDangerous());
// // console.log(dog.eat());

// const pug = new Dog('Pug', 'Vang', 4, 'Alaska');
// pug.eat();

