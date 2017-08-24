<template>
    <div>

        <ymt-company-strategy :supplierArrays="companyListss" @supplierSelect="supplierSelect" @closeTxt="closeTxt"></ymt-company-strategy>

        <div class="des">
            <h3>组件说明</h3>
            <p>
                <pre>
  组件名称：YmtCompanyStrategy

  样式说明：
  1.ymt-company-strategy

  事件绑定：
	@supplierSelect 选择保险公司事件
	@closeTxt 关闭营销策略事件

 属性说明:
    supplierArrays:传入的保险公司二维数组
    supplierSelectIndex:存储的选择保险公司的索引


  常见用法：
  {{rawHtml}}
  </pre>

            </p>
        </div>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                rawHtml: `<ymt-company-strategy :supplierArrays="companyList"></ymt-company-strategy>`,
                companyListss: [],
            }
        },
        created() {
            let _this = this;
            setTimeout(function() {
                _this.companyListss = [
                    [{
                            "companyID": "1",
                            "companyName": "中国人民保险有限公司",
                            "companyLogoUrl": "jaklsjdklajskld",
                            "marketStrategy": "按时打卡数据库老地",
                            "src": "jaklsjdklajskld"
                        },
                        {
                            "companyID": "2",
                            "companyName": "中国人寿保险有限公司",
                            "companyLogoUrl": "jaklsjdklajskld",
                            "marketStrategy": "按时打卡数据",
                            "src": "jaklsjdklajskld"
                        },
                        {
                            "companyID": "3",
                            "companyName": "中国新华保险有限公司",
                            "companyLogoUrl": "jaklsjdklajskld",
                            "marketStrategy": "",
                            "src": "jaklsjdklajskld"
                        }
                    ],
                    [{
                        "companyID": "4",
                        "companyName": "中国太平洋保险有限公司",
                        "companyLogoUrl": "jaklsjdklajskld",
                        "marketStrategy": "中国太平洋保险有限公司",
                        "src": "jaklsjdklajskld"
                    }]
                ];
            }, 2000);

        },
        methods: {
            supplierSelect(param) {
                console.log(param);
            },
            closeTxt(row) {
                console.log(row)
            }
        }
    }
</script>

<style lang="less" scoped>
    .des {
        margin: 1rem 0 0 0;
        font-size: 1.5rem;
    }
</style>