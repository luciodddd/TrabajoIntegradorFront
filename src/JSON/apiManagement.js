let ip = 'localhost'

/*------------- Products ----------------*/
export const ALL_PRODUCTS = `http://${ip}:8080/products`
//export const PRODUCTS_BY_CITY = `http://${ip}:8080/products/city/`
export const PRODUCT_BY_ID = `http://${ip}:8080/products/`
export const PRODUCT_BY_CATEGORY = `http://${ip}:8080/products/categories`
export const PRODUCT_DATES_BY_ID = `http://${ip}:8080/availabilities/products/`
export const PRODUCTS_BY_DATES_OR_CITY = `http://${ip}:8080/products/available?`
export const CREATE_PRODUCT = `http://${ip}:8080/products`

/*-------------- Images ----------------*/
export const IMAGES = `http://${ip}:8080/images`

/*-------------- Categories ----------------*/
export const ALL_CATEGORIES = `http://${ip}:8080/categories`

/*--------------- Cities ----------------*/
export const ALL_CITIES = `http://${ip}:8080/cities`

/*---------------- Users ----------------*/
//export const POST_USER = `http://${ip}:8080/users/register`
//export const LOGIN_USER = `http://${ip}:8080/users/login`
//export const GET_ME = `http://${ip}:8080/users/getMe`
//export const UPDATE_USER = `http://${ip}:8080/users/update`

/*-------------- Bookings ----------------*/
export const BOOKING = `http://${ip}:8080/bookings`

/*-------------- Characteristics --------------*/
export const ALL_CHARACTERISTICS = `http://${ip}:8080/details`
/*-------------- Policies --------------*/
export const ALL_POLOCIES = `http://${ip}:8080/policies`
