// import { configureStore } from '@reduxjs/toolkit';
// // import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import contactsReducer from './phonebookSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';


// const persistConfig = {
//   key: 'root',
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactsReducer);

// export const store = configureStore({
//     phonebook: persistedReducer,
// //      reducer: {
// //     phonebook: contactsReducer,
// //     // Other reducers if any
// //   },
//     // reducer: persistedReducer,
    
// middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);

import {combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
// import contactsReducer from './phonebookSlice';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './contactsSlice';

const persistConfig = {
  key: 'root',
  storage,
};
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({

  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);



