<template>
  <div>
    <h3>Step one: Have an Institutional type account</h3>
    <div class="action-buttons">
      <a href="https://www.interactivebrokers.com/en/index.php?f=46380#open-account" target="_blank">Compare institutional <b>accounts</b></a>
    </div>
    <h3>Step two: Request OAuth consumer key</h3>
    <h3>Step three: Try out endpoints with OAuth key</h3>
    <h3>Step four: Deploy</h3>
  </div>
</template>

<style>
.action-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.action-buttons a {
  font-weight: normal;
  border: 1px;
  padding: 1rem;
  border-style: solid;
  border-color: #db1222;
  background-color: white;
  color: #db1222;
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  font-size: medium;
}

.action-buttons a:hover {
  background-color: #db1222;
  color: white;
}

.account {
  width: 233px;
}
</style>