

export interface User {
    email:string;
    password:string;

}

export interface RegisterUser extends User{

    name: string
}