console.log('hello object functions')

 // lecture scheduler details
      
      let collegeLectures = {
      division: 'A',
      day: 'Mon',
      totalLectures: 0,
      lecturesDone: 0,
}

let collegeLectures_2 = {
      division: 'B',
      day: 'Mon',
      totalLectures: 0,
      lecturesDone: 0,
}

let addLecture = function (myClass, classCount = 0) {

      myClass.totalLectures += classCount;

      return `Number of lectures today ${myClass.totalLectures}`
};

let removeLecture = function (myClass, classCount = 0) {

      myClass.lecturesDone += classCount;
      return `Number of lectures done today ${myClass.lecturesDone}`
};
// let summary;
let pendingLecture = function (myClass) {

      var summary = myClass.totalLectures - myClass.lecturesDone;
      return `Number of lectures remaining today ${summary}`
};


let resetDay = function (myClass) {
      myclass.totalLectures = 0;
      myClass.lecturesDone = 0;
};

addLecture(collegeLectures, 13)
removeLecture(collegeLectures, 3)
pendingLecture(collegeLectures);

console.log(collegeLectures, pendingLecture(collegeLectures));

// console.log(
// addLecture(collegeLectures, 13), removeLecture(collegeLectures, 3),  pendingLecture(collegeLectures) 
// );


addLecture(collegeLectures_2, 30)
removeLecture(collegeLectures_2, 25)
pendingLecture(collegeLectures_2);

console.log(collegeLectures_2, pendingLecture(collegeLectures_2));

// console.log(
      // addLecture(collegeLectures_2, 13), removeLecture(collegeLectures_2, 3),  pendingLecture(collegeLectures_2) 
      // );

