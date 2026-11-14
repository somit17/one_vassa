import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IdeaComponent } from './pages/idea/idea.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { ExperienceDetailComponent } from './pages/experience-detail/experience-detail.component';
import { CommunityComponent } from './pages/community/community.component';
import { PlanComponent } from './pages/plan/plan.component';
import { CollectionComponent } from './pages/collections/collection.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Wild, With Purpose' },
  { path: 'the-idea', component: IdeaComponent, title: 'The Idea' },
  { path: 'experiences', component: ExperiencesComponent, title: 'Experiences' },
  { path: 'experiences/:slug', component: ExperienceDetailComponent },
  { path: 'community', component: CommunityComponent, title: 'Community' },
  { path: 'plan', component: PlanComponent, title: 'Plan an Experience' },
  { path: 'expeditions', component: CollectionComponent, data: { key: 'expeditions' } },
  { path: 'excursions', component: CollectionComponent, data: { key: 'excursions' } },
  { path: 'explorations', component: CollectionComponent, data: { key: 'explorations' } },
  { path: '**', redirectTo: '' }
];
