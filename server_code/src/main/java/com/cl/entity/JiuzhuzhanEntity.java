package com.cl.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 救助站
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2024-04-16 17:42:45
 */
@TableName("jiuzhuzhan")
public class JiuzhuzhanEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public JiuzhuzhanEntity() {
		
	}
	
	public JiuzhuzhanEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 救助站账号
	 */
					
	private String jiuzhuzhanzhanghao;
	
	/**
	 * 救助站密码
	 */
					
	private String jiuzhuzhanmima;
	
	/**
	 * 图片
	 */
					
	private String tupian;
	
	/**
	 * 救助站名称
	 */
					
	private String jiuzhuzhanmingcheng;
	
	/**
	 * 联系电话
	 */
					
	private String lianxidianhua;
	
	/**
	 * 负责人
	 */
					
	private String fuzeren;
	
	/**
	 * 救助站地址
	 */
					
	private String jiuzhuzhandizhi;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：救助站账号
	 */
	public void setJiuzhuzhanzhanghao(String jiuzhuzhanzhanghao) {
		this.jiuzhuzhanzhanghao = jiuzhuzhanzhanghao;
	}
	/**
	 * 获取：救助站账号
	 */
	public String getJiuzhuzhanzhanghao() {
		return jiuzhuzhanzhanghao;
	}
	/**
	 * 设置：救助站密码
	 */
	public void setJiuzhuzhanmima(String jiuzhuzhanmima) {
		this.jiuzhuzhanmima = jiuzhuzhanmima;
	}
	/**
	 * 获取：救助站密码
	 */
	public String getJiuzhuzhanmima() {
		return jiuzhuzhanmima;
	}
	/**
	 * 设置：图片
	 */
	public void setTupian(String tupian) {
		this.tupian = tupian;
	}
	/**
	 * 获取：图片
	 */
	public String getTupian() {
		return tupian;
	}
	/**
	 * 设置：救助站名称
	 */
	public void setJiuzhuzhanmingcheng(String jiuzhuzhanmingcheng) {
		this.jiuzhuzhanmingcheng = jiuzhuzhanmingcheng;
	}
	/**
	 * 获取：救助站名称
	 */
	public String getJiuzhuzhanmingcheng() {
		return jiuzhuzhanmingcheng;
	}
	/**
	 * 设置：联系电话
	 */
	public void setLianxidianhua(String lianxidianhua) {
		this.lianxidianhua = lianxidianhua;
	}
	/**
	 * 获取：联系电话
	 */
	public String getLianxidianhua() {
		return lianxidianhua;
	}
	/**
	 * 设置：负责人
	 */
	public void setFuzeren(String fuzeren) {
		this.fuzeren = fuzeren;
	}
	/**
	 * 获取：负责人
	 */
	public String getFuzeren() {
		return fuzeren;
	}
	/**
	 * 设置：救助站地址
	 */
	public void setJiuzhuzhandizhi(String jiuzhuzhandizhi) {
		this.jiuzhuzhandizhi = jiuzhuzhandizhi;
	}
	/**
	 * 获取：救助站地址
	 */
	public String getJiuzhuzhandizhi() {
		return jiuzhuzhandizhi;
	}

}
