<template>
  <div class="main">
    <div class="main__firstRow">
      <div class="main__firstRow--firstCol common">
        <div class="main__firstRow--firstCol-wrapper">
          <v-gauge :value="processorFuncWave()" unit="%"></v-gauge>
          <p class="main__firstRow--firstCol-wrapper-p">ЦП</p>
        </div>
        <div class="main__firstRow--firstCol-wrapper">
          <v-gauge :value="memory" unit="%"></v-gauge>
          <p class="main__firstRow--firstCol-wrapper-p">Память</p>
        </div>
      </div>
      <div class="main__firstRow--secondCol">
        <div class="main__firstRow--secondCol-topBlock common">
          <p class="main__firstRow--secondCol-topBlock-data">{{ streams }}</p>
          <p>Потоки</p>
        </div>
        <div class="main__firstRow--secondCol-botBlock common">
          <p class="main__firstRow--secondCol-botBlock-data">{{ processes }}</p>
          <p>Процессы</p>
        </div>
      </div>
    </div>
    <div class="main__secondRow common">
    </div>
  </div>
</template>

<script>
import VGauge from "vgauge";

export default {
  components: {
    VGauge
  },
  data() {
    return {
      processor: 70,
      memory: 30,
      streams: 2145,
      processes: 218
    };
  },
  mounted() {
    // if (this.processor < 100) {
    //   //setInterval(() => {
    //     this.processor += 2
    //   //}, 200);
    // }

    // if (this.processor >= 100) {
    //   this.processor -= 20;
    // }

    // setInterval(() => {
    //   if (this.memory < 100) this.memory += 5;
    // }, 100)
  },
  methods: {
    processorFunc() {
      if (this.processor < 100) {
        //setInterval(() => {
          setTimeout(() => {
            this.processor += 2
          }, 300);
        //}, 200);
      }

      if (this.processor >= 100) {
        setTimeout(() => {
          this.processor -= 20;
        }, 300);
      }
      return this.processor;
    },
    processorFuncWave() {
      if (this.processor < 70) {
          setTimeout(() => {
            this.processor += 2;
          }, 700);
      }

      if (this.processor >= 70) {
        setTimeout(() => {
          this.processor -= 3;
        }, 700);
      }
      return this.processor;
    },
    memoryFuncWave() {
      if (this.memory < 30) {
          setTimeout(() => {
            this.memory += 2;
          }, 500);
      }
      if (this.memory >= 30) {
        setTimeout(() => {
          this.memory -= 3;
        }, 500);
      }
      return this.memory;
    }
  }
};
</script>

<style lang="scss" scoped>
.gauge-title {
  display: none;
}
.main {
  height: 100%;
  display: grid;
  padding: 3rem;
  grid-template-rows: 50rem 1fr;
  grid-gap: 3rem;
  background-color: #F3F6FB;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5rem;

  &__firstRow {
    display: grid;
    grid-template-columns: 1fr 25rem;
    grid-gap: 3rem;

    &--firstCol {
      background-color: #fff;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-items: center;

      &-wrapper {
        text-align: center;
        &-p {
          margin-top: 2rem;
        }
      }

    }

    &--secondCol {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-gap: 3rem;

      &-topBlock {
        background-color: #fff;
        display: grid;
        align-content: center;
        justify-content: center;
        text-align: center;

        &-data {
          font-size: 3.5rem;
          color: rgb(24, 175, 18);
        }
      }
      &-botBlock {
        background-color: #fff;
        display: grid;
        align-content: center;
        justify-content: center;
        text-align: center;

        &-data {
          font-size: 3.5rem;
          color: rgb(24, 175, 18);
        }
      }
    }
  }

  &__secondRow {
    background-color: #fff;
  }
}

.common {
  border-radius: 25px;
  box-shadow: 3px 3px 20px rgba($color: #000000, $alpha: .08);
}
</style>