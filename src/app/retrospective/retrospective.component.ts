import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retrospective',
  templateUrl: './retrospective.component.html',
  styleUrls: ['./retrospective.component.css'],
})
export class RetrospectiveComponent implements OnInit {
  type1: string[] = [];
  type2: string[] = [];
  type3: string[] = [];
  type4: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  addCard(type: number) {
    if (type == 1) {
      this.type1.push('');
    }
    if (type == 2) {
      this.type2.push('');
    }
    if (type == 3) {
      this.type3.push('');
    }
    if (type == 4) {
      this.type4.push('');
    }
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
