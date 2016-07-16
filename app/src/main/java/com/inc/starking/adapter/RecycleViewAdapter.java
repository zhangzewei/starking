package com.inc.starking.adapter;

import android.graphics.Bitmap;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.inc.starking.R;
import com.inc.starking.entry.GirlEntry;
import com.nostra13.universalimageloader.core.DisplayImageOptions;
import com.nostra13.universalimageloader.core.ImageLoader;
import com.nostra13.universalimageloader.core.assist.FailReason;
import com.nostra13.universalimageloader.core.assist.ImageSize;
import com.nostra13.universalimageloader.core.listener.ImageLoadingProgressListener;
import com.nostra13.universalimageloader.core.listener.SimpleImageLoadingListener;

import java.util.List;

/**
 * Created by Spec_Inc on 7/7/2016.
 */

public class RecycleViewAdapter extends RecyclerView.Adapter<RecycleViewAdapter.ViewHolder>  {

    private  List<GirlEntry> mDatas = null;

    private OnItemClickListener mListener = null;

    private DisplayImageOptions mOptions = null;

    public RecycleViewAdapter(List<GirlEntry> datas, OnItemClickListener listener) {
        this.mDatas = datas;
        this.mListener = listener;

        mOptions = new DisplayImageOptions.Builder()
                .showImageOnLoading(R.drawable.ic_stub)
                .showImageForEmptyUri(R.drawable.ic_empty)
                .showImageOnFail(R.drawable.ic_error)
                .cacheInMemory(true)
                .cacheOnDisk(true)
                .considerExifParams(true)
                .bitmapConfig(Bitmap.Config.RGB_565)
                .build();

    }

    @Override
    public ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View v = LayoutInflater.from(parent.getContext())
                .inflate(R.layout.recycle_view_item,null);
        return new ViewHolder(v);
    }

    @Override
    public void onBindViewHolder(final ViewHolder holder, final int position) {

        ImageLoader imageLoader = ImageLoader.getInstance(); // Get singleton instance

        String url = "http://img2.imgtn.bdimg.com/it/u=1293561118,2909352322&fm=21&gp=0.jpg";


        ImageLoader.getInstance()
                .displayImage(mDatas.get(position).getUrl(), holder.photo, mOptions, new SimpleImageLoadingListener() {
                    @Override
                    public void onLoadingStarted(String imageUri, View view) {
                    }

                    @Override
                    public void onLoadingFailed(String imageUri, View view, FailReason failReason) {

                    }

                    @Override
                    public void onLoadingComplete(String imageUri, View view, Bitmap loadedImage) {

                    }
                }, new ImageLoadingProgressListener() {
                    @Override
                    public void onProgressUpdate(String imageUri, View view, int current, int total) {

                    }
                });



/*        ImageSize targetSize = new ImageSize(holder.photo.getMeasuredWidth(),
                holder.photo.getMeasuredHeight()); // result Bitmap will be fit to this size
        imageLoader.loadImage(url, targetSize, mOptions, new SimpleImageLoadingListener() {
            @Override
            public void onLoadingComplete(String imageUri, View view, Bitmap loadedImage) {
                System.out.println("-->>pos="+position);
                holder.photo.setImageBitmap(loadedImage);
            }
        });*/

        holder.title.setText(mDatas.get(position).getName());
        holder.favo.setText(mDatas.get(position).getFavo()+"");
    }

    @Override
    public int getItemCount() {
        return mDatas.size();
    }


    public interface OnItemClickListener{

        void onItemClick(View item, int position);
    }


    public class ViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener{

        public ImageView photo = null;
        public TextView title = null;
        public TextView favo = null;


        public ViewHolder(View itemView) {
            super(itemView);

            photo = (ImageView) itemView.findViewById(R.id.recycle_view_item_photo);
            title = (TextView) itemView.findViewById(R.id.recycle_view_item_title);
            favo = (TextView) itemView.findViewById(R.id.recycle_view_item_favo);
            itemView.setOnClickListener(this);
        }

        @Override
        public void onClick(View v) {
            mListener.onItemClick(v,this.getLayoutPosition());
        }
    }

}
