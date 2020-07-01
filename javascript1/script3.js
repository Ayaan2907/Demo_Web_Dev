console.log('hello functions')

// let greeting = function( visitor = "Mohit", guide = "Ayaan", price = 100, tax = (price*10)/100){

//       console.log(`hello user (${visitor})`, ` your website guide  is (${guide})`);
//       return price + tax ;

// }

// // below line called function with default parameters
// greeting()

// greeting('newUser', 'Kaif', 200)

/************** 
using forEach function to access array elements 


***************/

const Din = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// let access = function(day, index){
//       console.log('okay')

// }

// Din.forEach(access);

//  OR  -- fn declared inside loop with only contect of particular array index

Din.forEach(function (day) {
      console.log(day)
      // console.log('okay')
})

console.log( '\n' )

const mahine = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", 'Dec'];

// fn declared outside loop with content only

let DeclareFunction = function(mahine){
      console.log(mahine )
}

mahine.forEach(DeclareFunction)


console.log( '\n' )


let toDo =[`wakeUp`, `getFreshed`, ` namazFajr  `, ` breakFast`, ` study `, ` sleep`];

// fn inside loop with both content and number

toDo.forEach( function(toDo, sequence){
      console.log(` Today I have to do    ${ sequence} --- ${toDo}`)
})