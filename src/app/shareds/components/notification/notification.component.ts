import { Component, Input } from '@angular/core';
import { StatusCode } from '../../enuns/status_code.enum';
import { NotificationModel } from '../../models/notification.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('boxAnimation', [
      state('small', style({
        transform: 'scale(1)',
        backgroundColor: 'red'
      })),
      state('large', style({
        transform: 'scale(1.5)',
        backgroundColor: 'blue'
      })),
      transition('small <=> large', animate('500ms ease-in-out'))
    ])
  ]
})
export class NotificationComponent {
  @Input() notification!: NotificationModel;
  state = 'small'
  nameClassNotification(status: StatusCode): String{
    switch (status) {
      case StatusCode.Forbidden:
        this.state = this.state === 'small' ? 'large' : 'small';
          return 'notification notification-error'
      case StatusCode.InternalServerError:
        return 'notification notification-error'
      case StatusCode.NotFound:
        return 'notification notification-alert'        
      case StatusCode.ServiceUnavailable:
        return 'notification notification-error' 
      case StatusCode.Unauthorized:
        return 'notification notification-alert'         
      default:
        return 'notification notification-default'
    }
  }
 
}
