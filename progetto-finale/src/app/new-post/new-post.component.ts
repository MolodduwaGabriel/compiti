import { Component, OnInit, Input } from '@angular/core';
import { Oggetti } from '../oggetti';
import { OGGETTI } from '../mock-object';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Utenti } from '../utenti';
import { Post } from '../post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
oggetto : Oggetti[] = OGGETTI;
scelta:string;
utente : string;
selectedOggetto:string;
commento:string;
@Input() f:Utenti;
post : Post[];
 postForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.postForm = fb.group({
     'commento': ['']
     });
  }


onSubmit(value: string): void {
    console.log('commento: ', this.postForm.controls['commento'].value);
    this.print();
 }
print(){
    this.utente = this.f.username;
    this.scelta = this.selectedOggetto;
    this.commento = this.postForm.controls['commento'].value;
}

  ngOnInit() {
  }

}
