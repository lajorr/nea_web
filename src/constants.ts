import { Feature } from "./types/Feature";


export const adminFeatures: Feature[] = [
    {
        id: 1,
        name: "Generate bill",
        navigateTo: "/admin/manage_bills",
        moreOptions: false,
        options: null
    },
    {
        id: 2,
        name: "Add Branch",
        navigateTo: "/admin/manage_branch",
        moreOptions: false,
        options: null
    },
    {
        id: 3,
        name: "Add Payment Option",
        navigateTo: "/admin/add_payment_option",
        moreOptions: false,
        options: null
    },
    {
        id: 4,
        name: "Add Demand Type",
        navigateTo: "/admin/add_demand_type",
        moreOptions: false,
        options: null
    },
    {
        id: 5,
        name: "Add Rate",
        navigateTo: "/admin/add_rate",
        moreOptions: false,
        options: null
    },

]

export const customerFeatures: Feature[] = [
    {
        id: 1,
        name: "My Bills",
        navigateTo: '/my_bills',
        moreOptions: false,
        options: null
    },
    {
        id: 2,
        name: "My Payment History",
        navigateTo: null,
        moreOptions: false,
        options: null
    },
    {
        id: 3,
        name: "Support Center",
        navigateTo: "/support",
        moreOptions: false,
        options: null
    },
]

