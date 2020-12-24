import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { Country } from '../common/country';
import { State } from '../common/state';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private countryUrl="http://localhost:8080/api/countries";
  
  constructor(private httpClient:HttpClient) { }
  getCreditCardMonths():Observable<number[]>{
    let data:number[]=[];

    let startMonth:number=1;
    for(let theMonth=startMonth;theMonth<=12;theMonth++){
      data.push(theMonth);
    }
    return of(data);
  }

  getCreditCardYear():Observable<number[]>{
    let data:number[]=[];

    let startYear:number=new Date().getFullYear();

    let endYear:number=startYear+10;
    for(let theYear=startYear;theYear<=endYear;theYear++){
      data.push(theYear);
    }
    return of(data);
  }


  getCountries():Observable<GetCountries>{
    return this.httpClient.get<GetCountries>(this.countryUrl);

  }


  getStates(countryId:number):Observable<GetStates>{
    const stateUrl=`http://localhost:8080/api/states/search/findByCountryId?id=${countryId}`;

    return this.httpClient.get<GetStates>(stateUrl);
  }


}


interface GetCountries{
  _embedded:{
    country:Country[];
  }
}


interface GetStates{
  _embedded:{
    states:State[];
  }
}
