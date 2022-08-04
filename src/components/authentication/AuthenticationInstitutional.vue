<template>
  <div>
    <h3>Session Authentication</h3>
    <p>
      An authenticated brokerage session is necessary to access order inforamtion, place orders, or receive market data.
      Other Interactive Brokers' trading applications such as TWS or IBKR Mobile also utilize a brokerage session, A given username can 
      only create a single brokerage session at a time, so launching TWS or IBKR mobile will disconnect a brokerage session
      in the CP API, and vice versa.
    </p>
  </div>
</template>