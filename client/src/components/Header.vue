<template>
  <header class="header">
    <div class="container">
      <div class="row jcs alc">
        <div class="logo">
          <a href="#!"
          ><img src="../assets/img/1.png" alt="logo" style="height: 44px"
          /></a>
          <p class="text-logo">eatTagil</p>
        </div>
        <button @click="get_summary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn">Корзинка
        </button>
        <p>Сегодня заказов: {{ this.s }}</p>
        <button
            :class="{ active: burgerToogle }"
            class="nav-toggler"
            @click="navToggler()"
            type="button"
        >
          <span></span>
        </button>
        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
             aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 style="font-size: 22px" class="modal-title modal-text" id="staticBackdropLabel"> Здесь отображаются
                  Ваши покупки</h5>
              </div>
              <div v-for="(item,index) in order" class="modal-body" v-bind:key="item.id">
                <p class="modal-text">{{ item.name }} | количество: {{ item.count }} |
                  цена за {{ item.count }}: {{ item.price * item.count }}
                  <button @click="increment(item.count,item.name)"><i class="fa fa-plus" aria-hidden="true"></i>
                  </button>
                  <button style="margin-left: 5px" @click="minus(item.count,item.name,index)"><i class="fa fa-minus" aria-hidden="true"></i>
                  </button>
                </p>
              </div>
              <hr>
              <p style="margin-left:16px;margin-top: 20px" class="modal-text">Итоговая сумма заказа: {{ summary }}
                рублей</p>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                <button @click="make_order" type="button" class="btn btn-primary">Заказать!</button>
              </div>
            </div>
          </div>
        </div>
        <nav :class="{ open: burgerToogle }" class="nav">
          <ul>
            <li @click="closeMenu()" class="nav-item">
              <a href="#home">Главная</a>
            </li>
            <li @click="closeMenu()" class="nav-item">
              <a href="#about">О нас</a>
            </li>
            <li @click="closeMenu()" class="nav-item">
              <a href="#our-menu">Наше меню</a>
            </li>
            <li @click="closeMenu()" class="nav-item">
              <a href="#testimonial">Отзывы</a>
            </li>
            <li @click="closeMenu()" class="nav-item">
              <a href="#team">Наша команда</a>
            </li>
            <li @click="closeMenu()" class="nav-item">
              <a href="#contact">Контакты</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>

export default {
  name: "Header.vue",
  data() {
    return {
      burgerToogle: false,
      windowTop: 0,
      items: [],
      summary: 0,
      s: 0
    };
  },
  props: {
    order: {type: Array}
  },
  methods: {
    navToggler() {
      this.burgerToogle = !this.burgerToogle;
    },
    closeMenu() {
      this.burgerToogle = false;
    },
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      if (this.windowTop > 60) {
        let nav = document.querySelector(".header");
        nav.classList.add("sticky");
      } else {
        let nav = document.querySelector(".header");
        nav.classList.remove("sticky");
      }
    },
    get_summary() {
      this.summary = 0
      console.log(this.order)
      for (let i = 0; i < this.order.length; i++) {
        this.summary += Number(this.order[i].price * this.order[i].count)
      }
      console.log(this.summary)
    },
    increment(count, name) {
      for (let i = 0; i < this.order.length; i++) {
        if (this.order[i].name == name) {
          this.order[i].count++
        }
      }
      this.get_summary()
    },
    minus(count, name, id) {
      for (let i = 0; i < this.order.length; i++) {
        if (this.order[i].name == name) {
          this.summary = this.summary - (this.order[i].price * this.order[i].count)
          this.order[i].count = this.order[i].count - 1
        }
      }
      this.order.splice(id, id + 1)
    },
    async make_order() {
      this.s++
    }
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  computed: {}
};
</script>
