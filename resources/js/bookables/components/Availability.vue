<template>
  <div class="col-4 form-group">
    <span>Check Availability</span>
    <br />
    <br />
    <label for="from">From:</label>
    <input type="text" name="from" placeholder="Start date.." />
    <label for="from">To:</label>
    <input type="text" name="to" placeholder="end date.." />
    <button class="btn btn-block">Check!</button>
  </div>
</template>
<style scoped>
.form-group {
  color: #ebebeb;
}
input[type="text"] {
  display: flex;
  padding: 7px 7px;
  margin: 8px;
  border-radius: 5px;
  width: 100%;
  display: block;
}

.btn-block {
  background: rgb(16, 190, 147);
  padding: 7px;
  margin: 10px;
  border-radius: 5px;
  color: #111;
  width: 100%;
  display: block;
  cursor: pointer;
  font-weight: bolder;
  border:none
}
.btn-block:hover {
  background-color: #610116;
  color: black;
}
label {
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: bolder;
}
</style>