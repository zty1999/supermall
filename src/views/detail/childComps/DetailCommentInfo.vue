<template>
    <div v-if="Object.keys(comments).length !== 0" class="comment-info">
        <div class="comment-header">
            <div class="header-title">用户评价</div>
            <div class="header-more">更多<i class="arrow-right"></i></div>
        </div>
        <div class="comment-user">
            <img :src="comments.user.avatar" alt="">
            <span>{{comments.user.uname}}</span>
        </div>
        <div class="comment-other">
            <span class="date">{{comments.created | dateFormat}}</span>
            <span class="style">{{comments.style}}</span>
        </div>
        <div class="comment-content">
            <p>{{comments.content}}</p>
        </div>
        <div class="comment-image">
            <img :src="item" v-for="(item,index) in comments.images" :key="index" alt="">
        </div>
    </div>
</template>
<script>
// let moment = require('moment');
import {dateFormat} from 'common/utils'
export default {
    name: 'DetailCommentInfo',
    props: {
        comments: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    filters: {
        // dateFormat(value) {
        // //     //1.将时间戳转成date对象
        //     const date = new Date(value * 1000)
        // //     //2.将date进行
        //     return dateFormat(dateStr,'yyyy-MM-dd') 
        // },
        dateFormat(value) {
            return dateFormat(value,'yyyy-mm-dd')
        }

         
    },
}
</script>
<style lang="scss" scoped>
.comment-info {
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
}
.comment-header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    padding: 5px;
    border-bottom: 1px solid rgba(0,0,0,.1);
}
.comment-user {
    padding: 10px 0 0;
    img {
        width: 42px;
        height: 42px;
        border-radius: 50%;

    }
    span {
        position: relative;
        top: -15px;
        margin-left: 10px;
        font-size: 15px;
        
    }
}
.comment-other {
    font-size: 12px;
    color: #999999;
    margin: 10px 0;
    .date {
        margin-right: 8px;
    }
}
.comment-content {
    padding: 0 5px 15px;
    p {
        font-size: 14px;
        color: #333;
        line-height: 1.5;
    }
}
.comment-image {
    margin-top: 10px;
    img {
        width: 70px;
        height: 70px;
        margin-right: 5px;
    }
}

</style>