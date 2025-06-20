import PhotoCard from './PhotoCard';
import '../SearchFormApi.css'

const PhotoGrid = ({ characters }) => {
  return (
    <div className="photo-grid">
      {characters.map((char) => (
        <PhotoCard key={char.id} character={char} />
      ))}
    </div>
  );
};

export default PhotoGrid;
