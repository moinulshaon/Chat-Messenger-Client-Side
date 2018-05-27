export const SHOW_ACTIVE_USERS = "show_active_users";

export function showActiveUsers(show = true) {
    return {
        type: SHOW_ACTIVE_USERS,
        show: show,
        activeUsers: ["Shaon", "Moinul"]
    };
}
