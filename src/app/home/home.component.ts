import { Component } from '@angular/core';
import { TestcaseDirectiveDirective } from '../Directives/testcase-directive.directive';
import { EffectDirective } from '../Directives/effect.directive';
import { BackgroundcolDirective } from '../Directives/backgroundcol.directive';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TestcaseDirectiveDirective,EffectDirective,BackgroundcolDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
