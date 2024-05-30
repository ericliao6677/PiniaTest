<script setup>
import { useShopStore } from '../../stores/shopStore'
const shopStore = useShopStore();
const addToCart = (id) => { shopStore.addToCart(id) };
const test = (item) => { console.log(item) }
const products = shopStore.products

</script>
<template>
  <div>

    <div class="container mt-5">
      <div class="d-flex justify-content-between ">
        <h5>Product List</h5>

        <router-link to="/cart"><button class="btn btn-success">查看購物車</button></router-link>
      </div>

      <table class="table table-striped">
        <thead class="table-light">
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">price</th>
            <th scope="col" class="w-25"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.price }}</td>
            <td><button class="btn btn-primary" @click="addToCart(item.id)">加入購物車</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style></style>
