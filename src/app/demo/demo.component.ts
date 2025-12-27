import { type BooleanInput } from '@angular/cdk/coercion';
import { CommonModule, JsonPipe } from '@angular/common';
import { booleanAttribute, Component, input, Input } from '@angular/core';

@Component({
  selector: 'demo-comp',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  @Input() myDecoratorDefaultTrue: boolean = true;
  @Input() myDecoratorDefaultFalse: boolean = false;

  @Input({ transform: booleanAttribute }) myDecoratorBoolDefaultTrue: boolean = true;
  @Input({ transform: booleanAttribute }) myDecoratorBoolDefaultFalse: boolean = false;

  myDefaultTrue = input<boolean>(true);
  myDefaultFalse = input<boolean>(false);
  // myRequired = input.required<boolean>();

  myBoolDefaultTrue = input<boolean, BooleanInput>(true, {
    transform: booleanAttribute,
  });
  myBoolDefaultFalse = input<boolean, BooleanInput>(false, {
    transform: booleanAttribute,
  });
  // myBoolRequired = input.required<boolean, BooleanInput>({
  //   transform: booleanAttribute,
  // });



}
