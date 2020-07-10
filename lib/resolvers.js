'use strict'

const courses = [
  {
    _id: 'anyid1',
    title: 'Mi titulo 1',
    teacher: 'Profesor 1',
    description: 'Description',
    topic: 'Programación'
  },
  {
    _id: 'anyid2',
    title: 'Mi titulo 2',
    teacher: 'Profesor 2',
    description: 'Description',
    topic: 'Programación'
  },
  {
    _id: 'anyid3',
    title: 'Mi titulo 3',
    teacher: 'Profesor 3',
    description: 'Description',
    topic: 'Programación'
  }
];

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) => {
      const course = courses.filter(course => course._id === args._id)
      return course.pop()
    }
  }
}