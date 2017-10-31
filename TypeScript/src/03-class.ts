interface HelloInterface {
  hello(): string;
}

class Contact implements HelloInterface {
  /*
  private prenom: string;

  constructor(prenom) {
    this.prenom = prenom;
  }
  */
  constructor(
    private prenom: string,
    private nom: string,
  ) {}

  hello() {
    return `Hello ${this.prenom}`;
  }

  specifiqueAContact() {
    document.addEventListener('', ()=> {});
  }
}

function useContact(contact: HelloInterface) {
  const cast = <Contact> contact;
  cast.specifiqueAContact();
}
