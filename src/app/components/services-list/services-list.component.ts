import { Component } from '@angular/core';
import { User } from 'src/app/User';
import { ServicesRestService } from 'src/app/services/services-rest.service';

@Component({
  selector: 'app-services-list',
  templateUrl: './services-list.component.html',
  styleUrls: ['./services-list.component.css']
})
export class ServicesListComponent {
  users: User[] = [];

  constructor(private serviceRestService: ServicesRestService) { }

  ngOnInit(): void {
    this.serviceRestService.getServices().subscribe(
      (users) => {
        this.users = users;
      }
    );
   }
}
