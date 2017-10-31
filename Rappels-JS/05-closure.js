const externe = (msg) => {
  // portée de closure (portée sauvegardée)
  const interne = () => {
    console.log(msg);
  };

  return interne;
};

const hello = externe('Hello');
hello();
const bye = externe('Bye');
bye();

// Boucle for et callback async
for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
// 3 3 3

for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}
// 0 1 2

/*
function createButton(value, grosObjet) {
  const btn = document.createElement('button');
  btn.innerText = value;

  grosObjet = null;

  btn.addEventListener('click', () => {

  });
}
*/