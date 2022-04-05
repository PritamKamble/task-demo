import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  private categories: Category[] = [
    {
      categoryName: 'What went well',
      categoryId: 1,
      cards: [],
    },
    {
      categoryName: 'What can be improved',
      categoryId: 2,
      cards: [],
    },
    {
      categoryName: 'Start doing',
      categoryId: 3,
      cards: [],
    },
    {
      categoryName: 'Action items',
      categoryId: 4,
      cards: [],
    },
  ];

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }
}
