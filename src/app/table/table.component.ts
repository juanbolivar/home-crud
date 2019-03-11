import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  user: User;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private service: UserService) { }

  ngOnInit() {

    const userId = localStorage.getItem('editUserId');

    if (!userId) {
      alert('Acción invalida');
      this.router.navigate(['contacto-table']);
      return;
    }

    this.editForm = this.formBuilder.group({
      id: [],
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      movilephone: ['', Validators.required]
    });

    this.service.getUser(+userId)
      .subscribe(data => {
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.service.updateUser(this.editForm.value)

      .pipe(first())
      .subscribe(data => {
        this.router.navigate(['contacto-table']);
        Swal.fire({
          position: 'top',
          type: 'success',
          title: `Usuario modificado con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
        console.log("ha entrado en el update");
      },
        error => {
          alert(error);
        });
  }

}

// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { User } from '../models/user';



// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.css']
// })
// export class TableComponent implements OnInit {


//   @Input() userList: User[];
//   @Output() openForEditEvent: EventEmitter<User> = new EventEmitter();


//   selectedUser:User;

//   user: User = new User();

//   constructor() { }

//   ngOnInit() {
//   }

//   openForEdit(user:User){
//     this.openForEditEvent.emit(user);
//     this.selectedUser = user;
//   }

// }