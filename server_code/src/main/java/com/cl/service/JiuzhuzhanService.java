package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.JiuzhuzhanEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.JiuzhuzhanView;


/**
 * 救助站
 *
 * @author 
 * @email 
 * @date 2024-04-16 17:42:45
 */
public interface JiuzhuzhanService extends IService<JiuzhuzhanEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<JiuzhuzhanView> selectListView(Wrapper<JiuzhuzhanEntity> wrapper);
   	
   	JiuzhuzhanView selectView(@Param("ew") Wrapper<JiuzhuzhanEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<JiuzhuzhanEntity> wrapper);
   	

}

