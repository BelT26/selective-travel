import CategoryBox from "../ui/category-box";
import classes from "./category-grid.module.css";

function CategoryGrid(props) {
  return (
    <div className={classes.grid}>
      {props.categories.map((category) => (
        <CategoryBox
          key={category.title}
          title={category.title}
          imgSrc={category.imgSrc}
          alt={category.alt}
          href={category.href}
          height={props.box_height}
          width={props.box_width}
        />
      ))}
    </div>
  );
}

export default CategoryGrid;
