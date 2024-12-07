import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
// import { ToastrService } from 'ngx-toastr';

import * as toastr from 'toastr';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,HeaderComponent,FooterComponent ,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';

  constructor(private http: HttpClient) {

    // this.postFunc()
  }
  showSuccess() {

    toastr.success('Hello world!', 'Toastr Fun!');
  }


  postFunc() {
    const data = { title: 'hi', content: 'this is rom post function rom firebace tec' }; // بيانات JSON

    this.http.post('https://quickbuy-f49ad-default-rtdb.firebaseio.com/postes.json', data)
      .subscribe(
        response => {
          console.log('Post successful', response);
        },
        error => {
          console.error('Post failed', error);
        }
      );
  }

  showError() {
    toastr.error('Something went wrong!', 'Oops!');
  }

  showWarning() {
    toastr.warning('This is a warning', 'Warning!');
  }


}
