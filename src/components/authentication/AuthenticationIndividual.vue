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
    <p>
      An authenticated brokerage session is necessary to access order inforamtion, place orders, or receive market data.
      Other Interactive Brokers' trading applications such as TWS or IBKR Mobile also utilize a brokerage session, A given username can 
      only create a single brokerage session at a time, so launching TWS or IBKR mobile will disconnect a brokerage session
      in the CP API, and vice versa.
    </p>
    <warning>
      <p>
        When navigating to the API gateway login page, you may see a warning from your browser regarding a missing valid SSL certificate.
        This is expected. The API gateway does not come bundled with a valid certificate and it is up to the user to install one signed by themselves.
        For inforamtion on how to generate and install a valid gateway certificate, please see the workflows page. 
      </p>
    </warning>
    <h3>How long does a session remain authenticated?</h3>
    <p>
      Sed suscipit non lorem in semper. Quisque at vehicula ex. Nunc egestas est nulla, sed malesuada magna maximus at.
      Pellentesque nibh augue, dapibus a orci tincidunt, tristique pellentesque velit. Donec a leo non odio consectetur
      mollis nec ac ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
      Duis ipsum massa, auctor in massa in, viverra imperdiet lorem. Duis justo augue, ultricies at elementum quis,
      bibendum sit amet metus. Mauris turpis lacus, laoreet eget lobortis ut, aliquam ut neque. Suspendisse sit amet
      eleifend ante. Fusce ornare tellus nec posuere elementum. Vivamus augue nisl, dignissim in felis ac, tempus
      iaculis elit. Fusce scelerisque purus nec tempor tincidunt. Phasellus blandit dictum lectus, eu imperdiet tellus
      volutpat eget. Aenean ut justo bibendum, viverra augue et, imperdiet nisi. Vestibulum ante ipsum primis in
      faucibus orci luctus et ultrices posuere cubilia curae; Morbi sit amet rutrum odio, rhoncus lacinia ex. Etiam et
      condimentum massa. Duis eget est nec dolor pellentesque sodales. Etiam vel dapibus nisl. 
    </p>
    <h3>Can I automatically connect my brokerage session?</h3>
    <p>

    </p>
    <h3>Can I use a third-party solution to automatically reauthenticate the Brokerage Session?</h3>
    <p>

    </p>
    <h3>Is it possible to authenticate a live brokerage session without needing to use a 2FA device?</h3>
    <p>
      
    </p>

  </div>
</template>