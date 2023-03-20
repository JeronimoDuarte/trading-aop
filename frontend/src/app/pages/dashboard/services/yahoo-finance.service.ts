import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudService } from 'src/app/shareds/services/crud.service';

@Injectable({
  providedIn: 'root'
})
export class YahooFinanceService extends CrudService<any> {
  constructor(http: HttpClient) {
    super(http);
    this.endpoint = '/stock';
    
  }

  public getCompanies(): Observable<any> {
    this.endpoint = 'companies';
    return this.getAll();
  }
  public getDataCompany(company: string): Observable<any> {
    this.endpoint = 'stock';
    return this.getOne(company)
  }
}
