import { Component, OnInit} from '@angular/core';
import { KeycloakSecurityService } from './services/keycloak-security.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'sc-ui';

  constructor(public securityService: KeycloakSecurityService){

  }

  ngOnInit(): void {
    console.log('AppComponent');
  }


}
