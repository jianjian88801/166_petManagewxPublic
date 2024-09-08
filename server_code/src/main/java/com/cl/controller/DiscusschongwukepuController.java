package com.cl.controller;

import java.math.BigDecimal;
import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Map;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Date;
import java.util.List;
import javax.servlet.http.HttpServletRequest;

import com.cl.utils.ValidatorUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.cl.annotation.IgnoreAuth;

import com.cl.entity.DiscusschongwukepuEntity;
import com.cl.entity.view.DiscusschongwukepuView;

import com.cl.service.DiscusschongwukepuService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.EncryptUtil;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 宠物科普评论表
 * 后端接口
 * @author 
 * @email 
 * @date 2024-04-16 17:42:46
 */
@RestController
@RequestMapping("/discusschongwukepu")
public class DiscusschongwukepuController {
    @Autowired
    private DiscusschongwukepuService discusschongwukepuService;



    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,DiscusschongwukepuEntity discusschongwukepu,
		HttpServletRequest request){
        EntityWrapper<DiscusschongwukepuEntity> ew = new EntityWrapper<DiscusschongwukepuEntity>();

		PageUtils page = discusschongwukepuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, discusschongwukepu), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,DiscusschongwukepuEntity discusschongwukepu, 
		HttpServletRequest request){
        EntityWrapper<DiscusschongwukepuEntity> ew = new EntityWrapper<DiscusschongwukepuEntity>();

		PageUtils page = discusschongwukepuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, discusschongwukepu), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( DiscusschongwukepuEntity discusschongwukepu){
       	EntityWrapper<DiscusschongwukepuEntity> ew = new EntityWrapper<DiscusschongwukepuEntity>();
      	ew.allEq(MPUtil.allEQMapPre( discusschongwukepu, "discusschongwukepu")); 
        return R.ok().put("data", discusschongwukepuService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(DiscusschongwukepuEntity discusschongwukepu){
        EntityWrapper< DiscusschongwukepuEntity> ew = new EntityWrapper< DiscusschongwukepuEntity>();
 		ew.allEq(MPUtil.allEQMapPre( discusschongwukepu, "discusschongwukepu")); 
		DiscusschongwukepuView discusschongwukepuView =  discusschongwukepuService.selectView(ew);
		return R.ok("查询宠物科普评论表成功").put("data", discusschongwukepuView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        DiscusschongwukepuEntity discusschongwukepu = discusschongwukepuService.selectById(id);
		discusschongwukepu = discusschongwukepuService.selectView(new EntityWrapper<DiscusschongwukepuEntity>().eq("id", id));
        return R.ok().put("data", discusschongwukepu);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        DiscusschongwukepuEntity discusschongwukepu = discusschongwukepuService.selectById(id);
		discusschongwukepu = discusschongwukepuService.selectView(new EntityWrapper<DiscusschongwukepuEntity>().eq("id", id));
        return R.ok().put("data", discusschongwukepu);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody DiscusschongwukepuEntity discusschongwukepu, HttpServletRequest request){
    	discusschongwukepu.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(discusschongwukepu);
        discusschongwukepuService.insert(discusschongwukepu);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody DiscusschongwukepuEntity discusschongwukepu, HttpServletRequest request){
    	discusschongwukepu.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(discusschongwukepu);
        discusschongwukepuService.insert(discusschongwukepu);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    @IgnoreAuth
    public R update(@RequestBody DiscusschongwukepuEntity discusschongwukepu, HttpServletRequest request){
        //ValidatorUtils.validateEntity(discusschongwukepu);
        discusschongwukepuService.updateById(discusschongwukepu);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        discusschongwukepuService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	
	/**
     * 前端智能排序
     */
	@IgnoreAuth
    @RequestMapping("/autoSort")
    public R autoSort(@RequestParam Map<String, Object> params,DiscusschongwukepuEntity discusschongwukepu, HttpServletRequest request,String pre){
        EntityWrapper<DiscusschongwukepuEntity> ew = new EntityWrapper<DiscusschongwukepuEntity>();
        Map<String, Object> newMap = new HashMap<String, Object>();
        Map<String, Object> param = new HashMap<String, Object>();
		Iterator<Map.Entry<String, Object>> it = param.entrySet().iterator();
		while (it.hasNext()) {
			Map.Entry<String, Object> entry = it.next();
			String key = entry.getKey();
			String newKey = entry.getKey();
			if (pre.endsWith(".")) {
				newMap.put(pre + newKey, entry.getValue());
			} else if (StringUtils.isEmpty(pre)) {
				newMap.put(newKey, entry.getValue());
			} else {
				newMap.put(pre + "." + newKey, entry.getValue());
			}
		}
		params.put("sort", "clicktime");
        params.put("order", "desc");
		PageUtils page = discusschongwukepuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, discusschongwukepu), params), params));
        return R.ok().put("data", page);
    }








}
