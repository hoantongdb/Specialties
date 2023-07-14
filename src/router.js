import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import { ROUTERS } from "./utils/router";
import MasterLayout from "./pages/theme/masterLayout";
import ProfilePage from "./pages/profilePage";
import ContactPage from "pages/contactPage";
import ProductPage from "pages/productPage";
import ShopPage from "pages/shopPage";


//import MasterLayout from "./pages//theme/masterLayout";
<link rel="stylesheet" type="text/css"
        href="https://fonts.googleapis.com/css?family=Poppins"/>


const renderUserRouter = () => {
    const userRouters = [
        {
            path: ROUTERS.USER.HOME,
            component: < HomePage />,
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage/>,
        },
        {
            path: ROUTERS.USER2.CONTACT,
            component: <ContactPage/>,
        },
        {
            path: ROUTERS.USER3.CRODUCT,
            component: <ProductPage/>,
        },
        {
            path: ROUTERS.USER4.SHOP,
            component: <ShopPage/>,
        },
      
   
   
    ];

    return (
        <MasterLayout>
            <Routes>
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}
            </Routes>
        </MasterLayout>
    )

};
const RouterCustom = () => {
    return renderUserRouter();
};

export default RouterCustom;

