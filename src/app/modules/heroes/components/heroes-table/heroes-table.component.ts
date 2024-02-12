import { Component, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Hero } from 'src/app/models/heroe.model';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes-table',
  templateUrl: './heroes-table.component.html',
  styleUrls: ['./heroes-table.component.scss']
})
export class HeroesTableComponent {

  public displayedColumns: string[] = ['id', 'name', 'nickName', 'mainPower', 'years', 'nationality', 'actions'];
  public dataSource: MatTableDataSource<any>;
  public pageSize: number = 10;
  public pageOptions: number[] = [10, 20, 50, 100];

  @ViewChild(MatPaginator, { static: false })
  public paginator!: MatPaginator;

  @Input()
  public heroList: Hero[];

  @Output()
  public reload = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private dialog: MatDialog,
    private heroesService: HeroesService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(this.heroList);
    this.dataSource.paginator = this.paginator
  }

  public editHero(hero: Hero): void {
    this.router.navigate(['/heroes/edit-hero'], { state: hero });
  }

  public deleteHero(idHero: string): void {
    const confirmRef: MatDialogRef<ConfirmDeleteDialogComponent> = this.dialog.open(ConfirmDeleteDialogComponent, {
      disableClose: true,
      autoFocus: false,
      width: '500px',
      height: '150px'
    });

    confirmRef.afterClosed().subscribe({
      next: res => {
        if (res) {
          this.heroesService.deleteHero(idHero).subscribe(hero => {
            this.reload.emit(true);
          })
        }
      },
    });
  }

}
