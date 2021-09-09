const useStorage = ({ initData }) => {    
    const data = initData;    
    const findIndex = (name) => {        
        return data.indexOf(name) + 1 || NaN;    
        
    }   
    return {data,findIndex};
    
};
export default useStorage