interface ContactOptions {
  id?: number;
  name: string;
  email?: string;
  telephone?: string;
}

export class Contact {
  public id: number;
  public name: string;
  public email: string;
  public telephone: string;

  constructor(options: ContactOptions) {
    const {
      id = 0,
      name,
      email = '',
      telephone = '',
    } = options;

    this.id = id;
    this.name = name;
    this.email = email;
    this.telephone = telephone;
  }
}
