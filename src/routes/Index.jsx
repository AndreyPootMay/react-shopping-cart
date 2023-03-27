import { Routes, Route } from 'react-router-dom';
import { Category } from '../pages/category/Category';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Category />}></Route>
      <Route path="/home" element={<Category />}></Route>
      <Route path="/:categoryId" element={<Category />}></Route>
    </Routes>
  )
};

export default AppRoutes;