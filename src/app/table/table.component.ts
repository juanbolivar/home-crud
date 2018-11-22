import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  @Input() userList: User[];
  @Output() openForEditEvent: EventEmitter<User> = new EventEmitter();
  

  selectedUser:User;

  user: User = new User();

  constructor() { }

  ngOnInit() {
  }

  openForEdit(user:User){
    this.openForEditEvent.emit(user);
    this.selectedUser = user;
  }
 
}
