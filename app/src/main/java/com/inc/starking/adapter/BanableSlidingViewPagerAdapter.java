package com.inc.starking.adapter;

import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentStatePagerAdapter;

import java.util.List;

/**
 * Created by Spec_Inc on 7/12/2016.
 */

public class BanableSlidingViewPagerAdapter extends FragmentStatePagerAdapter {

    private List<Fragment> mViewContaier = null;
    private String[] mTitleContainer = null;

    public BanableSlidingViewPagerAdapter(FragmentManager fm,List<Fragment> views,String[] titls) {
        super(fm);
        this.mTitleContainer = titls;
        this.mViewContaier = views;

    }



    @Override
    public Fragment getItem(int position) {
        return mViewContaier.get(position);
    }

    @Override
    public int getCount() {
        return mViewContaier.size();
    }

    @Override
    public CharSequence getPageTitle(int position) {
        if(mTitleContainer == null){
            return null;
        }
        return mTitleContainer[position];
    }
}
