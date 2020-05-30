import { Component, OnInit } from '@angular/core';
import { PoductsService } from '../../services/poducts.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.page.html',
  styleUrls: ['./viewdata.page.scss'],
})
export class ViewdataPage implements OnInit {

  constructor(public pqservice: PoductsService) { }

  ngOnInit() {
    console.log(this.pqservice.essenceQuantities);
    console.log(this.pqservice.caloporteursQuantities);
    console.log(this.pqservice.dieselQuantities);
    console.log(this.pqservice.graissesQuantities);
    console.log(this.pqservice.hmgazQuantities);
    console.log(this.pqservice.htransmissionQuantities);
    console.log(this.pqservice.httempsQuantities);
    console.log(this.pqservice.hydrauliquesQuantities);
    console.log(this.pqservice.marinsQuantities);
  }

}
