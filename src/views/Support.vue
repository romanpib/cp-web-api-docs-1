<script>
import BaseView from '@/views/base-views/BaseView.vue'
import ExpandableCard from '@/components/ExpandableCard.vue'
import ResourceLink from '@/components/support/ResourceLink.vue'
import Warning from '@/components/Warning.vue'
export default {
  components: {
    BaseView,
    ExpandableCard,
    ResourceLink,
    Warning
  },
  data() {
    return {
      cards: [
        {
          title: 'Step One - Ensure your session is authenticated',
          content: `
          <p>
            In order to use the API, the API sesssion must be authenticated. The easiest way to check if the current session is authenticated is by calling the endpoint /iserver/auth/status. If the session
            is fully authenticated the response will contain the field 'authenticated' set to true. If you are not seeing this first check the <a href="./authentication">authentication</a>
            page for common authentication errors before proceeding with the next steps. One thing to note, is that 'authenticated': true may not return immediately, but after some time. Allow up to 15 minutes
            when running the API for the first time to authenticate the session. Forthcoming session authentication should be near immediate.
          </p>
          `
        },
        {
          title: 'Step Two - Try calling other endpoints',
          content: `
            <p>
              In case /iserver/auth/status endpoint returns 'authenticated': false, meaning there is no valid brokerage session, create a brokerage session with the /portal/iserver/reauthenticate endpoint. 
              Please also note, most endpoints are independent, however in a few cases a specific endpoint must first be preceded by a different endpoint. As an example of this, the /portfolio/accounts endpoint must be called 
              prior to other /portfolio endpoints in an individual account structure, and /portfolio/subaaccounts must be called first in an advisor or master account structure. This iwll return the list of accounts that are valid to use with the other /portfolio endpoints.
            </p>
            `
        },
        {
          title: 'Step Three - Generate request logs',
          content: `
            <p>
              When troubleshooting web API issues, it is sometimes necessary for our Client Services team to obtain additional information in the form of a request log, so you may be asked for record and provide a .har file. 
              This file contains additional information about the network requests that are sent and received by your browser. Your browser can generate such files by recording the content, timeline and status of network requests and response while the issue occurs.
              Most browsers fo have an option to preserve log, which can then be exported. Please see the 'How to generate a HAR file' link below for more information.
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
  <base-view>
    <template #content>
      <h2>Support</h2>
      <warning>
        <p>
          For common integration questions, make sure you have reviewed the <router-link to="/workflows">workflows</router-link> section first.
        </p>
      </warning>
      <p>
        If after going through the workflows section has not made things correct, please follow the steps below in order to contact us for assistance. Please note that 
        Interactive Brokers is unable to provide support for third-party solutions build on top of Client Portal API. For troubleshooting issues with third-party libraries,
        first try recreating the issue with the native Client Portal API, and only get in touch with support if the issues persist when using the native API, otherwise, please get in touch with the third-party
        developer.
      </p>
      <expandable-card v-for="card in cards" v-bind="card" />
    </template>
    <template #aside>
      <h2>Resources</h2>
      <resource-link v-for="resource in resources" v-bind="resource" />
    </template>
  </base-view>
</template>

<style>
.features-list {
  margin-bottom: 2rem;
  line-height: 2rem;
}
</style>