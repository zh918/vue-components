const YmtProcessBar = {};
YmtProcessBar.install = (Vue, options) => {
    Vue.prototype.$start = ()=> {
        let processbal = document.querySelector(".ymt-processbar");
        if (processbal) {
            processbal.className = "ymt-processbar ymt-processbar-part";
        } 
        else {
            let processBarEle = document.createElement("div");
            processBarEle.className = "ymt-processbar";
            document.body.appendChild(processBarEle);

            console.log("进度条开始");
            processBarEle.className = "ymt-processbar ymt-processbar-part";            
        }
    };

    Vue.prototype.$finish = ()=> {
        let processbal = document.querySelector(".ymt-processbar");
        if (processbal) {
            console.log("进度条结束");
            processbal.className = "ymt-processbar ymt-processbar-all";            
        }
    }
}

export default YmtProcessBar

