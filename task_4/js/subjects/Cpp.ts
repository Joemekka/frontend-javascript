import Subject from "./Subject";

export default class Cpp extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Cpp";
  }

  getAvailableTeacher(): string {
    const teacher = this.teacher;
    if (!teacher || !teacher.experienceTeachingC) {
      return "No available teacher";
    }
    return `Available Teacher: ${teacher.firstName}`;
  }
}
