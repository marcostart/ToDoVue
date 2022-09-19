<template id="app">
    <nav id="vue" class="flex flex-row gap-5">
        <div class="menu-item"><router-link to="/">Home</router-link></div>
        <div class="menu-item"><router-link to="/HomeView">Views</router-link></div>
        <div class="menu-item"><router-link to="/componentP">Component's page</router-link></div>
        <div class="menu-item"><router-link to="/Todo">TodoListe</router-link></div>
        <div class="menu-item"><router-link to="/carousel">Carousel</router-link></div>
    </nav>
</template>
<style media="screen">
    nav{
        margin-left: 50%;
    }
</style>
