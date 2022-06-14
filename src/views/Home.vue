<script>
import BaseView from './BaseView.vue'
import ExpandableCard from '@/components/ExpandableCard.vue'
import LatestUpdateCard from '@/components/LatestUpdateCard.vue'
export default {
  components: {
    BaseView,
    ExpandableCard,
    LatestUpdateCard
  },
  data() {
    return {
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
      ],
      updates: [
        {
          title: 'New API documentation released',
          content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id fermentum sem.',
          updateDate: '2022-01-01'
        },
        {
          title: 'Lorem Ipsum',
          content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper.',
          updateDate: '2022-05-27'
        },
        {
          title: 'Lorem Ipsum and a veeeeeryyyy long title',
          content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id fermentum sem. Etiam egestas lorem ac elit iaculis dignissim.',
          updateDate: '2022-06-01 12:00:00'
        },
      ]
    }
  },
  computed: {
    latestUpdates() {
      // Sort the updates by date and return only the latest 5
      return this.updates.sort((a, b) => {
        return Date.parse(b.updateDate) - Date.parse(a.updateDate)
      }).slice(0, 3)
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
      <div class="latest-changes-header">
        <h2>Latest Updates</h2>
        <router-link to="/changelog">Changelog</router-link>
      </div>
      <latest-update-card v-for="update in latestUpdates" v-bind="update" />
    </template>
  </base-view>
</template>

<style>
.features-list {
  margin-bottom: 2rem;
  line-height: 1rem;
}

.latest-changes-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  gap: 10px;
}

.latest-changes-header a {
  text-decoration: underline;
  color: #db1222;
  font-size: small;
  font-weight: bold;
}
</style>