<template>
    <div class="col-md-4 mb-4" v-for="(item, index) in nineteen" :key="index">
        <!--@click="youngClick()"
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
            // nineteen: [],
              nineteen: [
                 { imageUrl:require("../assets/img/thumb-bg.ed62383.jpg"),
                 title: 1 ,
                 price: 1000,
                 id:'zjdfbczshj',
            	 category:'一九'}]
        };
    },
    // mounted() {
    //     axios.get("http://localhost:1000/19").then((res) => {
    //         // http://localhost:3000/filtData?category=19
    //         this.nineteen = res.data;
    //     });
    // },
};
</script>

<style></style>
