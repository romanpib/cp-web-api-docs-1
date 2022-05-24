<script>
  import ExpandableCard from '../components/ExpandableCard.vue'
  import LatestUpdateCard from '../components/LatestUpdateCard.vue'
  export default {
    components: {
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
  <div class="container">
    <div class="content">
      <h2>Client Portal Web API Documentation</h2>
      <p>
        Interactive Brokers offers the ability to trade, monitor and manage your IB account using a single RESTful API.
      </p>
      <p>
        With the Client Portal Web API:
      </p>
      <ul id="features-list">
        <li>There is no need for special libraries to integrate with your application.</li>
        <li>You use only a small, headless gateway to connect to your application.</li>
        <li>Additional security with IP restrictions is available.</li>
        <li>Enjoy access to data that's not available through our existing APIs, including PortfolioAnalyst, Statements, Transaction History (up to 90 days) and more.</li>
      </ul>
      <ExpandableCard v-for="card in cards" :title="card.title" :content="card.content" />
    </div>
    <div class="latest-changes">
      <div class="header">
        <h2>Latest Updates</h2>
        <router-link to="/changelog">Changelog</router-link>
      </div>
      <LatestUpdateCard v-for="update in updates" :title="update.title" :content="update.content" :updateDate="update.updateDate" />
    </div>
  </div>
</template>

<style>
  .container {
    display: flex;
    flex-direction: row;
    gap: 5rem;
    padding-inline: 50px;
  }

  .container .content {
    width: 100%;
    flex: 2;
  }

  .container .latest-changes {
    flex: 1;
    text-align: left;
  }

  .latest-changes .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;
    gap: 10px;
  }

  .latest-changes .header a {
    text-decoration: underline;
    color: #db1222;
    font-size: small;
    font-weight: bold;
  }

  #features-list {
    margin-bottom: 2rem;
    line-height: 2rem;
  }
</style>