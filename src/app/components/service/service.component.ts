import { Component, Input } from '@angular/core';
import { User } from 'src/app/User';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  @Input()
  user!: User;
  faCircleInfo = faCircleInfo;

  public show:boolean = false;
  public buttonName:any = 'More about';

  toggle() {
    this.show = !this.show;

    // Change the name of the button.
    if(this.show)  
      this.buttonName = "Less about";
    else
      this.buttonName = "More about";
  }
}
