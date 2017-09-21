<template>
    <div class="col-xs-12 col-sm-6">

        <p v-if="server === null">Server Details are currently not updated</p>
        <p v-else>
            ID: {{server.id}}<br/>
            Status: {{server.status}}

            <br>
            <button @click="changeStatus">Mudar para status normal</button>
        </p>
    </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
    data: function() {
        return {
            server: null
        }
    },
    methods: {
        changeStatus: function () {
            this.server.status = 'Normal'
        }
    },
    created: function() {
        eventBus.$on('showServerDetail', (serverObject) => {
            this.server = serverObject
        })
    }
}
</script>

