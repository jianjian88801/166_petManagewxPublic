package com.cl.dao;

import com.cl.entity.ChongwufenleiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ChongwufenleiView;


/**
 * 宠物分类
 * 
 * @author 
 * @email 
 * @date 2024-04-16 17:42:45
 */
public interface ChongwufenleiDao extends BaseMapper<ChongwufenleiEntity> {
	
	List<ChongwufenleiView> selectListView(@Param("ew") Wrapper<ChongwufenleiEntity> wrapper);

	List<ChongwufenleiView> selectListView(Pagination page,@Param("ew") Wrapper<ChongwufenleiEntity> wrapper);
	
	ChongwufenleiView selectView(@Param("ew") Wrapper<ChongwufenleiEntity> wrapper);
	

}
