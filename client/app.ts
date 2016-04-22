import {Component} from 'angular2/core';
import {bootstrap} from 'angular2-meteor-auto-bootstrap';

import {LoginButtons} from 'angular2-meteor-accounts-ui/login-buttons';

@Component({
  directives: [LoginButtons],
  selector: 'app',
  templateUrl: 'client/app.html',
})
class MeteorAngular2Seed {}

bootstrap(MeteorAngular2Seed);