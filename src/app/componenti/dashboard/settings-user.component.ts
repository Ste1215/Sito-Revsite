import {Component, OnInit} from '@angular/core';
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
import {MatDividerModule} from '@angular/material/divider';
import { AuthService } from '../../auth/auth.service';
import {MatListModule} from '@angular/material/list'; 
import { MatSidenavModule } from '@angular/material/sidenav';
@Component({
    selector: 'settings-user',
    templateUrl: 'settings-user.html',
  standalone: true,
  imports: [
    MatListModule,
    MatSidenavModule,
    MatDividerModule,
    MatTableModule,
    MatDialogTitle,
     MatDialogContent,
      MatDialogActions,
       MatDialogClose, 
       MatButtonModule,
       MatFormFieldModule,
    ],
    styleUrl: 'settings-user.css',

})

export class SettingsUserComponents implements OnInit {


  userEmail: string = '';
  userId: string = '';
  userNome: string = '';
  customImageSelected: boolean = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userNome= this.authService.user.nome;
    this.userEmail = this.authService.user.email;
    this.userId = this.authService.user.id;
    
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if(file) {
      this.uploadImage(file).then((imageUrl) => {
        this.authService.updateProfileImage(imageUrl);
        this.customImageSelected = true;
      });
    } else {
      this.authService.useDefaultProfileImage();
      this.customImageSelected = false;
    }
  }
  
  uploadImage(file: File): Promise<string> {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        const imageUrl = '';
        resolve(imageUrl);
      }, 2000);
    });
  }


  
  








}
