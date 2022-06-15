<template>
  <div>
    <h3>Step One: Create a free Interactive Brokers account</h3>
    <p>In order to use the API, an IBKR PRO account is required. IBKR PRO accounts are free and can be created in just a
      few minutes. If you already have a IBKR LITE account you can change the type to PRO.</p>
    <div class="action-buttons">
      <button>Create a free <b>account</b></button>
      <button>Upgrade an existing <b>account</b></button>
    </div>
    <h3>Step two: Download the Client Portal API Gateway</h3>
    <p>Vivamus nec iaculis ligula. Donec tincidunt vel odio vel tristique. Etiam eget mi in lorem rutrum suscipit quis
      ac odio. Nullam non pellentesque mi. Donec arcu nulla, sollicitudin quis nisi vitae, elementum commodo nulla.
      Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus euismod id turpis eu ultrices. Proin vitae
      lorem ut leo ultrices rutrum. Vivamus lobortis imperdiet sagittis. Quisque consequat ex at diam viverra, sit amet
      fringilla nisi mollis.</p>

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

.action-buttons button {
  border: 1px;
  padding: 1rem;
  border-style: solid;
  border-color: #db1222;
  background-color: white;
  color: #db1222;
  cursor: pointer;
}

.action-buttons button:hover {
  background-color: #db1222;
  color: white;
}

.account {
  width: 233px;
}
</style>