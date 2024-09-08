package com.cl.dao;

import com.cl.entity.ShenqingruzhuEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShenqingruzhuView;


/**
 * 申请入驻
 * 
 * @author 
 * @email 
 * @date 2024-04-16 17:42:45
 */
public interface ShenqingruzhuDao extends BaseMapper<ShenqingruzhuEntity> {
	
	List<ShenqingruzhuView> selectListView(@Param("ew") Wrapper<ShenqingruzhuEntity> wrapper);

	List<ShenqingruzhuView> selectListView(Pagination page,@Param("ew") Wrapper<ShenqingruzhuEntity> wrapper);
	
	ShenqingruzhuView selectView(@Param("ew") Wrapper<ShenqingruzhuEntity> wrapper);
	

}
