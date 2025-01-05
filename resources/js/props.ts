export interface LinkProps {
    active?: boolean;
    label: string;
    url?: string;
    disabled?: boolean;
    key: number;
    href?: string;
    dangerouslySetInnerHTML?: { __html: string };
}

