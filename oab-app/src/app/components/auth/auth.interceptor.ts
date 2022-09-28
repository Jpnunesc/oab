import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';
import { HttpEvent, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { LoadingService } from '../service/loading.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router, private loadingService: LoadingService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token') !== null) {
            const cloneReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`)
            });
            return next.handle(cloneReq).pipe(
                tap(
                    succ => { },
                    err => {
                        if (err.status === 401) {
                            this.loadingService.stop();
                            this.router.navigateByUrl('user/login');

                        }
                        if (err.status === 404 || err.status === 500 || err.status === 400 ||  err.status === 415 || !err.status) {
                            this.loadingService.stop();
                        }
                    }
                )
            );
        } else {
            return next.handle(req.clone());
        }
    }
}
