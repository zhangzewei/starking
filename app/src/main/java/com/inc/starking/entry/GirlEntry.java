package com.inc.starking.entry;

import java.io.Serializable;

/**
 * Created by Spec_Inc on 7/7/2016.
 */

@SuppressWarnings("ALL")
public class GirlEntry implements Serializable {

    private String id;
    private String name ;
    private String url;
    private int favo;


    public GirlEntry(){}

    public GirlEntry(String name, String id, String url, int favo) {
        this.name = name;
        this.id = id;
        this.url = url;
        this.favo = favo;
    }

    public int getFavo() {
        return favo;
    }

    public void setFavo(int favo) {
        this.favo = favo;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "GirlEntry{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", url='" + url + '\'' +
                ", favo=" + favo +
                '}';
    }
}
