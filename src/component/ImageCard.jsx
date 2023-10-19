import { useSelector } from "react-redux";

function ImageCard({ photo }) {
  const isDarkMode = useSelector((state) => state.imageReducer.isDarkMode)
  return (
    <>
      <img className="w-100 rounded bx-shadow1" src={photo.urls.regular} alt={photo.alt_description} style={{ height: '15rem' }} />
      <div className={`d-flex p-2 border justify-content-between justify-content-center align-items-center bx-shadow1 ${isDarkMode ? 'dark-mode' : 'light-mode'}`} style={{ width: '100%', height: '5rem' }}>
        <div className="d-flex  align-items-center " style={{ width: '70%', height: '100%' }}>
          <img
            src={photo.user.profile_image.small}
            alt={photo.user.name}
            style={{ width: '50px', height: '50px', borderRadius: '50%' }}
          />

          <div className="d-flex flex-column mx-2 ">
            <h6 className="m-0">{photo.user.name}</h6>
            <span>@{photo.user.username}</span>
          </div>
        </div>

        <p><i class="fa-regular fa-thumbs-up me-2"></i>{photo.likes}</p>

      </div>



    </>
  );
}

export default ImageCard;