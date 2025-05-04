const getCats = async() => {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10&api_key=live_XpzfiLYXkJgDbdsA1X1y1VbPmO8jLCbvri4O4pJJASMXe7C0osswgGLvmHwdXlTl";

    try {
        const response = await fetch(url);
        const cats = await response.json();
        return cats;

    } catch(error) {
        console.log(error);
        return [];
    }
}

export default getCats;