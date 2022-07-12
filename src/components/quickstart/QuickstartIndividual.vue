<template>
  <div>
    <h3>Step One: Create a free Interactive Brokers account</h3>
    <p>
      In order to use the Client Portal API an active IBKR PRO account is required. IBKR LITE clients will need to upgrade their account to PRO before connecting 
      via the API. See the links below on how you can create a free account or upgrade an existing account. Please note that account creations or upgrades may take up to 24 hours to complete.
    </p>
    <div class="action-buttons">
      <a href="https://www.interactivebrokers.com/en/index.php?f=46380#open-account" target="_blank">Create a free <b>account</b></a>
      <a href="https://www.ibkr.com/faq?id=76129136" target="_blank">Upgrade an existing <b>account</b></a>
    </div>
    <h3>Step two: Download the Client Portal API Gateway</h3>
    <p>
      Individual clients using the Client Portal API will need to use the API gateway in order to authenticate and access endpoints. 
      The gateway is responsible for routing requests to the backend and ensuring that the brokerage session is authenticated.
      The Client Portal API gateway can be downloaded <a href="https://www.interactivebrokers.com/en/index.php?f=5041" target="_blank">here</a>, or, by clicking on the Gateway card in the Downloads section of this page.
    </p>
    <h3>Step three: Launch the gateway</h3>
    <p>Integer iaculis dolor finibus ante pretium, eu iaculis nunc dictum. Cras vehicula mauris vitae magna vestibulum
      aliquet. Nulla pharetra placerat sodales. In eros ex, dapibus et urna vulputate, accumsan imperdiet nibh. Proin
      gravida porta risus, id consequat neque commodo eu. Vestibulum faucibus quam ac metus dapibus, quis molestie erat
      bibendum. Nunc et dui et sem sagittis finibus.

      In vehicula nisl nisl. Aliquam eget euismod urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Etiam sapien diam, venenatis et vulputate in, placerat vitae augue. </p>

  </div>
</template>

<style scoped>
.action-buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}

.action-buttons a {
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

a {
  text-decoration: underline;
  color: black;
  /* font-weight: bold; */
}
</style>