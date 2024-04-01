import { Component } from '@angular/core';
import { TestcaseDirectiveDirective } from '../Directives/testcase-directive.directive';

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [TestcaseDirectiveDirective],
  templateUrl: './food.component.html',
  styleUrl: './food.component.scss'
})
export class FoodComponent {

}
