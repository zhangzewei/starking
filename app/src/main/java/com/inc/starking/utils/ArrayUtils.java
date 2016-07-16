package com.inc.starking.utils;

import com.inc.starking.entry.GirlEntry;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by Spec_Inc on 7/14/2016.
 */

public class ArrayUtils {

    /**
     * the private constructor
     */
    private ArrayUtils(){
        throw new UnsupportedOperationException("class cannot be instanitated");
    }

    public static  List<GirlEntry> sort(List<GirlEntry> srcArray, String keyword){


        if(srcArray == null || srcArray.size() <=0){
            return null;
        }

        Field[] fields =srcArray.get(0).getClass().getDeclaredFields();

        if(!container(fields,keyword)){
            return null;
        }


        try {
            Class<?> clazz = Class.forName("com.inc.starking.entry.GirlEntry");
            Object o = clazz.newInstance();
            String methodStr = "get"+captureName(keyword);
            System.out.println("-->>me="+methodStr);
            Method method = o.getClass().getMethod(keyword,null);

            System.out.println("-->>invoke="+method.invoke(o));


        } catch (NoSuchMethodException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (InstantiationException e) {
            e.printStackTrace();
        }

        int temp;

        for(int i = 0;i<srcArray.size();i++){

            for (int j = i+1;j<srcArray.size();j++){
                if(srcArray.get(i).getFavo() < srcArray.get(j).getFavo()){
                    temp = srcArray.get(i).getFavo();
                    srcArray.get(i).setFavo(srcArray.get(j).getFavo());
                    srcArray.get(j).setFavo(temp);
                }

            }

        }

        for(GirlEntry ge : srcArray){
            System.out.println("-->>"+ge.getFavo());
        }

        return srcArray;
    }


    public static String captureName(String name) {
        //      name = name.substring(0, 1).toUpperCase() + name.substring(1);
        //        return  name;
        char[] cs=name.toCharArray();
        cs[0]-=32;
        return String.valueOf(cs);

    }


    public static boolean container(Field[] fields,String keyword){
        for(Field f : fields ){
            if(f.getName().equals(keyword)){
                return true;
            }
        }

        return false;
    }



}
