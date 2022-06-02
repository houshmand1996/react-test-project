import vendorsSagas from 'plugins/vendors/redux/vendors.sagas';
import { all, call } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    call(vendorsSagas),
  ]);
}
