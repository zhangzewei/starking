package com.inc.starking.adapter;

import android.content.Context;
import com.inc.starking.R;
import com.inc.starking.base.CommonAdapter;
import com.inc.starking.base.ViewHolder;
import com.inc.starking.entry.GirlEntry;

import java.util.List;

/**
 * Created by Spec_Inc on 7/14/2016.
 */

public class TopBoardAdapter extends CommonAdapter<GirlEntry> {

    private List<GirlEntry> mDatas = null;

    private Context mContext = null;

    public TopBoardAdapter( Context mContext,List<GirlEntry> mDatas) {
        super(mContext,mDatas);
        this.mDatas = mDatas;
        this.mContext = mContext;
    }

    @Override
    public void convert(ViewHolder holder, GirlEntry ge,int position) {
        holder.setText(R.id.top_no,(position+1)+"")
        .setText(R.id.name,ge.getName());

    }

    @Override
    public int getLayoutId() {
        return R.layout.item_top;
    }
}
