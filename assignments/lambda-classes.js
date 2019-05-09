// CODE here for your Lambda Classes

class Person {
    constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    this.gender = attrs.gender;
}

speak() {
    console.log(`Hello, my name is ${this.name} I am from ${this.location}.`);
}
}

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.specialty = instructorAttrs.specialty;
        this.favLanguage = instructorAttrs.favLanguage;
        this.catchPhrase = instructorAttrs.catchPhrase
    }

    speak() {
        console.log(`Hello, my name is ${this.name} I am from ${this.location}.`);
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`)
    }

}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
    }

    speak() {
        console.log(`Hello, my name is ${this.name} I am from ${this.location}.`);
    }

    listsSubjects() {
        console.log(`${this.favSubjects}`);
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`);
    } 
}

class ProjectManager extends Instructor {
    constructor(PMAttrs) {
        super(PMAttrs);
        this.gradClassName = PMAttrs.gradClassName;
        this.favInstructor = PMAttrs.favInstructor;
    }

    speak() {
        console.log(`Hello, my name is ${this.name} I am from ${this.location}.`);
    }

    standUp(channel) {
        console.log(`${this.name} announces to @${channel} standy times!`)
    }
    debugsCode(name, subject) {
        console.log(`${this.name} debugs ${name}'s code on ${subject}.`)
    }
}


const fred = new Instructor({
    name: `Fred`,
    location: `Bedrock`,
    age: 47,
    gender: `Male`,
    favLanguage: `JavaScript`,
    specialty: `Front-end`,
    catchPhrase: `Don't forget the homies`
});

const wilma = new Instructor({
    name: `Wilma`,
    location: `Bedrock`,
    age: 40,
    gender: `Female`,
    favLanguage: `HTML`,
    specialty: `Back-end`,
    catchPhrase: `Forget the homies`
});

const pebbles = new Student({
    name: `Pebbles`,
    location: `Bedrock`,
    age: 12,
    gender: `Female`,
    previousBackground: `HTML`,
    className: `Web20`,
    favSubjects: `Javascript`,
});

const barney = new ProjectManager({
    name: `Barney`,
    location: `Bedrock`,
    age: 42,
    gender: `Male`,
    previousBackground: `HTML`,
    gradClassName: `Web17`,
    favInstructor: `Dan the cat man`
});

console.log(fred.speak());

console.log(barney.debugsCode(`pebbles`, `html`));

console.log(barney.standUp(`web20_sprint3`));

console.log(barney.speak());

console.log(pebbles.listsSubjects());