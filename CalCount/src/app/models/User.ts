export class User{
    constructor(private name:string, private email:string, private password:string, 
        private height:number, private weight:number) {
            this.name = name;
            this.email = email;
            this.password = password;
            this.height = height;
            this.weight = weight;
        }
    getName(){
        return this.name
    }

    getEmail(){
        return this.email
    }

    getPassword(){
        return this.password
    }

    getHeight(){
        return this.height
    }

    getWeight(){
        return this.weight
    }
}