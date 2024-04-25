export const API_KEY = 'AIzaSyAHrkWpbSimp8LVmRij4ywF6IpGR87KpdA';

export const value_converter = (val) => {
    if(val>=1000 & val<1000000){
       let value = `${Math.round(val/1000)}K`
       return value;
    } else if(val>=1000000 && val<1000000000){
        let value = `${Math.round(val/1000000)}M`
        return value;
    } else if(val>= 1000000000){
        let value = `${(val/1000000000)}B views`;
        return value;
    }else{
        return val;
    }
}