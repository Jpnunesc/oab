import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { StandardService } from 'src/app/components/service/Standart.service';
import { environment } from 'src/environments/environment';


const url = `${environment.URL}/user`;

@Injectable({
  providedIn: 'root'
})
export class UserService extends StandardService<any>  {
  constructor(
    http: HttpClient) {
    super(http, url, true)
  }
}
