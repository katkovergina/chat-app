import { Message } from './message.model';
//data streams:
//newMessages - emits each new Message only once
  //is a subject that will publish each new message only once
//messages - emits an array of the current Messages
//updates - perfoms operations on messages

import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { Thread } from 'app/thread/thread.model';
import { User } from 'app/user/user.model';

@Injectable({
    providedIn: 'root'
})

export class MessagesService {

    newMessages: Subject<Message> = new Subject<Message>()

    //the messages stream emits ad array of the most recent Messages
    messages: Observable<Message[]>

    //helper method to add Messages to this stream
    addMessage (message: Message) {
        this.newMessages.next(message)
    }

    //takes a Thread and a User and returns a new stream of Messages 
    //that are filtered on thar Thraed and not authored by the User
    
    messagesForThreadUser(thread: Thread, user: User): Observable<Message> { 
        return this.newMessages.filter((message: Message) => {
            return (message.thread.id === thread.id) && (message.author.id !== user.id)
        })
    }
}

