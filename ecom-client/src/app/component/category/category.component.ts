import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})

export class CategoryComponent implements OnInit {
  @Input('categoryData') public category:any;
  constructor() { }
  ngOnInit(): void {
  }

}
