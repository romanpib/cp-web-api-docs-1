<script>
import BaseLayout from '@/layouts/BaseLayout.vue';
import ExpandableCard from '@/components/ExpandableCard.vue'
import ResourceLink from '@/components/support/ResourceLink.vue'
import Warning from '@/components/Warning.vue'
export default {
  components: {
    BaseLayout,
    ExpandableCard,
    ResourceLink,
    Warning
  },
  data() {
    return {
      cards: [
        {
          title: 'Step One: Ensure your session is authenticated',
          content: `
          <p>
            In order to use Client Portal API, an authenticated brokerage session must be established. 
            The easiest way to check if the current session is authenticated is by making a POST request to the endpoint <b>/iserver/auth/status</b>. 
            If the session is fully authenticated the response will contain the field 'authenticated' set to true. 
            If you are not seeing this, first check the <a href='./quickstart'>Quickstart</a> page for instructions on authenticating your session, or <a href="./authentication">Authentication</a> for common authentication questions.
          </p>
          <p>
            <b>Note:</b> It may take a some time for the <b>/iserver/auth/status</b> endpoint to return a true value for the authentication status when logging in. 
            If you're using Client Portal API for the first time, please allow up to 15 minutes for the session to fully authenticate.
          </p>
          `
        },
        {
          title: 'Step Two: Call other endpoints',
          content: `
            <p>
              In case /iserver/auth/status endpoint returns 'authenticated': false, meaning there is no valid brokerage session, create a brokerage session with the /portal/iserver/reauthenticate endpoint. 
              Please also note, most endpoints are independent, however in a few cases a specific endpoint must first be preceded by a different endpoint. As an example of this, the /portfolio/accounts endpoint must be called 
              prior to other /portfolio endpoints in an individual account structure, and /portfolio/subaaccounts must be called first in an advisor or master account structure. This iwll return the list of accounts that are valid to use with the other /portfolio endpoints.
            </p>
            `
        },
        {
          title: 'Step Three: Generate request logs',
          content: `
            <p>
              When troubleshooting Client Portal API issues, it may sometimes be necessary for our client services team to obtain additional information about the request in the form of a request log. 
              As such you may be asked to generate a request log (HAR) and send it to us.
            </p>
            <p>
              This file contains additional information about the network requests that are sent and received by your browser. 
              Your browser can generate such files by recording the content, timeline and status of network requests and response while the issue occurs.
              Most browsers fo have an option to preserve log, which can then be exported. 
              Please see the 'How to generate a HAR file' link below for more information.
            </p>
          `
        },
        {
          title: 'Get in touch with us',
          content: `
          <p>
            Interactive Brokers API support can be reached by creating a ticket in the Secure Message Center in Client Portal. See steps below for more information:
            <ol>
              <li> Login to <a href="https://interactivebrokers.com/en/home.php" target="_blank">Client Portal</a></li>
              <li> Click on the head & shoulders icon in the upper right corner and select the Help option</li>
              <li> Click on the Secure Message Center option and click "Compose" -> "New Ticket"</li>
              <li> To report a Client Portal Web API issue, or to get support for a specific feature, please select the "API" -> "REST/Web API" from the topics list on the left</li>
              <li> Enter a meaningful subject line and provide a concise description for the issue, steps taken, request details, add any log files as an attachment. Please note, you can only attach PDF, HAR files with logs as well as JPEG and PNG images if you would like to provide screenshots illustrating the issue.</li>
          </p>
          `
        }
      ],
      resources: [
        {
          title: 'How to generate a HAR file',
          url: 'https://ibkr.info/article/3512',
          description: 'Information on generating the HAR file used when troubleshooting web API issues.'
        },
      ]
    }
  }
}
</script>

<template>
  <base-layout>
    <template #content>
      <h2>Support</h2>
      <warning>
        <p>
          For common integration questions, make sure you have reviewed the <router-link to="/workflows">workflows
          </router-link> section first.
        </p>
      </warning>
      <p>
        If after going through the workflows section has not made things correct, please follow the steps below in order
        to contact us for assistance. Please note that
        Interactive Brokers is unable to provide support for third-party solutions build on top of Client Portal API.
        For troubleshooting issues with third-party libraries,
        first try recreating the issue with the native Client Portal API, and only get in touch with support if the
        issues persist when using the native API, otherwise, please get in touch with the third-party
        developer.
      </p>
      <expandable-card v-for="card in cards" v-bind="card" />
    </template>
    <template #aside>
      <div class="resources">
        <h2>Resources</h2>
        <resource-link v-for="resource in resources" v-bind="resource" />
      </div>
    </template>
  </base-layout>
</template>

<style scoped>
.resources {
  display: flex;
  flex-direction: column;
  margin-inline: 1.5rem;
}

@media only screen and (min-width: 1200px) {
  .resources {
    margin-inline: 0;
    margin-right: 1.5rem;
    margin-top: 3rem;
  }
}
</style>