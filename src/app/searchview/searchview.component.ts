import { Component, OnInit } from '@angular/core';
import { PublicapiService } from '../services/publicapi.service';
import { breweries } from '../model/breweries.model';

@Component({
  selector: 'app-searchview',
  templateUrl: './searchview.component.html',
  styleUrls: ['./searchview.component.css']
})

/**
  * View component for the brewery search
  */

export class SearchviewComponent implements OnInit {

  constructor(private publicApi: PublicapiService) { }
  listBreweries: breweries[];
  filteredBreweries: breweries[];

  private _searchTerm: string;
  public errorMessage;
  public disableDataView = true;

  public get searchTerm(): string {
    return this._searchTerm;
  }

  public set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredBreweries = this.sortBreweriesBasedonInput(this.filterBreweriesBasedonInput(value));
  }

  /**
  * Filters the Breweries list based on the name.
  */

  filterBreweriesBasedonInput(searchString: string) {
    return this.listBreweries.filter(breweries=>
          breweries.name.toLocaleLowerCase().indexOf(searchString.toLowerCase()) != -1);
  }

  /**
  * Sort the Breweries list based on the name
  */
  sortBreweriesBasedonInput(brewery : breweries[])  {
      console.log("Inside sorting"+brewery);
      return brewery.sort((breweryA: breweries , breweryB: breweries)=>{
        if(breweryA.name > breweryB.name) {
          return 1 ;
        } else {
        return -1;
        }
      })  
    }

  ngOnInit() {
    this.publicApi.getBreweriesList()
        .subscribe(
          data=>{
            this.listBreweries = data;
            this.filteredBreweries = this.listBreweries;
            console.log(this.listBreweries);
          },
          error=>{
            this.errorMessage = error         ;
            this.disableDataView = false;
          }
        );
  }
}

 
