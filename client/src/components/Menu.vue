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

      let data = [
        {
          "id": 11,
          "name": "Постные шарики с кунжутом",
          "price": 30,
          "proteins": 5,
          "fats": 10,
          "carbohydrates": 20,
          "description": "Постные шарики с кунжутом",
          "calories": 180,
          "gramms": 100,
          "type": "Вега",
          "img": "https://www.povarenok.ru/data/cache/2016dec/23/37/1854763_51416-710x550x.jpg",
          "createdAt": "2022-03-25 09:39:21.538000 +00:00",
          "updatedAt": "2022-03-25 09:39:22.910000 +00:00"
        },
        {
          "id": 12,
          "name": "Картофельные рулетики с грибами",
          "price": 50,
          "proteins": 2,
          "fats": 5,
          "carbohydrates": 14,
          "description": "Очень вкусные рулетики",
          "calories": 107,
          "gramms": 120,
          "type": "Вега",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/22561.jpg",
          "createdAt": "2022-03-25 09:40:59.860000 +00:00",
          "updatedAt": "2022-03-25 09:41:02.328000 +00:00"
        },
        {
          "id": 13,
          "name": "Капустные котлеты",
          "price": 20,
          "proteins": 3,
          "fats": 5,
          "carbohydrates": 12,
          "description": "Капустные котлетки",
          "calories": 95,
          "gramms": 100,
          "type": "Вега",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/1801.jpg",
          "createdAt": "2022-03-25 09:43:05.064000 +00:00",
          "updatedAt": "2022-03-25 09:43:06.105000 +00:00"
        },
        {
          "id": 14,
          "name": "Томатный суп с фасолью и рисом",
          "price": 30,
          "proteins": 2,
          "fats": 1,
          "carbohydrates": 2,
          "description": "Очень вкусный суп с фасолью",
          "calories": 21,
          "gramms": 100,
          "type": "Вега",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/31704.jpg",
          "createdAt": "2022-03-25 09:44:30.147000 +00:00",
          "updatedAt": "2022-03-25 09:44:30.910000 +00:00"
        },
        {
          "id": 15,
          "name": "Овощная лазанья из лаваша",
          "price": 90,
          "proteins": 4,
          "fats": 3,
          "carbohydrates": 14,
          "description": "Вкусная лазанья",
          "calories": 92,
          "gramms": 120,
          "type": "Вега",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/2109.jpg",
          "createdAt": "2022-03-25 09:45:35.889000 +00:00",
          "updatedAt": "2022-03-25 09:45:36.951000 +00:00"
        },
        {
          "id": 16,
          "name": "Морковный торт",
          "price": 70,
          "proteins": 5,
          "fats": 20,
          "carbohydrates": 32,
          "description": "Морковный тортик",
          "calories": 317,
          "gramms": 100,
          "type": "Вега",
          "img": "https://vsedoma-family.ru/sites/default/files/styles/product/public/product/7691566e94e50ecf96dd02e8114d635c.jpg?itok=Hxi8yuTb",
          "createdAt": "2022-03-25 09:46:35.404000 +00:00",
          "updatedAt": "2022-03-25 09:46:38.197000 +00:00"
        },
        {
          "id": 17,
          "name": "Суп \"Харчо\"",
          "price": 40,
          "proteins": 3,
          "fats": 4,
          "carbohydrates": 6,
          "description": "Супик харчо",
          "calories": 75,
          "gramms": 120,
          "type": "Суп",
          "img": "https://calorizator.ru/sites/default/files/imagecache/product_512/product/soup-25.jpg",
          "createdAt": "2022-03-25 09:49:14.366000 +00:00",
          "updatedAt": "2022-03-25 09:49:15.813000 +00:00"
        },
        {
          "id": 9,
          "name": "Рис с овощами",
          "price": 50,
          "proteins": 2,
          "fats": 4,
          "carbohydrates": 15,
          "description": "Нежный рис с тущёными овощами",
          "calories": 100,
          "gramms": 100,
          "type": "Вега",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/1167.jpg",
          "createdAt": "2022-03-25 09:34:41.744000 +00:00",
          "updatedAt": "2022-03-25 09:34:43.059000 +00:00"
        },
        {
          "id": 18,
          "name": "Куриный суп с вермишелью",
          "price": 50,
          "proteins": 5,
          "fats": 1,
          "carbohydrates": 6,
          "description": "Куринный суп как у мамы дома",
          "calories": 54,
          "gramms": 130,
          "type": "Суп",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/9738.jpg",
          "createdAt": "2022-03-25 09:50:45.918000 +00:00",
          "updatedAt": "2022-03-25 09:50:46.794000 +00:00"
        },
        {
          "id": 19,
          "name": "Тосканский суп с фаршем",
          "price": 60,
          "proteins": 5,
          "fats": 5,
          "carbohydrates": 5,
          "description": "Мексиканский суп с фаршем",
          "calories": 100,
          "gramms": 120,
          "type": "Суп",
          "img": "https://www.povarenok.ru/data/cache/2020nov/21/53/2794606_29295-710x550x.jpg",
          "createdAt": "2022-03-25 09:51:59.123000 +00:00",
          "updatedAt": "2022-03-25 09:52:00.643000 +00:00"
        },
        {
          "id": 10,
          "name": "Вегетарианский пулао",
          "price": 60,
          "proteins": 4,
          "fats": 8,
          "carbohydrates": 12,
          "description": "Ароматный плов",
          "calories": 140,
          "gramms": 100,
          "type": "Вега",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/15247.jpg",
          "createdAt": "2022-03-25 09:35:47.674000 +00:00",
          "updatedAt": "2022-03-25 09:35:48.810000 +00:00"
        },
        {
          "id": 7,
          "name": "Лагман с курицей",
          "price": 200,
          "proteins": 7,
          "fats": 7,
          "carbohydrates": 10,
          "description": "Ароматный бульон ",
          "calories": 128,
          "gramms": 150,
          "type": "Ужин",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/4252.jpg",
          "createdAt": "2022-03-24 13:34:11.624000 +00:00",
          "updatedAt": "2022-03-24 13:34:13.193000 +00:00"
        },
        {
          "id": 20,
          "name": "Сырный суп",
          "price": 60,
          "proteins": 2,
          "fats": 3,
          "carbohydrates": 3,
          "description": "Сырный суп с сырным сыром",
          "calories": 53,
          "gramms": 100,
          "type": "Суп",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/2371.jpg",
          "createdAt": "2022-03-25 09:52:50.346000 +00:00",
          "updatedAt": "2022-03-25 09:52:52.803000 +00:00"
        },
        {
          "id": 5,
          "name": "Овощной суп",
          "price": 100,
          "proteins": 1,
          "fats": 0,
          "carbohydrates": 4,
          "description": "Самые вкусные блинчики на диком Тагиле",
          "calories": 18,
          "gramms": 150,
          "type": "Ужин",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/646.jpg",
          "createdAt": "2022-03-24 13:34:11.624000 +00:00",
          "updatedAt": "2022-03-24 13:34:13.193000 +00:00"
        },
        {
          "id": 21,
          "name": "Суп картофельный с клецками",
          "price": 50,
          "proteins": 3,
          "fats": 1,
          "carbohydrates": 9,
          "description": "Суп с клецками, приготовленный по немецкому рецепту",
          "calories": 60,
          "gramms": 100,
          "type": "Суп",
          "img": "https://fort.crimea.com/catering/uploads/fotos/848ff2f0-876d-11e9-9c6f-54a05051519a_1.jpg",
          "createdAt": "2022-03-25 09:54:01.379000 +00:00",
          "updatedAt": "2022-03-25 09:54:02.180000 +00:00"
        },
        {
          "id": 22,
          "name": "Суп \"Затируха\"",
          "price": 60,
          "proteins": 4,
          "fats": 2,
          "carbohydrates": 6,
          "description": "Суп \"Затируха\" - вспомни общагу",
          "calories": 50,
          "gramms": 100,
          "type": "Суп",
          "img": "https://static.1000.menu/img/content-v2/6e/d2/13223/sup-zatiruxa-s-kuricei-na-yaicax_1633241570_20_max.jpg",
          "createdAt": "2022-03-25 09:55:44.262000 +00:00",
          "updatedAt": "2022-03-25 09:55:45.392000 +00:00"
        },
        {
          "id": 23,
          "name": "Гречневый суп",
          "price": 30,
          "proteins": 1,
          "fats": 2,
          "carbohydrates": 4,
          "description": "Вкуснейший гречневый суп",
          "calories": 34,
          "gramms": 120,
          "type": "Суп",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/1119.jpg",
          "createdAt": "2022-03-25 09:56:46.803000 +00:00",
          "updatedAt": "2022-03-25 09:56:48.750000 +00:00"
        },
        {
          "id": 6,
          "name": "Гречка по-купечески",
          "price": 190,
          "proteins": 14,
          "fats": 8,
          "carbohydrates": 20,
          "description": "Самые вкусные надежда на диком Тагиле",
          "calories": 199,
          "gramms": 150,
          "type": "Ужин",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/3143.jpg",
          "createdAt": "2022-03-24 13:34:11.624000 +00:00",
          "updatedAt": "2022-03-24 13:34:13.193000 +00:00"
        },
        {
          "id": 29,
          "name": "Десерт с фруктовым пюре",
          "price": 30,
          "proteins": 0,
          "fats": 0,
          "carbohydrates": 17,
          "description": "Десерт, но на самом деле напиток",
          "calories": 70,
          "gramms": 120,
          "type": "Напиток",
          "img": "https://www.povarenok.ru/data/cache/2017nov/22/09/2187911_72295-710x550x.jpg",
          "createdAt": "2022-03-25 10:05:47.020000 +00:00",
          "updatedAt": "2022-03-25 10:05:48.127000 +00:00"
        },
        {
          "id": 24,
          "name": "Гороховый суп",
          "price": 30,
          "proteins": 5,
          "fats": 3,
          "carbohydrates": 9,
          "description": "Гороховый суп с российским горохом",
          "calories": 66,
          "gramms": 120,
          "type": "Суп",
          "img": "https://bonfit.ru/upload/iblock/096/0964aa737d3660ca657de45165d18c53.jpg",
          "createdAt": "2022-03-25 09:58:20.150000 +00:00",
          "updatedAt": "2022-03-25 09:58:21.175000 +00:00"
        },
        {
          "id": 25,
          "name": "Горячий шоколад",
          "price": 20,
          "proteins": 4,
          "fats": 9,
          "carbohydrates": 14,
          "description": "Горячий шоколад, как в СССР",
          "calories": 150,
          "gramms": 300,
          "type": "Напиток",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/737.jpg",
          "createdAt": "2022-03-25 10:00:04.204000 +00:00",
          "updatedAt": "2022-03-25 10:00:02.900000 +00:00"
        },
        {
          "id": 26,
          "name": "Десерт из овсянки",
          "price": 15,
          "proteins": 5,
          "fats": 6,
          "carbohydrates": 15,
          "description": "Не напиток, но попробовать стоит",
          "calories": 131,
          "gramms": 100,
          "type": "Напиток",
          "img": "https://www.fitvolshebnitsa.ru/static/r/8/zapechennaya-ovsyanka-ru-W5sSk.jpg",
          "createdAt": "2022-03-25 10:01:53.414000 +00:00",
          "updatedAt": "2022-03-25 10:01:54.494000 +00:00"
        },
        {
          "id": 27,
          "name": "Зеленый смузи",
          "price": 30,
          "proteins": 1,
          "fats": 1,
          "carbohydrates": 6,
          "description": "Зеленый смузи с яблоком и киви поможет восстановить ваши силы",
          "calories": 30,
          "gramms": 150,
          "type": "Напиток",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/46449.jpg",
          "createdAt": "2022-03-25 10:03:17.382000 +00:00",
          "updatedAt": "2022-03-25 10:03:18.523000 +00:00"
        },
        {
          "id": 28,
          "name": "Кисель из черной смородины",
          "price": 25,
          "proteins": 1,
          "fats": 1,
          "carbohydrates": 7,
          "description": "Как мама готовила!",
          "calories": 30,
          "gramms": 100,
          "type": "Напиток",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/53804.jpg",
          "createdAt": "2022-03-25 10:04:19.099000 +00:00",
          "updatedAt": "2022-03-25 10:04:20.309000 +00:00"
        },
        {
          "id": 30,
          "name": "Лимонад",
          "price": 10,
          "proteins": 0,
          "fats": 0,
          "carbohydrates": 7,
          "description": "Вкуснейший лимонад, как в СССР",
          "calories": 26,
          "gramms": 120,
          "type": "Напиток",
          "img": "https://bonfit.ru/upload/iblock/0b7/0b7a452f2e94acd83159041bc694fc32.jpg",
          "createdAt": "2022-03-25 10:07:25.554000 +00:00",
          "updatedAt": "2022-03-25 10:07:27.076000 +00:00"
        },
        {
          "id": 31,
          "name": "Имбирный тоник",
          "price": 40,
          "proteins": 0,
          "fats": 0,
          "carbohydrates": 10,
          "description": "Как швепс, только лучше",
          "calories": 40,
          "gramms": 130,
          "type": "Напиток",
          "img": "https://bonfit.ru/upload/iblock/d41/d412027a5944d6684249eb44df1d0496.jpg",
          "createdAt": "2022-03-25 10:11:05.650000 +00:00",
          "updatedAt": "2022-03-25 10:11:06.753000 +00:00"
        },
        {
          "id": 32,
          "name": "Смузи со шпинатом",
          "price": 20,
          "proteins": 2,
          "fats": 1,
          "carbohydrates": 11,
          "description": "Вкуснейший смузи со шпинатом",
          "calories": 50,
          "gramms": 110,
          "type": "Напиток",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/12652.jpg",
          "createdAt": "2022-03-25 10:12:18.302000 +00:00",
          "updatedAt": "2022-03-25 10:12:19.412000 +00:00"
        },
        {
          "id": 33,
          "name": "Фунтовый кекс из цельнозерновой муки",
          "price": 30,
          "proteins": 13,
          "fats": 7,
          "carbohydrates": 36,
          "description": "Фунтовый кекс, как в лучших пекарнях страны",
          "calories": 260,
          "gramms": 100,
          "type": "Десерт",
          "img": "https://e0.edimdoma.ru/data/recipes/0014/6818/146818-ed4_wide.jpg?1631866952",
          "createdAt": "2022-03-25 10:13:55.480000 +00:00",
          "updatedAt": "2022-03-25 10:13:54.234000 +00:00"
        },
        {
          "id": 34,
          "name": "Пироженые с шоколадом",
          "price": 45,
          "proteins": 5,
          "fats": 26,
          "carbohydrates": 51,
          "description": "Пироженные с шоколадом, который тает во рту. Райское наслаждение",
          "calories": 500,
          "gramms": 100,
          "type": "Десерт",
          "img": "https://www.povarenok.ru/data/cache/2020aug/07/02/2753490_84227-710x550x.jpg",
          "createdAt": "2022-03-25 10:15:38.940000 +00:00",
          "updatedAt": "2022-03-25 10:15:40.550000 +00:00"
        },
        {
          "id": 35,
          "name": "Мраморный банановый хлеб",
          "price": 35,
          "proteins": 4,
          "fats": 8,
          "carbohydrates": 31,
          "description": "Хлеб, приготовленный из лучших бананов страны",
          "calories": 203,
          "gramms": 100,
          "type": "Десерт",
          "img": "https://grandkulinar.ru/uploads/posts/2019-04/1555233693_mramornyj-bananovyj-hleb.jpg",
          "createdAt": "2022-03-25 10:17:55.114000 +00:00",
          "updatedAt": "2022-03-25 10:17:57.890000 +00:00"
        },
        {
          "id": 36,
          "name": "Гранулы из замороженного йогурта",
          "price": 20,
          "proteins": 2,
          "fats": 3,
          "carbohydrates": 3,
          "description": "Гранулы замороженного йогурта не оставят вас равнодушным",
          "calories": 50,
          "gramms": 100,
          "type": "Десерт",
          "img": "https://grandkulinar.ru/uploads/posts/2019-04/1555261816_granuly-iz-zamorozhennogo-jogurta.jpg",
          "createdAt": "2022-03-25 10:18:09.100000 +00:00",
          "updatedAt": "2022-03-25 10:18:08.020000 +00:00"
        },
        {
          "id": 37,
          "name": "Хрустящие крекеры",
          "price": 10,
          "proteins": 12,
          "fats": 24,
          "carbohydrates": 32,
          "description": "Крекеры, как TuC, только лучше",
          "calories": 470,
          "gramms": 100,
          "type": "Десерт",
          "img": "https://e1.edimdoma.ru/data/recipes/0009/5373/95373-ed4_wide.jpg?1628788177",
          "createdAt": "2022-03-25 10:20:39.029000 +00:00",
          "updatedAt": "2022-03-25 10:20:40.332000 +00:00"
        },
        {
          "id": 38,
          "name": "Полезные пироженые Брауни",
          "price": 50,
          "proteins": 6,
          "fats": 30,
          "carbohydrates": 50,
          "description": "Как баунти, только не за 200 рублей",
          "calories": 442,
          "gramms": 100,
          "type": "Десерт",
          "img": "https://grandkulinar.ru/uploads/posts/2019-04/1555262128_poleznye-pirozhnye-brauni.jpg",
          "createdAt": "2022-03-25 10:22:14.661000 +00:00",
          "updatedAt": "2022-03-25 10:22:15.741000 +00:00"
        },
        {
          "id": 41,
          "name": "Ангельский бисквит из яичных белков",
          "price": 60,
          "proteins": 11,
          "fats": 12,
          "carbohydrates": 43,
          "description": "Тот случай, когда название говорит само за себя",
          "calories": 320,
          "gramms": 100,
          "type": "Десерт",
          "img": "https://www.patee.ru/r/x6/01/ff/0a/960m.jpg",
          "createdAt": "2022-03-25 10:25:03.769000 +00:00",
          "updatedAt": "2022-03-25 10:25:07.143000 +00:00"
        },
        {
          "id": 40,
          "name": "Сэндвич с мороженым и печеньем",
          "price": 45,
          "proteins": 4,
          "fats": 8,
          "carbohydrates": 35,
          "description": "Мороженное, привезенное с Альп и хлебушек, приготовленный с любовью",
          "calories": 220,
          "gramms": 100,
          "type": "Десерт",
          "img": "https://grandkulinar.ru/uploads/posts/2018-05/1527422205_mini-sendvichi-s-morozhenym-i-pechenem.jpg",
          "createdAt": "2022-03-25 10:23:50.273000 +00:00",
          "updatedAt": "2022-03-25 10:23:51.262000 +00:00"
        },
        {
          "id": 8,
          "name": "Ленивые вареники",
          "price": 187,
          "proteins": 6,
          "fats": 6,
          "carbohydrates": 10,
          "description": "Самые вкусные варенники на диком Тагиле",
          "calories": 114,
          "gramms": 150,
          "type": "Завтрак",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipes/35468.jpg",
          "createdAt": "2022-03-24 13:34:11.624000 +00:00",
          "updatedAt": "2022-03-24 13:34:13.193000 +00:00"
        },
        {
          "id": 4,
          "name": "Сырники по-аджарски",
          "price": 195,
          "proteins": 13,
          "fats": 10,
          "carbohydrates": 12,
          "description": "Самые вкусные сырники на диком Тагиле",
          "calories": 198,
          "gramms": 150,
          "type": "Завтрак",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/377.jpg",
          "createdAt": "2022-03-24 13:34:11.624000 +00:00",
          "updatedAt": "2022-03-24 13:34:13.193000 +00:00"
        },
        {
          "id": 3,
          "name": "Омлет с сыром и зеленью",
          "price": 200,
          "proteins": 13,
          "fats": 11,
          "carbohydrates": 1,
          "description": "Самый вкусный омлет на диком Тагиле",
          "calories": 159,
          "gramms": 100,
          "type": "Завтрак",
          "img": "https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/32773.jpg",
          "createdAt": "2022-03-24 13:34:11.624000 +00:00",
          "updatedAt": "2022-03-24 13:34:13.193000 +00:00"
        }
      ]
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
