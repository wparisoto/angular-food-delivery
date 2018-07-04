
import { Injectable } from "@angular/core";

import { MEAT_API } from "../app.api";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";

@Injectable()
export class RestaurantsService {

    constructor(private http: Http){}

     restaurants(): Observable<Response>{
         return this.http
                  .get(`${MEAT_API}/restaurants`);
                  
         //http.get('people.json').subscribe((res:Response) => this.people = res.json());

     } 

}