<template>
    <div class="dashcard" :style="get_style" :class="get_class">
        <line-chart :chart-data="datacollection"></line-chart>
        <slot></slot>    
    </div>
</template>



<script>
import LineChart from './chart'

export default {
    name : "Dashcard",
    props: {
        classname : String,
        radius : String,
        shadow : String,
        variant : String,
        datacollection: Object
    },
    components:{
        LineChart
    },
    computed : {
         get_style: function() {

            let list_styles = '';
            let shadows = this.shadow;
            if(this.shadow == 'light')
            {
                shadows= '3px';
            }
            else if(this.shadow == 'heavy')
            {
                shadows = '6px';
            }

            list_styles += this.shadow ? `box-shadow: 0 0 ${shadows} #646464;`:'';
            list_styles += this.radius ? `border-radius:${this.radius};`:'';

            return list_styles;

        },
        get_class: function(){

            let list_class = '';
            
            list_class += this.variant ? `dashcard--${this.variant} `:'';
            list_class += this.classname ? `dashcard--${this.classname} `:'';

            return list_class;
        
        }
    }
}
</script>



<style lang="scss" scoped>
@import "../../assets/sass/imports/general";

canvas{
    color: white;
}
.dashcard{
    background-color: white;
    box-shadow: 0 0 2px #646464;
    padding: 10px;

    &--primary{
        background: $primary;
    }

    &--success {
        background: $success;
    }

    &--info {
        background: $info;
    }

     &--warning {
        background: $warning;
    }

    &--error {
        background: $error;
    }
}
</style>