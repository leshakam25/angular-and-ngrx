import {Actions, createEffect, ofType} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {catchError, map} from "rxjs/operators";
import {of, switchMap} from "rxjs";

import {AuthService} from "../../services/auth.service";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {registerAction, registerFailureAction, registerSuccessAction} from "src/app/auth/store/actions/register.action";

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap(({request}) => {
      return this.authService.register(request).pipe(
        map((currentUser: CurrentUserInterface) => {
          return registerSuccessAction({currentUser})
        }),
        catchError(()=>{
          return of(registerFailureAction)
        })
      )
    })
  ))

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
