import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { PoductsService } from '../../services/poducts.service';
@Component({
  selector: 'app-diesel',
  templateUrl: './diesel.page.html',
  styleUrls: ['./diesel.page.scss'],
})
export class DieselPage implements OnInit {



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
      value: "ENI I-SINT TD 10W40"
    }
    , {
      name: "ep2",
      value: "TANIX 4WD SAE 15W50"
    }, {
      name: "ep3",
      value: "TANIX DIESEL 1100"
    }, {
      name: "ep4",
      value: "TANIX DIESEL TURBO 900"
    }, {
      name: "ep5",
      value: "TANIX DIESEL 700"
    }, {
      name: "ep6",
      value: "TANIX DIESEL 500 SAE 40"
    }, {
      name: "ep7",
      value: "TANIX DIESEL 300 SHD +40"
    }];
  public command = [];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public pqservice: PoductsService,
    private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    console.log('value from diesel page');
    console.log(this.pqservice.essenceQuantities);
    this.slideOneForm = this.formBuilder.group({
      'ep1': [null, Validators.compose([
        Validators.required
      ])],
      'ep2': [null, Validators.compose([
        Validators.required
      ])],
      'ep3': [null, Validators.compose([
        Validators.required
      ])],
      'ep4': [null, Validators.compose([
        Validators.required
      ])],
      'ep5': [null, Validators.compose([
        Validators.required
      ])],
      'ep6': [null, Validators.compose([
        Validators.required
      ])]
    });
  }

  logForm() {

  }

  nextStep() {
    this.pqservice.dieselQuantities = this.command;
    console.log(this.pqservice.dieselQuantities);
    this.navCtrl.navigateRoot('/marins');
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


