<template>
  <div class="main">
    <nav class="sidebar">
      <p class="sidebar__logo">Task Planner</p>
      <ul class="navbar">
        <li class="navbar__item">
          <router-link to="resources" class="navbar__link">Ресурсы</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="createtask" class="navbar__link">Создать задачу</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="tasks" class="navbar__link">Задачи</router-link>
        </li>
        <li class="navbar__item">
          <router-link to="about" class="navbar__link">О приложении</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.main {
  background-color: #4C75A3;
  padding-top: 3.6rem;
}

.sidebar__logo {
  font-size: 2.6rem;
  text-align: center;
  color: #fff;
  font-family: 'Pacifico', cursive;
}

.navbar {
  list-style: none;
  margin-top: 4rem;
  font-family: 'Roboto Slab', serif;
  font-weight: 400;

  &__link:link,
  &__link:visited {
    text-decoration: none;
    text-transform: uppercase;
    display: block;
    padding: 2.5rem;
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 1.3rem;
    outline: none;
  }

  &__link:hover {
    transition: all 0.2s;
    background-color: #6191C8;
  }

  // &__icon {
  //   width: 2rem;
  //   height: 2rem;
  //   margin-right: 2rem;
  //   fill: #fff;
  // }
}

</style>>
