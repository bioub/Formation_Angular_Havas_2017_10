// 1 - Extensibilité
// Objet JS <=> système clé/valeur
// Dans d'autres langages :
// - Map (HashMap)
// - struct (C)
// - tableau associatif
// - dictionnaire

console.log(Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log(Math.sum); // function
console.log(Math.sum(1, 2)); // 3
delete Math.sum;
console.log(Math.sum); // undefined

// Monkey Patch
const refRandom = Math.random;

const assert = require('assert');
const pileOuFace = () => (Math.random() > 0.5) ? 'pile' : 'face';

Math.random = () => 0.75;
assert.equal(pileOuFace(), 'pile');

Math.random = () => 0.25;
assert.equal(pileOuFace(), 'face');
Math.random = refRandom;

// Créer un nouvel objet, ponctuel (créé qu'une seule fois)
// object literal
const coords2d = {
  x: 10,
  y: 20,
  sumXY: () => this.x + this.y,
};
console.log(typeof coords2d); // object
console.log(coords2d.x); // 10

// Créer un nouvel objet avec des méthodes, récurrent (créé plusieurs fois)
// fonction constructeur
const ContactAvecClosure = function(prenom) {
  this.hello = () => {
    return `Hello my name is ${prenom}`;
  };
};

const romain = new ContactAvecClosure('Romain');
console.log(typeof romain); // object
console.log(romain.hello()); // Hello my name is Romain

const renaud = new ContactAvecClosure('Renaud');
console.log(renaud.hello()); // Hello my name is Renaud
console.log(romain.hello() === renaud.hello()); // false
console.log(romain.hello === renaud.hello); // false

// Prototype
const ContactAvecPrototype = function(prenom) {
  this.prenom = prenom;
};

ContactAvecPrototype.prototype.hello = function() {
  return `Hello my name is ${this.prenom}`;
};

const jean = new ContactAvecPrototype('Jean');
console.log(typeof jean); // object
console.log(jean.prenom); // Jean
console.log(jean.hello()); // Hello my name is Jean

const eric = new ContactAvecPrototype('Eric');
console.log(eric.hello()); // Hello my name is Eric
console.log(jean.hello() === eric.hello()); // false
console.log(jean.hello === eric.hello); // true

// ES6
class ContactAvecClass {
    constructor(prenom) {
      this.prenom = prenom;
    }
    hello() {
        return `Hello my name is ${this.prenom}`;
    }
}
console.log(typeof ContactAvecClass); // function
console.log(ContactAvecClass.prototype.hello); // function

