import { combineReducers } from '@reduxjs/toolkit';
import socialLinksSlice from './slices/socialLinks';

const rootReducer = combineReducers({
  example: socialLinksSlice,
});

export default rootReducer;