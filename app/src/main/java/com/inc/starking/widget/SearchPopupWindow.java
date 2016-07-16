package com.inc.starking.widget;

import android.content.Context;
import android.graphics.drawable.ColorDrawable;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ListView;
import android.widget.PopupWindow;

import com.inc.starking.R;
import com.inc.starking.adapter.TopBoardAdapter;
import com.inc.starking.entry.GirlEntry;

import java.util.List;

/**
 * Created by Spec_Inc on 7/10/2016.
 */

public class SearchPopupWindow extends PopupWindow {


    private View mView = null;


    public SearchPopupWindow(Context context, List<GirlEntry> sortDatas) {
        super(context);


        mView = LayoutInflater.from(context).inflate(R.layout.pop_search, null);

        ListView lv = (ListView) mView.findViewById(R.id.top_board);

        TopBoardAdapter adapter = new TopBoardAdapter(context,sortDatas);
        lv.setAdapter(adapter);

        //设置SelectPicPopupWindow的View
        this.setContentView(mView);
        //设置SelectPicPopupWindow弹出窗体的宽
        this.setWidth(ViewGroup.LayoutParams.MATCH_PARENT);
        //设置SelectPicPopupWindow弹出窗体的高
        this.setHeight(ViewGroup.LayoutParams.MATCH_PARENT);
        //设置SelectPicPopupWindow弹出窗体可点击
        this.setFocusable(true);
        //设置SelectPicPopupWindow弹出窗体动画效果
        this.setAnimationStyle(R.style.menu_alert_dialg_anim);
        //实例化一个ColorDrawable颜色为半透明
        ColorDrawable dw = new ColorDrawable(0x00000000);
        //设置SelectPicPopupWindow弹出窗体的背景
        this.setBackgroundDrawable(dw);
    }
}
