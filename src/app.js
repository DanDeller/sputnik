console.log('look more uglified code');

function Person() {
  this.age = 0;

  setInterval(() => {
    this.age++;
  }, 1000);
}

var p = new Person();