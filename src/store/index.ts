import { reactive, readonly } from 'vue';

const state = reactive({
  nome: 'lucas',
});

export default {
  state: readonly(state),
};
