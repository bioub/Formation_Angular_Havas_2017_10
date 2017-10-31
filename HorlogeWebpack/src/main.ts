import { Horloge } from './app/horloge/horloge';

const divElt = document.querySelector('.horloge');

const clock = new Horloge({
  container: <HTMLElement> divElt,
});

clock.init();
