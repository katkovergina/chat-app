import { User } from '../user/user.model'
import { Thread } from '../thread/thread.model'
import { uuid } from '../util/uuid'
import { StringMap } from '@angular/compiler/src/compiler_facade_interface'

export class Message {
    id: string
    sentAt: Date
    isRead: boolean
    author: User
    text: string
    thread: string

    constructor(obj?: any) {
        this.id = obj && obj.id || uuid()
        this.isRead = obj && obj.isRead || false
        this.sentAt = obj && obj.sentAt || new Date()
        this.author = obj && obj.author || null
        this.text = obj && obj.text || null
        this.id = obj && obj.thread || null
    }
}

//we can create a new Message using whatever data we have available 
//we dont't have to worry about the order of the arguments
