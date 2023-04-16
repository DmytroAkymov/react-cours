import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';
import { useEffect } from 'react';

const SingleCourse = () => {
  const params = useParams();
  const navigate = useNavigate();
  const findCourse = courses.find((course) => course.slug === params.slug);

  useEffect(() => {
    if (!findCourse) {
      navigate('..', { relative: 'path' });
    }
  }, [findCourse, navigate]);

  return (
    <div>
      <h1>{findCourse?.title}</h1>
      <h2>{findCourse?.id}</h2>
      <Link to=".." relative="path">
        All courses
      </Link>
    </div>
  );
};

export default SingleCourse;
