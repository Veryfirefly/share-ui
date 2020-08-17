import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieList from "../views/MovieList";
import HelloWorld from "../components/HelloWorld";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Index',
        redirect: {name: 'movie-list'}
    },
    {
        path: '/movie/list',
        name: 'movie-list',
        component: MovieList
    },
    {
        path: '/list',
        name: 'hello-list',
        component: HelloWorld
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;
