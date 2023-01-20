import {createRouter,createWebHashHistory} from 'vue-router';
import removtag from './components/removtag'
import calender from './components/calender';
import Slider from './components/Slider';
import Calculator from './components/calculator';
import UserCrud from './components/UserCrud';
import Tensorflow from './components/Tensorflow';

  const routes =[
    {path:'/removtag',component:removtag},
    {path:'/calender',component:calender},
    {path:'/Slider',component:Slider},
    {path:'/Calculator',component:Calculator},
    {path:'/usercrud',component:UserCrud},
    {path:'/Tensorflow',component:Tensorflow},
  ]; 


const router = createRouter({
    history:createWebHashHistory(),
    routes,
});
export default router;