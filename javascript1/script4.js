console.log('hello ToDo')


// toDo 1
const personalTodo_1 = [];


// inserting elements from the end using .push() and displaying using fo\orEach() loop.

personalTodo_1.push(`wakeUp`);
personalTodo_1.push(`getFreshed`);
personalTodo_1.push(`prayFajar`);
personalTodo_1.push(`doExercise`);

personalTodo_1.forEach(function(ToDo, number){
      console.log(`toDos ${number} -- ${ToDo}`)
})

console.log('\n')      


// toDo 2
const personalTodo_2 =[];

// inserting elements from start using unshift and calling using for loop
personalTodo_2.unshift(`comeBack`);
personalTodo_2.unshift(`EnjoyBrakes`);
personalTodo_2.unshift(`attendLectures`);
personalTodo_2.unshift(`gotoCollege`); 


for (let index = 0; index < personalTodo_2.length; index++) {
      const element = personalTodo_2[index];
      console.log( 'next ToDo', index , element); 
}