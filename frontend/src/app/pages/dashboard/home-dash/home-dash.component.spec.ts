import { ComponentFixture, flush, TestBed,  fakeAsync, tick  } from '@angular/core/testing';
import { NgChartsModule } from 'ng2-charts';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { throwError } from 'rxjs';
import { CoreModule } from 'src/app/core/core.module';
import { SharedsModule } from 'src/app/shareds/shareds.module';
import { ChartComponent } from '../components/line-chart/chart.component';
import { TableComponent } from '../components/table/table.component';
import { YahooFinanceService } from '../services/yahoo-finance.service';

import { HomeDashComponent } from './home-dash.component';

describe('HomeDashComponent', () => {
  let component: HomeDashComponent;
  let fixture: ComponentFixture<HomeDashComponent>;
  let element: HTMLElement;
  let yahooService: YahooFinanceService
 
  beforeEach(async () => {
    return await TestBed.configureTestingModule({
      imports: [NgChartsModule, SharedsModule, CoreModule, NgxSkeletonLoaderModule],
      declarations: [HomeDashComponent, TableComponent, ChartComponent],
      providers: [YahooFinanceService]
      
    })
    
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDashComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
    yahooService = TestBed.inject(YahooFinanceService);
   
  });


  it('You should check if the Typechart with Table Value will show the table', fakeAsync(() => {
    // Código do teste aqui
    component.typeChart = 'table';
    component.prices = [{
      day: 1,
      date: 1679324197,
      diff1: 20,
      diffFirst: 2

    }]
    // Use tick() para avançar o tempo dentro da zona fakeAsync
    tick(1000);
    fixture.detectChanges();
    const tableElement = element.querySelector('app-table');
    expect(tableElement).toBeTruthy();
    flush()
    // Asserções aqui
  }));

  it('You should check if the Typechart with value bar will show the graph', fakeAsync(() => {
    // Código do teste aqui
    component.typeChart = 'bar';
    component.prices = [{
      day: 1,
      date: 1679324197,
      diff1: 20,
      diffFirst: 2

    }]
    
    tick(1000);
    fixture.detectChanges();
    const tableElement = element.querySelector('app-chart');
    expect(tableElement).toBeTruthy();
    flush()
    // Asserções aqui
  }));

  it('It should make two selects appear', () => {

    expect(component).toBeTruthy();
  
    const formELement = fixture.debugElement.nativeElement.querySelector(".head-filter");
    const inputElements = formELement.querySelectorAll('select');

    expect(inputElements.length).toEqual(2);
});



});
