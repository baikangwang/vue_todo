import Vue from 'vue'

import App from './App.vue'

new Vue({
    el: '#app',
    components: {
        App: App
    },
    template: "<App/>"
});

let arr = [1, 2, 3].map(item => item + 1);
console.log(arr);