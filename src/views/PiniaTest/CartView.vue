<script setup>
import { computed } from 'vue';
import { useShopStore } from '../../stores/shopStore';
const shopStore = useShopStore();
const cartItems = computed(() => shopStore.cartItems);
const cartTotal = computed(() => shopStore.cartTotal);

const removeFromCart = (id) => {
  shopStore.removeFromCart(id);
};
const updateQuantity = (id, quantity) => {
  shopStore.updateQuantity(id, quantity);
};
</script>
<template>
  <div class="container mt-5">
    <h5>Cart List</h5>
    <table class="table table-striped">
      <thead class="table-light">
        <tr>
          <th scope="col">id</th>
          <th scope="col">name</th>
          <th scope="col">price</th>
          <th scope="col">count</th>
          <th scope="col"></th>
          <th scope="col" class="w-25"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <input
              type="number"
              @input="updateQuantity(item.id, item.quantity)"
              v-model="item.quantity"
            />
            {{ item.quantity }}
          </td>
          <td><button class="btn btn-primary" @click="removeFromCart(item.id)">移除</button></td>
        </tr>
      </tbody>
    </table>
    <div>
      <h5>totol: {{ cartTotal }}</h5>
      <p>{{ cartItems }}</p>
    </div>
  </div>
</template>
<style></style>
