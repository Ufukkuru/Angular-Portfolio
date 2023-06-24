import { Component } from '@angular/core';
import { SharedModule } from 'src/app/common/shared.module';
import * as Email from 'emailjs-com';
import { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public sendEmail(e: Event) {
    e.preventDefault();
    Email.sendForm('service_zpzrepw', 'template_lxv5naf', e.target as HTMLFormElement, 'kZ5QksfTh786n8Ke4')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}
