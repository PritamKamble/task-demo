import { Component, OnInit } from '@angular/core';
import { Card, Category } from '../interfaces/card.interface';
import { CardService } from '../service/card.service';

@Component({
  selector: 'app-retrospective',
  templateUrl: './retrospective.component.html',
  styleUrls: ['./retrospective.component.css'],
})
export class RetrospectiveComponent implements OnInit {
  selectedCategoryId: number | null = null;
  categoryDescription: string | null = null;
  categories: Category[] = [];

  constructor(private cardService: CardService) {}
  ngOnInit() {
    this.cardService
      .getCategories()
      .subscribe((categories: Category[]) => (this.categories = categories));
  }

  openDialog(categoryId: number) {
    this.selectedCategoryId = categoryId;
  }

  onSubmit() {
    const card: Card = { description: this.categoryDescription || ''};
    if (this.categories.length) {
      const matchedCategory = this.categories.find(
        (category) => category.categoryId === this.selectedCategoryId
      );
      matchedCategory?.cards.push(card);
    }
    this.selectedCategoryId = null;
    this.categoryDescription = null;
  }

  closeDialog() {
    this.selectedCategoryId = null;
  }
}
