import { Component, OnInit } from '@angular/core';
import {PoductsService} from '../../services/poducts.service';

@Component({
  selector: 'app-diesel',
  templateUrl: './diesel.page.html',
  styleUrls: ['./diesel.page.scss'],
})
export class DieselPage implements OnInit {

  constructor(
    public pqservice:PoductsService,
  ) { }

  ngOnInit() {
    console.log('value from diesel page');
    console.log(this.pqservice.essenceQuantities);

  }

}
