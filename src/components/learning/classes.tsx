type Words = {
  [key: string]: string;
};

class Dictionary {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "food from korea");
const dictionary = new Dictionary();
dictionary.add(kimchi);
console.log(dictionary.def("kimchi"));

/* abstract class User {
  constructor(
    protected firstName: string,
    private lastName: string,
    public nickname: string
  ) {}
  abstract getNickname(): void; // the return type of the method
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
console.log(adam.getFullName()); // could make this function inside of the abstract class ↑↑ private as well so this console.log() wouldn't work
 */
