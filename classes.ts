interface UserInterface{
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface{
    name: string;
    email: string;
    age: number;

    // public, protected, private

    constructor(name: string, email: string, age: number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('User Created: ' + this.name);
    }

    register(){
        console.log(this.name + ' is now registered');;
    }

    payInvoice(){
        console.log(this.name + ' paid invoice');
    }
}

class Member extends User{
    id: number;

    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age);
        this.id = id;
    }

    payInvoice(){
        super.payInvoice();
    }
}

let mike: User = new Member(1, 'Michael Chang', 'mike@gmail.com', 20);
mike.payInvoice();

// console.log(michael.age);

// let michael = new User('Michael Chang', 'michaelIsAwesome@gmail.com', 20);

// michael.register();