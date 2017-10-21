<template>
    <div>
        <h1>Dashboard</h1>
        <button class="btn btn-danger signout-btn" @click="signOut">Sair</button>
        <hr>
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-md-offset-3">
                    <app-add-event></app-add-event>
                </div>
            </div>
            <div class="row">
                <app-event-item
                v-for="(event_item, index) in this.$store.state.events"
                :event="event_item"
                :key="index">
                </app-event-item>
            </div>
        </div>
    </div>
</template>

<script>
import { firebaseApp, eventsRef } from '../firebaseApp'
import AddEvent from './AddEvent.vue';
import EventItem from './EventItem.vue';

export default {
    methods: {
        signOut() {
            this.$store.dispatch('signOut')
            firebaseApp.auth().signOut()
        }
    },
    components: {
        appAddEvent: AddEvent,
        appEventItem: EventItem
    },
    mounted() {
        eventsRef.on('value', snap => {
            let events = [];
            snap.forEach(event => {
                events.push(event.val());
            });
            this.$store.dispatch('setEvents', events);
        })
    }
}
</script>

