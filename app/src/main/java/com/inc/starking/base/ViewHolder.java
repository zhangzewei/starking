package com.inc.starking.base;

import android.content.Context;
import android.graphics.Bitmap;
import android.support.v7.widget.RecyclerView;
import android.util.SparseArray;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;



/**
 * Created by Holy-Spirit on 2015/12/29.
 * <p/>
 * This is a common ViewHolder
 */
public class ViewHolder {

    private SparseArray<View> mViews;
    private int mPosition;
    private LayoutInflater mInflater;
    private View mConvertView;
    private Context mContext;

    /**
     *
     * @param context
     * @param layoutId
     * @param parent
     * @param position
     */
    public ViewHolder(Context context, int layoutId, ViewGroup parent, int position) {

        this.mPosition = position;
        this.mContext = context;
        mViews = new SparseArray<View>();
        mInflater = LayoutInflater.from(context);
        mConvertView = mInflater.inflate(layoutId, parent, false);
        mConvertView.setTag(this);
    }


    /**
     *
     * @param convertView
     * @param context
     * @param layoutId
     * @param parent
     * @param position
     * @return
     */
    public static ViewHolder get(View convertView, Context context,
                                 int layoutId, ViewGroup parent, int position) {


        if (convertView == null) {
            return new ViewHolder(context, layoutId, parent, position);
        } else {
            ViewHolder holder = (ViewHolder) convertView.getTag();
            holder.mPosition = position;
            return holder;

        }
    }

    /**
     *
     * @param viewId
     * @param <T>
     * @return
     */

    public <T extends View> T getView(int viewId) {

        View view = mViews.get(viewId);
        if (view == null) {
            view = mConvertView.findViewById(viewId);
            mViews.put(viewId, view);
        }
        return (T) view;
    }

    /**
     *
     * @return
     */
    public View getConvertView() {
        return mConvertView;
    }


    /**
     *
     * @param viewId
     * @param str
     * @return
     */
    public ViewHolder setText(int viewId, String str) {
        TextView mTxt = getView(viewId);
        mTxt.setText(str);
        return this;
    }


    public ViewHolder setTextImageResource(int viewId,int resId){
        TextView mText = getView(viewId);
        mText.setBackgroundResource(resId);
        return this;
    }


    /**
     *
     * @param viewId
     * @param resId
     * @return
     */
    public ViewHolder setImageResource(int viewId, int resId) {
        ImageView mImg = getView(viewId);
        mImg.setImageResource(resId);

        return this;
    }


    public ViewHolder setImageResource(int viewId, int resId, int reqWidth, int reqJHeight) {
        ImageView mImg = getView(viewId);

/*        mImg.setImageBitmap(BitmapDecoder.decodeBitmapByResource(mContext.getResources(),
                resId, reqWidth, reqJHeight));*/

        return this;
    }


    /**
     *
     * @param viewId
     * @param bitmap
     * @return
     */

    public ViewHolder setImageBitmap(int viewId, Bitmap bitmap) {
        ImageView mImg = getView(viewId);
        mImg.setImageBitmap(bitmap);
        return this;
    }


    /**
     *
     * @param viewId
     * @param url
     * @return
     */

    public ViewHolder setImageURL(int viewId, final String url) {
        final ImageView mImg = getView(viewId);
        //�������ͨ����������ܼ���ͼƬ��ͨ��url��תΪBitmap������ImageView������
        //Bitmap bitmap = ImageLoader.getInstance.loading(url);
        //mImg.setImageBitmap(bitmap);

        //ImageLoaderSample loader = new ImageLoaderSample(mContext);
        //loader.DisplayImage(url,mImg);
/*
        ImageLoader loader = new ImageLoader(mContext);
        loader.display(mImg, url);*/

        return this;
    }

}
