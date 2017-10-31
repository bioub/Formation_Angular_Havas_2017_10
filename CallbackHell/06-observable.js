function timeout(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

timeout(1000)
  .then(() => console.log('1s'));

// Inconvénients
// 1 - Le then ne peut être appelé qu'un fois

function interval(delay) {
  return new Promise(resolve => {
    setInterval(resolve, delay);
  });
}

interval(1000)
  .then(() => console.log('toutes les 1s'));

// 2 - on ne peut pas empecher l'appel du callback

// Différences avec un observable
// Dans un observable, le déclenchement de la code async
// se fait au moment du then (subscribe)
// On peut appeler plein de fonction de transformation

