<template>
    <div>
        <!--thumbnail-->
        <div class="row justify-content-center u-over-hidden">
            <div class="u-thumb-bg"></div>
            <div class="col-md-7 col-sm-9 mx-auto">
                <vueper-slides autoplay :slide-ratio="3 / 5">
                    <vueper-slide
                        v-for="(slide, i) in slides"
                        :key="i"
                        :title="slide.title"
                        :content="slide.content"
                        :image="slide.image"
                    />
                </vueper-slides>
                <!--<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
				  <ol class="carousel-indicators">
				    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				  </ol>
				  <div class="carousel-inner">
						   <div class="carousel-item active">
				      <img class="d-block w-100" src="./image/thumb-one.jpeg" alt="First slide">
				    </div>
				    <div class="carousel-item">
				      <img class="d-block w-100" src="./image/thumb-two.jpg" alt="Second slide">
				    </div>
				    <div class="carousel-item">
				      <img class="d-block w-100" src="./image/thumb-three.jpg" alt="Third slide">
				    </div> 
				  </div>
				  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
				    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
				    <span class="sr-only">Previous</span>
				  </a>
				  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
				    <span class="carousel-control-next-icon" aria-hidden="true"></span>
				    <span class="sr-only">Next</span>
				  </a>
				</div>-->
            </div>
        </div>
        <!-- product section -->
        <router-view></router-view>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    components: { VueperSlides, VueperSlide },
    data() {
        return {
            slides: [
                {
                    //   title: 'El Teide Volcano, Spain',
                    //   content: 'Photo by Max Rive',
                    image: require('../assets/image/thumb-one.jpg')
                },
                {
                    image: require('../assets/image/thumb-two.jpg')
                },
                {
                    image: require('../assets/image/thumb-three.jpg')
                }
            ]
        }
    }
}
</script>

<style>
/*-----------------*/
/*thumbnail
/*-----------------*/
* {
    position: relative;
    box-sizing: border-box;
}
.u-over-hidden {
    overflow: hidden;
}
.u-thumb-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url('../../src/assets/image/thumb-bg.jpg');
    background-size: cover;
    -webkit-background-size: cover;
    background-position: center;
    opacity: 0.9;
    filter: blur(2px);
}
/* .vueperslides__arrow svg {stroke-width:2}*/
.vueperslides__arrow {
    visibility: hidden;
}
</style>
