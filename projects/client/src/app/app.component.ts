import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
// import { ToastrService } from 'ngx-toastr';

import * as toastr from 'toastr';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';


  showSuccess() {

    toastr.success('Hello world!', 'Toastr Fun!');
  }

  showError() {
    toastr.error('Something went wrong!', 'Oops!');
  }

  showWarning() {
    toastr.warning('This is a warning', 'Warning!');
  }


}
