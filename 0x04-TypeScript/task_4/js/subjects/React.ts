import Subject from "./Subject";

export default class React extends Subject {
  getRequirements(): string {
    return "Here is the list of requirements for React";
  }

  getAvailableTeacher(): string {
    const teacher = this.teacher;
    if (!teacher || !teacher.experienceTeachingReact) {
      return "No available teacher";
    }
    return `Available Teacher: ${teacher.firstName}`;
  }
}
