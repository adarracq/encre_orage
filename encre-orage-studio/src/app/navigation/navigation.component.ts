import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @ViewChild('navBurger') navBurger!: ElementRef;
  @ViewChild('navMenu') navMenu!: ElementRef;
  @ViewChild('accueil') link_accueil!: ElementRef;
  @ViewChild('social') link_social!: ElementRef;
  @ViewChild('a-propos') link_apropos!: ElementRef;

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  closeNavbar() {
    if( this.navMenu.nativeElement.classList.contains('is-active') ) {
      this.toggleNavbar()
    }
  }
}
