import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private service: UserService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      movilephone: ['', Validators.required]
    });
  }

  onSubmit() {
    this.service.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['contacto-table']);
        Swal.fire({
          position: 'top',
          type: 'success',
          title: `Usuario creado con éxito`,
          showConfirmButton: false,
          timer: 1500
        });
      });
  }
}
  // onSubmit() {
  //   this.service.createUser(this.addForm.value)
  //     .subscribe(data => {
  //       this.router.navigate(['contacto-table']);
  //       Swal.fire({
  //         position: 'top',
  //         type: 'success',
  //         title: `Usuario creado con éxito`,
  //         showConfirmButton: false,
  //         timer: 1500
  //       });
  //       console.log("ha entrado en el create");
  //     },
  //       error => {
  //         alert(error);
  //       });
  // }




// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { User } from '../models/user';


// @Component({
//   selector: 'app-contacto',
//   templateUrl: './contacto.component.html',
//   styleUrls: ['./contacto.component.css']
// })
// export class ContactoComponent implements OnInit {

//   @Output() addOrEditEvent: EventEmitter<User> = new EventEmitter();
//   @Output() deleteEvent: EventEmitter<User> = new EventEmitter();


//   user: User = new User();

//   constructor() { }

//   ngOnInit() {

//   }

//   @Input()
//   set selectedUser(user: User) {
//     this.user = Object.assign({}, user);
//   }

//   addOrEdit() {
//     this.addOrEditEvent.emit(this.user);
//     this.user = new User();
//   }

//   delete(){
//     this.deleteEvent.emit(this.user);
//   }

//   // delete() {
//   //   this.deleteEvent.emit(this.user);
//   // }
// }
