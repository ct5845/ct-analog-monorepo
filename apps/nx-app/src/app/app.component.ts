import { Component } from '@angular/core';
import { NxWelcomeComponent } from './nx-welcome.component';
import { LibFourComponent } from '@ct-analog-monorepo/libFour';
import { LibOneComponent } from '@ct-analog-monorepo/libOne';
import { LibThreeComponent } from '@ct-analog-monorepo/libThree';
import { LibTwoComponent } from '@ct-analog-monorepo/libTwo';
import { helloWorldA } from '@ct-analog-monorepo/libTwo/HelloWorldA';
import { helloWorldB } from '@ct-analog-monorepo/libThree/HelloWorldB';
import { helloWorldC } from '@ct-analog-monorepo/libFour/HelloWorldC';

@Component({
  standalone: true,
  imports: [ NxWelcomeComponent, LibFourComponent, LibOneComponent, LibThreeComponent, LibTwoComponent ],
  selector: 'ct-analog-monorepo-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  helloWorldA = helloWorldA;
  helloWorldB = helloWorldB;
  helloWorldC = helloWorldC;
}
