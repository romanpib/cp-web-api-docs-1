<script>
import Warning from "../Warning.vue";
export default {
  components: {
    Warning,
  },
}
</script>

<template>
  <div>
    <h3>Session Authentication</h3>
    <warning>
      <p>
        When navigating to the API gateway login page, you may see a warning from your browser regarding a missing valid SSL certificate.
        This is expected. The API gateway does not come bundled with a valid certificate and it is up to the user to install one signed by themselves.
        For inforamtion on how to generate and install a valid gateway certificate, please see the workflows page. 
      </p>
    </warning>
    <p>
      An authenticated brokerage session is necessary to access order inforamtion, place orders, or receive market data.
      Other Interactive Brokers' trading applications such as TWS or IBKR Mobile also utilize a brokerage sessio. 
    </p>
    <p>
      Note: A given username can only create a single brokerage session at a time, so launching TWS or IBKR mobile will disconnect a brokerage session
      in the CP API, and vice versa.
    </p>
    <h3>How long does a session remain authenticated?</h3>
    <p>
      To ensure client account security, Interactive Brokers' API solutions were designed with the need for the user to manually reauthenticate with the backend
      on a daily basis. As such, the maximum period of time that the gateway can potentially remain authenticated is 24 hours.
      Daily maintenance of IBKR's servers could result in a disconnect earlier than the 24 hour period mentioned above.
      To mitigate issues that may result from the maintenance period, we recommend scheduling your gateway to restart following
      the maintenance period. Information on server reset times and system status updates can be found on the 
      <a href="https://www.interactivebrokers.com/en/software/systemStatus.php" target="_blank">System Status</a> page.
    </p>
    <p>
      In addition to the daily reset period, mentioned above, the Client Portal API brokerage session will also timeout if
      no requests are received within the space of a couple of minutes. In order to prevent the session from timing out, the 
      endpoint /portal/sso/validate can be called on a regular basis. We recommend calling this endpoint approximately every
      minute. If the brokerage session has timed out, but the session is still connected to the IBKR backend (field 'connected':true in the response to /iserver/auth/status),
      a new brokerage session can be established by calling the /reauthenticate endpoint.
    </p>
    <h3>Can I automatically connect my brokerage session?</h3>
    <p>
      There is currently no mechanism available on Interactive Brokers' end to permit individual clients to automatically
      reauthenticate with the gateway. OAuth authentication is available, however an institutional account is required.
    </p>
    <h3>Can I use a third-party solution to automatically reauthenticate the Brokerage Session?</h3>
    <p>
      Interactive Brokers does not recommend the use of third-party solutions to automatically reauthenticate the gateway
      session. This can put your account at risk from potentially malicious projects. In addition, please bear in mind that 
      Interactive Brokers is unable to provide support for third-party solutions.
    </p>
    <h3>Is it possible to authenticate a live brokerage session without needing to use a Two Factor Authentication (2FA) device?</h3>
    <p>
      The login process to the CP API gateway is the same as to Client Portal. As the Client Portal has access to sensitive information and 
      banking functionalities, two-factor authentication is mandatory for login.
    </p>

  </div>
</template>