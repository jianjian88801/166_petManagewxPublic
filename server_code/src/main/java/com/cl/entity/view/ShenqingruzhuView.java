package com.cl.entity.view;

import com.cl.entity.ShenqingruzhuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;

import java.io.Serializable;
import com.cl.utils.EncryptUtil;
 

/**
 * 申请入驻
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-04-16 17:42:45
 */
@TableName("shenqingruzhu")
public class ShenqingruzhuView  extends ShenqingruzhuEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public ShenqingruzhuView(){
	}
 
 	public ShenqingruzhuView(ShenqingruzhuEntity shenqingruzhuEntity){
 	try {
			BeanUtils.copyProperties(this, shenqingruzhuEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}


}
