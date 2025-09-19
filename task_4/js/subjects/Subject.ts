import { Teacher } from "./Teacher";

/**
 * Base Subject class.
 * Holds the teacher reference and exposes setTeacher/getter.
 */
export default class Subject {
  protected _teacher: Teacher | null = null;

  public setTeacher(teacher: Teacher): void {
    this._teacher = teacher;
  }

  public get teacher(): Teacher | null {
    return this._teacher;
  }
}
