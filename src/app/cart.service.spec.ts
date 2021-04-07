import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

fdescribe('CartService', () => {
  let service: CartService;
  const testProduct = {
    id: '1',
    title: 'Test Product',
    description: 'Just a testing product',
    units: 8,
    price: 360,
    img: 'https://m.media-amazon.com/images/I/61OL2zIliML._AC_UY218_.jpg',
    available: true,
  };

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be of length 1', () => {
    service.addToCart(testProduct);
    expect(service.items.length).toBe(1);
  });

  it('should remove one from the cart', () => {
    service.deleteFromCart(testProduct.id);
    expect(service.items.length).toBe(0);
  });

  it('should add a product and increase the number of units in the cart', () => {
    service.addToCart(testProduct);
    service.addToCart(testProduct);
    service.addToCart(testProduct);

    expect(service.items[0]).toBeTruthy();
    expect(service.items[0].units).toBe(3);
  });

  it('should add a product and then change the ammount of units', () => {
    service.addToCart(testProduct);
    expect(service.items.length).toBe(1);

    service.changeUnitOfProduct(testProduct, 6);
    expect(service.items[0].units).toBe(6);
  });

  it('should add a product and then NOT change the ammount of units', () => {
    service.addToCart(testProduct);
    expect(service.items.length).toBe(1);

    service.changeUnitOfProduct(testProduct, 36);
    expect(service.items[0].units).not.toBe(36);
  });
});
