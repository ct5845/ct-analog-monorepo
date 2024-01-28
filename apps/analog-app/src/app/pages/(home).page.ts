import { Component } from '@angular/core';
import { LibOneComponent } from '@ct-analog-monorepo/libOne';
import { LibTwoComponent } from '@ct-analog-monorepo/libTwo';
import { LibThreeComponent } from '@ct-analog-monorepo/libThree';
import { LibFourComponent } from '@ct-analog-monorepo/libFour';
import { helloWorldA } from '@ct-analog-monorepo/libTwo/HelloWorldA';
import { helloWorldB } from '@ct-analog-monorepo/libThree/HelloWorldB';
import { helloWorldC } from '@ct-analog-monorepo/libFour/HelloWorldC';

@Component({
  selector: 'analog-app-home',
  standalone: true,
  imports: [ LibOneComponent, LibTwoComponent, LibThreeComponent, LibFourComponent ],
  template: `
    <ct-analog-monorepo-lib-one />
    <hr/>
    <ct-analog-monorepo-lib-two />
    <div>{{ helloWorldA }}</div>
    <hr/>
    <ct-analog-monorepo-lib-three />
    <div>{{ helloWorldB }}</div>
    <hr/>
    <ct-analog-monorepo-lib-four />
    <div>{{ helloWorldC }}</div>
  `
})
export default class HomeComponent {
  helloWorldA = helloWorldA;
  helloWorldB = helloWorldB;
  helloWorldC = helloWorldC;
}
