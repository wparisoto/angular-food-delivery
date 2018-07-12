
import { Injectable } from '@angular/core';

import { MEAT_API } from '../app.api';
import { Observable } from 'rxjs/Observable';

import { Restaurant } from './restaurant/restaurant.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErroHandler } from '../ErroHandler';

@Injectable()
export class RestaurantsService {

    constructor(private http: Http){}

     restaurants(): Observable<Restaurant[]>{
          return this.http
                   .get(`${MEAT_API}/restaurants`)
                   .map(res => res.json())
                   .catch(ErroHandler.handleError)
     }

     restaurantById(id: string) : Observable<Restaurant>{
        return this.http
            .get(`${MEAT_API}/restaurants/${id}`)
            .map(res => res.json())
            .catch(ErroHandler.handleError)
     }

     reviewsOfRestaurant(id: string) : Observable<any>{
        return this.http
            .get(`${MEAT_API}/restaurants/${id}/reviews`)
            .map(res => res.json())
            .catch(ErroHandler.handleError)
     }
}