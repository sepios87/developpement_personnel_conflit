import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-part',
  templateUrl: './part.component.html',
  styleUrls: ['./part.component.scss']
})
export class PartComponent {
  @Input() direction: boolean = true;
  @Input() title: string = '';
  @Input() content: string = '';
  @Input() image: string = '';
}
