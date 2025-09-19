import Subject from "./Subject";

export default class Java extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for Java";
  }

  getAvailableTeacher(): string {
    const teacher = this.teacher;
    if (!teacher || !teacher.experienceTeachingJava) {
      return "No available teacher";
    }
    return `Available Teacher: ${teacher.firstName}`;
  }
}
