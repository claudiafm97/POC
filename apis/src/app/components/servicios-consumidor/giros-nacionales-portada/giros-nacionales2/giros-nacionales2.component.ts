import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-giros-nacionales2',
  templateUrl: './giros-nacionales2.component.html'
})
export class GirosNacionales2 implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;
  isLinear = false;
  isCodeQR=false;



  constructor(private router:Router,private _formBuilder: FormBuilder) { }


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      firstCtrl2: ['', Validators.required],
      firstCtrl3: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],

    });
  }

  conocerMas(){
    this.router.navigate(['familias']);
  }
  verAuthConciliacionBancaria(){
    this.router.navigate(['auth-conciliacion-bancaria']);
  }
  volverGirosNacionalesPortada(){
    this.router.navigate(['giros-nacionales-portada']);
  }



}
