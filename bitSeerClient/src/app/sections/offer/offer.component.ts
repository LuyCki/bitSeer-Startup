import { Component } from '@angular/core';
import { particleConfig } from '../../configs/particleConfig';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent {
  public offerParticleParams = particleConfig;
  public svgOfferStyle = {
    'width.px': 60,
    'height.px': 60,
    fill: 'rgba(20,118,242,.8)'
  };
  public svgPlusStyle = {
    'width.px': 40,
    'height.px': 40,
    fill: 'rgba(20,118,242,.8)'
  }
  public offerParticleStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    'z-index': -1,
    'background-color': '#f44336'
  };

}
