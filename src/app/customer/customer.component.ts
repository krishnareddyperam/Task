import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] = [];
  userName: string;
  email: string;

  constructor () {}
  
  ngOnInit() {
  this.customers = [
    {
      id: 1,
      name: 'krishna',
      username: 'Balakrishna.P',
      email: 'balakrishna.p@gmail.com'
    },

    {
    id: 2,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },

  {
    id: 3,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv'
  }

  ];

}
  Search() {
    if (this.userName !== "") {
      this.customers = this.customers.filter(res => {
        return res.username.toLocaleLowerCase().match(this.userName.toLocaleLowerCase());
      });
    } else if (this.userName == "") {
      this.ngOnInit();
    }
  }

  add(): void {
    //name = name.trim();
    if (!name) { return; }
    //this.customers.filter({ name } )
     // .subscribe(hero => {
      //  this.customers.push(hero);
     // });
  }
}

