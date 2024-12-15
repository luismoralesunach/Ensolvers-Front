import { Note } from "./Notes";

export interface User {
    email:string;
    password:string;

}

export interface RegisterUser extends User{

    name: string
}

export interface LoggedUser {

    id: number;
    name: string;
    email: string
    notes: []

}