package com.inc.starking.base;

import android.os.Build;
import android.os.Bundle;
import android.os.PersistableBundle;
import android.support.v7.app.AppCompatActivity;
import android.view.Window;
import android.view.WindowManager;
import com.inc.starking.utils.LogUtils;

import butterknife.ButterKnife;

/**
 * Created by Spec_Inc on 7/11/2016.
 */

public abstract class BaseActivity extends AppCompatActivity {

    protected String TAG = getTAG();


    protected abstract String getTAG();

    protected boolean isTranslucent = true;

    @Override
    public void onCreate(Bundle savedInstanceState, PersistableBundle persistentState) {
        super.onCreate(savedInstanceState, persistentState);

        setStatusBar();
    }


    protected void setStatusBar(){
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            if (isTranslucentStatusBar()) {
                Window window = getWindow();
                // Translucent status bar
                window.setFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS,
                        WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
            }
            
        }
    }

    protected boolean isTranslucentStatusBar() {
        return isTranslucent;
    }


    @Override
    protected void onDestroy() {
        super.onDestroy();
        LogUtils.v(TAG,"onDestroy");
    }

    @Override
    protected void onStart() {
        super.onStart();
        LogUtils.v(TAG,"onStart");
    }

    @Override
    protected void onResume() {
        super.onResume();
        LogUtils.v(TAG,"onResume");
    }

    @Override
    protected void onStop() {
        super.onStop();
        LogUtils.v(TAG,"onStop");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        LogUtils.v(TAG,"onRestart");

    }

    @Override
    protected void onPause() {
        super.onPause();
        LogUtils.v(TAG,"onPause");
    }

}
