import {Component} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';

@Component({
  selector: 'app',
  template: "<p>Hello World!</p>"
})
class MeteorAngular2Seed {}

bootstrap(MeteorAngular2Seed);