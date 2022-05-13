<template>
    <!-- product list -->
    <div class="container">
        <!-- <loading v-model:active="isLoading"/> -->
        <div class="row justify-content-center">
            <div class="col-12">
                <!-- quote -->
                <div class="quote text-center my-4">
                    <i class="fas fa-quote-left mb-3 mb-md-0"></i>
                    <span>......</span>
                </div>
                <!-- category bar -->
                <ul class="nav nav-tabs w-100">
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            :class="{ active: selected == '' }"
                            @click.prevent="
                                selected = '';
                                getProducts(1);
                            "
                            >全部商品</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            :class="{ active: selected == '一九' }"
                            @click.prevent="
                                selected = '一九';
                                getProducts('all');
                            "
                            >一九系列</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            :class="{ active: selected == '二零' }"
                            @click.prevent="
                                selected = '二零';
                                getProducts('all');
                            "
                            >二零系列</a
                        >
                    </li>
                    <li class="nav-item">
                        <a
                            class="nav-link"
                            href="#"
                            :class="{ active: selected == '二一' }"
                            @click.prevent="
                                selected = '二一';
                                getProducts('all');
                            "
                            >二一系列</a
                        >
                    </li>
                </ul>
                <!-- products -->
                <div class="row mt-4" v-if="selected == ''">
                    <Data />
                    <!--:filtData="filtData" @dataClick="dataClick"-->
                    <!-- <div class="col-md-4 mb-4" v-for="(item,index) in filtData" :key="index"
			   @click="dataClick()"
               :class="{ 'mactive' : item.isActive === true ? true : false }">
		        <div class="card border-0 shadow">
		          <div class="u-item-img" :style="{ backgroundImage: `url(${item.imageUrl})` }"
>
					  <img :src="item.imgSrc" class="u-item-img">
		          	<router-link class="u-item-cover" :to="`/product/${item.id}`">
		          			<div class="u-item-btn">See More</div>
		          	</router-link>
		          </div>
		          <div class="card-body">
		            <h6 class="card-title mt-2">
		            	<router-link class="text-dark font-weight-bold" :to="`/product/${item.id}`">
			            	{{ item.title }}
			            </router-link>
		            </h6>
		            <p class="card-text">{{ item.content }}</p>
		            <div class="h6 text-right" v-if="item.price">{{ $filters.currencyUSD(item.price) }}</div>
		          </div>
		        </div>
		      </div> -->
                </div>
                <div class="row mt-4" v-if="selected == '一九'">
                    <Nineteen />
                </div>
                <!--:young="young" @youngClick="youngClick"-->
                <div class="row mt-4" v-if="selected == '二零'">
                    <Twenty />
                </div>
                <!--:food="food" @foodClick="foodClick"-->
                <div class="row mt-4" v-if="selected == '二一'">
                    <Twenty-one />
                </div>
                <!--:car="car" @carClick="carClick"-->
                <!-- pagination -->
                <nav aria-label="Page navigation example" v-if="selected == ''">
                    <ul class="pagination justify-content-center">
                        <!-- prev page icon -->
                        <li
                            class="page-item"
                            :class="{ disabled: !pagination.has_pre }"
                            v-if="!allPage"
                        >
                            <a
                                class="page-link"
                                href="#"
                                aria-label="Previous"
                                @click.prevent="
                                    getProducts(pagination.current_page - 1)
                                "
                            >
                                <span aria-hidden="true">&laquo;</span>
                                <span class="sr-only">Previous</span>
                            </a>
                        </li>
                        <!-- all pages icon -->
                        <li
                            class="page-item"
                            v-for="page in pagination.total_pages"
                            :key="page"
                            :class="{ active: page == pagination.current_page }"
                        >
                            <a
                                class="page-link"
                                href="#"
                                @click.prevent="getProducts(page)"
                                >{{ page }}</a
                            >
                        </li>
                        <!-- next page icon -->
                        <li
                            class="page-item"
                            :class="{ disabled: !pagination.has_next }"
                            v-if="!allPage"
                        >
                            <a
                                class="page-link"
                                href="#"
                                aria-label="Next"
                                @click.prevent="
                                    getProducts(pagination.current_page + 1)
                                "
                            >
                                <span aria-hidden="true">&raquo;</span>
                                <span class="sr-only">Next</span>
                            </a>
                        </li>
                        <!-- see all -->
                        <li class="page-item">
                            <a
                                class="page-link"
                                href="#"
                                @click.prevent="getProducts('all')"
                                v-if="!allPage"
                                >See All</a
                            >
                        </li>
                        <li class="page-item">
                            <a
                                class="page-link"
                                href="#"
                                @click.prevent="getProducts(1)"
                                v-if="allPage"
                                >Back to pages</a
                            >
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
// import $ from 'jquery';
// import { defineComponent } from "@vue/runtime-core";
export default {
    // name:'Data' ,
    // props: {
    //      filtData: {
    // 		 type: Array,
    // 		 required: true,
    // 		 default() {
    // 			 return[
    // 				 { imageUrl:require("../assets/img/thumb-bg.ed62383.jpg"),
    // 		  title: 1 ,
    // 		  price: 1000,
    // 		  id:'zjdfbczshj'},
    //           { imageUrl:require("../assets/img/world-map.e5d2493.jpg"),
    // 		  title: 2 ,
    // 		  price: 2000,
    // 		  id:'kfhjciglgji'},
    // 	      { imageUrl:require("../assets/img/yellow-wall.a9d1bc5.jpg"),
    // 		  title: 3 ,
    // 		  price: 3000,
    // 		  id:'xuvuxidfbszi'}
    // 			 ]
    // 		 }

    // 	 }
    // },
    // Setup(props, context) {
    // 	const filtData = props.filtData
    // 	function dataClick (dataName) {
    //         context.emit('dataClick', { dataName })
    // 	}
    // 	return{
    // 		filtData,
    //         dataClick
    // 	}
    // },
    props: {},
    Setup() {},
    data() {
        return {
            isLoading: true,
            products: [],
            selected: '',
            pagination: {},
            allPage: false
            // 	filtData : [
            // 	  { imageUrl:require("../assets/img/thumb-bg.ed62383.jpg"),
            // 	  title: 1 ,
            // 	  price: 1000,
            // 	  id:'zjdfbczshj'},
            //       { imageUrl:require("../assets/img/world-map.e5d2493.jpg"),
            // 	  title: 2 ,
            // 	  price: 2000,
            // 	  id:'kfhjciglgji'},
            //       { imageUrl:require("../assets/img/yellow-wall.a9d1bc5.jpg"),
            // 	  title: 3 ,
            // 	  price: 3000,
            // 	  id:'xuvuxidfbszi'}
            // ],
            //   young : [{ imageUrl:require("../assets/img/thumb-bg.ed62383.jpg"),
            //   title: 1 ,
            //   price: 1000,},],
            //   food : [{ imageUrl:require("../assets/img/world-map.e5d2493.jpg"),
            //   title: 2 ,
            //   price: 2000,},],
            //   car : [{ imageUrl:require("../assets/img/yellow-wall.a9d1bc5.jpg"),
            //   title: 3 ,
            //   price: 3000,},]
        };
    },
    methods: {
        getProducts(/*page = 1*/) {
            const vm = this;
            //   let api = `${process.env.API_PATH}/api/${process.env.CUSTOM_PATH}/product/}`;
            //   if (page == 'all') {
            // 			api += `/all`;
            // 			vm.allPage = true;
            // 		} else {
            // 			api += `?page=${page}`;
            // 			vm.allPage = false;
            // 		}
            vm.isLoading = true;
            vm.isLoading = true;
            setTimeout(() => {
                vm.isLoading = false;
            }, 1000);
            //   this.$http.get(api).then((response) => {
            //     vm.products = response.data.products.filter(function(item){
            //     	return item.is_enabled == 1
            //     });
            //     vm.isLoading = false;
            //     console.log(response.data);
            //     if (page !== 'all') {
            //     	vm.pagination = response.data.pagination
            //     } else {
            //     	vm.products = vm.products.reverse()
            //     }
            //   });
        }
    },
    computed: {
        // filtData() {
        // 	var vm = this;
        // 	if (vm.selected==''){
        // 		return vm.products;
        // 	} else {
        // 		return vm.products.filter(function(item){
        // 			return item.category == vm.selected;
        // 		})
        // 	}
        // }
    },
    mounted() {
        this.getProducts();

        setTimeout(() => {
            this.isLoading = false;
        }, 3000);
    }
};
</script>

<style>
* {
    position: relative;
    box-sizing: border-box;
}
/*-----------------*/
/*quote
/*-----------------*/
.quote {
    font-family: 'Oxygen Mono', monospace;
    line-height: 30px;
}
.quote span {
    display: inline-block;
}
.fa-quote-left {
    color: #c3c0c0;
    font-size: 60px;
    margin-right: 20px;
}
/*-----------------*/
/*shop
/*-----------------*/
.u-item-img {
    height: 180px;
    background-size: cover;
    background-position: center;
}
.u-item-cover {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s;
}
.u-item-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 5px 10px;
    border: 1px solid;
    color: #fff;
    text-decoration: none;
}
.u-item-img:hover .u-item-cover {
    visibility: visible;
    opacity: 1;
}
.u-item-img:hover .u-item-btn {
    color: #fff;
    text-decoration: none;
}
</style>
