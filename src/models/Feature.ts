export interface Feature {
    id: number;
    name: string;
    navigateTo: string | null;
    moreOptions: boolean | null;
    options: Feature[] | null;
}