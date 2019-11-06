<template>
  <div class="main">
    <div class="main__firstRow">
      <div class="main__firstRow--mainLine common">
        <div class="main__firstRow--mainLine-wrapper">
          
        </div>
        <div class="main__firstRow--mainLine-wrapper">
          
        </div>
      </div>
      <!-- <div class="main__firstRow--secondCol">
        <div class="main__firstRow--secondCol-topBlock common">

        </div>
        <div class="main__firstRow--secondCol-botBlock common">

        </div>
      </div> -->
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
      // processor: 70,
      // memory: 30,
      // streams: 2145,
      // processes: 218
    };
  },
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
  grid-template-rows: 45rem 1fr;
  grid-gap: 3rem;
  background-color: #F3F6FB;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.5rem;

  &__firstRow {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3rem;

    &--mainLine {
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
    display: flex;
    padding-left: 5rem;
    padding-top: 4rem;

    &--ttx {
      margin-left: 5rem;
    }
  }
}

.common {
  border-radius: 25px;
  box-shadow: 3px 3px 20px rgba($color: #000000, $alpha: .08);
}
</style>