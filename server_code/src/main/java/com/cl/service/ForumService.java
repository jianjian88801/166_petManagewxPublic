package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.ForumEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ForumView;


/**
 * 论坛交流
 *
 * @author 
 * @email 
 * @date 2024-04-16 17:42:46
 */
public interface ForumService extends IService<ForumEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ForumView> selectListView(Wrapper<ForumEntity> wrapper);
   	
   	ForumView selectView(@Param("ew") Wrapper<ForumEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ForumEntity> wrapper);
   	

}

