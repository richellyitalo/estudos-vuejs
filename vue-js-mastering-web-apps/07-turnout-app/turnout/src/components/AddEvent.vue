<template>
    <div>
        <h3>Adicionar evento</h3>
        <label for="">
            Adicionar evento
            <input type="checkbox" v-model="showForm">
        </label>
        <div class="form" v-if="showForm">
            <div class="form-group">
                <label for="">Título</label>
                <input class="form-control" v-model="event.title">
            </div>
            <div class="form-group">
                <label for="">Descrição</label>
                <input class="form-control" v-model="event.description">
            </div>
            <div class="form-group">
                <label for="">Data</label>
                <input type="date" class="form-control" v-model="event.date">
            </div>
            <div class="form-group">
                <label for="">Localização</label>
                <input class="form-control" v-model="event.location">
            </div>
            <button class="btn btn-primary" @click="addEvent">Adicionar evento</button>
        </div>
    </div>
</template>

<script>
import { eventsRef } from '../firebaseApp';

export default {
    data() {
        return {
            event: {
                title: '',
                description: '',
                date: '',
                location: '',
                email: ''
            },
            showForm: false
        }
    },
    methods: {
        addEvent() {
            //this.event.email = this.$store.state.user.email;
            this.event.email = 'richelly@gmail.com';
            eventsRef.push(this.event);
        }
    }
}
</script>

