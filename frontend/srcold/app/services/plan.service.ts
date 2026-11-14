import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

export interface PlanRequest {
  name: string;
  email: string;
  phone: string;
  interest: string;
  group: string;
  season: string;
  message: string;
}

export interface PlanResponse {
  id: string;
  message: string;
  data: PlanRequest;
}

@Injectable({ providedIn: 'root' })
export class PlanService {
  private readonly endpoint = '/api/plan';
  private readonly http = inject(HttpClient);

  submit(request: PlanRequest): Observable<PlanResponse> {
    return this.http.post<PlanResponse>(this.endpoint, request);
  }
}
