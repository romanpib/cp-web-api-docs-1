<script>
import { useAccountTypeStore } from '@/stores/accountTypeStore.js';
import { websocketsIndividual, websocketsInstitutional } from "@/docs/websockets";
import BaseViewSidenav from "@/views/base-views/BaseViewSidenav.vue";
import ScrollableSidenav from "@/components/ScrollableSidenav.vue";
import AccountToggle from '@/components/AccountToggle.vue'
import ArticleList from '../components/ArticleList.vue';
import WebsocketPlayground from '../components/websockets/WebsocketPlayground.vue';
import Warning from '../components/Warning.vue';
export default {
  components: {
    BaseViewSidenav,
    ScrollableSidenav,
    AccountToggle,
    ArticleList,
    WebsocketPlayground,
    Warning
  },
  data() {
    return {
      activeSectionID: null
    }
  },
  methods: {
    onScroll(articleID) {
      this.activeSectionID = articleID;
    }
  },
  computed: {
    sections() {
      return this.activeTab.map(section => {
        return {
          category: section.category,
          titles: section.items.map(item => {
            return {
              id: item.id,
              title: item.title
            }
          })
        };
      });
    },
    activeTab() {
      const store = useAccountTypeStore();
      return (store.accountType == 'individual') ? websocketsIndividual : websocketsInstitutional;
    },
    activeSection() {
      return this.activeSectionID || this.sections[0].titles[0].id;
    }
  }
}
</script>

<template>
  <base-view-sidenav>
    <template #content>
      <div class="content-header">
        <h2>Websockets</h2>
        <account-toggle />
      </div>
      <h3>How to connect to Websocket</h3>
      <p>
        The websocket endpoint is available at <span>wss://api.ibkr.com/v1/api/ws</span>. Clients using the API gateway
        should replace the base URL for the websocket endpoint
        with that of the gateway - in most cases, this will be <span>wss://localhost:5000/v1/api/ws</span>. Once
        connected, clients will need to authorize the websocket connection. This can be achieved in the following ways:
      <ul>
        <li>
          Include the cookies from the 'set-cookie' headers from previous API requests. If you are using a browser to
          test API functionality, this will generally be done automatically by the browser.
        </li>
        <li>
          Request the session ID from the /tickle endpoint and send it to the websocket endpoint in the following
          format:
          <div class="code">
            <code>
              {'session': 'SESSION_ID_FROM_TICKLE_ENDPOINT'}
            </code>
          </div>
          If the request was successful one of the following responses will be returned:
          <div class="code">
            <code>
              {'topic': 'sts', 'args': {'authenticated': true}}
            </code>
          </div>
          or:
          <div class="code">
            <code>
              {'topic': 'system', 'success': 'username'}
            </code>
          </div>
        </li>
      </ul>
      </p>
      <h3>Websocket Messages</h3>
      <p>
        There are two types of messages used by the websocket:
      <ul>
        <li>Solicited messages, i.e. messages that have been explicitly sent by the client</li>
        <li>Unsolicited messages, i.e. messages that have been sent by the server, either as a response to a request or
          containing information about the connected session</li>
      </ul>
      In order to receive streaming data via the websocket, the relevant topic must be subscribed to. In order to do so,
      a solicited message of the format: TOPIC+{ARGUMENTS} must be sent to the websocket endpoint, where:
      <ul>
        <li>TOPIC represents the request that is being sent via the websocket</li>
        <li>The plus symbol <b>+</b> is used as the message separator</li>
        <li>{ARGUMENTS} contains a list of arguments passed as part of the request, an empty list {} needs to be passed
          if no arguments are required</li>
      </ul>
      Solicited message topics are generally three characters in length and start with either an <b>s</b>, if the topic
      is being subscribed to, or an <b>u</b> if unsubscribing from a topic.
      </p>
      <article-list :articles="this.activeTab" @onArticleScroll="this.onScroll" />
      <h3>Websockets Playground</h3>
      <p>
        The following playground can be used to test the websockets functionality before implementing it in your application.
      </p>
      <warning>
        <p>
          In order to use the playground, you need to authenticate your session. See the
          <router-link to='/authentication'>authentication</router-link> page for
          getting started instructions.
        </p>
      </warning>
      <websocket-playground />
    </template>
    <template #aside>
      <scrollable-sidenav :sections="this.sections" :activeSection="this.activeSection" />
    </template>
  </base-view-sidenav>
</template>


<style>
.content-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>