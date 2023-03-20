import { StatusCode } from "../enuns/status_code.enum";

export class NotificationModel{
    constructor(
        public readonly statusCode: StatusCode,
        public readonly message: string,
        public readonly animation: string,
         
    ){
        this.animation = 'small' || animation
    }
}