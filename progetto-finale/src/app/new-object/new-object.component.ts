import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OGGETTI } from '../mock-object';
import { Oggetti } from '../oggetti';
import { Utenti } from '../utenti';

@Component({
  selector: 'app-new-object',
  templateUrl: './new-object.component.html',
  styleUrls: ['./new-object.component.css']
})
export class NewObjectComponent implements OnInit {
  @Input() o: Oggetti;
  @Input() f: Utenti;
  oggettiForm: FormGroup;
  oggetto : Oggetti[] = OGGETTI;

 constructor(fb: FormBuilder) {
   this.oggettiForm = fb.group({
     'oggetto': ['',Validators.required],
     'descrizione': ['', Validators.required],
     'prezzo': ['', Validators.required],
     'link': ['',Validators.required]
   });

}
 onSubmit(value: string): void {
    console.log('oggetto: ', this.oggettiForm.controls['oggetto'].value );
    console.log('descrizione: ', this.oggettiForm.controls['descrizione'].value );
    console.log('prezzo: ', this.oggettiForm.controls['prezzo'].value);
    console.log('link: ', this.oggettiForm.controls['link'].value);
    this.onAdd();
  }
  onAdd(){
    let og : Oggetti = new Oggetti();
    og.username = this.f.username;
    og.oggetto = this.oggettiForm.controls['oggetto'].value;
    og.descrizione = this.oggettiForm.controls['descrizione'].value;
    og.prezzo = this.oggettiForm.controls['prezzo'].value;
    og.link = this.oggettiForm.controls['link'].value;
    this.oggetto.push(og);
    console.log("Aggiunto");

  }
  ngOnInit() {
  }

}
