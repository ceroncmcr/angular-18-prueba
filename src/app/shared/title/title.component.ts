import { booleanAttribute, Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  // template: `<h1 class="text-3xl mb-5"> {{ title2() }} - {{ withShadow }}</h1>`,
  template: `<h1 class="text-3xl mb-5"> {{ title2() }}</h1>`,
  styles: ``
})
export class TitleComponent {
  @Input({ required: true }) title = 'Title';
  public title2 = input.required<string>();

  @Input({ transform: booleanAttribute }) withShadow : boolean = false
}
