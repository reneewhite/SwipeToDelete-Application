import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
items = [];
i = 0;
  constructor(public navCtrl: NavController) {
    this.items = [
      {title: 'RIHANNA'},
      {title: 'CHRIS BROWN'},
      {title: 'ARIANA GRANDE'},
      {title: 'JASON DERULO'},
      {title: 'ADELE'}
  ];
 
  }

  removeItem(item){
 
    for(this.i = 0; this.i < this.items.length; this.i++) {
 
      if(this.items[this.i] == item){
        this.items.splice(this.i, 1);
      }
 
    }
 
  }

  doRefresh(refresher){
    this.items = [
      {title: 'Rihanna'},
      {title: 'Chris Brown'},
      {title: 'Ariana Grande'},
      {title: 'Jason Derulo'},
      {title: 'Rebecca Malope'},
  ];
    
 setTimeout(() => {
   console.log("Async operation has ended");
   refresher.complete();
 }, 2000);
}
 
}
