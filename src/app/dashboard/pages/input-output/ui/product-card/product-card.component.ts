import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, EventEmitter, input, output, Output } from '@angular/core';
import { Product } from '@interfaces/producto.interface';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  // @Input({ required: true }) product: Product;
  public product = input.required<Product>();

  // @Output() onIncrementQuantity = new EventEmitter<number>();
  public onIncrementQuantity = output<number>();

  incrementQuantity() {
    this.onIncrementQuantity.emit(this.product().quantity + 1);
  }

  public loginEffect = effect(() => {
    console.log(this.product().name);
  });
}
