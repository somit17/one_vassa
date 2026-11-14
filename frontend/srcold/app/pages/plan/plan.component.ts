import { Component, inject, signal } from '@angular/core'; import { FormsModule } from '@angular/forms';
import { PlanRequest, PlanService } from '../../services/plan.service';
@Component({selector:'app-plan',standalone:true,imports:[FormsModule],template:`
<section class="page-hero plan-hero" style="--hero-image:url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2200&q=85')"><div class="hero-shade"></div><div class="page-hero-copy"><p class="eyebrow">PLAN AN EXPERIENCE / BEGIN HERE</p><h1>Let's find your<br><em>wild.</em></h1><p>Tell us what draws you in. We’ll start shaping a journey around your interests.</p></div></section>
<section class="form-section section-pad"><div class="form-aside"><div class="section-kicker">A CONVERSATION, NOT A CHECKOUT</div><h2>Every journey<br>starts with a<br><em>hello.</em></h2><p>Share a little about what you have in mind. Our team will use these details to start a thoughtful conversation about the right landscape, season and experience.</p><p class="form-contact">Prefer email?<br><a href="mailto:hello@wildroot.example">hello&#64;wildroot.example ↗</a></p></div>
<form class="enquiry-form" (ngSubmit)="submit()">
<div class="form-row"><label>01 / YOUR NAME<input name="name" [(ngModel)]="form.name" required placeholder="Your full name"></label><label>02 / EMAIL ADDRESS<input type="email" name="email" [(ngModel)]="form.email" required placeholder="you@example.com"></label></div>
<div class="form-row"><label>03 / PHONE NUMBER<input name="phone" [(ngModel)]="form.phone" placeholder="Include country code"></label><label>04 / WHAT DRAWS YOU IN?<select name="interest" [(ngModel)]="form.interest"><option value="">Choose a landscape</option><option>Tiger Landscapes</option><option>One-horned Rhinos</option><option>Hornbill Forests</option><option>Red Pandas</option><option>Mountain Ghosts</option><option>Not sure yet</option></select></label></div>
<div class="form-row"><label>05 / WHO IS TRAVELLING?<select name="group" [(ngModel)]="form.group"><option value="">Select group type</option><option>Solo</option><option>Couple</option><option>Family</option><option>Small group</option></select></label><label>06 / WHEN WOULD YOU LIKE TO TRAVEL?<select name="season" [(ngModel)]="form.season"><option value="">Choose a time</option><option>Jan – Mar</option><option>Apr – Jun</option><option>Jul – Sep</option><option>Oct – Dec</option><option>Flexible</option></select></label></div>
<label>07 / TELL US A LITTLE MORE<textarea name="message" [(ngModel)]="form.message" rows="4" placeholder="Your interests, questions or anything we should know..."></textarea></label>
<button class="button button-light form-submit" type="submit" [disabled]="submitting()">{{ submitting() ? 'Sending…' : 'Send enquiry' }} <span>↗</span></button>
@if(submitted()){<p class="form-success" role="status">Thank you. Your enquiry has been received — our team will be in touch shortly.</p>}
@if(error()){<p class="form-error" role="alert">{{ error() }}</p>}
<p class="form-privacy">Your details are sent to our team so we can start planning your journey.</p>
</form></section>`})
export class PlanComponent {
  private readonly planService = inject(PlanService);

  form: PlanRequest = { name: '', email: '', phone: '', interest: '', group: '', season: '', message: '' };
  readonly submitted = signal(false);
  readonly submitting = signal(false);
  readonly error = signal('');

  submit(): void {
    if (this.submitting()) return;

    this.submitting.set(true);
    this.error.set('');
    this.submitted.set(false);

    this.planService.submit(this.form).subscribe({
      next: () => {
        this.submitting.set(false);
        this.submitted.set(true);
        this.form = { name: '', email: '', phone: '', interest: '', group: '', season: '', message: '' };
      },
      error: () => {
        this.submitting.set(false);
        this.error.set('Sorry, we could not send your enquiry. Please try again.');
      }
    });
  }
}
