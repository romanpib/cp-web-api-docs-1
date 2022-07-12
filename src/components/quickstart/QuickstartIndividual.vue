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
    <h3>Step two: Download and unzip the Client Portal API Gateway</h3>
    <p>
      Individual clients using the Client Portal API will need to use the API gateway in order to authenticate and access endpoints. 
      The gateway is responsible for routing requests to the backend and ensuring that the brokerage session is authenticated.
      The Client Portal API gateway can be downloaded <a href="https://www.interactivebrokers.com/en/index.php?f=5041" target="_blank">here</a>, or, by clicking on the Gateway card in the Downloads section of this page.
    </p>
    <h3>Step three: Download and install Java</h3>
    <p>
      A working installation of Java is required to run the Client Portal API gateway. The minimum requirement is Java 8 update 192.
    </p>
    <h3>Step four: Run the API Gateway</h3>
    <p>
      Using the terminal, navigate to the directory where the gateway has been unzipped, for example:
    </p>
    <div class="code">
      <code>cd C:/Users/Example/Desktop/Cp Gateway</code>
    </div>
    <p>
      Launch the gateway:
    </p>
    <div class="code">
      <code>bin\run.bat root\conf.yaml</code>
    </div>
    <p>
      on Windows, or:
    </p>
    <div class="code">
      <code>bin/run.sh root/conf.yaml</code>
    </div>
    <p>
      on Linux.
    </p>
    <h3>Step five: Login</h3>
    <p>
      Once the gateway is running, you will need to authenticate the session. In order to do so, navigate to https://localhost:5000 from your local network.
      You will need to provide the username and password. The message 'Client Login Succeeds' is displayed when the login is successful.
    </p>
    <p>
      <b>Note:</b> the port number, 5000, is set as default port for the gateway. To change it, update the conf.yaml file.
    </p>
  </div>
</template>

<style scoped>
a {
  color: #DB1222;
  font-weight: bold;
}
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