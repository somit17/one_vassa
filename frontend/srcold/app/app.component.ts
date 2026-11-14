import { Component, HostListener, OnDestroy, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root', standalone: true, imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="site-header" [class.scrolled]="scrolled">
      <a class="brand" routerLink="/" aria-label="Wild, With Purpose home"><span class="brand-mark">~</span><span>WILD<span class="brand-light"> / </span>ROOT</span></a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a routerLink="/the-idea" routerLinkActive="active">The Idea</a>
        <a routerLink="/experiences" routerLinkActive="active">Experiences</a>
        <a routerLink="/expeditions" routerLinkActive="active">Expeditions</a>
        <a routerLink="/community" routerLinkActive="active">Community</a>
      </nav>
      <a class="header-cta" routerLink="/plan">Plan an experience <span>↗</span></a>
      <button class="menu-toggle" type="button" (click)="menuOpen = !menuOpen" [attr.aria-expanded]="menuOpen">{{ menuOpen ? 'CLOSE −' : 'MENU +' }}</button>
    </header>
    @if (menuOpen) {
      <nav class="mobile-menu">
        <a routerLink="/the-idea" (click)="menuOpen=false">The Idea</a><a routerLink="/experiences" (click)="menuOpen=false">Experiences</a><a routerLink="/expeditions" (click)="menuOpen=false">Expeditions</a><a routerLink="/excursions" (click)="menuOpen=false">Excursions</a><a routerLink="/explorations" (click)="menuOpen=false">Explorations</a><a routerLink="/community" (click)="menuOpen=false">Community</a><a routerLink="/plan" (click)="menuOpen=false">Plan an experience</a>
      </nav>
    }
    <main><router-outlet /></main>
    <footer class="site-footer">
      <div class="footer-main">
        <a class="brand footer-brand" routerLink="/"><span class="brand-mark">~</span><span>WILD<span class="brand-light"> / </span>ROOT</span></a>
        <p>Wild places. Shared futures.</p>
        <p class="footer-description">Thoughtful journeys through India's remarkable landscapes, shaped by local knowledge and a commitment to conservation.</p>
        <a class="footer-plan-link" routerLink="/plan">Start planning a journey <span>↗</span></a>
      </div>
      <div class="footer-column">
        <span class="footer-heading">EXPLORE</span>
        <a routerLink="/the-idea">The Idea</a><a routerLink="/experiences">All experiences</a><a routerLink="/expeditions">Expeditions</a><a routerLink="/excursions">Excursions</a><a routerLink="/explorations">Explorations</a>
      </div>
      <div class="footer-column">
        <span class="footer-heading">OUR WORLD</span>
        <a routerLink="/experiences/tiger-landscapes">Tiger landscapes</a><a routerLink="/experiences/one-horned-rhinos">One-horned rhinos</a><a routerLink="/experiences/hornbill-forests">Hornbill forests</a><a routerLink="/experiences/red-pandas">Red pandas</a><a routerLink="/experiences/mountain-ghosts">Mountain ghosts</a>
      </div>
      <div class="footer-column">
        <span class="footer-heading">CONNECT</span>
        <a routerLink="/community">Community</a><a routerLink="/plan">Plan an experience</a><span>India · Field-led journeys</span>
      </div>
      <div class="footer-bottom"><small>© 2026 WILD / ROOT. An independent concept.</small><small>Travel thoughtfully. Leave the wild thriving.</small><a routerLink="/">Back to top ↑</a></div>
    </footer>
  `
})
export class AppComponent implements OnInit, OnDestroy {
  scrolled = false; menuOpen = false;
  private observer?: IntersectionObserver;
  private navigationSub?: Subscription;
  private router = inject(Router);
  @HostListener('window:scroll') onScroll() { this.scrolled = window.scrollY > 30; }
  ngOnInit() {
    if (typeof IntersectionObserver !== 'undefined') {
      this.observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('in-view'); this.observer?.unobserve(entry.target); } }), { threshold: 0.12 });
    }
    this.observeReveals();
    this.navigationSub = this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.observeReveals());
  }
  private observeReveals() { setTimeout(() => document.querySelectorAll('.reveal:not(.in-view)').forEach(el => this.observer?.observe(el)), 80); }
  ngOnDestroy() { this.observer?.disconnect(); this.navigationSub?.unsubscribe(); }
}
