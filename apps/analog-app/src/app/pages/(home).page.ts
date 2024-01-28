import { Component } from '@angular/core';
import { LibOneComponent } from '@ct-analog-monorepo/libOne';
import { LibTwoComponent } from '@ct-analog-monorepo/libTwo';
import { LibThreeComponent } from '@ct-analog-monorepo/libThree';


@Component({
  selector: 'analog-app-home',
  standalone: true,
  imports: [ LibOneComponent, LibTwoComponent, LibThreeComponent ],
  template: `
    <ct-analog-monorepo-lib-one />
    <ct-analog-monorepo-lib-two />
    <ct-analog-monorepo-lib-three />`
})
export default class HomeComponent {
}
