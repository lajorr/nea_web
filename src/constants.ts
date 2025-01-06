import { Feature } from "./models/Feature";


export const adminFeatures: Feature[] = [
    {
        id: 1,
        name: "My Profile",
        navigateTo: "/profile",
        moreOptions: false,
        options: null
    },
    {
        id: 2,
        name: "Manage Branch",
        navigateTo: null,
        moreOptions: false,
        options: null
    },
    {
        id: 3,
        name: "Manage Payments",
        navigateTo: null,
        moreOptions: false,
        options: null
    },
    {
        id: 4,
        name: "Manage Consumer",
        navigateTo: null,
        moreOptions: false,
        options: null
    },
    {
        id: 5,
        name: "Manage Bills",
        navigateTo: null,
        moreOptions: false,
        options: null
    },
    {
        id: 6,
        name: "Search",
        navigateTo: null,
        moreOptions: false,
        options: null
    },
    {
        id: 7,
        name: "Reports",
        navigateTo: null,
        moreOptions: false,
        options: null
    },
    {
        id: 8,
        name: "Support Center",
        navigateTo: null,
        moreOptions: false,
        options: null
    },
    {
        id: 9,
        name: "No Light Contact",
        navigateTo: null,
        moreOptions: false,
        options: null
    },
]

export const customerFeatures: Feature[] = [
    {
        id: 1,
        name: "My Profile",
        navigateTo: '/profile',
        moreOptions: false,
        options: null
    },
    {
        id: 2,
        name: "My Previous Payments",
        navigateTo: null,
        moreOptions: false,
        options: null
    },
    {
        id: 3,
        name: "BY Bills",
        navigateTo: null,
        moreOptions: true,
        options: [{
            id: 4,
            name: "Current Bill",
            navigateTo: null,
            moreOptions: false,
            options: null
        },
        {
            id: 5,
            name: "Pending Bills",
            navigateTo: null,
            moreOptions: false,
            options: null
        },]
    },

    {
        id: 6,
        name: "Support Center",
        navigateTo: null,
        moreOptions: false,
        options: null
    },
    {
        id: 7,
        name: "No Light Contact",
        navigateTo: null,
        moreOptions: false,
        options: null
    },
]

