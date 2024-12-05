import { Component, OnInit } from '@angular/core';
import { LanderComponent } from '../lander/lander.component';
import { BuyComponent } from '../buy/buy.component';
import { StatsComponent } from '../stats/stats.component';
import { BenefitsComponent } from '../benefits/benefits.component';
import { OutcomesComponent } from '../outcomes/outcomes.component';
import { OnlineConsultationsComponent } from '../online-consultations/online-consultations.component';
import { ProductsComponent } from '../products/products.component';
import { IngredientsComponent } from '../ingredients/ingredients.component';
import { OnlineConsultationMobileComponent } from '../online-consultation-mobile/online-consultation-mobile.component';
import { ReviewsComponent } from '../reviews/reviews.component';
import { PathComponent } from '../path/path.component';
import { FaqComponent } from '../faq/faq.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LanderComponent, BuyComponent, StatsComponent, BenefitsComponent, OutcomesComponent, OnlineConsultationsComponent, ProductsComponent, IngredientsComponent, OnlineConsultationMobileComponent, ReviewsComponent, PathComponent, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

innerWidth: any;
mobile = false;

  ngOnInit() {
      this.innerWidth = window.innerWidth;
      if(this.innerWidth < 620){
        this.mobile = true;
      }
  }

}
