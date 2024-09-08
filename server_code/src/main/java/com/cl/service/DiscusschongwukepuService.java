package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.DiscusschongwukepuEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.DiscusschongwukepuView;


/**
 * 宠物科普评论表
 *
 * @author 
 * @email 
 * @date 2024-04-16 17:42:46
 */
public interface DiscusschongwukepuService extends IService<DiscusschongwukepuEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DiscusschongwukepuView> selectListView(Wrapper<DiscusschongwukepuEntity> wrapper);
   	
   	DiscusschongwukepuView selectView(@Param("ew") Wrapper<DiscusschongwukepuEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DiscusschongwukepuEntity> wrapper);
   	

}

