import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  fakeFuncTocheckCoverageIsOk() {
    let a = 1;
    a = 2;
    const c = 3;
    console.log('c', c);
    return a + c;
  }

}
