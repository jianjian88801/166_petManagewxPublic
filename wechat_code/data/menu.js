const menu = {
	list() {
		return [{
			"backMenu": [{
				"child": [{
					"appFrontIcon": "cuIcon-rank",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "省份",
					"menuJump": "列表",
					"tableName": "shengfen"
				}],
				"menu": "省份管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-pic",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "市级",
					"menuJump": "列表",
					"tableName": "shiji"
				}],
				"menu": "市级管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-medal",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "区名",
					"menuJump": "列表",
					"tableName": "quming"
				}],
				"menu": "区名管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-medal",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "课程",
					"menuJump": "列表",
					"tableName": "kecheng"
				}],
				"menu": "课程管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-skin",
					"buttons": ["新增", "查看", "修改", "删除", "审核", "查看评论", "打印", "导出", "导入",
						"商家等级统计"
					],
					"menu": "商家",
					"menuJump": "列表",
					"tableName": "shangjia"
				}],
				"menu": "商家管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-taxi",
					"buttons": ["新增", "查看", "修改", "删除", "审核", "会员等级统计", "地区会员统计"],
					"menu": "用户",
					"menuJump": "列表",
					"tableName": "yonghu"
				}],
				"menu": "用户管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-explore",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "商品分类",
					"menuJump": "列表",
					"tableName": "shangpinfenlei"
				}],
				"menu": "商品分类管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-time",
					"buttons": ["新增", "查看", "修改", "删除", "审核", "查看评论", "首页总数", "首页报表", "竖",
						"无", "饼", "商品分类", "商品库存", "品牌统计", "库存统计", "分类统计", "日期统计",
						"按日统计", "首页统计", "报表"
					],
					"menu": "商品信息",
					"menuJump": "列表",
					"tableName": "shangpinxinxi"
				}],
				"menu": "商品信息管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-paint",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "景点分类",
					"menuJump": "列表",
					"tableName": "jingdianfenlei"
				}],
				"menu": "景点分类管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-medal",
					"buttons": ["新增", "查看", "修改", "删除", "查看评论", "报表", "首页总数", "首页报表",
						"首页统计", "分类统计", "购买门票"
					],
					"menu": "景点信息",
					"menuJump": "列表",
					"tableName": "jingdianxinxi"
				}],
				"menu": "景点信息管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-similar",
					"buttons": ["查看", "修改", "删除", "审核", "报表", "首页报表"],
					"menu": "门票订单",
					"menuJump": "列表",
					"tableName": "menpiaodingdan"
				}],
				"menu": "门票订单管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-paint",
					"buttons": ["新增", "查看", "修改", "删除", "查看评论", "类型统计", "客房类型统计", "类型细分统计",
						"状态类型细分统计", "状态类型统计", "客房预定"
					],
					"menu": "客房信息",
					"menuJump": "列表",
					"tableName": "kefangxinxi"
				}],
				"menu": "客房信息管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-skin",
					"buttons": ["查看", "修改", "删除", "审核", "类型统计", "地区类型细分统计", "支付"],
					"menu": "客房订单",
					"menuJump": "列表",
					"tableName": "kefangdingdan"
				}],
				"menu": "客房订单管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-shop",
					"buttons": ["查看", "修改", "删除", "审核"],
					"menu": "人脸签到记录",
					"menuJump": "列表",
					"tableName": "renlianqiandaojilu"
				}],
				"menu": "人脸签到记录管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-full",
					"buttons": ["查看", "修改", "删除", "在线购买"],
					"menu": "用户商品",
					"menuJump": "列表",
					"tableName": "yonghushangpin"
				}],
				"menu": "用户商品管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-present",
					"buttons": ["查看", "修改", "删除"],
					"menu": "购买订单",
					"menuJump": "列表",
					"tableName": "goumaidingdan"
				}],
				"menu": "购买订单管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-pay",
					"buttons": ["查看", "修改", "删除", "审核"],
					"menu": "咨询记录",
					"menuJump": "列表",
					"tableName": "zixunjilu"
				}],
				"menu": "咨询记录管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-phone",
					"buttons": ["查看", "修改", "删除", "审核"],
					"menu": "签到记录",
					"menuJump": "列表",
					"tableName": "qiandaojilu"
				}],
				"menu": "签到记录管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-newshot",
					"buttons": ["新增", "查看", "修改", "删除", "出价记录"],
					"menu": "拍卖商品",
					"menuJump": "列表",
					"tableName": "paimaishangpin"
				}],
				"menu": "拍卖商品管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-wenzi",
					"buttons": ["新增", "查看", "修改", "删除", "成绩统计"],
					"menu": "成绩信息",
					"menuJump": "列表",
					"tableName": "chengjixinxi"
				}],
				"menu": "成绩信息管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-shop",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "热门音乐",
					"menuJump": "列表",
					"tableName": "remenyinle"
				}],
				"menu": "热门音乐管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-flashlightopen",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "流行音乐",
					"menuJump": "列表",
					"tableName": "liuxingyinle"
				}],
				"menu": "流行音乐管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-send",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "计算",
					"menuJump": "列表",
					"tableName": "jisuan"
				}],
				"menu": "计算管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-pay",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "计算2",
					"menuJump": "列表",
					"tableName": "jisuan2"
				}],
				"menu": "计算2管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-pic",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "计算3",
					"menuJump": "列表",
					"tableName": "jisuan3"
				}],
				"menu": "计算3管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-circle",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "小说分类",
					"menuJump": "列表",
					"tableName": "xiaoshuofenlei"
				}],
				"menu": "小说分类管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-cardboard",
					"buttons": ["新增", "查看", "修改", "删除", "章节管理"],
					"menu": "小说信息",
					"menuJump": "列表",
					"tableName": "xiaoshuoxinxi"
				}],
				"menu": "小说信息管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-skin",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "电影分类",
					"menuJump": "列表",
					"tableName": "dianyingfenlei"
				}],
				"menu": "电影分类管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-medal",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "电影信息",
					"menuJump": "列表",
					"tableName": "dianyingxinxi"
				}],
				"menu": "电影信息管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-message",
					"buttons": ["查看", "修改", "回复", "删除"],
					"menu": "留言反馈",
					"tableName": "messages"
				}],
				"menu": "留言反馈"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-group",
					"buttons": ["查看", "修改", "删除"],
					"menu": "交流中心",
					"tableName": "forum"
				}],
				"menu": "交流中心"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-discover",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "试卷管理",
					"tableName": "exampaper"
				}],
				"menu": "试卷管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-brand",
					"buttons": ["新增", "查看", "修改", "删除", "导出", "打印"],
					"menu": "试题管理",
					"tableName": "examquestion"
				}],
				"menu": "试题管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-paint",
					"buttons": ["查看", "修改"],
					"menu": "关于我们",
					"tableName": "aboutus"
				}, {
					"appFrontIcon": "cuIcon-list",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "轮播图管理",
					"tableName": "config"
				}, {
					"appFrontIcon": "cuIcon-circle",
					"buttons": ["查看", "修改"],
					"menu": "系统简介",
					"tableName": "systemintro"
				}, {
					"appFrontIcon": "cuIcon-news",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "公告信息",
					"tableName": "news"
				}, {
					"appFrontIcon": "cuIcon-service",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "客服中心",
					"tableName": "chat"
				}, {
					"appFrontIcon": "cuIcon-paint",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "智能助手",
					"tableName": "chathelper"
				}, {
					"appFrontIcon": "cuIcon-discover",
					"buttons": ["查看", "编辑名称", "编辑父级", "删除"],
					"menu": "菜单列表",
					"tableName": "menu"
				}],
				"menu": "系统管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-wenzi",
					"buttons": ["查看"],
					"menu": "已完成订单",
					"tableName": "orders/已完成"
				}, {
					"appFrontIcon": "cuIcon-cardboard",
					"buttons": ["查看"],
					"menu": "已取消订单",
					"tableName": "orders/已取消"
				}, {
					"appFrontIcon": "cuIcon-pic",
					"buttons": ["查看"],
					"menu": "已退款订单",
					"tableName": "orders/已退款"
				}, {
					"appFrontIcon": "cuIcon-list",
					"buttons": ["查看"],
					"menu": "未支付订单",
					"tableName": "orders/未支付"
				}, {
					"appFrontIcon": "cuIcon-explore",
					"buttons": ["查看"],
					"menu": "已发货订单",
					"tableName": "orders/已发货"
				}, {
					"appFrontIcon": "cuIcon-camera",
					"buttons": ["查看", "发货", "物流"],
					"menu": "已支付订单",
					"tableName": "orders/已支付"
				}],
				"menu": "订单管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-vipcard",
					"buttons": ["新增", "查看", "修改", "删除", "导出", "打印"],
					"menu": "考试记录",
					"tableName": "examrecord"
				}, {
					"appFrontIcon": "cuIcon-news",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "错题本",
					"tableName": "examfailrecord"
				}, {
					"appFrontIcon": "cuIcon-wenzi",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "试卷列表",
					"tableName": "exampaperlist"
				}],
				"menu": "考试管理"
			}],
			"frontMenu": [{
				"child": [{
					"appFrontIcon": "cuIcon-keyboard",
					"buttons": ["查看", "支付"],
					"menu": "商品信息列表",
					"menuJump": "列表",
					"tableName": "shangpinxinxi"
				}],
				"menu": "商品信息模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-rank",
					"buttons": ["章节管理", "查看"],
					"menu": "小说信息列表",
					"menuJump": "列表",
					"tableName": "xiaoshuoxinxi"
				}],
				"menu": "小说信息模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-clothes",
					"buttons": ["查看"],
					"menu": "电影信息列表",
					"menuJump": "列表",
					"tableName": "dianyingxinxi"
				}],
				"menu": "电影信息模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-news",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "公告信息列表",
					"tableName": "news"
				}],
				"menu": "公告信息模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-message",
					"buttons": ["查看", "修改", "回复", "删除"],
					"menu": "留言反馈列表",
					"tableName": "liuyanbanguanli"
				}],
				"menu": "留言反馈模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-group",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "交流中心列表",
					"tableName": "forum"
				}],
				"menu": "交流中心模块"
			}],
			"hasBackLogin": "是",
			"hasBackRegister": "否",
			"hasFrontLogin": "否",
			"hasFrontRegister": "否",
			"roleName": "管理员",
			"tableName": "users"
		}, {
			"backMenu": [{
				"child": [{
					"appFrontIcon": "cuIcon-time",
					"buttons": ["新增", "查看", "修改", "删除", "查看评论", "分类统计", "库存统计", "品牌统计",
						"按日统计", "在线咨询"
					],
					"menu": "商品信息",
					"menuJump": "列表",
					"tableName": "shangpinxinxi"
				}],
				"menu": "商品信息管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-medal",
					"buttons": ["查看", "购买门票"],
					"menu": "景点信息",
					"menuJump": "列表",
					"tableName": "jingdianxinxi"
				}],
				"menu": "景点信息管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-pay",
					"buttons": ["查看", "审核"],
					"menu": "咨询记录",
					"menuJump": "列表",
					"tableName": "zixunjilu"
				}],
				"menu": "咨询记录管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-newshot",
					"buttons": ["新增", "查看", "修改", "删除", "出价记录"],
					"menu": "拍卖商品",
					"menuJump": "列表",
					"tableName": "paimaishangpin"
				}],
				"menu": "拍卖商品管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-wenzi",
					"buttons": ["查看", "类销额", "品销额", "年销额", "月销额", "日销额", "类销量", "品销量",
						"年销量", "月销量", "日销量", "导出"
					],
					"menu": "已完成订单",
					"tableName": "orders/已完成"
				}, {
					"appFrontIcon": "cuIcon-cardboard",
					"buttons": ["查看"],
					"menu": "已取消订单",
					"tableName": "orders/已取消"
				}, {
					"appFrontIcon": "cuIcon-pic",
					"buttons": ["查看"],
					"menu": "已退款订单",
					"tableName": "orders/已退款"
				}, {
					"appFrontIcon": "cuIcon-list",
					"buttons": ["查看"],
					"menu": "未支付订单",
					"tableName": "orders/未支付"
				}, {
					"appFrontIcon": "cuIcon-explore",
					"buttons": ["查看"],
					"menu": "已发货订单",
					"tableName": "orders/已发货"
				}, {
					"appFrontIcon": "cuIcon-camera",
					"buttons": ["查看", "发货", "物流"],
					"menu": "已支付订单",
					"tableName": "orders/已支付"
				}],
				"menu": "订单管理"
			}],
			"frontMenu": [{
				"child": [{
					"appFrontIcon": "cuIcon-keyboard",
					"buttons": ["查看", "支付"],
					"menu": "商品信息列表",
					"menuJump": "列表",
					"tableName": "shangpinxinxi"
				}],
				"menu": "商品信息模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-rank",
					"buttons": ["章节管理", "查看"],
					"menu": "小说信息列表",
					"menuJump": "列表",
					"tableName": "xiaoshuoxinxi"
				}],
				"menu": "小说信息模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-clothes",
					"buttons": ["查看"],
					"menu": "电影信息列表",
					"menuJump": "列表",
					"tableName": "dianyingxinxi"
				}],
				"menu": "电影信息模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-news",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "公告信息列表",
					"tableName": "news"
				}],
				"menu": "公告信息模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-message",
					"buttons": ["查看", "修改", "回复", "删除"],
					"menu": "留言反馈列表",
					"tableName": "liuyanbanguanli"
				}],
				"menu": "留言反馈模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-group",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "交流中心列表",
					"tableName": "forum"
				}],
				"menu": "交流中心模块"
			}],
			"hasBackLogin": "是",
			"hasBackRegister": "是",
			"hasFrontLogin": "否",
			"hasFrontRegister": "否",
			"roleName": "商家",
			"tableName": "shangjia"
		}, {
			"backMenu": [{
				"child": [{
					"appFrontIcon": "cuIcon-skin",
					"buttons": ["查看"],
					"menu": "商家",
					"menuJump": "列表",
					"tableName": "shangjia"
				}],
				"menu": "商家管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-time",
					"buttons": ["查看", "在线咨询"],
					"menu": "商品信息",
					"menuJump": "列表",
					"tableName": "shangpinxinxi"
				}],
				"menu": "商品信息管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-medal",
					"buttons": ["查看", "购买门票"],
					"menu": "景点信息",
					"menuJump": "列表",
					"tableName": "jingdianxinxi"
				}],
				"menu": "景点信息管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-similar",
					"buttons": ["查看", "支付", "报表"],
					"menu": "门票订单",
					"menuJump": "列表",
					"tableName": "menpiaodingdan"
				}],
				"menu": "门票订单管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-skin",
					"buttons": ["查看", "支付"],
					"menu": "客房订单",
					"menuJump": "列表",
					"tableName": "kefangdingdan"
				}],
				"menu": "客房订单管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-shop",
					"buttons": ["查看"],
					"menu": "人脸签到记录",
					"menuJump": "列表",
					"tableName": "renlianqiandaojilu"
				}],
				"menu": "人脸签到记录管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-full",
					"buttons": ["查看", "修改", "删除", "在线购买"],
					"menu": "用户商品",
					"menuJump": "列表",
					"tableName": "yonghushangpin"
				}],
				"menu": "用户商品管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-present",
					"buttons": ["查看"],
					"menu": "购买订单",
					"menuJump": "列表",
					"tableName": "goumaidingdan"
				}],
				"menu": "购买订单管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-pay",
					"buttons": ["查看"],
					"menu": "咨询记录",
					"menuJump": "列表",
					"tableName": "zixunjilu"
				}],
				"menu": "咨询记录管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-phone",
					"buttons": ["查看"],
					"menu": "签到记录",
					"menuJump": "列表",
					"tableName": "qiandaojilu"
				}],
				"menu": "签到记录管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-shop",
					"buttons": ["查看"],
					"menu": "热门音乐",
					"menuJump": "列表",
					"tableName": "remenyinle"
				}],
				"menu": "热门音乐管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-flashlightopen",
					"buttons": ["查看"],
					"menu": "流行音乐",
					"menuJump": "列表",
					"tableName": "liuxingyinle"
				}],
				"menu": "流行音乐管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-group",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "交流中心",
					"tableName": "forum"
				}],
				"menu": "交流中心"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-discover",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "试卷管理",
					"tableName": "exampaper"
				}],
				"menu": "试卷管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-favor",
					"buttons": ["查看", "删除"],
					"menu": "我的收藏管理",
					"menuJump": "1",
					"tableName": "storeup"
				}],
				"menu": "我的收藏管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-brand",
					"buttons": ["新增", "查看", "修改", "删除", "导出", "打印"],
					"menu": "试题管理",
					"tableName": "examquestion"
				}],
				"menu": "试题管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-favor",
					"buttons": ["查看", "删除"],
					"menu": "我的关注管理",
					"menuJump": "41",
					"tableName": "storeup"
				}],
				"menu": "我的关注管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-message",
					"buttons": ["查看", "修改", "回复", "删除"],
					"menu": "留言反馈",
					"tableName": "messages"
				}],
				"menu": "留言反馈"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-news",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "公告信息",
					"tableName": "news"
				}, {
					"appFrontIcon": "cuIcon-paint",
					"buttons": ["查看", "删除"],
					"menu": "智能助手",
					"tableName": "chathelper"
				}],
				"menu": "系统管理"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-news",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "错题本",
					"tableName": "examfailrecord"
				}, {
					"appFrontIcon": "cuIcon-wenzi",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "试卷列表",
					"tableName": "exampaperlist"
				}, {
					"appFrontIcon": "cuIcon-vipcard",
					"buttons": ["新增", "查看", "修改", "删除", "导出", "打印"],
					"menu": "考试记录",
					"tableName": "examrecord"
				}],
				"menu": "考试管理"
			}],
			"frontMenu": [{
				"child": [{
					"appFrontIcon": "cuIcon-keyboard",
					"buttons": ["查看", "支付"],
					"menu": "商品信息列表",
					"menuJump": "列表",
					"tableName": "shangpinxinxi"
				}],
				"menu": "商品信息模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-rank",
					"buttons": ["章节管理", "查看"],
					"menu": "小说信息列表",
					"menuJump": "列表",
					"tableName": "xiaoshuoxinxi"
				}],
				"menu": "小说信息模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-clothes",
					"buttons": ["查看"],
					"menu": "电影信息列表",
					"menuJump": "列表",
					"tableName": "dianyingxinxi"
				}],
				"menu": "电影信息模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-news",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "公告信息列表",
					"tableName": "news"
				}],
				"menu": "公告信息模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-message",
					"buttons": ["查看", "修改", "回复", "删除"],
					"menu": "留言反馈列表",
					"tableName": "liuyanbanguanli"
				}],
				"menu": "留言反馈模块"
			}, {
				"child": [{
					"appFrontIcon": "cuIcon-group",
					"buttons": ["新增", "查看", "修改", "删除"],
					"menu": "交流中心列表",
					"tableName": "forum"
				}],
				"menu": "交流中心模块"
			}],
			"hasBackLogin": "是",
			"hasBackRegister": "否",
			"hasFrontLogin": "是",
			"hasFrontRegister": "是",
			"roleName": "用户",
			"tableName": "yonghu"
		}]
	}
}
export default menu;
