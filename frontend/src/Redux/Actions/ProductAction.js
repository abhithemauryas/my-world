import axios from "axios"

//product actions 
export const PRODUCT_ERROR = "PRODUCT_ERROR";
export const PRODUCT_LODING = "PRODUCT_LODING";
export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
export const SORT_PRICE_H_TO_L = "SORT_PRICE_H_TO_L";
export const SORT_PRICE_L_TO_H = "SORT_PRICE_L_TO_H";
export const SORT_RATING_H_TO_L = "SORT_RATING_H_TO_L";
export const SORT_RATING_L_TO_H = "SORT_RATING_L_TO_H";
export const SORT_NAME_ASS = "SORT_NAME_ASS";
export const SORT_NAME_DISS = "SORT_NAME_DISS";
export const FILTER = "FILTER";
export const CARTDATA = "CARTDATA";
export const SEARCH_ERROR = "SEARCH_ERROR";
export const SEARCH_LODING = "SEARCH_LODING";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";


export  const product_error = ()=>({type:PRODUCT_ERROR })
export  const product_loding = ()=>({type:PRODUCT_LODING})
export  const product_success = (payload) => ({type:PRODUCT_SUCCESS , payload})
export  const sort_price_h_to_l = ()=>({type:SORT_PRICE_H_TO_L})
export  const sort_price_l_to_h = ()=>({type:SORT_PRICE_L_TO_H })
export  const sort_rating_l_to_h = ()=>({type:SORT_RATING_L_TO_H })
export  const sort_rating_h_to_l = ()=>({type:SORT_RATING_H_TO_L })
export  const sort_name_ass = ()=>({type:SORT_NAME_ASS })
export  const sort_name_dis = ()=>({type:SORT_NAME_DISS })
export const filter_by_catagory = (payload)=>({type :FILTER , payload })
export const cart_data = (payload) =>({type:CARTDATA , payload})
export  const search_error = ()=>({type:SEARCH_ERROR })
export  const search_loding = ()=>({type:SEARCH_LODING})
export  const search_success = (payload) => ({type:SEARCH_SUCCESS , payload})


export  const GetData = ()=>(Dispatch)=>{
    Dispatch(product_loding())
    const headers = {
        'Authorization': localStorage.getItem("userToken"),
        'Content-Type': 'application/json',
      };
   axios.get("https://good-pink-cougar-garb.cyclic.app/product/get",{headers}).then((res)=>{
    console.log("object of all data",res.data)
   Dispatch(product_success(res.data))
   }).catch((err)=>{
       Dispatch(product_error())
   })

}

export const SearchData=(searchData)=>(Dispatch)=>{
    Dispatch(product_loding())
    const headers = {
        'Authorization': localStorage.getItem("userToken"),
        'Content-Type': 'application/json',
      };
      axios.get(`https://good-pink-cougar-garb.cyclic.app/product/search?search=${searchData}`,{headers}).then((res)=>{
        console.log("search object",res.data)
        Dispatch(search_success(res.data))
        }).catch((err)=>{
            Dispatch(search_error())
        })
}

