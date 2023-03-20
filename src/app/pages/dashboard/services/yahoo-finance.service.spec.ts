import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { YahooFinanceService } from './yahoo-finance.service';

describe('YahooFinanceService', () => {
  let service: YahooFinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,],
      providers: [YahooFinanceService]
    });
    service = TestBed.inject(YahooFinanceService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
