import { Component, ElementRef, HostListener, OnInit, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from "../footer/footer.component";
import firebase from "firebase/compat/app";
import { CommonModule, IMAGE_CONFIG } from "@angular/common";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AnimationBuilder, AnimationFactory, AnimationMetadata, animate, style } from '@angular/animations';
import { ServiziService } from '../../servizi/servizi.service';
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [
        MatSlideToggleModule,
        RouterModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatGridListModule,
        FooterComponent,
        CommonModule,
        MatButtonModule, 
        MatIconModule,
    ],
    providers: [
      {
        provide: IMAGE_CONFIG,
        useValue: {
          disableImageSizeWarning: true, 
          disableImageLazyLoadWarning: true
        }
      },
    ],
})
export class HomeComponent implements OnInit {
  private animatedElements: HTMLElement[] = [];
  constructor(private servizi: ServiziService,private animationBuilder: AnimationBuilder, private elementRef: ElementRef,public authService: AuthService, private router: Router) {}
  ngOnInit(): void {}
  @HostListener('window:scroll', ['$event'])
  checkIfElementIsVisible() {
    const hiddenElements = this.elementRef.nativeElement.querySelectorAll('.hidden, .hide');
    const screenHeight = window.innerHeight;
    let delay = 0;
    hiddenElements.forEach((element: HTMLElement) => {
      const elementPosition = element.getBoundingClientRect().top;

      if (elementPosition < screenHeight && !this.animatedElements.includes(element)) {
        this.playAnimation(element,delay);
        this.animatedElements.push(element);
        delay += 100;
      } else if (elementPosition >= screenHeight && this.animatedElements.includes(element)) {
        const index = this.animatedElements.indexOf(element);
        if (index !== -1) {
          this.animatedElements.splice(index, 1);
        }
      }
    });
  }
  playAnimation(element: HTMLElement, delay: number) {
    setTimeout(() => { 
      let animation: AnimationMetadata[];
      if (element.classList.contains('hidden')) {
        animation = [
          style({ opacity: 0, transform: 'translateX(-50px)' }),
          animate('1s ease-out', style({ opacity: 1, transform: 'none' }))
        ];
      } else if (element.classList.contains('hide')) {
        animation = [
          style({ opacity: 0, transform: 'translateY(-100%)' }),
          animate('1s ease-out', style({ opacity: 1, transform: 'none' }))
        ];
      }
      if (animation) {
        const factory = this.animationBuilder.build(animation);
        const player = factory.create(element);
        player.play();
      }
    }, delay);
  }
  InLogin(){
    this.authService.pathLogin();
  }
  inLogout(){
    this.authService.logout();
  }
  OnRecensioni(){
    this.router.navigate(['/dashboard/recensioni']);
  }
  inRegister(){
    this.authService.pathRegister();
  }
  onHome(){
    this.router.navigate(['/']);
  }
  onCategorie(){
    this.router.navigate(['/dashboard/categorie']);
  }

  
}
