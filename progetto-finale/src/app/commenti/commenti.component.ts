import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Commenti } from '../commenti';
import { COMMENTI } from '../mock-commenti';
import { Utenti } from '../utenti';

@Component({
  selector: 'app-commenti',
  templateUrl: './commenti.component.html',
  styleUrls: ['./commenti.component.css']
})
export class CommentiComponent implements OnInit {
 @Input() f:Utenti;
 myForm: FormGroup;
 commento : Commenti[] = COMMENTI;
  constructor(fb: FormBuilder) {
   this.myForm = fb.group({
     'commento': [''],
   });
}
 onSubmit(value: string): void {
    console.log('commento: ', this.myForm.controls['commento'].value);
    this.onAdd();
 }
 onAdd(){
   let co : Commenti = new Commenti();
   co.username = this.f.username;
   co.commento = this.myForm.controls['commento'].value;
   this.commento.push(co);
   console.log("Aggiunto");
 }
  ngOnInit() {
  }

}
