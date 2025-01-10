import { create } from 'zustand';

type ThemeStore = {
    isDark: boolean;
    onDark: () => void;
    onLight: () => void;
    toggle: () => void;
}


export const useTheme = create<ThemeStore>((set, get) => ({
    isDark: false,
    onDark: () => {
        document.body.setAttribute('data-bs-theme', 'dark');
        return set({ isDark: true })
    },
    onLight: () => {
        document.body.setAttribute('data-bs-theme', 'light');
        set({ isDark: false })
    },
    toggle: () => {
        if (get().isDark)
            document.body.setAttribute('data-bs-theme', 'light');
        else
            document.body.setAttribute('data-bs-theme', 'dark');

        return set({ isDark: !get().isDark })
    },
    getTheme: () => get(),
}));
