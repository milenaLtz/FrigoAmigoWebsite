import pie from '../../Pictures/Pie.png';
import line from '../../Pictures/Line 5.png';
import arrows from '../../Pictures/Group 34.png';

const RecipeCards = (props) => {
  const { recipes } = props;

  if (!recipes || recipes.length === 0) return <p>No recipes found</p>;

  return (
    <>
      <ul className="cards-list">
        {recipes.slice(0, 2).map((recipe) => {
          let key = `${recipe.id}`;

          return (
            <li key={key}>
              <div className="recipe-card">
                <img className="recipe-image" src={pie} alt="pie"></img>
                <div>
                  <img className="recipe-arrow" src={arrows} alt="arrows"></img>
                </div>
                <div className="recipe-heading nextart-700">{recipe.firstName}</div>
                <img className="recipe-line" src={line} alt="line"></img>
                <div className="recipe-ingredients roundmplus-600">{recipe.lastName}:</div>
                <div className="recipe-ingredients-items roundmplus-600">
                  <ul style={{ listStyleType: 'disc' }}>
                    <li>{recipe.phone}</li>
                    <li>{recipe.email}</li>
                    <li>{recipe.phone}</li>
                    <li>{recipe.email}</li>
                  </ul>
                </div>
                <div className="recipe-pfc-per-100 roundmplus-600">{key}</div>
                <div className="recipe-pfc-calories roundmplus-600">
                  {recipe.phone} | {recipe.phone}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="recipe-button">
        <button className="recipe-button-design manrope-400">Смотреть больше рецептов</button>
      </div>
    </>
  );
};

export default RecipeCards;
