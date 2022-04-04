<template>
  <section class="menu-section sec-padding" id="our-menu">
    <div class="container">
      <div class="row">
        <div class="section-title">
          <h2 data-title="order now">наше меню</h2>
        </div>
      </div>
      <div class="row">
        <div class="menu-tabs">
          <button type="button" class="menu-tab-item active" data-target="#zav">
            завтрак
          </button>
          <button type="button" class="menu-tab-item" data-target="#yzh">
            ужин
          </button>
          <button type="button" class="menu-tab-item" data-target="#lunch">
            вега
          </button>
          <button type="button" class="menu-tab-item" data-target="#dinner">
            Супы
          </button>
          <button type="button" class="menu-tab-item" data-target="#drinks">
            напитки
          </button>
          <button type="button" class="menu-tab-item" data-target="#desserts">
            Десерты
          </button>
        </div>
        <div class="row menu-tab-content active" id="zav">
          <div class="menu-item" v-for="item in breakfast" v-bind:key="item.id">
            <div class="menu-item-title">
              <img :src="item.img" alt="1"/>
              <h3 data-bs-toggle="modal" data-bs-target="#exampleModal"
                  @click="get_info(item.calories,item.carbohydrates,item.description,item.fats,item.gramms,item.img,item.name,item.price,item.proteins)">
                {{ item.name }}</h3>
            </div>
            <div class="menu-item-price">₽ {{ item.price }}</div>
            <button @click="create_order(item.name,item.price)" class="btn">Добавить</button>
          </div>
        </div>
        <modal v-on:order2="add_item" v-bind:info="info"/>
        <div class="row menu-tab-content" id="yzh">
          <div class="menu-item" v-for="item in dinner" v-bind:key="item.id">
            <div class="menu-item-title">
              <img :src="item.img" alt="1"/>
              <h3 data-bs-toggle="modal" data-bs-target="#exampleModal"
                  @click="get_info(item.calories,item.carbohydrates,item.description,item.fats,item.gramms,item.img,item.name,item.price,item.proteins)">
                {{ item.name }}</h3>
            </div>
            <div class="menu-item-price">₽ {{ item.price }}</div>
            <button @click="create_order(item.name,item.price)" class="btn">Добавить</button>
          </div>
        </div>
        <div class="row menu-tab-content" id="lunch">
          <div class="menu-item" v-for="item in vega" v-bind:key="item.id">
            <div class="menu-item-title">
              <img :src="item.img" alt="1"/>
              <h3 data-bs-toggle="modal" data-bs-target="#exampleModal"
                  @click="get_info(item.calories,item.carbohydrates,item.description,item.fats,item.gramms,item.img,item.name,item.price,item.proteins)">
                {{ item.name }}</h3>
            </div>
            <div class="menu-item-price">₽ {{ item.price }}</div>
            <button @click="create_order(item.name,item.price)" class="btn">Добавить</button>
          </div>
        </div>
        <div class="row menu-tab-content" id="dinner">
          <div class="menu-item" v-for="item in soups" v-bind:key="item.id">
            <div class="menu-item-title">
              <img :src="item.img" alt="1"/>
              <h3 data-bs-toggle="modal" data-bs-target="#exampleModal"
                  @click="get_info(item.calories,item.carbohydrates,item.description,item.fats,item.gramms,item.img,item.name,item.price,item.proteins)">
                {{ item.name }}</h3>
            </div>
            <div class="menu-item-price">₽ {{ item.price }}</div>
            <button @click="create_order(item.name,item.price)" class="btn">Добавить</button>
          </div>
        </div>
        <div class="row menu-tab-content" id="drinks">
          <div class="menu-item" v-for="item in drinks" v-bind:key="item.id">
            <div class="menu-item-title">
              <img :src="item.img" alt="1"/>
              <h3 data-bs-toggle="modal" data-bs-target="#exampleModal"
                  @click="get_info(item.calories,item.carbohydrates,item.description,item.fats,item.gramms,item.img,item.name,item.price,item.proteins)">
                {{ item.name }}</h3>
            </div>
            <div class="menu-item-price">₽ {{ item.price }}</div>
            <button @click="create_order(item.name,item.price)" class="btn">Добавить</button>
          </div>
        </div>
        <div class="row menu-tab-content" id="desserts">
          <div class="menu-item" v-for="item in deserts" v-bind:key="item.id">
            <div class="menu-item-title">
              <img :src="item.img" alt="1"/>
              <h3 data-bs-toggle="modal" data-bs-target="#exampleModal"
                  @click="get_info(item.calories,item.carbohydrates,item.description,item.fats,item.gramms,item.img,item.name,item.price,item.proteins)">
                {{ item.name }}</h3>
            </div>
            <div class="menu-item-price">₽ {{ item.price }}</div>
            <button @click="create_order(item.name,item.price)" class="btn">Добавить</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import modal from "./modal";

export default {
  name: "Menu.vue",
  data() {
    return {
      breakfast: [],
      dinner: [],
      vega: [],
      soups: [],
      drinks: [],
      deserts: [],
      info: [],
      order: []
    };
  },
  components: {modal},
  methods: {
    menuTabs(e) {
      const menuTabs = document.querySelector(".menu-tabs");
      if (
          e.target.classList.contains("menu-tab-item") &&
          !e.target.classList.contains("active")
      ) {
        const target = e.target.getAttribute("data-target");
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection
            .querySelector(".menu-tab-content.active")
            .classList.remove("active");
        menuSection.querySelector(target).classList.add("active");
      }
    },
    async get_menu() {
      await axios.get('http://45.130.8.126:8000/get_products').then((response) => {
        let data = response.data
        for (let i = 0; i < data.length; i++) {
          if (data[i].type == 'Завтрак') {
            this.breakfast.push(data[i])
          } else if (data[i].type == 'Ужин') {
            this.dinner.push(data[i])
          } else if (data[i].type == 'Вега') {
            this.vega.push(data[i])
          } else if (data[i].type == 'Суп') {
            this.soups.push(data[i])
          } else if (data[i].type == 'Напиток') {
            this.drinks.push(data[i])
          } else if (data[i].type == 'Десерт') {
            this.deserts.push(data[i])
          }
        }
        console.log(this.breakfast)
        console.log(this.dinner)
      })
    },
    get_info(calories, carbohydrates, description, fats, gramms, img, name, price, proteins) {
      this.info = []
      const a = {
        calories: calories,
        carbohydrates: carbohydrates,
        description: description,
        fats: fats,
        gramms: gramms,
        img: img,
        name: name,
        price: price,
        proteins: proteins,
      }
      this.info.push(a)
      console.log(this.info)
    },
    create_order(name, price) {
      let a = {
        name: name,
        price: price,
        count: 1
      }
      this.order.push(a)
      // console.log(this.order)
      this.$emit('order', a)
    },
    add_item(a) {
      let item = {
        name: a.name,
        price: a.price,
        count: 1
      }
      this.order.push(item)
      this.$emit('order', item)
    }
  },
  beforeMount() {
    this.get_menu()
  },
  mounted() {
    window.addEventListener("click", this.menuTabs);
  },
  beforeDestroy() {
    window.removeEventListener("click", this.menuTabs);
  },
};
</script>
