interface HorlogeOptions {
  container: HTMLElement;
  format?: string;
  delay?: number;
}

export class Truc {
  constructor(val) {
    console.log(val);
  }
}

export class Horloge {
  private container: HTMLElement;

  constructor(options: HorlogeOptions) {
    const { container = document.body } = options;
    this.container = container;
  }

  init() {
    this.container.innerText = (new Date()).toLocaleTimeString();
    setInterval(() => {
      this.container.innerHTML = (new Date()).toLocaleTimeString();
    }, 1000)
  }
}
