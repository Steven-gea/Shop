<template>
    <div class="col-md-4 mb-4" v-for="(item, index) in twenty" :key="index">
        <!--@click="foodClick()"
               :class="{ 'mactive' : item.isActive === true ? true : false }"-->
        <div class="card border-0 shadow">
            <div
                class="u-item-img"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
            >
                <!-- <img :src="item.imgSrc" class="u-item-img"> -->
                <router-link
                    class="u-item-cover"
                    :to="{
                        name: 'singleitem',
                        params: {
                            title: item.title,
                            price: item.price,
                            img: item.imageUrl,
                            category: item.category,
                            id: item.id,
                        },
                    }"
                >
                    <div class="u-item-btn">See More</div>
                </router-link>
            </div>
            <div class="card-body">
                <h6 class="card-title mt-2">
                    <router-link
                        class="text-dark font-weight-bold"
                        :to="{
                            name: 'singleitem',
                            params: {
                                title: item.title,
                                price: item.price,
                                img: item.imageUrl,
                                category: item.category,
                                id: item.id,
                            },
                        }"
                    >
                        {{ item.title }}
                    </router-link>
                </h6>
                <p class="card-text">{{ item.content }}</p>
                <div class="h6 text-right" v-if="item.price">
                    {{ $filters.currencyUSD(item.price) }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import { defineComponent } from "@vue/runtime-core";
// import axios from "axios";

export default {
    data() {
        return {
            // twenty: [],
              twenty: [
                 { imageUrl:require("../assets/img/world-map.e5d2493.jpg"),
                 title: 2 ,
                 price: 2000,
                 id:'kfhjciglgji',
            	 category:'二零'}]
        };
    },
    // mounted() {
    //     axios.get("http://localhost:1000/20").then((res) => {
    //         // http://localhost:3000/filtData?category=20
    //         this.twenty = res.data;
    //     });
    // },
};
</script>

<style></style>
