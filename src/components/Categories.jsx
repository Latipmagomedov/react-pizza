import React, { useState } from 'react';

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const selectCategory = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => selectCategory(index)}
            className={activeIndex === index ? 'active' : ''}
            key={index}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
