import { Action } from "@ngrx/store";
import { Course } from "./model/course";

export enum CourseActionTypes {
  CourseRequested = "[View Course Page] Course Requested", //[action origin] actiondefinition
  CourseLoaded = "[Courses API] Course Loaded"
}

export class CourseRequested implements Action {
  type = CourseActionTypes.CourseRequested;
  constructor(public payload: { courseId: number }) {}
}

export class CourseLoaded implements Action {
  type = CourseActionTypes.CourseLoaded;
  constructor(public payload: { course: Course }) {}
}

export type CourseActions = CourseRequested | CourseLoaded;
