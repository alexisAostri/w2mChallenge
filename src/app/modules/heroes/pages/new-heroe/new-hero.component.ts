import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';
import { Hero } from 'src/app/models/heroe.model';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.scss']
})
export class NewHeroComponent {

  public newHeroForm: FormGroup;
  public isEdit: boolean = false;
  public title: string = 'Nuevo héroe'
  public hero: Hero;
  private heroList: Hero[];

  constructor(
    private formBuilder: FormBuilder,
    private location: Location,
    private heroesService: HeroesService,
    private router: Router
  ) {
    this.initForm();
    this.hero = this.router.getCurrentNavigation()?.extras?.state?.['hero'];
    this.heroList = this.router.getCurrentNavigation()?.extras?.state?.['heroList']
    if (this.hero) {
      this.loadHero();
    }
  }

  private initForm(): void {
    this.newHeroForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      nickName: ['', Validators.required],
      mainPower: ['', Validators.required],
      years: ['', Validators.required],
      nationality: ['', Validators.required],
    });
  }

  public loadHero(): void {
    this.title = 'Editar héroe'
    this.newHeroForm.get('id')?.setValue(this.hero.id);
    this.newHeroForm.get('name')?.setValue(this.hero.name);
    this.newHeroForm.get('nickName')?.setValue(this.hero.nickName);
    this.newHeroForm.get('mainPower')?.setValue(this.hero.mainPower);
    this.newHeroForm.get('years')?.setValue(this.hero.years);
    this.newHeroForm.get('nationality')?.setValue(this.hero.nationality);
  }

  public cancel(): void {
    this.location.back();
  }

  public save(formValue: Hero): void {
    if (this.checkExisting(formValue.name)) {
      const nameControl = this.newHeroForm.get('name');
      nameControl?.markAsTouched();
      nameControl?.setErrors({ 'existingName': true });
    } else {
      if (this.hero) {
        this.heroesService.updateHero(this.newHeroForm.value).subscribe(hero => {
          this.cancel();
        })
      } else {
        this.heroesService.addHero(formValue).subscribe(heroes => {
          this.cancel();
        })
      }
    }
  }

  private checkExisting(nameHero: string): boolean {
    return this.heroList.some(hero => (hero.name == nameHero) && (hero.name != this.hero?.name));
  }

}
