import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent implements OnInit{

  ngOnInit(): void {
    const swiperSlider = new Swiper('.swiper', {
      // Optional parameters
      direction: 'horizontal',
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 16,
      watchOverflow: false,
    
      breakpoints: {

        485: {
          slidesPerView: 1.2,
          spaceBetween: 16
        },
        768: {
          slidesPerView: 1.8,
          spaceBetween: 16
        },
        992: {
          slidesPerView: 2.4,
          spaceBetween: 16
        },
        1200: {
          slidesPerView: 2.7,
          spaceBetween: 16
        }
      },


      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    

    });   
  }

}
