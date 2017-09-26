<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="currentComponent = 'appQuote'">Quote</button>
                <button @click="currentComponent = 'appNew'">New</button>
                <button @click="currentComponent = 'appAuthor'">Author</button>
                {{currentComponent}}

                <keep-alive>
                    <component :is="currentComponent">
                    </component>
                </keep-alive>

                <app-author>
                    <h1 slot="title">Título</h1>
                    <p slot="content">Conteúdo</p>
                </app-author>
                 <!--<app-new></app-new>
               <app-quote></app-quote>-->
            </div>
        </div>
    </div>
</template>

<script>
    import Author from './components/Author.vue'
    import New from './components/New.vue'
    import Quote from './components/Quote.vue'

    export default {
        data: function () {
            return {
                title: 'Título padrão',
                currentComponent: 'appNew'
            }
        },
        components: {
            appAuthor: Author,
            appNew: New,
            appQuote: Quote
        }
    }
</script>

<style>
</style>
