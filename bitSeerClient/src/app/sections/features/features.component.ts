import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  public scrollRevealFeaturesConfig = {
    reset: true,
    origin: 'bottom',
    distance: '150%',
    duration: 2000
  };

  public scrollRevealFeatureImageConfig = {
    reset: true,
    duration: 2000
  };

  public svgFeaturesStyle = {
    'width.px': 42,
    'height.px': 42,
    fill: '#f44336'
  };

}
