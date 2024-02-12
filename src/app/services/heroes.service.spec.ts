import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HeroesService } from './heroes.service';
import { Hero } from '../models/heroe.model';

describe('HeroesService', () => {
    let service: HeroesService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HeroesService]
        });
        service = TestBed.inject(HeroesService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should getAllHeroes', () => {
        const mockHeroes: Hero[] = [
            { id: '1', name: 'Superman', mainPower: 'Pegar', nationality: 'Argentina', nickName: 'ave', years: 25 },
            { id: '2', name: 'Batman', mainPower: 'Volar', nationality: 'Brasil', nickName: 'a', years: 22 }
        ];

        service.getAllHeroes().subscribe(heroes => {
            expect(heroes).toEqual(mockHeroes);
        });

        const req = httpTestingController.expectOne('http://localhost:3000/heroes/');
        expect(req.request.method).toEqual('GET');
    });

    it('should addHero', () => {
        const mockHero: Hero = { id: '1', name: 'Superman', mainPower: 'Pegar', nationality: 'Argentina', nickName: 'ave', years: 25 }

        service.addHero(mockHero).subscribe(response => {
            expect(response).toBeTruthy();
        });

        const req = httpTestingController.expectOne('http://localhost:3000/heroes/');
        expect(req.request.method).toEqual('POST');
    });

    it('should deleteHero', () => {
        const heroId = '1';

        service.deleteHero(heroId).subscribe(response => {
            expect(response).toBeTruthy();
        });

        const req = httpTestingController.expectOne(`http://localhost:3000/heroes/${heroId}`);
        expect(req.request.method).toEqual('DELETE');
    });

    it('should updateHero', () => {
        const mockHero: Hero = { id: '1', name: 'Superman', mainPower: 'Pegar', nationality: 'Argentina', nickName: 'ave', years: 25 }

        service.updateHero(mockHero).subscribe(response => {
            expect(response).toBeTruthy();
        });

        const req = httpTestingController.expectOne(`http://localhost:3000/heroes/${mockHero.id}`);
        expect(req.request.method).toEqual('PUT');
    });

    it('should getHeroesByName', () => {
        const nameSearch = 'Superman';
        const mockHeroes: Hero[] = [
            { id: '1', name: 'Superman', mainPower: 'Pegar', nationality: 'Argentina', nickName: 'ave', years: 25 },
            { id: '2', name: 'Batman', mainPower: 'Volar', nationality: 'Brasil', nickName: 'a', years: 22 }
        ];

        service.getHeroesByName(nameSearch).subscribe(heroes => {
            expect(heroes).toEqual([mockHeroes[0]]);
        });

        const req = httpTestingController.expectOne('http://localhost:3000/heroes/');
        expect(req.request.method).toEqual('GET');
    });
});