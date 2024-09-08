package com.cl.dao;

import com.cl.entity.DiscusschongwukepuEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.DiscusschongwukepuView;


/**
 * 宠物科普评论表
 * 
 * @author 
 * @email 
 * @date 2024-04-16 17:42:46
 */
public interface DiscusschongwukepuDao extends BaseMapper<DiscusschongwukepuEntity> {
	
	List<DiscusschongwukepuView> selectListView(@Param("ew") Wrapper<DiscusschongwukepuEntity> wrapper);

	List<DiscusschongwukepuView> selectListView(Pagination page,@Param("ew") Wrapper<DiscusschongwukepuEntity> wrapper);
	
	DiscusschongwukepuView selectView(@Param("ew") Wrapper<DiscusschongwukepuEntity> wrapper);
	

}
