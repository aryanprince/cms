import { Courses } from '../../components/Courses';
import db from '../../db';

async function getCourses() {
  const courses = db.course.findMany();
  return courses;
}

export default async function CoursesComponent() {
  const courses = await getCourses();
  return <Courses courses={courses} />;
}
