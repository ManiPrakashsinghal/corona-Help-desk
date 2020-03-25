import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  constructor(public shareService:ShareService) { }
  list:any[] = [{'name':'Ravi','address':'ashasjd','pinCode':302020,'phoneNo':98876543210,'description':'hhasdasdasiuyooernnr dfa'}]
  ngOnInit() {
    this.shareService.getList()
  }

}
