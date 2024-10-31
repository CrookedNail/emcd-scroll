<script>
import { defineComponent, ref, onMounted } from 'vue';
import UserCard from './UserCard.vue';

/**
 * @module UserCardFeed
 * @description A component that displays a scrollable feed of user cards. New users are loaded as the user scrolls down.
 */
export default defineComponent({
  name: 'UserCardFeed',
  components: {
    UserCard,
  },

  data() {
    return {
      /**
       * The array of user objects to display in the feed.
       * @type {Array}
       */
      users: [],

      /**
       * Flag indicating whether data is currently being fetched.
       * @type {boolean}
       */
      isLoading: false,

      /**
       * Current page of results to be requested from the API.
       * @type {number}
       */
      page: 1,
    };
  },

  methods: {
    /**
     * Loads users from the API and adds them to the users list.
     * @async
     * @method loadUsers
     * @returns {void}
     */
    async loadUsers() {
      this.isLoading = true;
      try {
        const response = await fetch(`https://randomuser.me/api/?page=${this.page}&results=10`);
        const data = await response.json();
        this.users.push(...data.results);
        this.page++;
      } catch (e) {
        console.error('Error fetching users: ', e);
      } finally {
        this.isLoading = false;
      }
    },

    /**
     * Handles the scroll event to load more users when reaching the bottom of the feed.
     * @method handleScroll
     * @param {Event} event - The scroll event triggered on the feed container.
     * @returns {void}
     */
    handleScroll(event) {
      const scrollElement = event.target;
      const scrollTop = scrollElement.scrollTop;
      const scrollHeight = scrollElement.scrollHeight;
      const clientHeight = scrollElement.clientHeight;

      if (scrollTop + clientHeight >= scrollHeight && !this.isLoading) {
        this.loadUsers();
      }
    },
  },

  mounted() {
    this.loadUsers();
  },
});
</script>

<template>
  <div
    class="user-list"
    @scroll="handleScroll"
  >
    <UserCard
      v-for="user in users"
      :key="user.login.uuid"
      :user="user"
    />
    <div
      v-if="isLoading"
      class="loader"
    >
      Loading...
    </div>
  </div>
</template>

<style scoped>
.user-list {
  height: 400px;
  width: 400px;
  padding: 8px 16px 16px;
  overflow-y: auto;
}

.user-list::-webkit-scrollbar {
    width: 8px;
}

.user-list::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
}

.user-list::-webkit-scrollbar-thumb:hover {
    background-color: #555;
}

.user-list::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
}

.loader {
  text-align: center;
  padding: 16px;
}
</style>
