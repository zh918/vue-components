<template>
    <div class="ymt-company-strategy">

        <ul v-for="(supplierLists, row) in companyList" class="type-list" :class="{'centeralign': companyCenterAlign[row],'normalalign clearfix': !companyCenterAlign[row]}">
            <li class="company-log" v-for="(supplierList,column) in supplierLists">
                <div class="img-box" :class="{'activeBorder':supplierList.selected,'normalBorder':!supplierList.selected}" @click="supplierSelect(row,column)">
                    <img :src="supplierList.src" />
                    <i class="selected-status" v-if="supplierList.selected && tmp"></i>
                    <!--<i class="bottom-triangle" v-if="supplierList.selected && selectArray[row].visibily"></i>-->
                </div>
            </li>

            <!--<div class="company-txt" :class="{'left':(selectArray[row].position=='left' || selectArray[row].position=='tmpCenter'),'center':selectArray[row].position=='center','right':selectArray[row].position=='right','dis-visibily':!selectArray[row].visibily}">
                <span class="company-txt-wrap">
                            {{marketStrategy}}
                        </span>
                <i class="iconfont company-close" @click="closeTxt(row)"></i>
            </div>-->

        </ul>

    </div>
</template>

<script type="text/javascript">
    import Vue from 'vue'
    export default Vue.component('ymt-company-strategy', {
        name: 'YmtCompanyStrategy',
        props: ['supplierArrays'],
        data() {
            return {
                companyList: [], //保险公司二维数组
                //selectArray: [], //营销策略显示数组
                tmp: true,
                companyCenterAlign: [], //保险公司样式数组
                //marketStrategy: "",
                //hasSelect: false, //是否选择过保险公司

            }
        },
        created() {
            console.log("进入了保险公司组件");
        },

        watch: {
            supplierArrays: function(newValue, oldValue) {
                this.companyList = newValue;
                console.log("获取的保险公司数据")
                console.log(this.companyList);
                if(this.companyList.length) {
                    this.initData();
                }

            }
        },
        methods: {
            //初始化数据
            initData() {

                /*for(var i = 0; i < this.companyList.length; i++) {
                    this.selectArray.push({
                        position: 'left',
                        visibily: false
                    });
                }*/
                this.setSupplierListsStyle();

                //获取初始索引(默认第一个)
                let selectIndex = window.sessionStorage.getItem('supplierSelectIndex') ? JSON.parse(window.sessionStorage.getItem('supplierSelectIndex')) : {
                    row: 0,
                    column: 0
                };
                console.log('初始化第' + selectIndex.row + '行的第' + selectIndex.column + '个');
                //营销策略文字
                //this.marketStrategy = this.companyList[selectIndex.row][selectIndex.column].marketStrategy ? this.companyList[selectIndex.row][selectIndex.column].marketStrategy : '';
                //默认保险公司选中状态
                this.companyList[selectIndex.row][selectIndex.column].selected = true;
                //设置营销策略
                //this.setPosition(selectIndex);

            },

            //设置保险公司样式
            setSupplierListsStyle() {
                if(this.companyList.length == 1) {
                    if(this.companyList[0].length < 3) {
                        this.companyCenterAlign = [true];
                    } else {
                        this.companyCenterAlign = [false];
                    }

                    console.log("是否为flex布局===" + this.companyCenterAlign[0]);
                } else {
                    for(var i = 0; i < this.companyList.length; i++) {
                        console.log("是否为flex布局===" + false);
                        this.companyCenterAlign.push(false);
                    }
                }

            },

            //选择保险公司
            supplierSelect(row, column) {
                this.tmp = false;
                //this.hasSelect = true;
                console.log('选中第' + row + '行的第' + column + '个');

                let selectIndex = {
                    row: row,
                    column: column
                };

                //对选择的相应的保险公司索引进行缓存
                window.sessionStorage.setItem('supplierSelectIndex', JSON.stringify(selectIndex));

                //营销策略文字
                //this.marketStrategy = this.companyList[row][column].marketStrategy ? this.companyList[row][column].marketStrategy : '';

                //遍历去掉除选中行之外的其他行
                for(var j = 0; j < this.companyList.length; j++) {
                    if(row != j) {
                        for(var k = 0; k < this.companyList[j].length; k++) {
                            this.companyList[j][k].selected = false;
                        }
                    }
                }

                //遍历选中行的所有元素
                for(var i = 0; i < this.companyList[row].length; i++) {
                    this.companyList[row][i].selected = false;
                }

                this.companyList[row][column].selected = true;

                //不更新现网需求
                let _this = this;
                setTimeout(function() {
                    _this.tmp = true;
                }, 10);
                //设置营销策略显示
                /*for(var m = 0; m < this.selectArray.length; m++) {
                    this.selectArray[m].visibily = false;
                    if(m == row) {
                        this.setPosition(selectIndex);
                    }
                }*/

                if(!!this._events['supplierSelect']) {

                    this.$emit('supplierSelect', {
                        currentIndex: selectIndex,
                        currentCompany: this.companyList[row][column]
                    });
                }

            },

            //设置营销策略显示位置
            setPosition(selectIndex) {
                console.log('marketStrategy==' + this.marketStrategy);

                if(this.marketStrategy) {
                    if(this.companyList.length == 1 && this.companyList[selectIndex.row].length == 1) {
                        this.selectArray[selectIndex.row].position = 'tmpCenter';
                    } else if(this.companyList.length == 1 && this.companyList[selectIndex.row].length == 2) {
                        if(selectIndex.column == 0) {
                            this.selectArray[selectIndex.row].position = 'left';
                        } else {
                            this.selectArray[selectIndex.row].position = 'right';
                        }
                    } else {
                        if(selectIndex.column % 3 == 0) {
                            this.selectArray[selectIndex.row].position = 'left';
                        } else if(selectIndex.column % 3 == 1) {
                            this.selectArray[selectIndex.row].position = 'tmpCenter';
                        } else {
                            this.selectArray[selectIndex.row].position = 'right';
                        }
                    }
                    console.log("是否选择过==" + this.hasSelect);
                    let time = this.hasSelect ? 100 : 1000,
                        _this = this;

                    setTimeout(function() {
                        let companyTxt = document.querySelector('.company-txt');
                        if(_this.selectArray[selectIndex.row].position == 'tmpCenter') {
                            _this.selectArray[selectIndex.row].position = 'center';
                            companyTxt.style.marginLeft = -companyTxt.offsetWidth / 2 + 'px';
                            console.log('营销策略文字宽度==', companyTxt.offsetWidth);

                        } else {
                            companyTxt.style.marginLeft = 0;
                        }
                        _this.selectArray[selectIndex.row].visibily = true;
                        console.log(JSON.stringify(_this.selectArray, null, 2));
                    }, time);

                }

            },
            //关闭营销策略
            closeTxt(row) {
                this.selectArray[row].visibily = false;
                if(!!this._events['closeTxt']) {
                    this.$emit('closeTxt', {
                        row: row
                    });
                }

            },
        }
    })
</script>