import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesComponent } from './heroes.component';
import { HeroesService } from 'src/app/services/heroes.service';
import { of } from 'rxjs';
import { Hero } from 'src/app/models/heroe.model';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;
  let heroesService: HeroesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      imports: [ 
        RouterTestingModule,
        HttpClientTestingModule,
        MatIconModule 
       ],
      providers: [ HeroesService ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],

    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    heroesService = TestBed.inject(HeroesService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getAllHeroes onInit', () => {
    const mockHeroes: Hero[] = [
      { id: '1', name: 'Superman',mainPower:'Pegar',nationality:'Argentina',nickName:'ave',years:25 },
      { id: '2', name: 'Batman',mainPower:'Volar',nationality:'Brasil',nickName:'a',years:22  }
    ];
    spyOn(heroesService, 'getAllHeroes').and.returnValue(of(mockHeroes));
    component.ngOnInit();
    expect(component.heroList).toEqual(mockHeroes);
  });

  it('should getHeroById', () => {
    const mockHero: Hero = { id: '1', name: 'Superman',mainPower:'Pegar',nationality:'Argentina',nickName:'ave',years:25 };
    spyOn(heroesService, 'getHeroById').and.returnValue(of(mockHero));
    component.idHero = '1';
    component.getHeroById();
    expect(component.heroList).toEqual([mockHero]);
  });

  it('should getHeroesByName', () => {
    const mockHeroes: Hero[] = [
      { id: '1', name: 'Superman',mainPower:'Pegar',nationality:'Argentina',nickName:'ave',years:25 },
      { id: '2', name: 'Batman',mainPower:'Volar',nationality:'Brasil',nickName:'a',years:22  }
    ];
    const heroName = 'Superman';
    spyOn(heroesService, 'getHeroesByName').and.returnValue(of(mockHeroes));
    component.nameHero = heroName;
    component.getHeroesByName();
    expect(component.heroList).toEqual(mockHeroes);
  });


});