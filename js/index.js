/**
 * Created by tangtang on 17/4/8.
 */
window.onload = function (){
    //获取视口的可见宽度
    var viewportWidth = document.documentElement.clientWidth;
    //获取盒子的宽度
    var banner = document.getElementById("banner");
    var bannerWidth = banner.offsetWidth;

    var product = document.getElementById("product");
    var productWidth = product.offsetWidth;

    var support = document.getElementById("support");
    var supportWidth = support.offsetWidth;

    var footer = document.getElementById("footer");
    var footerWidth = footer.offsetWidth;

    Move();


    window.onresize = function () {
        Move();
    }

    function Move(){
        console.log(viewportWidth);
        viewportWidth = document.documentElement.clientWidth;
        if (viewportWidth < 1000) {
            return;
        }
        banner.style.marginLeft = -(bannerWidth - viewportWidth) / 2 + "px";
        product.style.marginLeft = -(productWidth - viewportWidth) / 2 + "px";
        support.style.marginLeft = -(supportWidth - viewportWidth) / 2 + "px";
        footer.style.marginLeft = -(footerWidth - viewportWidth) / 2 + "px";
    }

}