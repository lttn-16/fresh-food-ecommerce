import { createSlice } from '@reduxjs/toolkit';
import productData from "assets/fake-data/products";

const initialState = {
    value: productData,
    initFilter: {
        category: [],
        size: [],
    }
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        filterSelect: (state, action) => {
            const {type, checked, item} = action.payload;
            if (checked) {
                switch (type) {
                  case "CATEGORY":
                    state.initFilter = {
                      ...state.initFilter,
                      category: [...state.initFilter.category, item.categorySlug],
                    };
                    break;
                  case "SIZE":
                    state.initFilter = {...state.initFilter, size: [...state.initFilter.size, item.size]};
                    break;
                  default:
                }
              } else {
                switch (type) {
                  case "CATEGORY":
                    const newCategory = state.initFilter.category.filter(
                      (e) => e !== item.categorySlug
                    );
                    state.initFilter = { ...state.initFilter, category: newCategory };
                    break;
                  case "SIZE":
                    const newSize = state.initFilter.size.filter((e) => e !== item.size);
                    state.initFilter = { ...state.initFilter, size: newSize };
                    break;
                  default:
                }
              }
        },
        update: (state) => {
            let temp = productData;

            if (state.initFilter.category.length > 0) {
              temp = temp.filter((e) => state.initFilter.category.includes(e.categorySlug));
            }
        
            if (state.initFilter.size.length > 0) {
              temp = temp.filter((e) => {
                const check = e.size.find((size) => state.initFilter.size.includes(size));
                return check !== undefined;
              });
            }
            
            state.value = temp;
        },
        clear: (state) => {
            state.initFilter = {
                category: [],
                size: [],
            }
        },
    },
})

export const { filterSelect, update, clear } = filterSlice.actions

export default filterSlice.reducer