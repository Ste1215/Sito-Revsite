import {Component} from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
export interface PeriodicElement {
     position: number;
     name: string;
    email: string;
    password: string;
  }
  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'stefano', email: 'stefanopoiatti@gmail.com', password: '12345678910'},
  ];
@Component({
    selector: 'settings-user',
    templateUrl: 'settings-user.html',
  standalone: true,
  imports: [
    MatTableModule,
    MatDialogTitle,
     MatDialogContent,
      MatDialogActions,
       MatDialogClose, 
       MatButtonModule,
       MatFormFieldModule,
    ],

})

export class SettingsUserComponents {
    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
