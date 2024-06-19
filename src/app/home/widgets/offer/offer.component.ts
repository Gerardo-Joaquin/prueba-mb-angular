import { Component, Input } from '@angular/core';
import { Offer, Product } from '../../../models/landing.models';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})
export class OfferComponent {

  @Input() item!: Product | Offer;
  @Input() product =  false;

  constructor () {}
}
