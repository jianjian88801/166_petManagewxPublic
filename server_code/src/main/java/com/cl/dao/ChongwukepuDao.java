package com.cl.dao;

import com.cl.entity.ChongwukepuEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ChongwukepuView;


/**
 * 宠物科普
 * 
 * @author 
 * @email 
 * @date 2024-04-16 17:42:45
 */
public interface ChongwukepuDao extends BaseMapper<ChongwukepuEntity> {
	
	List<ChongwukepuView> selectListView(@Param("ew") Wrapper<ChongwukepuEntity> wrapper);

	List<ChongwukepuView> selectListView(Pagination page,@Param("ew") Wrapper<ChongwukepuEntity> wrapper);
	
	ChongwukepuView selectView(@Param("ew") Wrapper<ChongwukepuEntity> wrapper);
	

}
