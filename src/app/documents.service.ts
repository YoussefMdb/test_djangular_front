import { Injectable } from '@angular/core';
import Document from './Document';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DocumentsService {
  private url: string = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) {}

  // getLabels -url+Documents/
  getDocuments(): Observable<Document[]> {
    return this.http.get<Document[]>(`${this.url}documents/`);
  }

  // getDocumentById - url+Document/:id
  getDocumentById(id: number): Observable<Document> {
    return this.http.get<Document>(`${this.url}document/${id}`);
  }

  // addDocument - url+Documents
  addDocument(Document: Document): Observable<Document> {
    return this.http.post<Document>(`${this.url}documents/`, Document);
  }

  // updateDocument - url+Document/:id
  updateDocument(id: number, Document: Document): Observable<Document> {
    return this.http.put<Document>(`${this.url}document/${id}`, Document);
  }

  // deleteDocumentById - url+Document/:id
  deleteDocumentById(id: number): Observable<Document> {
    return this.http.delete<Document>(`${this.url}document/${id}`);
  }

  selectDocumentById(id: number): Observable<Document> {
    return this.http.get<Document>(`${this.url}document/${id}`);
  }
}
