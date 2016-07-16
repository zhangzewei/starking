package com.inc.starking.widget;

import android.content.Context;
import android.support.v4.view.ViewPager;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.View;

/**
 * Created by Spec_Inc on 7/12/2016.
 */

public class BanableSlidingViewPager extends ViewPager {

    private boolean isSlided = false;

    public BanableSlidingViewPager(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public BanableSlidingViewPager(Context context) {
        super(context);
    }

    public void setUnSlided(boolean isSlided) {
        this.isSlided = isSlided;
    }

    @Override
    public void scrollTo(int x, int y) {
        super.scrollTo(x, y);
    }


    /**
     * 返回true就是要消费掉这个时间，返回false是要将这个时间传递给上层，
     * 返回super是要将这个事件继续传递下去
     * @param arg0
     * @return
     */

    @Override
    public boolean onTouchEvent(MotionEvent arg0) {
        /* return false;//super.onTouchEvent(arg0); */
        if (isSlided)
            return false;
        else
            return super.onTouchEvent(arg0);
    }

    /**
     * 返回true将调用此View的ontouchEvent方法，false是要继续传递下去
     * @param arg0
     * @return
     */

    @Override
    public boolean onInterceptTouchEvent(MotionEvent arg0) {
        if (isSlided)
            return false;
        else
            return super.onInterceptTouchEvent(arg0);
    }

    @Override
    public void setCurrentItem(int item, boolean smoothScroll) {
        super.setCurrentItem(item, smoothScroll);
    }

    @Override
    public void setCurrentItem(int item) {
        super.setCurrentItem(item);
    }


    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {

        int height = 0;
        //下面遍历所有child的高度
        for (int i = 0; i < getChildCount(); i++) {
            View child = getChildAt(i);
            child.measure(widthMeasureSpec,
                    MeasureSpec.makeMeasureSpec(0, MeasureSpec.UNSPECIFIED));
            int h = child.getMeasuredHeight();
            if (h > height) //采用最大的view的高度。
                height = h;
        }

        heightMeasureSpec = MeasureSpec.makeMeasureSpec(height,
                MeasureSpec.EXACTLY);

        super.onMeasure(widthMeasureSpec, heightMeasureSpec);
    }
}
