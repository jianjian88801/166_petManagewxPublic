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

import com.cl.entity.ChongwukepuEntity;
import com.cl.entity.view.ChongwukepuView;

import com.cl.service.ChongwukepuService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.EncryptUtil;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;
import com.cl.service.StoreupService;
import com.cl.entity.StoreupEntity;

/**
 * 宠物科普
 * 后端接口
 * @author 
 * @email 
 * @date 2024-04-16 17:42:45
 */
@RestController
@RequestMapping("/chongwukepu")
public class ChongwukepuController {
    @Autowired
    private ChongwukepuService chongwukepuService;

    @Autowired
    private StoreupService storeupService;


    


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,ChongwukepuEntity chongwukepu,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("yonghu")) {
			chongwukepu.setYonghuzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<ChongwukepuEntity> ew = new EntityWrapper<ChongwukepuEntity>();

		PageUtils page = chongwukepuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, chongwukepu), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,ChongwukepuEntity chongwukepu, 
		HttpServletRequest request){
        EntityWrapper<ChongwukepuEntity> ew = new EntityWrapper<ChongwukepuEntity>();

		PageUtils page = chongwukepuService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, chongwukepu), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( ChongwukepuEntity chongwukepu){
       	EntityWrapper<ChongwukepuEntity> ew = new EntityWrapper<ChongwukepuEntity>();
      	ew.allEq(MPUtil.allEQMapPre( chongwukepu, "chongwukepu")); 
        return R.ok().put("data", chongwukepuService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(ChongwukepuEntity chongwukepu){
        EntityWrapper< ChongwukepuEntity> ew = new EntityWrapper< ChongwukepuEntity>();
 		ew.allEq(MPUtil.allEQMapPre( chongwukepu, "chongwukepu")); 
		ChongwukepuView chongwukepuView =  chongwukepuService.selectView(ew);
		return R.ok("查询宠物科普成功").put("data", chongwukepuView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        ChongwukepuEntity chongwukepu = chongwukepuService.selectById(id);
		chongwukepu = chongwukepuService.selectView(new EntityWrapper<ChongwukepuEntity>().eq("id", id));
        return R.ok().put("data", chongwukepu);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        ChongwukepuEntity chongwukepu = chongwukepuService.selectById(id);
		chongwukepu = chongwukepuService.selectView(new EntityWrapper<ChongwukepuEntity>().eq("id", id));
        return R.ok().put("data", chongwukepu);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody ChongwukepuEntity chongwukepu, HttpServletRequest request){
    	chongwukepu.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(chongwukepu);
        chongwukepuService.insert(chongwukepu);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody ChongwukepuEntity chongwukepu, HttpServletRequest request){
    	chongwukepu.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(chongwukepu);
        chongwukepuService.insert(chongwukepu);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody ChongwukepuEntity chongwukepu, HttpServletRequest request){
        //ValidatorUtils.validateEntity(chongwukepu);
        chongwukepuService.updateById(chongwukepu);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        chongwukepuService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
