<template>
    <div class="common-layout">
        <el-container>
            <div class="background">
                <span class="mask"></span>
            </div>
            <el-header>
                <el-menu mode="horizontal" background-color="#191919" text-color="white"  style="width: 100%; height: 50px;" active-text-color="#ffd04b" >
                    <img src="../assets/images/sm_logo_white.png" style="margin-left: 50px;">
                    <div class="box1">
                        <el-menu-item index="1">预约Book</el-menu-item>
                        <el-menu-item index="2">猩点Stores</el-menu-item>
                        <el-menu-item index="3">课程Class</el-menu-item>
                        <el-menu-item index="4">超猩学院College</el-menu-item>
                        <el-menu-item index="5">关于我们About</el-menu-item>
                        <el-menu-item index="6"><a href="/login">登录</a></el-menu-item>
                    </div>
                </el-menu>
            </el-header>
            <el-main>

                <el-scrollbar>
                    <el-carousel :interval="10000" arrow="always" style="height: 800px;">
                        <el-carousel-item v-for="item in urls" :key="item">
                            <img :src="item" alt="" class="pass" >
                        </el-carousel-item>
                    </el-carousel>


                    <p class="scrollbar-demo-item">
                    <div class="cole">
                        <ul class="police">
                            <li>
                                <img src="../assets/images/kids2.jpg" alt="">
                                <span class="black">
                                    <div class="super">
                                        <p class="a1">YOGA</p>
                                        <p class="a1">&</p>
                                        <p class="a1">PILATES</p>
                                        <hr>
                                        <p class="a1">瑜伽和普拉提</p>
                                    </div>
                                </span>
                            </li>
                            <li>
                                <img src="../assets/images/performance2.jpg" alt="">
                                <span class="black">
                                    <div class="super">
                                        <p class="a1">SLIMMING</p>
                                        <p class="a1">&</p>
                                        <p class="a1">SHAPING</p>
                                        <hr>
                                        <p class="a1">瘦身塑形</p>
                                    </div>
                                </span>
                            </li>
                            <li>
                                <img src="../assets/images/regeneration2.jpg" alt="">
                                <span class="black">
                                    <div class="super">
                                        <p class="a1">CHILDREN</p>
                                        <p class="a1">POTENTIAL</p>
                                        <p class="a1">DEVEL OPMENT</p>
                                        <hr>
                                        <p class="a1">儿童潜能开发</p>
                                    </div>
                                </span>
                            </li>
                            <li>
                                <img src="../assets/images/slimming2.jpg" alt="">
                                <span class="black">
                                    <div class="super">
                                        <p class="a1">REGENERATION</p>
                                        <p class="a1">&</p>
                                        <p class="a1">GOOD</p>
                                        <hr>
                                        <p class="a1">亚健康改善</p>
                                    </div>
                                </span>
                            </li>
                            <li>
                                <img src="../assets/images/sub_health2.jpg" alt="">
                                <span class="black">
                                    <div class="super">
                                        <p class="a1">BOXING</p>
                                        <p class="a1">&</p>
                                        <p class="a1">DANCE</p>
                                        <hr>
                                        <p class="a1">拳击和舞蹈</p>
                                    </div>
                                </span>
                            </li>
                            <li>
                                <img src="../assets/images/yoga2.jpg" alt="">
                                <span class="black">
                                    <div class="super">
                                        <p class="a1">PERFORMANCE</p>
                                        <p class="a1">&</p>
                                        <p class="a1">ENHANCEMENT</p>
                                        <hr>
                                        <p class="a1">运动表现提升</p>
                                    </div>
                                </span>
                            </li>
                        </ul>
                    </div>
                    </p>
                    <p class="scrollbar-demo-item1"></p>

                </el-scrollbar>

            </el-main>
            <el-footer style="width: 100%; height: 200px; background: orange;">
                <div class="solo">
                    <ul class="solo1">
                        <li>
                            <a href="">关于我们 About US</a>
                            <br>
                            <a href="">常见问题 FAQ</a>
                            <br>
                            <a href="">媒体报道 PRESS</a>
                        </li>
                    </ul>
                </div>
                <div class="solo">
                    <ul class="solo2">
                        <li>
                            <a href="">加入我们 JOIN US</a>
                            <br>
                            <a href="">商务合作 BUSINESS COOPERATION</a>
                            <br>
                            <a href="">官方客服 TEL 400-900-9166</a>
                        </li>
                    </ul>
                </div>
                <div class="solo">
                    <img src="../assets/images/logo_black.png" alt="">
                </div>
            </el-footer>
        </el-container>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            urls: [
                'https://img0.baidu.com/it/u=3088476888,1853045653&fm=253&fmt=auto&app=120&f=JPEG?w=1231&h=800',
                'https://p7.itc.cn/images01/20200713/ae98ce9ab5264e609799cb9c65184af1.jpeg',
                'https://big.justeasy.cn/effect/202101/20210127111103_6010d9c790312.png',
                '../src/assets/images/图片2.png',
                '../src/assets/images/图片3.png',

            ]
        }
    },
}







</script>

<style>
.template {
    padding: 0;
    margin: 0;
}
a{
    text-decoration: none;
    color: white;
}

a:hover{
    color:rgb(248, 20, 134)
}
.background {
    background: url(https://p1.meituan.net/shaitu/c15c70655e89b7a426455650007126633692164.jpg);
    height: 100%;
    width: 100%;
    background-size: 100% 100%;
    position: fixed;
    top: 0;
    left: 0;
}

.mask {
    background: rgba(37, 37, 37, .7);
    width: 100%;
    height: 100%;
    display: block;
    background-size: 100% 100%;
}

.el-header {
    z-index: 1;
    position: static;
    top: 0;
    left: 0;

}

.el-menu {
    text-align: right;
    position: relative;
}


.box1 {
    display: flex;
    position: absolute;
    right: 0;
}

.scrollbar-demo-item {
    display: block;
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: url(https://p2.itc.cn/q_70/images03/20210904/7d1dbbd7f6bc41b4aabc6c6ad8cbd9e6.jpeg);
    background-size: 100% 100%;
    top: 0;
    left: 0;
    text-align: center;
    position: relative;
}

.pass {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;

}

.el-carousel__container {
    height: 100% !important;
}


.cole {
    width: 1300px;
    /* height: 1; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


ul {
    list-style: none;
}

.police li {
    float: left;
    margin-right: 6px;
    position: relative;
}

.black {
    position: absolute;
    width: 414px;
    height: 320px;
    background: black;
    top: 0;
    left: 0;
    transition: all .1s;
    opacity: 0;
}

.black:hover {
    opacity: .8;
}

hr {
    margin-top: 15px;
    width: 15px;
    margin-left: 200px;
}

.black p {
    z-index: 100;
    margin-top: 15px;
}

li:hover .a1 {
    color: white;
    size: 50px;

}
.super{
    margin-top: 80px;
}
.el-footer{
    z-index: 1;
    position: relative;
    
}
.solo{
    width: 100%px;
    background: palegreen;
    top: 0;
    left: 50%;
}
.solo li{
    line-height: 65px;
}
.solo a{
    font-size: 18px;
}
.solo1{
    width: 200px;
    height: 100%;
    /* text-align: center; */
    /* background-color: rgb(207, 10, 210); */
    float: left;
    margin-left: 80px;
    
}
.solo2{
    width: 300px;
    height: 100%;
    /* text-align: center; */
    /* background-color: rgb(207, 10, 210); */
    float: left;
    margin-left: 80px;
}
.solo img{
    width: 40%;
    height: 40%;
    float: right;
    margin-top: 60px;
}

</style>