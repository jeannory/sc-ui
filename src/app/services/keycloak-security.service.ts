import { Injectable } from '@angular/core';

declare var Keycloak: any;
@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  public kc;

  constructor() { }

  init() {
    return new Promise((resolve, reject)=>{
      console.log('security Initialisation ...');
      this.kc = new Keycloak({
        url: 'http://192.168.1.35:8099/auth/',
        realm: 'sc-project',
        clientId: 'sc-ui'
      });
      this.kc.init({
        onLoad: 'check-sso',
        promiseType: 'native'
      }).then((authenticated) => {
        console.log(this.kc.token);
        resolve({auth: authenticated, token: this.kc.token});
      }).catch(err => {
        reject(err);
      });
    });
  }

  // init() {
  //   return new Promise((resolve, reject)=>{
  //     console.log('security Initialisation ...');
  //     this.kc = new Keycloak({
  //       url: 'http://localhost:8080/auth/',
  //       realm: 'ecom-realm',
  //       clientId: 'AngularProductsApp'
  //     });
  //     this.kc.init({
  //       onLoad: 'check-sso',
  //       promiseType: 'native'
  //     }).then((authenticated) => {
  //       console.log(this.kc.token);
  //       resolve({auth: authenticated, token: this.kc.token});
  //     }).catch(err => {
  //       reject(err);
  //     });
  //   });
  // }

}