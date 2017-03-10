import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<hr /><span>Test and Learn Angular 2</span><h1>Hello {{name}}</h1>`,
})
export class MyAppComponent  { name = 'Scott'; }
