<template>
    <ul class="nav nav-pills nav-justified">
        <router-link to="/" tag="li" active-class="active" exact><a>Início</a></router-link>
        <router-link to="/user" tag="li" active-class="active"><a>Usuários</a></router-link>
        <!--
        rotas fixas
        <router-link to="/user/10" tag="li" active-class="active" exact><a>Usuários 1</a></router-link>
        <router-link to="/user/20" tag="li" active-class="active" exact><a>Usuários 2</a></router-link>
        <router-link to="/estatico" tag="li" active-class="active" exact><a>Estático</a></router-link>
        -->
    </ul>
</template>
