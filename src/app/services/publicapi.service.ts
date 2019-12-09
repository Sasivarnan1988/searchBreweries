import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class PublicapiService {

  constructor(private httpclient: HttpClient) { }

  breweriesListURL: string = environment.publicapiurl;


  /**
  * Http call to the public api URL - Brewery data.
  */
  public getBreweriesList(): Observable<any> {
    return this.httpclient
      .get(this.breweriesListURL);
  }

}
