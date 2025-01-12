export interface LinkProps {
    active?: boolean;
    label: string;
    url?: string;
    disabled?: boolean;
    key: number;
    href?: string;
    dangerouslySetInnerHTML?: { __html: string };
}

export type category = {
    backgroundColor: string,
    color: string,
    title: string,
}

export type user = {
    name: number,
    image: string,
}

