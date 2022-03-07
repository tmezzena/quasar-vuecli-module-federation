<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :active="getActiveByTo()"
    active-class="bg-menuactive"
    @click="itemClick"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>

    <q-item-section side v-if="type === 'toggle'">
      <q-toggle color="blue" v-model="toggleModel" />
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EssentialLink",
  props: {
    type: {
      type: String,
      required: false,
      default: "",
    },
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    to: {
      required: false,
    },
    action: {
      type: Function,
      default: null,
    },
    active: {
      type: Boolean,
      default: false,
    },
    toggleSet: {
      type: undefined,
      required: false,
      default: undefined,
    },
    toggleGet: {
      type: undefined,
      required: false,
      default: undefined,
    },
  },
  data() {
    return {
      teste: false,
    };
  },
  methods: {
    itemClick() {
      if (this.action) {
        this.action();
      }
      if (this.link) {
        window.location = this.link;
      } else if (this.to) {
        this.$router.push(this.to);
      } else if (this.type === "toggle") {
        this.toggleModel = !this.toggleModel;
      }
    },
    getActiveByTo() {
      if (this.to) {
        return this.to.name > "" && this.$route.name == this.to.name;
      }
      return false;
    },
  },
  computed: {
    toggleModel: {
      get: function () {
        return this.toggleGet;
      },
      set: function (newValue) {
        if (this.toggleSet) {
          this.toggleSet(newValue);
        }
      },
    },
  },
});
</script>
