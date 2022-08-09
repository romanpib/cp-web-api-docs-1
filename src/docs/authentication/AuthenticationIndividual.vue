<script setup>
import Warning from "@/components/Warning.vue";
</script>

<template>
  <div>
    <article>
      <h3>Session Authentication</h3>
      <warning>
        <p>
          When navigating to the API gateway login page, you may see a warning from your browser regarding a missing valid SSL certificate.
          This is expected. The API gateway does not come bundled with a valid certificate and it is up to the user to install one signed by themselves.
          For information on how to generate and install a valid gateway certificate, please see the following <a href="./workflows#invalid-certificate">article</a> in the workflows page. 
        </p>
      </warning>
      <p>
        An authenticated brokerage session is necessary to access order information, place orders, or receive market data via Client Portal API.
        Individual clients using Client Portal API are required to use the API gateway in order to establish a brokerage session. There is currently
        no official workaround for this requirement.
        Other Interactive Brokers' trading applications such as TWS or IBKR Mobile also utilize a brokerage session.
      </p>
      <p>
        <b>Note:</b> A given username can only create a single brokerage session at any given time. 
        Launching TWS, IBKR mobile or logging in to Client Portal will disconnect the current Client Portal API brokerage session, and vice versa.
      </p>
    </article>
    <hr>
    <article>
      <h3>How long does a session remain authenticated?</h3>
      <p>
        To ensure client account security, Interactive Brokers' API solutions were designed with the need for the user to manually reauthenticate with the backend
        on a daily basis. As such, the maximum period of time that the gateway can remain authenticated is 24 hours.
      </p>
      <p>
        Daily maintenance of IBKR's servers could result in a disconnect earlier than the 24 hour period mentioned above.
        To mitigate issues that may result from the maintenance period, we recommend scheduling your gateway to restart following
        the maintenance period. Information on server reset times and system status updates can be found on the 
        <a href="https://www.interactivebrokers.com/en/software/systemStatus.php" target="_blank">System Status</a> page.
      </p>
    </article>
    <hr>
    <article>
      <h3>How can I prevent the session from timing out?</h3>
      <!-- TODO How many? -->
      <p>
        A Client Portal API brokerage session will timeout if no requests are received within the space of 5 minutes. In order to prevent the session from timing out, the 
        endpoint <b>/portal/sso/validate</b> should be called on a regular basis. It is recommended to call this endpoint approximately every
        minute. 
      </p>
      <p>
        If the brokerage session has timed out, but the session is still connected to the IBKR backend, 'connected':true in the response to <b>/iserver/auth/status</b>,
        a new brokerage session can be established by calling the <b>/reauthenticate</b> endpoint.
      </p>
    </article>
    <hr>
    <article>
      <h3>Can I automatically connect my brokerage session?</h3>
      <p>
        There is currently no mechanism available on Interactive Brokers' end to permit individual clients to automatically
        authenticate their brokerage session when using Client Portal API.
      </p>
    </article>
    <hr>
    <article>
      <h3>Can I use a third-party solution to automatically authenticate the brokerage session?</h3>
      <p>
        Interactive Brokers does not recommend the use of third-party solutions to automatically reauthenticate the gateway
        session. This can put your account at risk from potentially malicious projects. In addition, please bear in mind that 
        Interactive Brokers is unable to provide support for third-party solutions.
      </p>
    </article>
    <hr>
    <article>
      <h3>Is it possible to authenticate a live brokerage session without the use of a Two Factor Authentication (2FA) device?</h3>
      <p>
        The login process to the CP API gateway is the same as to Client Portal. As the Client Portal has access to sensitive information and 
        banking functionalities, two-factor authentication is mandatory for login.
      </p>
    </article>
    <hr>
  </div>
</template>