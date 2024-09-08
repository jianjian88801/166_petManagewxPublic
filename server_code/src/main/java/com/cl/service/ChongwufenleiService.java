package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.ChongwufenleiEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ChongwufenleiView;


/**
 * 宠物分类
 *
 * @author 
 * @email 
 * @date 2024-04-16 17:42:45
 */
public interface ChongwufenleiService extends IService<ChongwufenleiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ChongwufenleiView> selectListView(Wrapper<ChongwufenleiEntity> wrapper);
   	
   	ChongwufenleiView selectView(@Param("ew") Wrapper<ChongwufenleiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ChongwufenleiEntity> wrapper);
   	

}

