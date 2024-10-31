<script>
import { defineComponent } from 'vue';

/**
 * @module UserCard
 * @description A component that displays a user's information in a card format.
 */
export default defineComponent({
  name: 'UserCard',
  
  props: {
    /**
     * The user object containing user details.
     * @type {Object}
     * @property {Object} picture - The user's picture.
     * @property {string} picture.medium - The medium-sized URL of the user's picture.
     * @property {Object} name - The user's name.
     * @property {string} name.first - The user's first name.
     * @property {string} name.last - The user's last name.
     * @property {string} email - The user's email address.
     * @required
     */
    user: {
      type: Object,
      required: true,
    },
  },
});
</script>

<template>
  <div class="user-card">
    <img :src="user.picture.medium" alt="User's photo">
    <div class="user-info">
      <h3>{{ user.name.first }} {{ user.name.last }}</h3>
      <p>{{ user.email }}</p>
    </div>
  </div>
</template>

<style scoped>
.user-card {
    display: flex;
    align-items: center;
    padding: 8px;
    margin: 0 0 16px 0;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.user-card img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 15px;
}

.user-info h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
}

.user-info p {
    margin: 0;
    color: #555;
    font-size: 16px;
}
</style>
