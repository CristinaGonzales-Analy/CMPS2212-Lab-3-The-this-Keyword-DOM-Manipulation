const box = document.querySelector('.box');
box.addEventListener('click', (event) => {
 // BUG: this.classList.add('active') throws an error
 //It throws an error because the arrow function inherits 'this' from its enclosing scope.
 //In this, the function will inherit from the window.
 //classList does not exist in the window, so it cannot find it (cause of the error)

 //currentTarget works because it always refers to the element the listener is attached to.
 event.currentTarget.classList.add('active');
});