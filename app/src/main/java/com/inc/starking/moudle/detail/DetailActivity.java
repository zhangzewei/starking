package com.inc.starking.moudle.detail;


import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.design.widget.TabLayout;
import android.support.v4.app.Fragment;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;

import com.facebook.drawee.view.SimpleDraweeView;
import com.inc.starking.adapter.BanableSlidingViewPagerAdapter;
import com.inc.starking.base.BaseActivity;
import com.inc.starking.R;
import com.inc.starking.entry.GirlEntry;
import com.inc.starking.utils.Constant;
import com.inc.starking.widget.BanableSlidingViewPager;
import com.nostra13.universalimageloader.core.DisplayImageOptions;
import com.nostra13.universalimageloader.core.ImageLoader;
import com.nostra13.universalimageloader.core.assist.ImageSize;
import com.nostra13.universalimageloader.core.listener.SimpleImageLoadingListener;
import java.util.ArrayList;
import java.util.List;
import butterknife.Bind;
import butterknife.ButterKnife;


public class DetailActivity extends BaseActivity {


    public static final String FAVO_RESPONSE = "You Point a Great for Her";

    private GirlEntry mEntry = null;

    private Toolbar mToolbar = null;

    private DisplayImageOptions mOptions = null;

    private String[] mTitles = null;

    private List<Fragment> mFragments = null;

    @Bind(R.id.img_image_big)
    SimpleDraweeView mDrawee ;
    @Bind(R.id.view_pager)
    BanableSlidingViewPager mPager;
    @Bind(R.id.tab_layout)
    TabLayout mTab ;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_detail);
        ButterKnife.bind(this);
        readBundle();
        initAppBar();
        initViewPager();
    }

    private void initViewPager() {

        mFragments = new ArrayList<>();
        Fragment tab1 = new FirstTab();
        mFragments.add(tab1);
        Fragment tab2 = new SecondTab();
        mFragments.add(tab2);
        mTitles = getResources().getStringArray(R.array.title_array);
        mPager.setUnSlided(true);
        BanableSlidingViewPagerAdapter adapter = new BanableSlidingViewPagerAdapter(getSupportFragmentManager()
                ,mFragments,mTitles);
        mPager.setAdapter(adapter);
        mTab.setTabsFromPagerAdapter(adapter);
        mTab.setupWithViewPager(mPager);


    }

    private void readBundle() {
        Bundle b = getIntent().getExtras();
        if(b == null){
            return;
        }
        mEntry = (GirlEntry) b.getSerializable(Constant.STARKING_GIRL);
    }

    private void initAppBar(){
        mToolbar = (Toolbar) findViewById(R.id.toolbar);
        mToolbar.setTitle("");

        if(mEntry != null){
            //mToolbar.setTitle(mEntry.getName());
        }
        setSupportActionBar(mToolbar);
        mToolbar.setNavigationIcon(R.drawable.ic_back_24_24);
        mToolbar.setNavigationOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                finish();
            }
        });
        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, FAVO_RESPONSE, Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });

        if(mEntry != null){

            mOptions = new DisplayImageOptions.Builder()
                    .showImageOnLoading(R.drawable.ic_stub)
                    .showImageForEmptyUri(R.drawable.ic_empty)
                    .showImageOnFail(R.drawable.ic_error)
                    .cacheInMemory(true)
                    .cacheOnDisk(true)
                    .considerExifParams(true)
                    .bitmapConfig(Bitmap.Config.RGB_565)
                    .build();
            int rw = mDrawee.getMeasuredWidth();
            int rh = mDrawee.getMeasuredHeight();
            ImageSize targetSize = new ImageSize(rw, rh); // result Bitmap will be fit to this size
            ImageLoader imageLoader = ImageLoader.getInstance();
            imageLoader.loadImage(mEntry.getUrl(), targetSize, mOptions, new SimpleImageLoadingListener() {
                @Override
                public void onLoadingComplete(String imageUri, View view, Bitmap loadedImage) {
                        mDrawee.setBackground(new BitmapDrawable(getResources(),loadedImage));
                }
            });
        }
    }


    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu_detail, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();
        if (id == R.id.action_share) {
            return true;
        }
        return super.onOptionsItemSelected(item);
    }

    @Override
    protected String getTAG() {
        return this.getClass().getSimpleName();
    }
}
