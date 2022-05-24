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
    props: {
      cards: {
        type: Array,
        required: true,
        default: () => [
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
      },
      updates: {
        type: Array,
        required: true,
        default: () => [
          {
            title: 'New API documentation released',
            content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id fermentum sem.',
            updateDate: '1 day'
          },
          {
            title: 'Lorem Ipsum',
            content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper.',
            updateDate: '1 week'
          },
          {
            title: 'Lorem Ipsum and a veeeeeryyyy long title',
            content: 'Quisque ultrices leo quam, sed eleifend mauris bibendum in. Donec molestie vehicula ullamcorper. Maecenas id fermentum sem. Etiam egestas lorem ac elit iaculis dignissim.',
            updateDate: '1 month'
          },
        ]
      },
    }
  }
</script>

<template>
  <BaseView>
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
        <li>Enjoy access to data that's not available through our existing APIs, including PortfolioAnalyst, Statements, Transaction History (up to 90 days) and more.</li>
      </ul>
      <ExpandableCard v-for="card in cards" :title="card.title" :content="card.content" />
    </template>
    <template #aside>
      <div class="latest-changes-header">
        <h2>Latest Updates</h2>
        <router-link to="/changelog">Changelog</router-link>
      </div>
      <LatestUpdateCard v-for="update in updates" :title="update.title" :content="update.content" :updateDate="update.updateDate" />
    </template>
  </BaseView>
</template>

<style>
  .features-list {
    margin-bottom: 2rem;
    line-height: 2rem;
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