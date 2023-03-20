import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService<T> {
  protected urlApi = 'http://localhost:3100';
  protected endpoint: string | undefined;
  constructor(protected http: HttpClient, ) {}
   headers = new HttpHeaders({
    'Content-Type': 'application/json',
    
  });

  public getAll(): Observable<T[]> {
    const url = `${this.urlApi}/${this.endpoint}`;
    return this.http.get<T[]>(url, {headers: this.headers});
  }

  public getOne(id: any): Observable<T> {
    const url = `${this.urlApi}/${this.endpoint}`;
    return this.http.get<T>(`${url}/${id}`,  {headers: this.headers});
  }

  public create(data: T): Observable<T> {
    const url = `${this.urlApi}/${this.endpoint}`;
    return this.http.post<T>(url, data,  {headers: this.headers});
  }

  public update(id: number, data: T): Observable<T> {
    const url = `${this.urlApi}/${this.endpoint}`;
    return this.http.put<T>(`${url}/${id}`, data,  {headers: this.headers});
  }

  public delete(id: number): Observable<T> {
    const url = `${this.urlApi}/${this.endpoint}`;
    return this.http.delete<T>(`${url}/${id}`);
  }
}
