import { Component } from '@angular/core';

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  // template: `<button>Hello World, templated inline!</button>
  // <p>Angular is awesome!</p>
  // `,
  styleUrls: ['./app.component.scss'],
  // styles: [`h1 { color: red;}`]
})
export class AppComponent {
  title = 'hotelinventoryapp';

  role = "Admin";
}
