import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { StandardService } from 'src/app/components/service/Standart.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams  } from '@angular/common/http';

const url = `${environment.URL}/product`;

@Injectable({
  providedIn: 'root'
})
export class ProductService extends StandardService<any>  {
  constructor(
     http: HttpClient) {
    super(http, url, true)
  }
  getById(id: number): Observable<any> {
    const params = new HttpParams().set('id', id.toString());
    return this.http.get(this.url, { params });
  }

  getByFilter(filter: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('sortField', filter.sortField || '');
    params = params.append('sortOrder', filter.sortOrder || '');
    params = params.append('page', filter.page ? filter.page.toString() : '1');
    params = params.append('pageSize', filter.pageSize ? filter.pageSize.toString() : '1');
    if (filter.name) {
      params = params.append('name', filter.name);
    }
    return this.http.get(this.url, { params });
  }
  post(product: any, callback?: any) {
    const formData = new FormData();
    formData.append('product', JSON.stringify(product));
    this.http.post<any>(this.url, formData)
      .subscribe((resp: any) => {
        callback(resp);
      });
  }
}
