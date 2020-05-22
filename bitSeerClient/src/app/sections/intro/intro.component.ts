import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent {
  public modalRef: BsModalRef;
  public slides = [
    { image: '../../../assets/intro/intro.png' },
    { image: '../../../assets/intro/intro2.png' },
    { image: '../../../assets/intro/intro3.png' }
  ];

  constructor(private modalService: BsModalService, public userService: UserService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  public register(firstName, lastName, email, password): void {
    const payload = {
      firstName,
      lastName,
      email,
      password
    };

    this.userService.register(payload);
    this.modalRef.hide();
  }

  public login(email, password): void {
    const payload = { email, password };

    this.userService.login(payload);
    this.modalRef.hide();
  }
}
