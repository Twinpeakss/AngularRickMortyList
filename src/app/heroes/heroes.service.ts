import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const defaultEndpoint = "https://rickandmortyapi.com/api/character/";

@Injectable()
export class ConfigService {

    
  constructor(private http: HttpClient) {
   }

   getList() {
    this.http.get<any>(defaultEndpoint).subscribe(
      response => {
        console.log(response);
        return response;
      }
      
    )
    
  }


}