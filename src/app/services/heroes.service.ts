import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Hero } from '../models/heroe.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  public url = 'http://localhost:3000/heroes/';

  constructor(private http:HttpClient) { }

  public getAllHeroes(): Observable<Hero[]>{
    return this.http.get<Hero[]>(this.url);
  }

  public getHeroById(idHero:string): Observable<Hero>{
    return this.http.get<Hero>(`${this.url}${idHero}`);
  }

  public addHero(heroData:Hero): Observable<Hero>{
    const uniqueId = uuidv4().slice(0,3);
    heroData.id = uniqueId;
    return this.http.post<Hero>(this.url,heroData);
  }

  public deleteHero(idHero:string): Observable<Hero>{
    return this.http.delete<Hero>(`${this.url}${idHero}`);
  }

  public updateHero(heroData:Hero): Observable<Hero>{
    return this.http.put<Hero>(`${this.url}${heroData.id}`,heroData);
  }

  public getHeroesByName(nameSearch: string): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url).pipe(
      map(heroes => {
        return heroes
          .filter(heroesFilter => heroesFilter.name.toLowerCase().includes(nameSearch.toLowerCase()))
      })
    );
  }

}