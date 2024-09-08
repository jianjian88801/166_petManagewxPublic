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

import com.cl.entity.JiuzhuzhanEntity;
import com.cl.entity.view.JiuzhuzhanView;

import com.cl.service.JiuzhuzhanService;
import com.cl.service.TokenService;
import com.cl.utils.PageUtils;
import com.cl.utils.R;
import com.cl.utils.EncryptUtil;
import com.cl.utils.MPUtil;
import com.cl.utils.CommonUtil;
import java.io.IOException;

/**
 * 救助站
 * 后端接口
 * @author 
 * @email 
 * @date 2024-04-16 17:42:45
 */
@RestController
@RequestMapping("/jiuzhuzhan")
public class JiuzhuzhanController {
    @Autowired
    private JiuzhuzhanService jiuzhuzhanService;



    
	@Autowired
	private TokenService tokenService;
	
	/**
	 * 登录
	 */
	@IgnoreAuth
	@RequestMapping(value = "/login")
	public R login(String username, String password, String captcha, HttpServletRequest request) {
		JiuzhuzhanEntity u = jiuzhuzhanService.selectOne(new EntityWrapper<JiuzhuzhanEntity>().eq("jiuzhuzhanzhanghao", username));
        if(u==null || !u.getJiuzhuzhanmima().equals(EncryptUtil.md5(password))) {
            return R.error("账号或密码不正确");
        }
		String token = tokenService.generateToken(u.getId(), username,"jiuzhuzhan",  "救助站" );
		return R.ok().put("token", token);
	}


	
	/**
     * 注册
     */
	@IgnoreAuth
    @RequestMapping("/register")
    public R register(@RequestBody JiuzhuzhanEntity jiuzhuzhan){
    	//ValidatorUtils.validateEntity(jiuzhuzhan);
    	JiuzhuzhanEntity u = jiuzhuzhanService.selectOne(new EntityWrapper<JiuzhuzhanEntity>().eq("jiuzhuzhanzhanghao", jiuzhuzhan.getJiuzhuzhanzhanghao()));
		if(u!=null) {
			return R.error("注册用户已存在");
		}
		Long uId = new Date().getTime();
		jiuzhuzhan.setId(uId);
        jiuzhuzhan.setJiuzhuzhanmima(EncryptUtil.md5(jiuzhuzhan.getJiuzhuzhanmima()));
        jiuzhuzhanService.insert(jiuzhuzhan);
        return R.ok();
    }

	
	/**
	 * 退出
	 */
	@RequestMapping("/logout")
	public R logout(HttpServletRequest request) {
		request.getSession().invalidate();
		return R.ok("退出成功");
	}
	
	/**
     * 获取用户的session用户信息
     */
    @RequestMapping("/session")
    public R getCurrUser(HttpServletRequest request){
    	Long id = (Long)request.getSession().getAttribute("userId");
        JiuzhuzhanEntity u = jiuzhuzhanService.selectById(id);
        return R.ok().put("data", u);
    }
    
    /**
     * 密码重置
     */
    @IgnoreAuth
	@RequestMapping(value = "/resetPass")
    public R resetPass(String username, HttpServletRequest request){
    	JiuzhuzhanEntity u = jiuzhuzhanService.selectOne(new EntityWrapper<JiuzhuzhanEntity>().eq("jiuzhuzhanzhanghao", username));
    	if(u==null) {
    		return R.error("账号不存在");
    	}
        u.setJiuzhuzhanmima(EncryptUtil.md5("123456"));
        jiuzhuzhanService.updateById(u);
        return R.ok("密码已重置为：123456");
    }


    /**
     * 后端列表
     */
    @RequestMapping("/page")
    public R page(@RequestParam Map<String, Object> params,JiuzhuzhanEntity jiuzhuzhan,
		HttpServletRequest request){
		String tableName = request.getSession().getAttribute("tableName").toString();
		if(tableName.equals("jiuzhuzhan")) {
			jiuzhuzhan.setJiuzhuzhanzhanghao((String)request.getSession().getAttribute("username"));
		}
        EntityWrapper<JiuzhuzhanEntity> ew = new EntityWrapper<JiuzhuzhanEntity>();

		PageUtils page = jiuzhuzhanService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, jiuzhuzhan), params), params));

        return R.ok().put("data", page);
    }
    
    /**
     * 前端列表
     */
	@IgnoreAuth
    @RequestMapping("/list")
    public R list(@RequestParam Map<String, Object> params,JiuzhuzhanEntity jiuzhuzhan, 
		HttpServletRequest request){
        EntityWrapper<JiuzhuzhanEntity> ew = new EntityWrapper<JiuzhuzhanEntity>();

		PageUtils page = jiuzhuzhanService.queryPage(params, MPUtil.sort(MPUtil.between(MPUtil.likeOrEq(ew, jiuzhuzhan), params), params));
        return R.ok().put("data", page);
    }

	/**
     * 列表
     */
    @RequestMapping("/lists")
    public R list( JiuzhuzhanEntity jiuzhuzhan){
       	EntityWrapper<JiuzhuzhanEntity> ew = new EntityWrapper<JiuzhuzhanEntity>();
      	ew.allEq(MPUtil.allEQMapPre( jiuzhuzhan, "jiuzhuzhan")); 
        return R.ok().put("data", jiuzhuzhanService.selectListView(ew));
    }

	 /**
     * 查询
     */
    @RequestMapping("/query")
    public R query(JiuzhuzhanEntity jiuzhuzhan){
        EntityWrapper< JiuzhuzhanEntity> ew = new EntityWrapper< JiuzhuzhanEntity>();
 		ew.allEq(MPUtil.allEQMapPre( jiuzhuzhan, "jiuzhuzhan")); 
		JiuzhuzhanView jiuzhuzhanView =  jiuzhuzhanService.selectView(ew);
		return R.ok("查询救助站成功").put("data", jiuzhuzhanView);
    }
	
    /**
     * 后端详情
     */
    @RequestMapping("/info/{id}")
    public R info(@PathVariable("id") Long id){
        JiuzhuzhanEntity jiuzhuzhan = jiuzhuzhanService.selectById(id);
		jiuzhuzhan = jiuzhuzhanService.selectView(new EntityWrapper<JiuzhuzhanEntity>().eq("id", id));
        return R.ok().put("data", jiuzhuzhan);
    }

    /**
     * 前端详情
     */
	@IgnoreAuth
    @RequestMapping("/detail/{id}")
    public R detail(@PathVariable("id") Long id){
        JiuzhuzhanEntity jiuzhuzhan = jiuzhuzhanService.selectById(id);
		jiuzhuzhan = jiuzhuzhanService.selectView(new EntityWrapper<JiuzhuzhanEntity>().eq("id", id));
        return R.ok().put("data", jiuzhuzhan);
    }
    



    /**
     * 后端保存
     */
    @RequestMapping("/save")
    public R save(@RequestBody JiuzhuzhanEntity jiuzhuzhan, HttpServletRequest request){
        if(jiuzhuzhanService.selectCount(new EntityWrapper<JiuzhuzhanEntity>().eq("jiuzhuzhanzhanghao", jiuzhuzhan.getJiuzhuzhanzhanghao()))>0) {
            return R.error("救助站账号已存在");
        }
    	jiuzhuzhan.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(jiuzhuzhan);
    	JiuzhuzhanEntity u = jiuzhuzhanService.selectOne(new EntityWrapper<JiuzhuzhanEntity>().eq("jiuzhuzhanzhanghao", jiuzhuzhan.getJiuzhuzhanzhanghao()));
		if(u!=null) {
			return R.error("用户已存在");
		}
		jiuzhuzhan.setId(new Date().getTime());
        jiuzhuzhan.setJiuzhuzhanmima(EncryptUtil.md5(jiuzhuzhan.getJiuzhuzhanmima()));
        jiuzhuzhanService.insert(jiuzhuzhan);
        return R.ok();
    }
    
    /**
     * 前端保存
     */
    @RequestMapping("/add")
    public R add(@RequestBody JiuzhuzhanEntity jiuzhuzhan, HttpServletRequest request){
        if(jiuzhuzhanService.selectCount(new EntityWrapper<JiuzhuzhanEntity>().eq("jiuzhuzhanzhanghao", jiuzhuzhan.getJiuzhuzhanzhanghao()))>0) {
            return R.error("救助站账号已存在");
        }
    	jiuzhuzhan.setId(new Date().getTime()+new Double(Math.floor(Math.random()*1000)).longValue());
    	//ValidatorUtils.validateEntity(jiuzhuzhan);
    	JiuzhuzhanEntity u = jiuzhuzhanService.selectOne(new EntityWrapper<JiuzhuzhanEntity>().eq("jiuzhuzhanzhanghao", jiuzhuzhan.getJiuzhuzhanzhanghao()));
		if(u!=null) {
			return R.error("用户已存在");
		}
		jiuzhuzhan.setId(new Date().getTime());
        jiuzhuzhan.setJiuzhuzhanmima(EncryptUtil.md5(jiuzhuzhan.getJiuzhuzhanmima()));
        jiuzhuzhanService.insert(jiuzhuzhan);
        return R.ok();
    }



    /**
     * 修改
     */
    @RequestMapping("/update")
    @Transactional
    public R update(@RequestBody JiuzhuzhanEntity jiuzhuzhan, HttpServletRequest request){
        //ValidatorUtils.validateEntity(jiuzhuzhan);
        JiuzhuzhanEntity jiuzhuzhanEntity = jiuzhuzhanService.selectById(jiuzhuzhan.getId());
        if(StringUtils.isNotBlank(jiuzhuzhan.getJiuzhuzhanmima()) && !jiuzhuzhan.getJiuzhuzhanmima().equals(jiuzhuzhanEntity.getJiuzhuzhanmima())) {
            jiuzhuzhan.setJiuzhuzhanmima(EncryptUtil.md5(jiuzhuzhan.getJiuzhuzhanmima()));
        }
        jiuzhuzhanService.updateById(jiuzhuzhan);//全部更新
        return R.ok();
    }



    

    /**
     * 删除
     */
    @RequestMapping("/delete")
    public R delete(@RequestBody Long[] ids){
        jiuzhuzhanService.deleteBatchIds(Arrays.asList(ids));
        return R.ok();
    }
    
	








}
