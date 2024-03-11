export function Cate_data(bolgdata){
   let arr = []
   for(let i of bolgdata){
    arr.push(i.cate_name.toLowerCase())
   }
   
   return arr?.filter((ele,index,arr)=>arr.indexOf(ele) === index)
}

export function Base_Url(){
   return `${window.location.origin}/`
}