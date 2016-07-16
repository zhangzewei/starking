package com.inc.starking.widget;

import android.content.Context;
import android.support.v4.widget.SwipeRefreshLayout;

import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.StaggeredGridLayoutManager;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
import android.widget.Toast;

import com.inc.starking.R;
import com.inc.starking.moudle.main.MainActivity;
import com.inc.starking.utils.LogUtils;

/**
 * Created by Spec_Inc on 7/7/2016.
 */

public class SwipeAndPullRefreshLayout extends SwipeRefreshLayout{

    private int mTouchSlop;

    private int mDownY ;

    private int mLastY ;

    private int mUpY ;

    private boolean isLoading = false;

    private View mFooter = null;

    private RecyclerView mContainer = null;

    private OnLoadListener mLoadListener = null;


    public SwipeAndPullRefreshLayout(Context context) {
        super(context);
        mTouchSlop = ViewConfiguration.get(context).getScaledTouchSlop();
        mFooter = LayoutInflater.from(getContext()).inflate(R.layout.swipe_and_pull_refresh_layout_footer,null);
    }

    public SwipeAndPullRefreshLayout(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public void isLoading(boolean isLoading){
        this.isLoading = isLoading;
    }

    public void setOnLoadListener(OnLoadListener listener){
        this.mLoadListener = listener;
    }


    public interface OnLoadListener{
        void onLoading(RecyclerView container);
    }

    @Override
    protected void onLayout(boolean changed, int left, int top, int right, int bottom) {
        super.onLayout(changed, left, top, right, bottom);

        if(mContainer == null){
            int children = getChildCount();

            if(children > 0){
                    View v = getChildAt(0);
                    if(v instanceof RecyclerView){
                        mContainer = (RecyclerView) v;
                        mContainer.addOnScrollListener(mScrollListener);
                     }
            }
        }
    }

    private RecyclerView.OnScrollListener mScrollListener = new RecyclerView.OnScrollListener() {
        @Override
        public void onScrolled(RecyclerView recyclerView, int dx, int dy) {
            super.onScrolled(recyclerView, dx, dy);
            if(enableLoad()){
                load(true);
            }
        }

        @Override
        public void onScrollStateChanged(RecyclerView recyclerView, int newState) {
            super.onScrollStateChanged(recyclerView, newState);

        }
    };


    @Override
    public boolean onTouchEvent(MotionEvent ev) {
        final int action = ev.getAction();
        switch (action){
            case MotionEvent.ACTION_DOWN:
                LogUtils.i("d="+ev.getY());
                mDownY = (int) ev.getY();
                break;

            case MotionEvent.ACTION_MOVE:
                LogUtils.i("m="+ev.getY());
                mLastY = (int) ev.getY();
                break;

            case MotionEvent.ACTION_UP:
                LogUtils.i("u="+ev.getY());
                mUpY = (int) ev.getY();
                if(enableLoad()){
                    load(true);
                }
                break;

        }

        return super.onTouchEvent(ev);
    }

    private void load(boolean loading) {
        isLoading = loading;

        if(mLoadListener != null){
            mLoadListener.onLoading(mContainer);
        }
        mDownY = 0;
        mLastY = 0;

    }

    private boolean enableLoad() {

        return isBottom() && !isLoading && isPullUp();
    }


    public boolean isPullUp() {

        if(mUpY - mDownY >= 0&& (mDownY - mLastY) >= mTouchSlop){
            return true;
        }

        return false;
    }

    public boolean isBottom() {

        StaggeredGridLayoutManager manager = (StaggeredGridLayoutManager) mContainer.getLayoutManager();
        int[] into = null;
        int count = mContainer.getAdapter().getItemCount();
        into = manager.findLastVisibleItemPositions(into);
        for(int i = 0;i<into.length;i++){
            if(into[i] >=count -1){
                return true;
            }
        }
        return false;
    }
}
