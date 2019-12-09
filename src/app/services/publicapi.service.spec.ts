import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { PublicapiService } from './publicapi.service';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('PublicapiService', () => {

  let publicapiservice: PublicapiService;
  let mockdataservice: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PublicapiService]
    });
    publicapiservice = TestBed.get(PublicapiService);
    mockdataservice = TestBed.get(HttpTestingController);
  });


  it('should retrieve breweries list', () => {
    const dummyData = [
      {
        name: 'Trim Tab Brewing',
        brewery_type: 'micro'
      },
      {
        name: 'Avondale Brewing Co',
        brewery_type: 'micro'
      }
    ]

    publicapiservice.getBreweriesList().subscribe(breweries => {
      expect(breweries.length).toBe(2);
    })

    const request = mockdataservice.expectOne(`https://api.openbrewerydb.org/breweries`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyData);
    mockdataservice.verify();
  });
});


