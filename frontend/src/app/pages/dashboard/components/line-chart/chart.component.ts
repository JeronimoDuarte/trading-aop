import { Component, Input, OnChanges } from '@angular/core';
import { ChartDataset, ChartOptions, Color } from 'chart.js';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnChanges{
  @Input()
  data: any[] = [];
  @Input() typeChart: any | undefined;
   lineChartData: ChartDataset[] = [
    { data: [], label: 'Close Price' },
    { data: [], label: 'Diff1' },
    { data: [], label: 'DiffFirst' }
  ];

  public lineChartLabels: any[] = [];

  public lineChartOptions: ChartOptions = {
    responsive: true
  };

  constructor() {}
 
  public lineChartLegend = true;
  public lineChartPlugins = [];
  ngOnChanges() {
   
    setTimeout(() => {
     
      this.lineChartData[0].data = this.data.map(d => d.close);
      this.lineChartData[1].data = this.data.map(d => d.diff1);
      this.lineChartData[2].data = this.data.map(d => d.diffFirst);
      this.lineChartLabels = this.data.map(d => d.date);
    }, 3000);

  }
}
