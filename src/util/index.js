/**
 * This is a utility file
 */

export const getPaginatedData = (data, currentPage, pageSize) => {
    return data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
}