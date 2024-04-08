export function formatDate(date: Date): string {
    return date.toLocaleDateString("en-US", {
        weekday: "short", // Example: "Mon"
        year: "numeric", // Example: "2024"
        month: "short",  // Example: "Apr"
        day: "numeric"   // Example: "8"
    })
}