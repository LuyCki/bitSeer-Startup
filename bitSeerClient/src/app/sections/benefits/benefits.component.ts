import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {

  public svgBenefitsStyle = {
    'width.px': 100,
    'height.px': 100,
    fill: '#f84443c7'
  };

  public scrollRevealBenefitsConfig = {
    reset: true,
    origin: 'bottom',
    distance: '100%',
    duration: 2000
  };

}
