import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { map } from 'rxjs/operators';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { YahooFinanceService } from '../services/yahoo-finance.service';
import { CompanyModel } from 'src/app/shareds/models/company.model';
import { NotificationModel } from 'src/app/shareds/models/notification.model';

import * as moment from 'moment';

@Component({
  selector: 'app-home-dash',
  templateUrl: './home-dash.component.html',
  styleUrls: ['./home-dash.component.scss']
})
export class HomeDashComponent implements OnInit {

  companies!: CompanyModel[];
  prices: any[] = [];
  lineChartData: any;

  constructor(private yahooFinanceService: YahooFinanceService) {
    Chart.register(Annotation)
  }

  stockData: any;
  formatoMoeda = 'BRL';
  ngOnInit(): void {
    this.getCompanies();
    const evt = {target: {
      value: 'GOOG'
    }}

    this.setCompany(evt);
  }

  getCompanies() {

    this.yahooFinanceService.getCompanies().subscribe(
      {
        next: (res) => {
          const data = res.data;
          const model = new CompanyModel("", "");
          this.companies = model.getAlphabeticalCompanyNames(data);
        },
        error: (error) => {
          this.notification = this.setMessageErrors(error.status_code)
        }
      }
    )
  }
  company: string = ''
  setCompany(event: any) {
    this.prices = [];
    const company = event.target.value;
    this.company = company;
    this.yahooFinanceService
      .getDataCompany(company)
      .pipe(
        this.mapToDataTable()
      ).subscribe((prices: any) => {
       this.constructTable(prices)
      });
    
  }

  mapToDataTable(){
   return map((response: any) => {
      const prices = response.chart.result[0].indicators.quote[0].close;
      const timestamps = response.chart.result[0].timestamp;

      return timestamps.map((timestamp: any, index: number) => {
        const date = moment.unix(timestamp).format("MM/DD/YYYY")
        const close = prices[index];

        return { date, close };
      });
    })
  }
  dates: any = {
    
  }
  constructTable(prices: any){
    const pricesLength = prices.length;
    const firstPrice = prices[0].close;

    for (let i = pricesLength - 1; i > pricesLength - 31; i--) {
      const todayPrice = prices[i].close;
      const yesterdayPrice = prices[i - 1].close;
      const priceDiff1 = (todayPrice - yesterdayPrice) / yesterdayPrice * 100;
      const firstPriceDiff = (todayPrice - firstPrice) / firstPrice * 100;

      this.prices.push({
        day: pricesLength - i,
        date: prices[i].date,
        close: todayPrice,
        diff1: priceDiff1,
        diffFirst: firstPriceDiff
      });
    }
  }
  
  typeChart = 'line';
  charts = [ 'bar', 'line', 'pie', 'table']
  setTypeChart(event: any){
    console.log("TEST EVENT ", event)
    this.typeChart = event.target.value;
  }

  notification: NotificationModel | undefined;
  setMessageErrors(notification: NotificationModel) {
    return notification;
  }


}


