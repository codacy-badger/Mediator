import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import VuexPersistence from 'vuex-persist';

import { ConfigState, SessionState } from './types';
import config from './config';
import session from './session';

Vue.use(Vuex);

export interface RootState {
  config: ConfigState;
  session: SessionState;
}

const PersistConfig = new VuexPersistence<RootState>({
  modules: ['config'],
  storage: window.localStorage,
});

const store: StoreOptions<RootState> = {
  modules: {
    config,
    session,
  },
  plugins: [PersistConfig.plugin],
};

export default new Vuex.Store<RootState>(store);
