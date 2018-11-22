import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Output() addOrEditEvent: EventEmitter<User> = new EventEmitter();

  user: User = new User();

  constructor() { }

  ngOnInit() {
    
  }

  @Input()
  set selectedUser(user: User) {
    this.user = Object.assign({}, user);
  }

  addOrEdit() {
    this.addOrEditEvent.emit(this.user);
    this.user = new User();
  }

}




