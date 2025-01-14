import Category from '@/Components/Category';
import { Config } from 'ziggy-js';

export interface Post {
    id?: number;
    title: string;
    body: string;
    slug: string;
    categories: Category[],
    state: string;
    publishedAt: string;
}

export type CategoryT = {
    id: number,
    title: string,
    text_color: string,
    bg_color: string,
    slug: string,
}

export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    ziggy: Config & { location: string };
};
