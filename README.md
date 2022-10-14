## Call Signatures

                        ↓↓        ↓↓
        function add(a:number, b:number) {
            return a + b
        }
    ↓↓↓
    type Add = (a:number, b:number) => number;

        const add:Add = (a, b) => a + b;
                  ↑↑↑
    This way I can explain the type of my function
    before implementing.

## Overloading is why this long way exists.

Very bad example:

        type Add = {
            (a: number, b:number) : number
            (a: number, b:string) : number
        }
        const add: Add = (a, b) => {
            if(typeof b === "string) return a;
            return a + b;
        }

---

    type: Add = {
        (a:number, b:number) :number
        (a:number, b:number, c:number) :number
    }
    const add:Add = (a,b,c?:number) => {
        if(c) return a + b + can
        return a + b
    }

---

## In NextJS

        Router.push({
            path: "/home",
            state: 1
        })
        .push("/home")

---

## Polymorphism - blows my mind!@@

    poly means many:several:much:multi-
    morhos means form,structure

        type SuperPrint = {
            (arr: number[]):void
            (arr: boolean[]):void
            (arr: string[]):void
        }

        const superPrint: SuperPrint = (arr) => {
            arr.forEach(i => console.log(i))
        }

        superPrint([1,2,3,4])
        superPrint([true,false,true,true])
        superPrint(["a","b","c","d"])

// I want it to to work with any type. . .
superPring([1,2,true,false,"potato"])

    ↓↓↓ So we need to use generics ↓↓↓

    type SuperPrint = {
        <TypePlaceholder>(arr: TypePlaceholder[]):void
                        or for example
        <T>(arr: T[]) => T

        we don't have to write every single possible combination.
    }
    const superPrint: SuperPrint = (arr) => arr[0]
    const a = superPrint([1,2,true,false,"potato"])

    This is polymorphism !!!

## this is the hardest way to write generics btw. . .

## Recap

        could do :any but this doesn't protect you anymore!
        which is we use generics and have to do <T>

    order doesn't matter here ↓ but here ↓ it does
        type SuperPrint = <T, M>(a: T[], b:M) => T
    typescript learns

---

## OOP in TypeScript

    I love object oriented programming!@@

in JS we would normally write this.blahblah = blahblah, this.blablah. . . .

in typescript we don't need to do this ↑ ↑ ↑ do this ↓ ↓ ↓

        class Player {
            constructor(
                private firstName: string,
                private lastName: string,
                nickname: string
            ) {}
        }

const adam = new Player("Adam", "Sullivan", "adamochi");

### you cannot cannot create an instance of an 'abstract' class

    you can only extend from.

    Anything private inside of an abstract class cannot be accessed
    from outside.

A method is a function inside of a class
Methods - private works for methods as well as for properties.
You can also have abstract methods.

### What is an abstract method?

An abstract method is a method that you want everyone
that extends from the abstract class to implement. You
don't want to tell them how to implement it.

    If you want to have some fields that are protected
    from the outside world but want to have them accessible to
    classes extending from an abstract class you can use
    'protected' instead of private.
