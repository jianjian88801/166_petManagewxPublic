package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.ChongwukepuEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ChongwukepuView;


/**
 * 宠物科普
 *
 * @author 
 * @email 
 * @date 2024-04-16 17:42:45
 */
public interface ChongwukepuService extends IService<ChongwukepuEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ChongwukepuView> selectListView(Wrapper<ChongwukepuEntity> wrapper);
   	
   	ChongwukepuView selectView(@Param("ew") Wrapper<ChongwukepuEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ChongwukepuEntity> wrapper);
   	

}

