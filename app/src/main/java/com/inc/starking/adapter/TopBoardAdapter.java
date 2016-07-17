package com.inc.starking.adapter;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.ColorDrawable;
import android.text.Spannable;
import android.text.SpannableStringBuilder;
import android.text.style.ForegroundColorSpan;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.facebook.drawee.view.SimpleDraweeView;
import com.facebook.imageutils.BitmapUtil;
import com.inc.starking.R;
import com.inc.starking.base.CommonAdapter;
import com.inc.starking.base.ViewHolder;
import com.inc.starking.entry.GirlEntry;
import com.inc.starking.utils.BitmapUtils;
import com.inc.starking.utils.ImageLoaderUtils;
import com.nostra13.universalimageloader.core.DisplayImageOptions;
import com.nostra13.universalimageloader.core.ImageLoader;
import com.nostra13.universalimageloader.core.assist.FailReason;
import com.nostra13.universalimageloader.core.listener.ImageLoadingListener;
import com.nostra13.universalimageloader.core.listener.ImageLoadingProgressListener;
import com.nostra13.universalimageloader.core.listener.SimpleImageLoadingListener;

import org.w3c.dom.Text;

import java.util.List;

/**
 * Created by Spec_Inc on 7/14/2016.
 */

public class TopBoardAdapter extends CommonAdapter<GirlEntry> {

    private List<GirlEntry> mDatas = null;

    private Context mContext = null;

    private DisplayImageOptions mOptions = null;

    public TopBoardAdapter( Context mContext,List<GirlEntry> mDatas) {
        super(mContext,mDatas);
        this.mDatas = mDatas;
        this.mContext = mContext;
        mOptions = ImageLoaderUtils.getDisplayImageOptions();

    }

    @Override
    public void convert(ViewHolder holder, GirlEntry ge,int position) {
        holder.setText(R.id.name,ge.getName());
        final ImageView iv = holder.getView(R.id.photo);
        ImageLoader.getInstance().loadImage(mDatas.get(position).getUrl(),new ImageLoadingListener() {
            @Override
            public void onLoadingStarted(String s, View view) {

            }

            @Override
            public void onLoadingFailed(String s, View view, FailReason failReason) {

            }

            @Override
            public void onLoadingComplete(String s, View view, Bitmap bitmap) {
                Bitmap bm =  BitmapUtils.makeRoundCorner(bitmap);
                iv.setBackground(new BitmapDrawable(bm));
            }

            @Override
            public void onLoadingCancelled(String s, View view) {

            }
        });

/*        ImageLoader.getInstance()
                .displayImage(mDatas.get(position).getUrl(),
                        (ImageView) holder.getView(R.id.photo), mOptions, new ImageLoadingListener() {
                            @Override
                            public void onLoadingStarted(String s, View view) {

                            }

                            @Override
                            public void onLoadingFailed(String s, View view, FailReason failReason) {

                            }

                            @Override
                            public void onLoadingComplete(String s, View view, Bitmap bitmap) {


                            }

                            @Override
                            public void onLoadingCancelled(String s, View view) {

                            }
                        }, null);*/
        String str ="获得"+ge.getFavo()+"票";
        SpannableStringBuilder builder = new SpannableStringBuilder(str);
        ForegroundColorSpan span = new ForegroundColorSpan(Color.RED);
        builder.setSpan(span,2,str.length()-1, Spannable.SPAN_EXCLUSIVE_EXCLUSIVE);
        TextView text =holder.getView(R.id.favo);
        text.setText(builder);
        TextView no = holder.getView(R.id.top_no);
        no.setText("");
        no.setBackground(null);
        if(position == 0){
            no.setBackgroundResource(R.mipmap.ic_top_fir);
        }else if(position == 1){
            no.setBackgroundResource(R.mipmap.ic_top_sec);
        }else if(position == 2){
            no.setBackgroundResource(R.mipmap.ic_top_third);
        }else {
            holder.setText(R.id.top_no,(position+1)+".");
        }
    }

    @Override
    public int getLayoutId() {
        return R.layout.item_top;
    }
}
