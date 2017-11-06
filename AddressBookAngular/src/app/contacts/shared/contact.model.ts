interface ContactOptions {
  id?: number;
  name: string;
  email?: string;
  phone?: string;
}

export class Contact {
  public id: number;
  public name: string;
  public email: string;
  public phone: string;

  constructor(options: ContactOptions) {
    const {
      id = 0,
      name,
      email = '',
      phone = '',
    } = options;

    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
