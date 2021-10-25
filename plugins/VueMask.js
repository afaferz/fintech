import Vue from "vue";

// As a plugin
import VueMask, { VueMaskDirective } from "v-mask";
Vue.use(VueMask);
Vue.directive("mask", VueMaskDirective);
