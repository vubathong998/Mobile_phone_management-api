import routeAccount from './account.js';
import routeCategories from './categories.js';

export default function router(app) {
    app.use('/api/account', routeAccount);
    app.use('/api/category', routeCategories);
}
