import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from 'src/app/models/heroe.model';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  public heroList: Hero[] = [];
  public nameHero: string;
  public idHero: string = '';

  constructor(
    public router: Router,
    public heroesService: HeroesService
  ) {
  }

  ngOnInit(): void {
    this.getAllHeros();
  }

  public getAllHeros(): void {
    this.heroesService.getAllHeroes().subscribe(heroes => {
      this.heroList = heroes;
    })
  }

  public getHeroById(): void {
    if (this.idHero !== '') {
      this.heroesService.getHeroById(this.idHero).subscribe({
        next: hero => {
          this.heroList = [hero];
        },
        error: () => {
          this.heroList = [];
        },
      })
    } else {
      this.getAllHeros();
    }
  }

  public newHero(): void {
    this.router.navigate(['/heroes/new-hero'], {
      state: {
        heroList: this.heroList
      }
    });
  }

  public getHeroesByName(): void {
    this.heroesService.getHeroesByName(this.nameHero)
      .subscribe(heroes => {
        this.heroList = heroes;
      });
  }
}
