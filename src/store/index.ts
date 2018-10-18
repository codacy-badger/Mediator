import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import VuexPersistence from 'vuex-persist';

import config, { ConfigState } from './config';
import session, { SessionState } from './session';

Vue.use(Vuex);

export interface State {
  config: ConfigState;
  session: SessionState;
}

const PersistConfig = new VuexPersistence<State>({
  modules: ['config'],
  storage: window.localStorage,
});

export default new Store<State>({
  modules: {
    config,
    session,
  },
  plugins: [PersistConfig.plugin],
});
