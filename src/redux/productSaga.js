import { takeEvery, put } from 'redux-saga/effects'

function* getProducts(){
    let data = yield fetch('https://fakestoreapi.com/products');
    data = yield data.json()
    console.log(data);
    yield put({type:"SetProductList", data})
}


function* productSaga(){
    yield takeEvery("ProductList", getProducts)
}

export default productSaga;