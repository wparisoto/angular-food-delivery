export class User {
  constructor(
    public email: string,
    public name: string,
    private password: string
  ) {}


  matches(another: User): boolean{
      return another !== undefined &&
        another.email === this.email &&
        another.password === this.password
  }
}
export const users: {[key: string]: User}  = {
  "wagnerparisoto@gmail.com": new User(
    "wagnerparisoto@gmail.com",
    "Wagner",
    "123"
  ),
  "patricia@gmail.com": new User("patricia@gmail.com", "Patricia", "123")
};
