import { Component } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [AccordionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  currentSelection: number = 0;

  changeSelection(newSelection: number){
    if(this.currentSelection == newSelection){
      this.currentSelection = 0;
    }else{
      this.currentSelection = newSelection;
    }
  }

}
