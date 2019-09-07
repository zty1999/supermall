<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>    
        </div>
    </div>

</template>
<script>
import  BScroll from "better-scroll"

export default {
    name: 'BackTop',
    props: {
        probeType: {
            type: Number,
            default: 0,
        },
        pullUpLoad: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        // 1.创建BScroll对象
        this.scroll = new BScroll(this.$refs.wrapper, {
            // probeType: 3,
            //pullUpLoad: true,
            click: true,//控制div之类元素是否可点击
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })
        
        // 2.监听滚动的位置
        if (this.probeType === 2 || this.probeType === 3) {
            this.scroll.on('scroll', (position) => {
                // console.log(position);
                this.$emit('scroll', position)
            })
        }     
        // 3.监听scroll滚动到底部
        if (this.pullUpLoad) {
            this.scroll.on('pullingUp', () => {
                this.$emit('pullingUp')
            })
        }
        
        
    },
    methods: {
        scrollTo(x, y, time=300) {
            // this.scroll.scrollTo(x, y, time)
            this.scroll && this.scroll.scrollTo(x, y, time)
            //使用&&，当this.scroll为null时，后续不执行
        },
        
        refresh() {
            this.scroll && this.scroll.refresh()
            // console.log("--------");
        },
        finishPullUp() {//结束一次上拉加载更多
            this.scroll && this.scroll.finishPullUp()

        },
        getScrollY() {
            return this.scroll ? this.scroll.y : 0
            //有值取出值，没值返回0
        }
    }

}
</script>

