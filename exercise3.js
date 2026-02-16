const display = document.querySelector('#count-display');
const CounterApp = {
 count: 0,
 increment: function() {
 // increment this.count, update the display span
    this.count++;

    display.textContent = this.count;
 },
 decrement: function() {
 // decrement this.count, update the display span
    this.count--;

    display.textContent = this.count;
 }
};

const incBtn = document.querySelector('#inc-btn');
const decBtn = document.querySelector('#dec-btn');

// Attach increment to #inc-btn using .bind()
// Attach decrement to #dec-btn using .bind()
incBtn.addEventListener('click', CounterApp.increment.bind(CounterApp));
decBtn.addEventListener('click', CounterApp.decrement.bind(CounterApp));