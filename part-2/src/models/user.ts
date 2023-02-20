export default interface User {
    id: number;
    username: string;
    email?: string;
    color: string;
    profilePicture: string;
    initials?: string;
    timezone?: string;
    role?: number;
    customRole?: number;
    last_active?: string;
    date_joined?: string;
    date_invited?: string;
    week_start_day?: string;
    global_font_support?: boolean;
}