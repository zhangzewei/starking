package com.inc.starking.moudle.main;

import android.content.Context;
import android.content.Intent;
import android.os.AsyncTask;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;
import android.support.design.widget.FloatingActionButton;
import android.support.v4.widget.SwipeRefreshLayout;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.StaggeredGridLayoutManager;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.support.design.widget.NavigationView;
import android.support.v4.view.GravityCompat;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.ActionBarDrawerToggle;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.Toast;
import com.inc.starking.base.BaseActivity;
import com.inc.starking.R;
import com.inc.starking.adapter.RecycleViewAdapter;
import com.inc.starking.adapter.SpecItemDecoration;
import com.inc.starking.entry.GirlEntry;
import com.inc.starking.moudle.detail.DetailActivity;
import com.inc.starking.utils.ArrayUtils;
import com.inc.starking.utils.Constant;
import com.inc.starking.widget.TopBoardPopupWindow;
import com.inc.starking.widget.SwipeAndPullRefreshLayout;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.List;
import butterknife.Bind;
import butterknife.ButterKnife;

public class MainActivity extends BaseActivity
        implements NavigationView.OnNavigationItemSelectedListener,RecycleViewAdapter.OnItemClickListener {

    /**
     * 标题栏
     */
    @Bind(R.id.toolbar)
    Toolbar mToolbar ;


    /**
     * 瀑布流
     */
    @Bind(R.id.view_recycle_starking_girls)
    RecyclerView mRecycleView;

    /**
     * 上拉刷新和下拉加载跟多布局
     */
    @Bind(R.id.swipe_refresh_layout)
    SwipeAndPullRefreshLayout mSwiper;

    /**
     * 瀑布流布局适配器
     */
    private RecycleViewAdapter mAdapter = null;

    /**
     * 瀑布流的数据源，从服务器获取
     */
    private List<GirlEntry> mDatas = new ArrayList<>();

    /**
     * 更新上拉和下拉操作的UI
     */
    private Handler mHandler = new Handler(){

        @Override
        public void handleMessage(Message msg) {
            super.handleMessage(msg);

            if(mSwiper == null || mRecycleView == null){
                return;
            }

            if(msg.what == Constant.SWIPE_REFRESH){
                mDatas.clear();
                mAdapter.notifyDataSetChanged();
                DataLoader  loader = new DataLoader(Constant.LOAD_GIRLS_DATA_URL,MainActivity.this);
                loader.execute(Constant.LOAD_GIRLS_DATA_URL);
                mSwiper.setRefreshing(false);
            }else if(msg.what == Constant.DATA_FINISH) {
                mAdapter = new RecycleViewAdapter(mDatas,MainActivity.this);
                mRecycleView.setAdapter(mAdapter);
            }else if(msg.what == Constant.DATA_LOAD_MORE){

                mSwiper.isLoading(false);
            }

        }
    };

    @Override
    protected String getTAG() {
        return this.getClass().getSimpleName();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);
        //初始化actionbar
        initAppBar();
        //初始化抽屉布局
        initDrawer();
        //初始化瀑布流布局
        initRecycleView();
        //初始化上拉刷新和下拉加载更多的布局
        initRefreshView();

    }

    private void initRefreshView() {
        mSwiper.setNestedScrollingEnabled(true);
        mSwiper.setColorSchemeResources(R.color.colorIconFavo);
        mSwiper.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                mHandler.sendEmptyMessageDelayed(Constant.SWIPE_REFRESH,Constant.DELAY_MILLISECOND_TIME_3);
            }
        });
        mSwiper.setOnLoadListener(new SwipeAndPullRefreshLayout.OnLoadListener() {
            @Override
            public void onLoading(RecyclerView container) {
                Toast.makeText(MainActivity.this,"没有更多了",Toast.LENGTH_SHORT).show();
                mHandler.sendEmptyMessageDelayed(Constant.DATA_LOAD_MORE,Constant.DELAY_MILLISECOND_TIME_2);
            }
        });

    }

    private void initRecycleView() {
       mRecycleView.setLayoutManager(new StaggeredGridLayoutManager(2,
               StaggeredGridLayoutManager.VERTICAL));
        mRecycleView.setNestedScrollingEnabled(true);
        mAdapter = new RecycleViewAdapter(mDatas,this);
        mRecycleView.setAdapter(mAdapter);
        mSwiper.setRefreshing(true);
        mHandler.sendEmptyMessageDelayed(Constant.SWIPE_REFRESH,Constant.DELAY_MILLISECOND_TIME_3);
        mRecycleView.addItemDecoration(new SpecItemDecoration(SpecItemDecoration.DEFAULT_ITEM_PADDING));

    }


    @Override
    public void onItemClick(View item, int position) {
        Toast.makeText(MainActivity.this,position+" 号选手",Toast.LENGTH_SHORT).show();
        Intent i = new Intent(MainActivity.this,DetailActivity.class);
        Bundle b = new Bundle();
        b.putSerializable(Constant.STARKING_GIRL,mDatas.get(position));
        i.putExtras(b);
        startActivity(i);
    }

    private void initDrawer() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(
                this, drawer, mToolbar, R.string.navigation_drawer_open, R.string.navigation_drawer_close);
        drawer.setDrawerListener(toggle);
        toggle.syncState();
        NavigationView navigationView = (NavigationView) findViewById(R.id.nav_view);
        navigationView.setNavigationItemSelectedListener(this);
    }


    public void initAppBar(){
        mToolbar.setTitle("");
        setSupportActionBar(mToolbar);
        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {



            }
        });
    }

    @Override
    public void onBackPressed() {
        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        if (drawer.isDrawerOpen(GravityCompat.START)) {
            drawer.closeDrawer(GravityCompat.START);
        } else {
            super.onBackPressed();
        }
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        int id = item.getItemId();
        if (id == R.id.action_top) {

            List<GirlEntry> sortDatas =  ArrayUtils.sort(mDatas,"favo");

            if(sortDatas == null){
                return false;
            }

            TopBoardPopupWindow popup = new TopBoardPopupWindow(MainActivity.this,sortDatas);
            popup.showAtLocation(LayoutInflater.from(MainActivity.this)
                    .inflate(R.layout.activity_main,null), Gravity.CENTER,0,0);

            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @SuppressWarnings("StatementWithEmptyBody")
    @Override
    public boolean onNavigationItemSelected(MenuItem item) {
        int id = item.getItemId();

        if (id == R.id.nav_starking) {
            Intent i = new Intent(MainActivity.this,NavigationActivity.class);
            startActivity(i);
        } else if (id == R.id.nav_settings) {

        } else if (id == R.id.nav_share) {

        } else if (id == R.id.nav_send) {

        }

        DrawerLayout drawer = (DrawerLayout) findViewById(R.id.drawer_layout);
        drawer.closeDrawer(GravityCompat.START);
        return true;
    }



    class DataLoader extends AsyncTask<String,Void,List<GirlEntry>>{

        private String url = null;

        private Context mContext = null;

        public DataLoader(String url, Context mContext) {
            this.url = url;
            this.mContext = mContext;
        }

        @Override
        protected void onPreExecute() {
            super.onPreExecute();

        }

        @Override
        protected List<GirlEntry> doInBackground(String... params) {
            List<GirlEntry> datas = new ArrayList<>();

            url = params[0];

            if(url == null || url.equals("")){
                return datas;
            }

            InputStream  is = null;
            BufferedReader br = null;
            StringBuffer sb = new StringBuffer();
            String str ;
            try {

                is = mContext.getResources().openRawResource(R.raw.starking_girls_datas);
                br = new BufferedReader(new InputStreamReader(is));
                while((str = br.readLine()) != null){
                    sb.append(str);
                }
                JSONArray arr = new JSONArray(sb.toString().trim());
                for (int i = 0; i < arr.length(); i++) {
                    GirlEntry ge = new GirlEntry();
                        JSONObject temp = (JSONObject) arr.get(i);
                        ge.setId(temp.getString(Constant.GIRL_ID));
                        ge.setName(temp.getString(Constant.GIRL_NAME));
                        ge.setUrl(temp.getString(Constant.GIRL_URL));
                        ge.setFavo(temp.getInt(Constant.GIRL_FAVO));
                        datas.add(ge);
                }

            } catch (IOException e) {
                e.printStackTrace();
            } catch (JSONException e) {
                e.printStackTrace();
            }finally {

                try {
                    if (is != null){
                        is.close();
                    }

                    if(br != null){
                        br.close();
                    }

                } catch (IOException e) {
                    e.printStackTrace();
                }

            }

            return datas;
        }

        @Override
        protected void onPostExecute(List<GirlEntry> datas) {
            super.onPostExecute(datas);
            mDatas = datas;
            mHandler.sendEmptyMessageDelayed(Constant.DATA_FINISH,100);
        }
    }



}
