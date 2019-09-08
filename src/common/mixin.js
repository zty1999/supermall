//混入相关    组件之间代码复用  组件methods：函数内部的代码不能单独抽取，因为methods中只会合并函数，不能合并函数内部代码，除非把代码抽离函数，创建一个新的函数，在原函数中调用
import { debounce } from './utils'
//因为函数中使用了debounce方法，所以要引入封装的debounce方法
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null,
        }
    },
    mounted() {
        // 1.图片加载完成的事件监听 - 事件总线debounce方法
        //防抖函数  防止函数频繁调用
        const refresh = debounce(this.$refs.scroll.refresh, 200);
        //对监听的事件进行保存
        // this.itemImgListener = () => {
        //     refresh()//刷新scroll计算到的高度    重新计算图片加载完成后的高度  
        // };
        
        document.addEventListener("click", this.itemImgListener = () => {refresh()}, true);
        this.$bus.$on('itemImageLoad', this.itemImgListener)
    }
};
//例：组件中引入
// import { itemListenerMixin }  from 'common/mixin'
// mixins: [itemListenerMixin],

export const backTopMixin = {
    components: {
        BackTop
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        BackTop() {
            this.$refs.scroll.scrollTo(0,0,500)//500毫秒回到位置0，0
        },
        listenShowBackTop(position) {
            this.isShowBackTop = (-position.y) > 1000//y轴坐标值为负数，所以使用-position            
        }
    }
}
