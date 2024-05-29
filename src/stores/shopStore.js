import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useShopStore = defineStore('shop', () => {
  const products = ref([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 }
  ]);
  const cart = ref([]);

  const cartTotal = computed(() => {
    return cart.value.reduce((total, item) => {
      const product = products.value.find((p) => p.id === item.productId);
      return total + product.price * item.quantity;
    }, 0);
  });

  const cartItems = computed(() => {
    return cart.value.map((item) => {
      const product = products.value.find((p) => p.id === item.productId);
      return {
        ...product,
        quantity: item.quantity
      };
    });
  });

  const addToCart = (productId) => {
    const item = cart.value.find((item) => item.productId === productId);
    if (item) {
      item.quantity++;
    } else {
      this.cart.push({ productId, quantity: 1 });
    }
  };
  const removeFromCart = (productId) => {
    const itemIndex = cart.value.findIndex((item) => item.productId === productId);
    if (itemIndex > -1) {
      this.cart.splice(itemIndex, 1);
    }
  };
  const updateQuantity = (productId, quantity) => {
    const item = cart.value.find((item) => item.productId === productId);
    if (item) {
      item.quantity = quantity;
    }
  };
  const clearCart = () => {
    cart.value = [];
  };

  return {
    products,
    cart,
    cartTotal,
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
  };
});
