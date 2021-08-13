import { configureStore } from "@reduxjs/toolkit";
import photoReducer from 'features/Photo/photoSlice'
console.log(photoReducer);
const rootReducer = {
    photos: photoReducer,
}
const store = configureStore({
    //nhận vào 1 object là reducer
    reducer: rootReducer
})
export default store