import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';  /////// TAP

@Injectable()
export class DebugInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Richiesta dal log interceptor:', request);
    return next.handle(request).pipe(tap(ris => {
        console.log('Risposta dal log interceptor:', ris)
    }));
}
}
