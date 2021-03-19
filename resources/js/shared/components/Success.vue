<template>
  <div class="manage-error">
    <i class="far fa-thumbs-up">
      <h1>Success!</h1>
      <h2>
        <slot></slot>
      </h2>
    </i>
  </div>
</template>
<style scoped>
.manage-error h1,
h2 {
  text-align: center;
  font-size: 3rem;
  color: #35495e;
  display: flex;
  justify-content: center;
}
.manage-error i {
  font-size: 6rem;
  color: #42b983;
  text-align: center;
}
</style>