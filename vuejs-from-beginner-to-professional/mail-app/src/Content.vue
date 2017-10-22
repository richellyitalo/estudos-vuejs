<template>
    <aside class="lg-side">
        <div class="inbox-head">
            <h3>{{currentView.title}}</h3>
        </div>
        {{incomingMessages}}
        <keep-alive>
            <component :is="currentView.tag"></component>
        </keep-alive>
    </aside>
</template>

<script>
import Inbox from "./Inbox.vue";
import Sent from "./Sent.vue";
import Important from "./Important.vue";
import Trash from "./Trash.vue";
import ViewMessage from "./ViewMessage.vue";
import { eventBus } from "./main";

export default {
  props: {
    messages: {
      type: Array,
      required: true
    }
  },
  created() {
    eventBus.$on("changeView", data => {
      let temp = [
        {
          tag: data.tag,
          title: data.title
        }
      ];

      this.history = temp.concat(this.history.splice(0));
    });
  },
  data() {
    return {
      history: [
        {
          tag: "app-inbox",
          title: "Inbox",
          data: {
            messages: null
          }
        }
      ]
    };
  },
  computed: {
    currentView() {
      return this.history[0];
    },
    incomingMessages() {
        return this.data.messages.filter(
            (message) =>  message.type == 'incoming' && !message.isRead && !message.isDeleted
        )
    }
  },
  components: {
    appInbox: Inbox,
    appSent: Sent,
    appImportant: Important,
    appTrash: Trash
  }
};
</script>
