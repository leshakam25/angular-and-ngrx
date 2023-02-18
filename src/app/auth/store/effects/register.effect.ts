import {
  Actions,
  createEffect,
  ofType
} from "@ngrx/effects";
import {Injectable} from "@angular/core";
import {
  catchError,
  map
} from "rxjs/operators";
import {
  of,
  switchMap
} from "rxjs";
import {HttpErrorResponse} from "@angular/common/http";

import {AuthService} from "../../services/auth.service";
import {CurrentUserInterface} from "../../../shared/types/currentUser.interface";
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction
} from "src/app/auth/store/actions/register.action";

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            return registerSuccessAction({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              registerFailureAction({errors: errorResponse.error.errors})
            )
          })
        )
      })
    );
  })

  constructor(private actions$: Actions, private authService: AuthService) {
  }
}
