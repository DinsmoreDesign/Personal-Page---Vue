import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import PortfolioItem from "./views/PortfolioItem.vue";
import Resume from "./views/Resume.vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/resume",
            name: "resume",
            component: Resume
        },
        {
            path: "/portfolio",
            name: "portfolio",
            component: PortfolioItem
        }
    ]
});
