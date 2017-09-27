<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>

                <!-- Exercise 1) -->
                <!-- Build a local Filter which reverses the Text it is applied on -->
                <h3>Reverse</h3>
                <p>{{ text | textReverse }}</p>

                <!-- Exercise 2 -->
                <!-- Build a global Filter which counts the length of a word and it appends it -->
                <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
                <h3>Counter</h3>
                <p>{{ text | showCount }}</p>


                <!-- Exercise 3 -->
                <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
                <h3>Computed</h3>
                <p>{{ textReversed }}</p>
                <p>{{ textCounted }}</p>

                <!-- Exercise 4 -->
                <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
                <h3>Computed via Mixin</h3>
                <p>{{ textCountedMixin }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                text: 'Texto de filters e mixins'
            };
        },
        filters: {
            textReverse: function (value) {
                return value.split('').reverse().join('');
            }
        },
        computed: {
            textReversed: function () {
                return this.text.split('').reverse().join('');
            },
            textCounted: function () {
                return this.text + ' (' + ( this.text.length ) + ')';
            }
        }
    }
</script>

<style>
</style>
