<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
                <button class="btn btn-primary" @click="show = !show">Exibir</button>
            </div>
        </div>
        <hr>
        <select class="form-control" v-model="type">
            <option value="fade">fade</option>
            <option value="slide">Slide</option>
        </select>
        <transition :name="type">
            <div class="row" v-show="show">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="alert alert-info">
                        Exiba
                    </div>
                </div>
            </div>
        </transition>
        <transition name="slide" appear>
            <div class="row" v-if="show">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="alert alert-info">
                        Exiba
                    </div>
                </div>
            </div>
        </transition>
        <transition 
            enter-active-class="animated shake"
            leave-active-class="animated bounce">
            <div class="row" v-if="show">
                <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                    <div class="alert alert-info">
                        Exiba
                    </div>
                </div>
            </div>
        </transition>
        <hr>
        <transition name="fade" mode="out-in">
            <div class="alert alert-info" v-if="show" key="info">
                Exiba
            </div>
            <div class="alert alert-warning" v-else key="warn">
                Exiba
            </div>
        </transition>
        <hr>
        <button class="btn btn-success" @click="load = !load">
            Load/Unload
        </button>
        <br/>
        <br/>
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"
            
            @before-leave="beforeLeave"
            @leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="leaveCancelled"
            :css="false">
            <div v-if="load" style="width: 100px; height: 100px; background: lightgreen"></div>
        </transition>

        <hr>
        <button class="btn btn-warning"
            @click="componentSelected == 'app-alert-success' ? componentSelected = 'app-alert-danger' : componentSelected = 'app-alert-success'">
            Mudar component
        </button>
        <transition name="fade" mode="out-in">
            <component :is="componentSelected"></component>
        </transition>
    </div>
</template>

<script>
    import AlertSuccess from './AlertSuccess.vue';
    import AlertDanger from './AlertDanger.vue';

    export default {
        data() {
            return {
                show: false,
                load: true,
                type: 'fade',
                elementWidth: 100,
                componentSelected: 'app-alert-success'
            }
        },
        methods: {
            beforeEnter: function (el) {
                console.log('before-enter');
                this.elementWidth = 100;
                console.log(this.elementWidth);
                el.style.width = this.elementWidth + 'px';
            },
            enter: function (el, done) {
                console.log('enter');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth + round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 10);
            },
            afterEnter: function (el) {
                console.log('after-enter');
            },
            enterCancelled: function (el) {
                console.log('enter-cancelled');
            },

            beforeLeave: function (el) {
                console.log('before-leave');
                this.elementWidth = 300;
                el.style.width = this.elementWidth + 'px';
            },
            leave: function (el, done) {
                console.log('leave');
                let round = 1;
                const interval = setInterval(() => {
                    el.style.width = (this.elementWidth - round * 10) + 'px';
                    round++;
                    if (round > 20) {
                        clearInterval(interval);
                        done();
                    }
                }, 10);
            },
            afterLeave: function (el) {
                console.log('after-leave');
            },
            leaveCancelled: function (el) {
                console.log('leave-cancelled');
            },
        },
        components: {
            appAlertDanger: AlertDanger,
            appAlertSuccess: AlertSuccess
        }
    }
</script>

<style>
    .fade-enter {
        opacity: 0;
    }
    .fade-enter-active {
        transition: opacity 1s;
    }
    .fade-leave {

    }
    .fade-leave-active {
        transition: opacity 1s;
        opacity: 0;
    }   

    /*animações*/
    .slide-enter-active {
        animation: slide-in 1s ease-out forwards;
        transition: opacity .5s;
    }
    .slide-leave-active {
        animation: slide-out 1s ease-out forwards;
        transition: opacity 1s;
        opacity: 0;
    }
    @keyframes slide-in {
        from {
            transform: translateY(20px);
        } to {
            transform: translateY(0px);
        }
    }
    @keyframes slide-out {
        from {
            transform: translateY(0px);
        } to {
            transform: translateY(20px);
        }
    }
</style>
