import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';

@NgModule({
	imports: [CommonModule],
	exports: [
		ReactiveFormsModule,
		MatButtonModule,
		MatTableModule,
		MatPaginatorModule,
		MatInputModule,
		MatIconModule,
		MatSelectModule,
		MatTooltipModule,
		MatDialogModule,
		FormsModule,
		MatSnackBarModule,
		MatCardModule  
	]
})
export class MaterialModule {}