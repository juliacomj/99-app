import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {

  constructor() { }

  public hideInput: boolean = false;
  public location: string;
  public isApple: boolean = false;

  ngOnInit() {
    this.getUserAgent();
    console.log(this.isApple)
  }


  changeLabel(){
    this.hideInput = !this.hideInput;
    if(this.location){
      this.hideInput = false;
    }
  }

  getLocation(event: any){
    this.location = event.target.value;
  }

  getUserAgent(){
    const userVendor = navigator.vendor;
    console.log(userVendor)
    if(userVendor.includes("Apple")){
       this.isApple =true;
    }
  }

}
