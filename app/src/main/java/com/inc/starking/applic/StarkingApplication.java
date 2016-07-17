package com.inc.starking.applic;

import android.app.Application;
import android.content.Context;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.inc.starking.utils.ImageLoaderUtils;
import com.nostra13.universalimageloader.cache.disc.naming.Md5FileNameGenerator;
import com.nostra13.universalimageloader.core.ImageLoader;
import com.nostra13.universalimageloader.core.ImageLoaderConfiguration;
import com.nostra13.universalimageloader.core.assist.QueueProcessingType;

import butterknife.ButterKnife;

/**
 * Created by Spec_Inc on 7/8/2016.
 */

public class StarkingApplication extends Application{
    @Override
    public void onCreate() {
        super.onCreate();
        Fresco.initialize(this);
        ImageLoaderUtils.initImageLoader(getApplicationContext());
    }




}

