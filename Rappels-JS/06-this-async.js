const contact = {
  prenom: 'Romain',
  hello() { // method property (ES6)
    setTimeout(() => {
      console.log(`Hello my name is ${this.prenom}`);
    }, 1000);
  }
}

contact.hello(); // Hello my name is Romain

const contactBind = {
  prenom: 'Romain',
  hello() { // method property (ES6)
    console.log(`Hello my name is ${this.prenom}`);
  },
  helloAsync() {
    setTimeout(this.hello.bind(this), 1000);
  }
}

contactBind.helloAsync(); // Hello my name is Romain

/*
Function.prototype.bind = function(that) {
  return function() {
    this.call(that);
  };
};
*/