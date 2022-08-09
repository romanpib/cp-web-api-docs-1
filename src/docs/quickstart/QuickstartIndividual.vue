<template>
  <div>
    <section>
      <h3>Step One: Create a free Interactive Brokers account</h3>
      <p>
        In order to use Client Portal API an active IBKR PRO account is required. IBKR LITE clients will need to upgrade their account to PRO before connecting 
        via the API. See the links below on how you can create a free account or upgrade your existing IBKR LITE account to PRO. 
      </p>
      <p>
        <b>Note:</b> The account creation or upgrade process may take up to 24 hours to complete.
      </p>
      <div class="action-buttons">
        <a href="https://www.interactivebrokers.com/en/index.php?f=46380#open-account" target="_blank">Create a free <b>account</b></a>
        <a href="https://www.ibkr.com/faq?id=76129136" target="_blank">Upgrade an existing <b>account</b></a>
      </div>
    </section>
    <hr>
    <section>
      <h3>Step Two: Download and unzip the Client Portal API Gateway</h3>
      <p>
        Individual clients using Client Portal API will need to use a Java-based API gateway in order to access protected endpoints. 
        The gateway is responsible for routing requests to the backend and ensuring that the brokerage session is authenticated.
        The Client Portal API gateway can be downloaded <a href="https://www.interactivebrokers.com/en/index.php?f=5041" target="_blank">here</a>, or, by clicking on the Gateway card in the Downloads section of this page.
      </p>
      <p>
        <b>Note:</b> New gateway release versions are released frequently. It is recommended that you periodically download the latest version of the gateway by following the link above.
      </p>
    </section>
    <hr>
    <section>
      <h3>Step Three: Download and install Java</h3>
      <p>
        As the Client Portal API Gateway was built using Java, a working installation of Java is required. The minimum requirement is Java 8 update 192.
        In order to check if you have a working installation of Java, open a terminal and run the following command:
        <div class="code">
          <code>java --version</code>
        </div>
      </p>
      <p>
        If Java is installed and correctly configured you should see information about the currently installed version, otherwise an error is raised. 
        If you don't currently have Java installed you can download it by clicking on the Java card in the Downloads section of this page.
      </p>
    </section>
    <hr>
    <section>
      <h3>Step Four: Run the API Gateway</h3>
      <p>
        Using the terminal, navigate to the directory where the gateway has been unzipped. For example:
      </p>
      <div class="code">
        <code>cd 'C:/Users/Example/Desktop/Cp Gateway'</code>
      </div>
      <p>
        On Windows, launch the gateway using the following command:
      </p>
      <div class="code">
        <code>bin\run.bat root\conf.yaml</code>
      </div>
      <p>
        and in the case of Linux:
      </p>
      <div class="code">
        <code>bin/run.sh root/conf.yaml</code>
      </div>
    </section>
    <hr>
    <section>
      <h3>Step Five: Authenticate the brokerage session</h3>
      <p>
        Once the gateway is running, you will need to authenticate the session. In order to do so, navigate to <a href="https://localhost:5000">https://localhost:5000</a> on your local network and enter
        your username and password. The message 'Client Login Succeeds' is displayed if the login was successful.
      </p>
      <p>
        <b>Tip:</b> By default, the gateway will listen on port 5000. To change this update the conf.yaml file found in the 'root' directory of the gateway.
      </p>
    </section>
    <hr>
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