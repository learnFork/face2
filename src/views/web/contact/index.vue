<template>
  <div
    class="pt-page page-contact"
    :class="{
      'pt-page-current': visible,
      'page-entered': isPageEntered
    }"
  >
    <div class="title-h1 pt-page-title">
      <img :src="require('../assets/img/title/title_lianxiwomen.png')" />
    </div>
  
    <div class="page-content page-contact-content">
      <div>
        <img :src="require('./img/pic_adress.png')" />
      </div>
      <div>
        <img :src="require('./img/pic_erweima.png')" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Us extends Vue {
  @Prop({ default: false }) visible: boolean
  @Prop({ default: false }) isPageEntered: boolean
}
</script>

<style lang="scss">
.page-contact-content {
  display: flex;
  margin-top: 350px;

  div {
    width: 50%;
    text-align: center;
  }
}
</style>
