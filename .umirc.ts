import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout:{},
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/user', component: '@/pages/user',
  //     routes:[
  //       {path: '/user/list', component: '@/pages/user/list',redirect:'/user/admin',},
  //       {path: '/user/admin', component: '@/pages/user/admin'}
  //     ] },
  // ],
});

