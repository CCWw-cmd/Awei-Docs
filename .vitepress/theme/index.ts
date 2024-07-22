/*
 * @Author: cjw
 * @Date: 2024-07-10 09:27:50
 * @Description: 请填写简介
 * @LastEditTime: 2024-07-11 10:16:15
 * @LastEditors: cjw
 */

// .vitepress/theme/index.ts
import DefaultTheme from "vitepress/theme";
import mediumZoom from "medium-zoom";
import { onMounted, watch, nextTick } from "vue";
import { useRoute } from "vitepress";
import "./style/index.css";

export default {
    extends: DefaultTheme,

    setup() {
        const route = useRoute();
        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom(".main img", { background: "var(--vp-c-bg)" }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
    },
};