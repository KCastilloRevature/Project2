export class User{
    constructor(public name:string, public email:string, public password:string, 
        public height:number, public weight:number, public friends:Array<User>) {
            this.name = name;
            this.email = email;
            this.password = password;
            this.height = height;
            this.weight = weight;
            this.friends = friends
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

    getFriends(){
        return this.friends
    }
}