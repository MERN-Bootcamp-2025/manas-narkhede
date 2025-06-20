import '../SearchFormApi.css'

const PhotoCard = ({ character }) => {
  return (
    <div className="photo-card">
      <img src={character.image} alt={character.name} />
      <h4>{character.name}</h4>
    </div>
  );
};

export default PhotoCard;
