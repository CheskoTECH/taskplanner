.<template>
  <div class="main">
    <div class="main__firstRow">
      <div class="main__firstRow--firstCol common">

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
export default {

}
</script>

<style lang="scss" scoped>

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