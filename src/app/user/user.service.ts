import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { User } from "./user.model";

@Injectable({
    providedIn: 'root'
})

//provide a place where our appliction can learn about the current user 
//and also notify the rest of the application if the current user changes

export class UserService {

    //stream which we will use to manage our current user
    // currentUser is a subject stream. it's a BehaviorSubject which will contain User
    // first value of the stream is null 
    //subject is a read/write stream
    //any part of our app can subscribe to the UserService.currentService stream and
    //immediately know who the current user is
    currentUser: Subject<User> = new BehaviorSubject<User>(null)

    public setCurrentUser(newUser: User): void {
        this.currentUser.next(newUser)
    }
}

export const UserServiceInjectables: Array<any> = [
    UserService
]