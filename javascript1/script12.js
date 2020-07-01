console.log('hello ');

var pelem = document.querySelector('h1')
// below line is to change text
pelem.textContent = ' changeds';

let newTag = document.querySelector('p')
newTag.textContent = 'new p tag created';
document.querySelector('body').appendChild(newTag)

document.querySelector('button').addEventListener('dblclick', () => {
      alert('welcome')
      event.target.textContent = 'okaaaay'
})