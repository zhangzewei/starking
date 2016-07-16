package com.inc.starking.adapter;

import android.graphics.Rect;
import android.support.v7.widget.RecyclerView;
import android.view.View;

/**
 * Created by Spec_Inc on 7/7/2016.
 */

public class SpecItemDecoration extends RecyclerView.ItemDecoration {

    public static final int DEFAULT_ITEM_PADDING = 10;

    private int space;

    public SpecItemDecoration(int space) {
        this.space=space;
    }

    @Override
    public void getItemOffsets(Rect outRect, View view, RecyclerView parent, RecyclerView.State state) {
        outRect.left=space/2;
        outRect.right=space/2;
        outRect.bottom=space;
        if(parent.getChildAdapterPosition(view)==0){
            outRect.top=space;
        }
        if(parent.getChildAdapterPosition(view)==1){
            outRect.top=space;
        }
    }

}
