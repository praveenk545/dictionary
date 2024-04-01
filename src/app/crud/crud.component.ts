import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

   constructor(){

   }
   ngOnInit(): void {
    
   }
   isTry:boolean=false;
   isButton:boolean=false;
   activeIndex:number=-1;
   currentIndex!:number|any;
  // addItems:any=[{}];
   addItems:any=[];
   public Formvalue=new FormGroup({
    name:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.required]),

   })
add(){}
  submit(){
    this.isTry=true;
    if(this.Formvalue.valid){
      this.addItems.push(this.Formvalue.value)
      console.log("values",this.addItems) 
      this.isTry=false;
      this.Formvalue.reset()  

    }
  }
  delete(index:number){
    this.addItems.splice(index,index-this.activeIndex)

  }
  
  update(v:any,index:number):void{
   this.isTry=true;
    this.Formvalue.get(['name'])?.patchValue(v.name)
    this.Formvalue.get(['email'])?.patchValue(v.email)
    this.Formvalue.get(['password'])?.patchValue(v.password)
    this.currentIndex=index;
    if(!this.isButton){
      this.isButton=true;
    }

  }
  updateSave(){
    this.addItems[this.currentIndex]=this.Formvalue.value;
    // this.modified=false;
    this.currentIndex=null;
    this.isTry=false;
    if(this.isButton){
      this.isButton=false;
    }
    this.Formvalue.reset();

  }
 
}
