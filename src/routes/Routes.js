import AdminMasterLayout from "../components/admin/layouts/AdminMasterLayout"
import AddBook from "../components/admin/pages/book/AddBook"
import ListBook from "../components/admin/pages/book/ListBook"
import UpdateBook from "../components/admin/pages/book/UpdateBook"
import AddCategory from "../components/admin/pages/category/AddCategory"
import ListCategory from "../components/admin/pages/category/ListCategory"
import UpdateCategory from "../components/admin/pages/category/UpdateCategory"
import HomeAdmin from "../components/admin/pages/home/HomeAdmin"
import BookByCategory from "../components/user/pages/category/BookByCategory"
import Details from "../components/user/pages/details/Details"
import Home from "../components/user/pages/home/Home"
import Shop from "../components/user/pages/shop/Shop"
import UserMasterLayout from './../components/user/layouts/UserMasterLayout';


export const publicRoutes = [
    {
        path: "/",
        element: <UserMasterLayout child={<Home />} />
    },
    {
        path: "/shop",
        element: <UserMasterLayout child={<Shop />} />
    },
    {
        path: "/category/:id",
        element: <UserMasterLayout child={<BookByCategory />} />
    },
    {
        path: "/details/:id",
        element: <UserMasterLayout child={<Details />} />
    }
]

export const clientRoutes = [
    {
        path: "/",
        element: <UserMasterLayout child={<Home />} />
    },
    {
        path: "/shop",
        element: <UserMasterLayout child={<Shop />} />
    },
    {
        path: "/category/:id",
        element: <UserMasterLayout child={<BookByCategory />} />
    },
    {
        path: "/details/:id",
        element: <UserMasterLayout child={<Details />} />
    }
]

export const adminRoutes = [
    {
        path: "/",
        element: <AdminMasterLayout child={<HomeAdmin />} />
    },
    {
        path: "/category",
        element: <AdminMasterLayout child={<ListCategory />} />
    },
    {
        path: "/category/add",
        element: <AdminMasterLayout child={<AddCategory />} />
    },
    {
        path: "/category/update/:id",
        element: <AdminMasterLayout child={<UpdateCategory />} />
    },
    {
        path: "/book",
        element: <AdminMasterLayout child={<ListBook />} />
    },
    {
        path: "/book/add",
        element: <AdminMasterLayout child={<AddBook />} />
    },
    {
        path: "/book/update/:id",
        element: <AdminMasterLayout child={<UpdateBook />} />
    },
]