import { Component, OnInit, HostListener } from '@angular/core';
import { particleConfig } from 'src/app/configs/particleConfig';
import { UserService } from 'src/app/core/user.service';
import { BsDropdownConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public offerParticleParams = particleConfig;
  public isHeaderScrolled;
  public svgHeaderStyle = {
    'width.px': 32,
    'height.px': 32,
    fill: '#fff'
  };

  public offerParticleStyle = {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%',
    'z-index': -1,
    'background-color': '#f44336'
  };

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    const scrollY = event.path[1].scrollY;
    scrollY > 80 ? this.isHeaderScrolled = true : this.isHeaderScrolled = false;
  }

  public logout() {
    this.userService.logout();
  }

}
