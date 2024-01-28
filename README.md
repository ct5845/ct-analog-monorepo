Reproduction of secondary entry points behaviour in AnalogJS.

Error seems to occur when index.ts is moved "up" a directory, from /src to the source root.
This is required(?) in order to change the paths from;

``````
      "@ct-analog-monorepo/libThree": ["libraries/libThree/src/index.ts"],
      "@ct-analog-monorepo/libThree/HelloWorldB": [
        "libraries/libThree/HelloWorldB/src/index.ts"
      ],
``````
to

````
      "@ct-analog-monorepo/libFour": ["libraries/libFour"],
      "@ct-analog-monorepo/libFour/*": ["libraries/libFour/*"],
````

# Apps

#### NX-App (Standard Angular)

```angular2html
nx run nx-app:serve:development
```
All four libraries successfully load, and 3 of the sub entry points load too.


#### Analog-App (Vite)
```angular2html
nx run analog-app:serve:development
```

First 3 libraries (and 2 sub entry points) load successfully but it errors on the fourth library. 
