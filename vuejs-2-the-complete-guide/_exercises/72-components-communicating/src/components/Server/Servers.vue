<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li class="list-group-item" v-for="server in servers">
                <server-item :server="server"></server-item>
            </li>
        </ul>
        {{servers}}
    </div>
</template>

<script>
import serverItem from './ServerItem.vue'

export default {
    data: function() {
        return {
            servers: [
                { id: 1, status: 'Critical' },
                { id: 2, status: 'Unknown' },
                { id: 3, status: 'Normal' },
                { id: 4, status: 'Stable' }
            ]
        }
    },
    components: {
        serverItem
    }
}
</script>

