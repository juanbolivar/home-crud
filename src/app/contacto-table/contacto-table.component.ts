import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto-table',
  templateUrl: './contacto-table.component.html',
  styleUrls: ['./contacto-table.component.css']
})
export class ContactoTableComponent implements OnInit {
  users: User[];

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(data => (this.users = data));
  }

  deleteUser(user: User): void {
    Swal.fire({
      title: 'Está seguro?',
      text: `¿Seguro desea eliminar al usuario ${user.name} ${
        user.lastname
        }?`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        this.service.deleteUser(user.id).subscribe(data => {
          this.users = this.users.filter(c => c !== user);
        });

        Swal.fire('Eliminado!', 'Se ha eliminado el usuario correctamente.', 'success');
      }
    });
  }

  editUser(user: User): void {
    localStorage.removeItem('editUserId');
    localStorage.setItem('editUserId', user.id.toString());
    this.router.navigate(['table']);
  }

  addUser(): void {
    this.router.navigate(['contacto']);
  }
}


// import { Component, OnInit } from '@angular/core';
// import { User } from '../models/user';

// @Component({
//   selector: 'app-contacto-table',
//   templateUrl: './contacto-table.component.html',
//   styleUrls: ['./contacto-table.component.css']
// })
// export class ContactoTableComponent implements OnInit {

//   selectedUser: User = new User();

//   userList: User[] = [
//     { id: 1, name: "Ryan", lastname: "Wolf", email: "ryanwolf@gmail.com", movilephone: 666666666 },
//     { id: 2, name: "Sergio", lastname: "Marquez", email: "sergiomarquez@gmail.com", movilephone: 555555555 },
//     { id: 3, name: "Manu", lastname: "Tenorio", email: "manutenorio@gmail.com", movilephone: 444444444 }
//   ];

//   constructor() { }

//   ngOnInit() {
//   }

//   addOrEdit(user: User) {
//     if (user.id == null) {

//       // this.userList.push(this.selectedUser);
//       // this.selectedUser = new User();

//       //Inserta nuevo usuarios
//       const id = this.userList.length + 1;
//       this.userList.push(Object.assign({}, user, { id }));
//     } else {
//       //Edita los usuarios
//       user.id = this.selectedUser.id;
//       this.selectedUser.name = user.name;
//       this.selectedUser.lastname = user.lastname;
//       this.selectedUser.email = user.email;
//       this.selectedUser.movilephone = user.movilephone;
//     }
//   }

//   openForEdit(user: User) {
//     //llena los inputs del formulario con los datos de la tabla 
//     //para posteriormente ser editados
//     this.selectedUser = user;
//   }

//   delete(user:User){
//     if(confirm('Estás seguro de querer elimar este usuario?')){
//       this.userList = this.userList.filter(x => x.id != user.id);
//       this.selectedUser = new User();
//     }
   
//   }

// }