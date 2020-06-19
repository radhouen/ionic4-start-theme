import { Component, OnInit } from '@angular/core';
import { PoductsService } from '../../services/poducts.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.page.html',
  styleUrls: ['./viewdata.page.scss'],
})
export class ViewdataPage implements OnInit {
  public commands = [
    {
      type: "Huiles Moteurs A Essence",
      quantity: this.pqservice.essenceQuantities
    },
    {
      type: " Huiles Moteur Diesel ",
      quantity: this.pqservice.dieselQuantities
    },
    {
      type: "Huiles Moteur Marins",
      quantity: this.pqservice.marinsQuantities
    },
    {
      type: "Huiles 2 Temps",
      quantity: this.pqservice.httempsQuantities
    },
    {
      type: "Huile Moteur A Gaz",
      quantity: this.pqservice.hmgazQuantities
    },
    {
      type: "Huiles Transmissions",
      quantity: this.pqservice.htransmissionQuantities
    },
    {
      type: " Huiles Caloporteurs ",
      quantity: this.pqservice.caloporteursQuantities
    },
    {
      type: "Huiles Hydrauliques",
      quantity: this.pqservice.hydrauliquesQuantities
    },
    {
      type: "  Graisses  ",
      quantity: this.pqservice.graissesQuantities
    }
  ];
  constructor(public pqservice: PoductsService) { }

  ngOnInit() {

  }

}
