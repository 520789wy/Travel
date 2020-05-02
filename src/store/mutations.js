export default{
    changeCity(state,city){
        state.city=city
        try{
            localStorage.city=city//某些浏览器用localStorage会报异常，建议用try(){}catch(e){}
        }catch(e){}
        
    }
}