Steps taken

```
npx create-nx-workspace@latest ct-analog-monorepo --preset=angular-monorepo // delete nx created angular app
npm i -D @analogjs/platform
npx nx g @analogjs/platform:app analog-app
```

```
npm i --force 
```
Had to force install because of this error (have also tried updating package.json versions but error end error still persits):
```
npm WARN While resolving: @nx/vite@17.2.8
npm WARN Found: vite@4.5.2
npm WARN node_modules/vite
npm WARN   dev vite@"^4.4.8" from the root project
```

Create library and simple component
```
nx g @nx/angular:library --name=libOne --directory=libraries/libOne --projectNameAndRootFormat=as-provided --no-interactive
```

Update (home.page.ts)
```
import { Component } from '@angular/core';
import { AnalogWelcomeComponent } from './analog-welcome.component';
import { LibOneComponent } from '@ct-analog-monorepo/libOne';


@Component({
  selector: 'analog-app-home',
  standalone: true,
  imports: [ AnalogWelcomeComponent, LibOneComponent ],
  template: `<ct-analog-monorepo-lib-one> </ct-analog-monorepo-lib-one>`,
})
export default class HomeComponent {}

```

On running

```
nx run analog-app:serve:development
```

For a instant you can see the `<p>libOne works!</p>` message but then it disappears and an error in the console of;

```
ERROR RuntimeError: NG04002: Cannot match any routes. URL Segment: '@fs/<my-source>/ct-analog-monorepo/libraries/src/index.ts'

```

Appears, this also happens when the library happens to buildable or publishable.
