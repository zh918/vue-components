const LtProcessBar = {};
LtProcessBar.install = (Vue, options) => {
    Vue.prototype.$start = ()=> {
        let processbal = document.querySelector(".lt-processbar");
        if (processbal) {
            processbal.className = "lt-processbar lt-processbar-part";
        } 
        else {
            let processBarEle = document.createElement("div");
            processBarEle.className = "lt-processbar";
            document.body.appendChild(processBarEle);

            console.log("进度条开始");
            processBarEle.className = "lt-processbar lt-processbar-part";            
        }
    };

    Vue.prototype.$finish = ()=> {
        let processbal = document.querySelector(".lt-processbar");
        if (processbal) {
            console.log("进度条结束");
            processbal.className = "lt-processbar lt-processbar-all";            
        }
    }
}

export default LtProcessBar

