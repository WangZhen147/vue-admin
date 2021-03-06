import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import ElementUI from "element-ui";
import utils from "./modules/utils";
// element-variables.scss里面已经引入了，所以这里可以不用
// import "element-ui/lib/theme-chalk/index.css";
import "./icons";
import "./router/permission";
import "./styles/element-variables.scss";
import "./styles/index.scss";

Vue.use(ElementUI);

Vue.config.productionTip = false;

// 添加一个自定义指令`v-copy`点击复制内容
Vue.directive("copy", {
    inserted(el, binding) {
        el.addEventListener("click", function () {
            utils.copyText(binding.value, function () {
                ElementUI.Message.success("复制成功");
            });
        });
    }
})

new Vue({
    router,
    render: h => h(App)
}).$mount("#app")
