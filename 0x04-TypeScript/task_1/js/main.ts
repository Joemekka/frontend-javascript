interface Teacher {
    readonly firstName: string,
    readonly lastName: string,
    yearsOfExperience?: number,
    fullTimeEmployee: boolean,
    location: string,
    [key: string]: unknown,
}
const teacherOne: Teacher = {
    firstName: 'David',
    lastName: 'Maguire',
    yearsOfExperience: 5,
    fullTimeEmployee: true,
    location: "london",
    contract: false,
}
console.log(teacherOne)