export class User {
  constructor(
    private id: string,
    private name: string,
    private username: string,) {

  }

  getId() {
    return this.id;
  }

  getName() {
    return this.name;
  }

  getUsername() {
    return this.username;
  }

  setId(id: string) {
    this.id = id;
  }

  setName(name: string) {
    this.name = name;
  }

  setUsername(username: string) {
    this.username = username;
  }

  static toUserModel(user: any): User {
    return new User(
      user.id,
      user.name,
      user.username

    );
  }
}