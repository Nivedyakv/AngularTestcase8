import { Component } from '@angular/core';
import { TestcaseDirectiveDirective } from '../Directives/testcase-directive.directive';
import { StylingDirective } from '../Directives/styling.directive';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TestcaseDirectiveDirective,StylingDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
