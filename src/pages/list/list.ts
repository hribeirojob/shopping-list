import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

  items: Array<{ title: string, value: string, qnt: number, ref: string, mark: string, discount: number,promotion: string, image: string }>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {


    this.items = [
      {
        title: 'Arroz ',
        value: 'R$ 20,00',
        qnt: 12,
        ref: '001',
        mark: 'Vasconcelos',
        discount: 10,
        promotion: 'Leve 5 pague 4',
        image: 'https://abcemcasa.vteximg.com.br/arquivos/ids/297209-450-450/ARROZ-VASCONCELOS-5KG-T1.jpg?v=637363895181830000'
      },
      {
        title: 'Feijão ',
        value: 'R$ 10,00',
        qnt: 15,
        ref: '002',
        mark: 'Vasconcelos',
        discount: 5,
        promotion: 'Leve 6 pague 5',
        image: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/059/965/products/feijao1-f6ead2918c2879aada15870657761538-640-0.jpg'
      },
      {
        title: 'Detergente ',
        value: 'R$ 1,99',
        qnt: 100,
        ref: '405',
        mark: 'Ypê',
        discount: 20,
        promotion: 'Leve 10 pague 9',
        image: 'https://a-static.mlcdn.com.br/1500x1500/detergente-liquido-ype-neutro-500ml/costaatacado/90146/bc45e8e91700e557fe42944c14353cac.jpg'
      }
    ];

  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }
}
