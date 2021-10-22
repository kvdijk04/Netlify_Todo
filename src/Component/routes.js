import { About } from "./About";
import { TodoApp } from "./TODOAPP";
import { Home } from "./Home";
export const routes = [
    // {
    //     path: "/",
    //     // component: NotFound,
    //     label: "Home"
    // },
    {
        path: "/about",
        component: About,
        label: "About"
    },
    {
        path: "/To-Do-App",
        component: TodoApp,
        label: "To Do App" 
    },
    {
        path:"/Home",
        component:Home,
        label:"Home"
    }
];