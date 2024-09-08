// pages/components/bottomdialog/bottomdialog.js
Component({
    properties: {
        className: {
            type: String,
            value: false,
        }
    },
    data: {
        flag: false,
        wrapAnimate: 'wrapAnimate',
        bgOpacity: 0,
        frameAnimate: 'frameAnimate',
        frameClass: ""
    },
    observers: {
        'className': function (newValue) {
            this.setData({
                frameClass: newValue
            })
        },
    },
    methods: {
        // checkboxChange(e) {
        //     const data = e.detail.value.length
        //     this.triggerEvent("childAllChange", {
        //         data
        //     })
        // },

        showFrame() {
            this.setData({
                flag: true,
                wrapAnimate: 'wrapAnimate',
                frameAnimate: 'frameAnimate'
            });
        },
        hideFrame(e) {
            const that = this;
            that.setData({
                wrapAnimate: 'wrapAnimateOut',
                frameAnimate: 'frameAnimateOut'
            });
            setTimeout(() => {
                that.setData({
                    flag: false
                })
            }, 400);
        },
        onCancle(e) {
            this.hideFrame(e);
            this.triggerEvent('myCancel');
        },

        onConfirm(e) {
            this.hideFrame(e);
            this.triggerEvent('myConfirm');
        },
        catchNone() {
            //阻止冒泡
        },
        _showEvent() {
            this.triggerEvent("showEvent");
        },
        _hideEvent() {
            this.triggerEvent("hideEvent");
        }
    }
})