import { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/category.selector.js";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const product = categoriesMap[title];
        console.log();
        return (
          <CategoryPreview
            title={title}
            products={product}
            key={product.map((p) => p.id)}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
