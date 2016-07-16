package com.inc.starking.moudle.detail;

import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;
import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.MediaController;
import android.widget.VideoView;

import com.inc.starking.R;

/**
 * Created by Spec_Inc on 7/12/2016.
 */

public class ThirdTab extends Fragment {

    @Nullable
    @Override
    public View onCreateView(LayoutInflater inflater, @Nullable ViewGroup container, @Nullable Bundle savedInstanceState) {

         View v = inflater.inflate(R.layout.tab_third,null);

        ListView ls = (ListView)v.findViewById(R.id.list_view);

        String[] datas = new String[]{"阶段一","阶段二","阶段三","阶段四","阶段五"};
        ArrayAdapter<String> adapter = new ArrayAdapter<>(getActivity()
                ,android.R.layout.simple_list_item_1,datas);

        ls.setAdapter(adapter);


/*

        String url = "http://player.video.qiyi.com/a8e34cc6c" +
                "bf014a3b388c5e2c0a76ffe/0/195/v_19rrlijt88.swf-al" +
                "bumId=503199700-tvId=503199700-isPurchase=0-cnId=6";
        WebView wb = (WebView)v.findViewById(R.id.web_view);
        wb.setWebViewClient(new WebViewClient());
        wb.loadUrl("http://www.baidu.com");
*/

        return v;
    }
}
