import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Receive Books view to register book stocks.
 * @author Carlos Céspedes
 */
@Component({
  selector: 'app-book-stock-form',
  imports: [TranslatePipe],
  templateUrl: './book-stock-form.html',
  styleUrl: './book-stock-form.css',
})
export class BookStockForm {}
