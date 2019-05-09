// CODE here for your Lambda Classes

class Person {
    constructor(attrs)
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    this.gender = attrs.gender
}

speak() {
    console.log(`Hello, my name is ${this.name} I am from ${this.location}.`);
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
        console.log(`Today we are learning about ${this.subject}.`);
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${this.subject}`)
    }

}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBakcground = studentAttrs.previousBakcground;
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
        console.log(`${this.name} has submitted a PR for ${this.subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${this.subject}.`);
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
        console.log(`${this.name} announces @ ${this.channel} standy times!`)
    }
    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${this.student}'s code on ${this.subject}.`)
    }
}