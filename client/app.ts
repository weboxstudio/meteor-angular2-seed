import {Component} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';

@Component({
  directives: [],
  selector: 'app',
  templateUrl: 'client/app.html',
})
class MeteorAngular2Seed {}

bootstrap(MeteorAngular2Seed);