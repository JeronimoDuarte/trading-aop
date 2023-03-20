import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CoreModule } from 'src/app/core/core.module';
import { NgChartsModule  } from 'ng2-charts';
import {  HttpClient } from '@angular/common/http';
import { YahooFinanceService } from './services/yahoo-finance.service';
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { TableComponent } from './components/table/table.component';
import { ChartComponent } from './components/line-chart/chart.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';




@NgModule({
  declarations: [
    HomeDashComponent,
    TableComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    CoreModule,
    SharedsModule,
    NgChartsModule,
    NgxSkeletonLoaderModule.forRoot({ 
      animation: 'progress', 
      loadingText: 'This item is actually loading...',
      theme: {
        // Enabliong theme combination
        extendsFromRoot: true,
        // ... list of CSS theme attributes
        height: '100vh',
        width: '100%',
      }
    },
   ),
    
  ],
  providers: [
    YahooFinanceService,
    CurrencyPipe,
    HttpClient,
    
  ]
})
export class DashboardModule { }
