import { Module } from 'vuex';

import { state } from './state';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ConfigState } from '../types';
import { RootState } from '../';

const namespaced: boolean = true;

const config: Module<ConfigState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};

export default config;
