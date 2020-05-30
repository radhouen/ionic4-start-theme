import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { PoductsService } from '../../services/poducts.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
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
      value: "ENI I-SINT 5W30",
      open: true
    }
    , {
      name: "ep2",
      value: "ENI I-SINT 5W40",
      open: true
    }, {
      name: "ep3",
      value: "ENI I-SINT 10W40",
      open: true
    }, {
      name: "ep4",
      value: "TANIX SUPER 1100",
      open: true
    }, {
      name: "ep5",
      value: "TANIX SUPER 700",
      open: true
    }, {
      name: "ep6",
      value: "TANIX SUPER 500",
      open: true
    }];
  public command = [];

  constructor(
    public navCtrl: NavController,
    public modalController: ModalController,
    public menuCtrl: MenuController,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public pqservice: PoductsService,
    private formBuilder: FormBuilder) {
  }
  ngOnInit() {

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
    this.pqservice.essenceQuantities = this.command;
    console.log(this.pqservice.essenceQuantities);
    this.navCtrl.navigateRoot('/diesel');
  }

  createformBuilder(index: number) {
    return "ep" + index.toString(2)
  }
  toggle(index: number) {
    //this.products[index].open = !this.products[index].open;
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
