import { MutationTree, ActionTree } from 'vuex';

import state, { State } from './state';
import mutations, { Mutations } from './mutations';
import actions from './actions';

export interface SessionState {
  state: State;
  mutations: MutationTree<State>;
  actions: ActionTree<State, any>;
}

export default {
  state,
  mutations,
  actions,
};
