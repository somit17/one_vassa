import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlanRequest, PlanService } from '../../services/plan.service';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section
      class="page-hero plan-hero"
      style="--hero-image:url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2200&q=85')"
    >
      <div class="hero-shade"></div>
      <div class="page-hero-copy">
        <p class="eyebrow">PLAN AN EXPERIENCE / BEGIN HERE</p>
        <h1>Let's find your<br /><em>wild.</em></h1>
        <p>Tell us what draws you in. We’ll start shaping a journey around your interests.</p>
      </div>
    </section>

  
<section class="form-section section-pad">
  <div class="form-aside">
    <div class="section-kicker">A CONVERSATION, NOT A CHECKOUT</div>

    <h2>Every journey<br />starts with a<br /><em>hello.</em></h2>

    <p>
      Share a little about what you have in mind. Our team will use these details to start a
      thoughtful conversation about the right landscape, season and experience.
    </p>

    <p class="form-contact">
      Prefer email?<br />
      <a href="mailto:hello@jungle-tails.com">
        hello&#64;jungle-tails.com ↗
      </a>
    </p>
  </div>

  <form class="enquiry-form" (ngSubmit)="submit()" novalidate>

    <div class="form-row">
      <label>
        <span class="field-label">
          YOUR NAME <span class="required-mark">*</span>
        </span>
        <input
          name="name"
          [(ngModel)]="form.name"
          placeholder="Your full name"
          autocomplete="name"
        />
      </label>

      <label>
        <span class="field-label">
          EMAIL ADDRESS <span class="required-mark">*</span>
        </span>
        <input
          type="email"
          name="email"
          [(ngModel)]="form.email"
          placeholder="you@example.com"
          autocomplete="email"
        />
      </label>
    </div>

    <div class="form-row">
      <label>
        <span class="field-label">
          PHONE NUMBER <span class="required-mark">*</span>
        </span>
        <input
          type="tel"
          name="phone"
          [(ngModel)]="form.phone"
          placeholder="Include country code"
          autocomplete="tel"
        />
      </label>

      <label>
        <span class="field-label">
          WHAT DRAWS YOU IN? <span class="required-mark">*</span>
        </span>
        <select name="interest" [(ngModel)]="form.interest">
          <option value="">Choose a landscape</option>
          <option value="Tiger Landscapes">Tiger Landscapes</option>
          <option value="One-horned Rhinos">One-horned Rhinos</option>
          <option value="Hornbill Forests">Hornbill Forests</option>
          <option value="Red Pandas">Red Pandas</option>
          <option value="Mountain Ghosts">Mountain Ghosts</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </label>
    </div>

    <div class="form-row">
      <label>
        <span class="field-label">
          WHO IS TRAVELLING? <span class="required-mark">*</span>
        </span>
        <select name="group" [(ngModel)]="form.group">
          <option value="">Select group type</option>
          <option value="Solo">Solo</option>
          <option value="Couple">Couple</option>
          <option value="Family">Family</option>
          <option value="Small group">Small group</option>
        </select>
      </label>

      <label>
        <span class="field-label">
          WHEN WOULD YOU LIKE TO TRAVEL?
          <span class="required-mark">*</span>
        </span>
        <select name="season" [(ngModel)]="form.season">
          <option value="">Choose a time</option>
          <option value="Jan – Mar">Jan – Mar</option>
          <option value="Apr – Jun">Apr – Jun</option>
          <option value="Jul – Sep">Jul – Sep</option>
          <option value="Oct – Dec">Oct – Dec</option>
          <option value="Flexible">Flexible</option>
        </select>
      </label>
    </div>

    <label>
      <span class="field-label">TELL US A LITTLE MORE</span>
      <textarea
        name="message"
        [(ngModel)]="form.message"
        rows="4"
        placeholder="Your interests, questions or anything we should know..."
      ></textarea>
    </label>

    @if (error()) {
      <p class="form-error" role="alert">{{ error() }}</p>
    }

    <button
      class="button button-light form-submit"
      type="submit"
      [disabled]="submitting()"
    >
      {{ submitting() ? 'Sending…' : 'Send enquiry' }}
      <span>↗</span>
    </button>

    @if (submitted()) {
      <p class="form-success" role="status">
        Thank you. Your enquiry has been received — our team will be in touch shortly.
      </p>
    }

    <p class="form-privacy">
      Your details are sent to our team so we can start planning your journey.
    </p>

  </form>
</section>

  `,
})
export class PlanComponent {
  private readonly planService = inject(PlanService);

  form: PlanRequest = {
    name: '',
    email: '',
    phone: '',
    interest: '',
    group: '',
    season: '',
    message: '',
  };

  readonly submitted = signal(false);
  readonly submitting = signal(false);
  readonly error = signal('');

  submit(): void {
    if (this.submitting()) return;

    // Validate all required fields
    const requiredFields = [
      this.form.name,
      this.form.email,
      this.form.phone,
      this.form.interest,
      this.form.group,
      this.form.season,
    ];

    const hasEmptyFields = requiredFields.some((field) => !field || !field.trim());

    if (hasEmptyFields) {
      this.error.set('Please fill in all the required fields marked with *.');
      this.submitted.set(false);
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(this.form.email.trim())) {
      this.error.set('Please enter a valid email address.');
      this.submitted.set(false);
      return;
    }

    // All validations passed
    this.error.set('');
    this.submitted.set(false);
    this.submitting.set(true);

    this.planService.submit(this.form).subscribe({
      next: () => {
        this.submitting.set(false);
        this.submitted.set(true);

        this.form = {
          name: '',
          email: '',
          phone: '',
          interest: '',
          group: '',
          season: '',
          message: '',
        };
      },
      error: () => {
        this.submitting.set(false);
        this.error.set('Sorry, we could not send your enquiry. Please try again.');
      },
    });
  }
}
