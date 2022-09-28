import { HttpClient, HttpParams } from '@angular/common/http';
import { take, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';


export class StandardService<T> {

    constructor(protected http: HttpClient,
        protected url: any,
        protected serviceCore?: boolean) { }

    httpPost(registro: T, action?: string): Observable<T> {
        let urlservice = this.url;
        if (!!action) {
            urlservice += '/' + action;
        }
        return this.http.post<T>(urlservice, registro).pipe(take(1));
    }

    httpPut(registro: T): Observable<T> {
        return this.http.put<T>(this.url, registro).pipe(take(1));
    }

    httpDelete(id: number): Observable<T> {
        const params = new HttpParams().set('id', id.toString());
        return this.http.delete<T>(this.url, { params }).pipe(take(1));
    }

    httpGetId(id: any): Observable<T> {
        return this.http.get<T>(this.url + '/' + id).pipe(take(1));
    }

    httpGet(): Observable<T> {
         return this.http.get<T>(this.url).pipe(take(1));
    }
}
