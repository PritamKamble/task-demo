import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../interfaces/card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() categoryId: number = 0;
  @Input() cards: Card[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
