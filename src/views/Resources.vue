.<template>
  <div class="main">
    <div class="main__firstRow">
      <div class="main__firstRow--firstCol common">
        <v-gauge :value="processor" unit="%"></v-gauge>
        <v-gauge :value="memory" unit="%"></v-gauge>
      </div>
      <div class="main__firstRow--secondCol">
        <div class="main__firstRow--secondCol-topBlock common">

        </div>
        <div class="main__firstRow--secondCol-botBlock common">

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
      processor: processorFunc(),
      memory: 0,
      data: 0
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

    setInterval(() => {
      if (this.memory < 100) this.memory += 5;
    }, 100)
  },
  methods: {
    processorFunc() {
      let ldata = this.data;
      if (ldata < 100) {
        //setInterval(() => {
          ldata += 2
        //}, 200);
      }

      if (ldata >= 100) {
        ldata -= 20;
      }
      return ldata;
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
    }

    &--secondCol {
      display: grid;
      grid-template-rows: 1fr 1fr;
      grid-gap: 3rem;

      &-topBlock {
        background-color: #fff;
      }
      &-botBlock {
        background-color: #fff;
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