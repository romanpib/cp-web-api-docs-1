<script>
import { changelog } from '@/docs/changelog';
import BaseView from './BaseView.vue'
import ExpandableCard from '@/components/ExpandableCard.vue'
import LatestUpdatesList from '../components/home/LatestUpdatesList.vue'

export default {
  components: {
    BaseView,
    ExpandableCard,
    LatestUpdatesList
  },
  data() {
    return {
      changelog: changelog,
      cards: [
        {
          title: 'How to use this guide',
          content: 'This is the home page.'
        },
        {
          title: 'Account Requirements',
          content: 'In order to use the API, and IBKR PRO account is required. IBKR PRO accounts are free and can be created in just a few minutes.'
        },
        {
          title: 'Information for institutional clients',
          content: 'This is the home page.'
        },
        {
          title: 'Comparison between CP API and TWS API',
          content: 'This is the home page.'
        }
      ]
    }
  }
}
</script>

<template>
  <base-view>
    <template #content>
      <h2>Client Portal Web API Documentation</h2>
      <p>
        Interactive Brokers offers the ability to trade, monitor and manage your IB account using a single RESTful API.
      </p>
      <p>
        With the Client Portal Web API:
      </p>
      <ul class="features-list">
        <li>There is no need for special libraries to integrate with your application.</li>
        <li>You use only a small, headless gateway to connect to your application.</li>
        <li>Additional security with IP restrictions is available.</li>
        <li>Enjoy access to data that's not available through our existing APIs, including PortfolioAnalyst, Statements,
          Transaction History (up to 90 days) and more.</li>
      </ul>
      <expandable-card v-for="card in cards" v-bind="card" />
    </template>
    <template #aside>
      <div class="latest-updates-header">
        <h2>Latest Updates</h2>
        <router-link to="/changelog">Changelog</router-link>
      </div>
      <latest-updates-list :updates="this.changelog" />
    </template>
  </base-view>
</template>

<style>
.latest-updates-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
}

.latest-updates-header a {
    text-decoration: underline;
    color: #db1222;
    font-size: small;
    font-weight: bold;
}
</style>