const setDefaultVal = (key, val) => {
    if(localStorage.getItem(key) === null) {
        localStorage.setItem(key, val);
    }
}
export default setDefaultVal;