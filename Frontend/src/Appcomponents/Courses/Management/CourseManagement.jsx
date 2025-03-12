import React from "react";

import { DataTable } from "./DataTable";
import { columns } from "./columns";

const CourseManagement = ({ courses }) => {
  const courseDatas = courses.map((course) => {
    return {
      courses: course.course_name,
      thumbnails: course.course_image_url,
      status: course.status,
      category: course.category,
      id: course.course_id,
    };
  });
  const completedCourseCount = courseDatas.filter(
    (data) => data.status === "completed"
  ).length;
  const DraftCourseCount = courseDatas.filter(
    (data) => data.status === "draft"
  ).length;
  const totalCourses = courseDatas.map((data) => data).length;

  return (
    <div className="container mx-auto ">
      <DataTable
        columns={columns}
        data={courseDatas}
        completedCourseCount={completedCourseCount}
        DraftCourseCount={DraftCourseCount}
        totalCourses={totalCourses}
      />
    </div>
  );
};

export default CourseManagement;
