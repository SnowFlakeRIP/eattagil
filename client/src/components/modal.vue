<template>
  <div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div v-for="item in info" v-bind:key="item.id" class="modal-body">
            <img :src="item.img" class="modal-image" alt="">
            <p class="modal-text">Название: {{ item.name }}</p>
            <p class="modal-text">Описание: {{ item.description }}</p>
            <p class="modal-text">
               Цена: ₽{{ item.price }}
            </p>
            <ul>
              <li>
                <p class="modal-text">Жиры: {{ item.fats }} гр.</p>
              </li>
              <li>
                <p class="modal-text">Белки: {{ item.proteins }} гр.</p>
              </li>
              <li>
                <p class="modal-text">Углеводы: {{ item.carbohydrates }} гр.</p>
              </li>
              <li>
                <p class="modal-text">Калории: {{ item.calories }} Ккал.</p>
              </li>
            </ul>
            <p class="modal-text">Вес готовой продукции: {{ item.gramms }} гр.</p>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button @click="get" type="button" class="btn btn-primary">Добавить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal.vue",
  props: ['info'],
  methods:{
    get(){
      let a = {
        name: this.info[0].name,
        price:Number(this.info[0].price) ,
        count:1
      }
      this.$emit('order2',a)
    }
  }
}
</script>

<style scoped>

</style>