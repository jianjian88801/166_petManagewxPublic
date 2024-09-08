// pages/components/bottomdialog/bottomdialog.js
Component({
    properties: {
        parentList: {
            type: Array,
            value: []
        },
        showValue: {
            type: Boolean,
            value: false
        }
    },
    data: {
        isAll: false,
        selectAllValue: [],
        List: [],
        isShow: false
    },
    observers: {
        "parentList": function (newValue) {
            this.setData({
                List: newValue
            })
        },
        "showValue": function (newValue) {
            this.setData({
                isShow: newValue
            })
            this.showTap()
        }
    },
    methods: {
        statusChange() {
            this.data.isAll ?
                this.setData({
                    isAll: false
                }) : this.setData({
                    isAll: true
                })
            this.selectAll(this.data.isAll)
        },
        showTap() {
            if (this.data.isShow) {
                this.selectComponent('#bottomFrame').showFrame();
            }
        },
        onConfirm() {
            if (this.data.List?.length == this.data.selectAllValue?.length) {
                this.setData({
                    isAll: true
                })
            } else {
                this.setData({
                    isAll: false
                })
            }
            this.selectComponent('#bottomFrame').hideFrame();
            console.log("确认", this.data.selectAllValue);
            this.triggerEvent('acceptChild', {
                data: this.data.selectAllValue
            })
        },
        onCancel() {
            //恢复选中的数据
            wx.showToast({
                icon: "none",
                title: '点击了取消',
            })
            this.selectAll(false)
            this.setData({
                registerContainerClass: "", // 取消 "reMoveScroll" 类
                isAll: false
            });
            this.selectComponent('#bottomFrame').hideFrame();
        },
        selectAll(isAll) {
            const data = this.data.List;
            const selectAllValue = []
            if (isAll) {
                data.forEach(item => {
                    item.checked = true
                    selectAllValue.push(item.name)
                });
                this.setData({
                    List: data,
                    selectAllValue: selectAllValue
                });
            } else {
                data.forEach(item => {
                    item.checked = false
                });
                selectAllValue.splice(0, selectAllValue?.length)
                //  this.setData({
                //      isAll: false
                //  })
                this.setData({
                    List: data,
                    selectAllValue: selectAllValue
                });
            }
        },
        selChange(e) {
            const selectAllValue = e.detail.value
            if (this.data.List?.length == selectAllValue?.length) {
                this.setData({
                    isAll: true
                })
                console.log("全选");
            } else {
                this.setData({
                    isAll: false
                })
            }
            console.log("selectAllValue", selectAllValue);

            this.setData({
                selectAllValue: selectAllValue,
            })
        },

    }
})