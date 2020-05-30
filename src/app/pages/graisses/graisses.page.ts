import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import {PoductsService} from '../../services/poducts.service';

@Component({
  selector: 'app-graisses',
  templateUrl: './graisses.page.html',
  styleUrls: ['./graisses.page.scss'],
})
export class GraissesPage implements OnInit {


  public slideOneForm: FormGroup;
  quantities = [{
    name: "c12",
    value: "Bidon (1L) C12"
  }, {
    name: "c28",
    value: "Bidon (2L) C28"
  }, {
    name: "c44",
    value: "Bidon (4 * 4L) C44"
  }, {
    name: "c4",
    value: "Bidon (6 * 4L) C4"
  }, {
    name: "c5",
    value: "Bidon (3 * 5L) C5"
  }, {
    name: "c54",
    value: "Bidon (4 * 5L) C54"
  }, {
    name: "Estagnon",
    value: "Estagnon(17kg)"
  }, {
    name: "fut",
    value: "FUT (180 kg)"
  }];

  products = [
    {
      name: "ep1",
      value: "GRAISSE MULTISERVICE"
    }
    , {
      name: "ep2",
      value: "GRAISSE SUPER STABIL EP/2"
    }];

    public command = [];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public pqservice:PoductsService,
    private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    console.log('value from graisse page');
    console.log(this.pqservice.hydrauliquesQuantities);
  }

  logForm() {

  }

  nextStep() {
    this.pqservice.graissesQuantities = this.command;
    console.log(this.pqservice.graissesQuantities);
    this.navCtrl.navigateRoot('/viewdata');
  }
  createformBuilder(index: number) {
    return "ep" + index.toString(2)
  }
  onInputChange(quantity: string, packaging: string, category: string): void {
    let item = {
      "category": category,
      "packaging": packaging,
      "quantity": quantity
    };
    if (this.command.length === 0) {
      this.command.push(item);
    } else {
      let indexocc = -1;
      this.command.map((cmd, index) => {
        console.log(cmd);
        if (item.category === cmd.category && item.packaging === cmd.packaging && item.quantity !== cmd.quantity) {
          indexocc = index;
          console.log('index inside=', indexocc);
        }
      });
      console.log('index outside=', indexocc);
      if (indexocc != -1) {
        this.command[indexocc].quantity = item.quantity;
      } else {
        this.command.push(item);
      }
    }
    console.log('this.command =', this.command);

  }
}
