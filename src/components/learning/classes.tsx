abstract class User {
  constructor(
    protected firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
  abstract getNickname(): void;
  getFullName() {
    return `${(this.firstName, this.lastName)}`;
  }
}

class Player extends User {
  getNickname(): void {
    console.log(this.nickname);
    console.log(adam.firstName);
  }
}
const adam = new Player("Adam", "Sullivan", "adamochi");
console.log(adam.nickname);
console.log(adam.getFullName()); // could make this function private as well so this console.log() wouldn't work