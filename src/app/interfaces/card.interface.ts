export interface Card {
  description: string;
}

export interface Category {
  categoryName: string;
  categoryId: number;
  cards: Card[];
}
