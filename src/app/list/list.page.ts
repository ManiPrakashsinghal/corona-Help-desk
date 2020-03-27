import { Component, OnInit } from '@angular/core';
import { ShareService } from '../services/share.service';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
mode:string;
data:any;
  colors: any = 'white';
  constructor(
    public shareService:ShareService,
    private router:Router,
    private route: ActivatedRoute 
    ) { }
  list:any[] = [{'name':'Ravi','address':'ashasjd','pinCode':302020,'phoneNo':98876543210,'description':'hhasdasdasiuyooernnr dfa'}]
  ngOnInit() {
    this.mode = this.shareService.getData('flag')
    this.shareService.getList()
  }
  onOk(event){
    this.colors = event.target.value
  }

}
