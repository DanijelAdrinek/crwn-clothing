import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../../routes/categories-preview/categories-preview.component';
import Category from '../../routes/category/category.component';

import { CategoriesProvider } from '../../contexts/categories.context';

const Shop = () => {

    return (
        <CategoriesProvider>
            <Routes >
                <Route index element={<CategoriesPreview />} />
                <Route path=":category" element={<Category />}/>
            </Routes>
        </CategoriesProvider>
    );
}

export default Shop;