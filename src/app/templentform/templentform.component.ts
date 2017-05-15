import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templentform',
  templateUrl: './templentform.component.html',
  styleUrls: ['./templentform.component.css']
})
export class TemplentformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onsubmit(value:any){
   console.log(value)

  }
}
