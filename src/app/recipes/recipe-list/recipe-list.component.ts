import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pie',
      'Granny\'s chocolate pie.',
      'https://i.pinimg.com/originals/9d/4f/0c/9d4f0c91e1a4af6c940f420e64fb4a91.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
