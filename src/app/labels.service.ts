import { Injectable } from '@angular/core';
import Label from './Label';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LabelsService {
  private url: string = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {}

  // getLabels -url+labels/
  getLabels(): Observable<Label[]> {
    return this.http.get<Label[]>(`${this.url}labels/`);
  }

  // getLabelById - url+label/:id
  getLabelById(id: number): Observable<Label> {
    return this.http.get<Label>(`${this.url}label/${id}`);
  }

  // addLabel - url+labels
  addLabel(label: Label): Observable<Label> {
    return this.http.post<Label>(`${this.url}labels/`, label);
  }

  // updateLabel - url+label/:id
  updateLabel(id: number, label: Label): Observable<Label> {
    return this.http.put<Label>(`${this.url}label/${id}`, label);
  }

  // deleteLabelById - url+label/:id
  deleteLabelById(id: number): Observable<Label> {
    return this.http.delete<Label>(`${this.url}label/${id}`);
  }

  // selectLabelById - name
  selectLabelById(id: number): Observable<Label> {
    return this.http.get<Label>(`${this.url}label/${id}`);
  }
}
