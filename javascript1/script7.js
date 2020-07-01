console.log('hello object methods trello v3')

// lecture scheduler details

      let collegeLectures = {
            division : 'A',
            day : 'Mon',
            totalLectures : 00,
            lecturesDoneIn_A : 00,

            addLecturesIn_A : function (count = 0) {
                  this.totalLectures += count; 
                  // return this.totalLectures;
            },
            
            removeLecturesIn_A : function (count = 0) {
                  this.lecturesDoneIn_A += count; 
                  // return this.lecturesDoneIn_A
            },

            pendingLectures : function () {
                  let count = this.totalLectures - this.lecturesDoneIn_A;
                  // return count;
                  
            },

            displayLectures : function () {
                 
                 
                  return ` in class ${ this.division} total lectures are ${this.totalLectures} from which ${this.lecturesDoneIn_A} are completed and  ${this.count} are remaining` 
                  
                  
            }
      }

      collegeLectures.addLecturesIn_A(111)
      collegeLectures.removeLecturesIn_A(100)
      collegeLectures.pendingLectures();
      console.log(collegeLectures.displayLectures());

















































      // collegeLectures.addLecturesIn_A(133);
      // collegeLectures.removeLecturesIn_A(3);
      // // collegeLectures.pendingLectures();
      // collegeLectures.displayLectures();
      // console.log(collegeLectures.displayLectures());

      // let collegeLectures_2 = {
      //       division: 'B',
      //       day: 'Mon',
      //       totalLectures: 10,
      //       lecturesDoneIn_B: 10,

      //       __proto__: collegeLectures ,
            
      // }
      // collegeLectures_2.lecturesDoneIn_A = 1;


      // // console.log(collegeLectures_2.lecturesDoneIn_A);