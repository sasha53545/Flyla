export const categoriesRequest = async () => {
    const response = await fetch('https://opentdb.com/api_category.php');

    if (response.status !== 200) {
        throw await response.json();
    }

    return response.json();
};