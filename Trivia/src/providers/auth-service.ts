import { Injectable } from '@angular/core';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
import { NavController } from "ionic-angular";

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;

  constructor(public auth$: AngularFireAuth) {
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  signIn(email:string,password:string): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
      email: email,
      password: password,
    },{
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    });
  }

  signOut(): void {
    this.auth$.logout();
  }
}